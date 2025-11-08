# Plano: Assistente de Criação de Poesia com RhymeBrain API

## 🎯 Objetivo

Criar uma aplicação imersiva dentro do Projeto Vilanova para **auxiliar a criação de poesias nordestinas** (repente), integrando:
- **RhymeBrain API** para sugestões de rimas
- **Validação automática** de métricas e esquemas de rima
- **Interface interativa** com lacunas para preencher
- **IA assistida** para feedback e sugestões contextuais

---

## 📋 Visão Geral da Experiência

### Fluxo do Usuário

1. **Escolha do Estilo** → Usuário seleciona (Martelo Alagoano, Galope à Beira Mar, Sextilha, etc.)
2. **Modo de Criação:**
   - **Livre:** Escrever do zero com sugestões
   - **Assistido:** Sistema cria lacunas, usuário preenche
   - **Desafio:** Completar versos faltantes de repentes reais
3. **Edição Interativa:**
   - Digita verso → Sistema valida métrica (sílabas)
   - Sistema destaca rimas → Sugere palavras que rimam
   - Feedback visual (✅ correto, ⚠️ não rima, ❌ métrica errada)
4. **Finalização:**
   - Salva rascunho
   - Exporta como JSON (compatível com estrutura do acervo)
   - Compartilha ou adiciona ao acervo

---

## 🔌 Integração RhymeBrain API

### Endpoints Disponíveis

#### 1. `/talk` - Encontrar Rimas
```http
GET https://rhymebrain.com/talk?function=getRhymes&word=alagoano
```

**Resposta:**
```json
[
  {
    "word": "ano",
    "score": 300,
    "flags": "b",
    "syllables": "2"
  },
  {
    "word": "mano",
    "score": 300,
    "flags": "b",
    "syllables": "2"
  }
]
```

**Score:**
- `300` = Rima perfeita
- `299-200` = Rima próxima
- `199-100` = Rima fraca

#### 2. `/talk` - Palavras Relacionadas
```http
GET https://rhymebrain.com/talk?function=getPortmanteaus&word1=vida&word2=morte
```

**Uso:** Sugerir combinações criativas.

#### 3. SpellCheck (se necessário)
```http
GET https://rhymebrain.com/talk?function=spellCheck&word=alagôano
```

### Limitações

⚠️ **RhymeBrain é focado em inglês, mas aceita português:**
- Menos dados para português brasileiro
- Pode não reconhecer todas as palavras nordestinas
- **Solução:** Combinar com dicionário local de rimas (criar arquivo JSON)

---

## 🗂️ Estrutura de Dados

### 1. Schema de Rascunho (Draft)

**Arquivo:** `server/schema.ts`

```typescript
import { integer, sqliteTable, text } from "@deco/workers-runtime/drizzle";

// Tabela de rascunhos de poesia
export const poetryDraftsTable = sqliteTable("poetry_drafts", {
  id: integer("id").primaryKey(),
  user_id: text("user_id"), // Futuro: autenticação
  titulo: text("titulo"),
  estilo_slug: text("estilo_slug").notNull(), // 'martelo-alagoano', 'galope-beira-mar'
  
  // Metadados do estilo (desnormalizado para facilitar)
  estilo_nome: text("estilo_nome"),
  versos_por_estrofe: integer("versos_por_estrofe"),
  metrica: text("metrica"), // '10 sílabas', '7 sílabas'
  esquema_rima: text("esquema_rima"), // 'AAAAAAAAAB'
  
  // Conteúdo (JSON)
  estrofes: text("estrofes", { mode: 'json' }), // Array de estrofes
  
  // Status
  status: text("status").default("rascunho"), // 'rascunho', 'completo', 'publicado'
  progresso: integer("progresso").default(0), // % de versos preenchidos
  
  // Timestamps
  created_at: integer("created_at", { mode: 'timestamp' }).notNull(),
  updated_at: integer("updated_at", { mode: 'timestamp' }).notNull(),
});

// Tabela de histórico de edições (opcional)
export const poetryEditHistoryTable = sqliteTable("poetry_edit_history", {
  id: integer("id").primaryKey(),
  draft_id: integer("draft_id").notNull(),
  action: text("action"), // 'verso_adicionado', 'rima_corrigida', 'sugestao_aceita'
  verso_numero: integer("verso_numero"),
  estrofe_numero: integer("estrofe_numero"),
  valor_anterior: text("valor_anterior"),
  valor_novo: text("valor_novo"),
  timestamp: integer("timestamp", { mode: 'timestamp' }).notNull(),
});
```

**Exemplo de JSON em `estrofes`:**
```json
[
  {
    "numero": 1,
    "versos": [
      {
        "numero": 1,
        "texto": "No cenário de cada profissão",
        "rima": "ÃO",
        "silabas": 10,
        "status": "completo",
        "sugestoes_usadas": ["profissão", "criação"]
      },
      {
        "numero": 2,
        "texto": "",
        "rima": "AZ",
        "silabas": 0,
        "status": "vazio",
        "sugestoes": ["capaz", "paz", "faz"]
      }
    ],
    "tema": "Profissões",
    "completa": false
  }
]
```

### 2. Dicionário Local de Rimas

**Arquivo:** `public/data/dicionario-rimas.json`

```json
{
  "ÃO": [
    { "palavra": "profissão", "silabas": 4 },
    { "palavra": "criação", "silabas": 3 },
    { "palavra": "pão", "silabas": 1 },
    { "palavra": "mão", "silabas": 1 },
    { "palavra": "coração", "silabas": 3 }
  ],
  "AZ": [
    { "palavra": "faz", "silabas": 1 },
    { "palavra": "capaz", "silabas": 2 },
    { "palavra": "paz", "silabas": 1 }
  ],
  "AIS": [
    { "palavra": "animais", "silabas": 3 },
    { "palavra": "reais", "silabas": 2 }
  ]
}
```

**Fonte inicial:** Extrair de cantorias existentes (scripts de análise).

---

## 🛠️ Backend: Tools e Workflows

### Tools a Implementar

#### 1. `RHYMEBRAIN_GET_RHYMES` (Tool)

**Propósito:** Buscar rimas no RhymeBrain API.

```typescript
// server/tools/poetry.ts
import { createTool } from "@deco/workers-runtime/mastra";
import { z } from "zod";
import type { Env } from "../main.ts";

export const createRhymeBrainGetRhymesTool = (env: Env) =>
  createTool({
    id: "RHYMEBRAIN_GET_RHYMES",
    description: "Busca palavras que rimam com a palavra fornecida usando RhymeBrain API",
    inputSchema: z.object({
      word: z.string().describe("Palavra para buscar rimas"),
      maxResults: z.number().optional().default(20),
    }),
    outputSchema: z.object({
      rhymes: z.array(z.object({
        word: z.string(),
        score: z.number(),
        syllables: z.string(),
      })),
    }),
    execute: async ({ context }) => {
      const url = `https://rhymebrain.com/talk?function=getRhymes&word=${encodeURIComponent(context.word)}&maxResults=${context.maxResults}`;
      
      try {
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`RhymeBrain API error: ${response.statusText}`);
        }
        
        const data = await response.json();
        
        // Filtrar e mapear resultados
        const rhymes = data
          .filter((item: any) => item.score >= 200) // Apenas rimas boas
          .map((item: any) => ({
            word: item.word,
            score: item.score,
            syllables: item.syllables || "0",
          }));
        
        return { rhymes };
      } catch (error) {
        console.error("Erro ao buscar rimas no RhymeBrain:", error);
        return { rhymes: [] };
      }
    },
  });
```

#### 2. `GET_LOCAL_RHYMES` (Tool)

**Propósito:** Buscar rimas no dicionário local (português nordestino).

```typescript
export const createGetLocalRhymesTool = (env: Env) =>
  createTool({
    id: "GET_LOCAL_RHYMES",
    description: "Busca rimas no dicionário local de português nordestino",
    inputSchema: z.object({
      rhymePattern: z.string().describe("Padrão de rima (ex: 'ÃO', 'AZ')"),
      syllables: z.number().optional().describe("Filtrar por número de sílabas"),
    }),
    outputSchema: z.object({
      rhymes: z.array(z.object({
        palavra: z.string(),
        silabas: z.number(),
      })),
    }),
    execute: async ({ context }) => {
      // Ler dicionário local (simulado aqui)
      // Em produção, carregue de public/data/dicionario-rimas.json
      const dicionario: Record<string, any[]> = {
        "ÃO": [
          { palavra: "profissão", silabas: 4 },
          { palavra: "criação", silabas: 3 },
          { palavra: "pão", silabas: 1 },
        ],
        "AZ": [
          { palavra: "faz", silabas: 1 },
          { palavra: "capaz", silabas: 2 },
        ],
      };
      
      const rhymes = dicionario[context.rhymePattern] || [];
      
      // Filtrar por sílabas se especificado
      const filtered = context.syllables
        ? rhymes.filter(r => r.silabas === context.syllables)
        : rhymes;
      
      return { rhymes: filtered };
    },
  });
```

#### 3. `ANALYZE_VERSE_METRIC` (Tool)

**Propósito:** Contar sílabas poéticas de um verso.

```typescript
export const createAnalyzeVerseMetricTool = (env: Env) =>
  createTool({
    id: "ANALYZE_VERSE_METRIC",
    description: "Analisa métrica (contagem de sílabas poéticas) de um verso",
    inputSchema: z.object({
      verse: z.string().describe("Verso para analisar"),
      expectedSyllables: z.number().optional().describe("Número esperado de sílabas"),
    }),
    outputSchema: z.object({
      syllables: z.number(),
      isValid: z.boolean(),
      analysis: z.string(),
    }),
    execute: async ({ context }) => {
      // Implementação simplificada (você pode melhorar com lógica de elisão, etc.)
      const verse = context.verse.trim();
      
      // Contar vogais (método simplificado)
      const syllables = verse
        .toLowerCase()
        .split(/[^aeiouáéíóúâêôãõ]/)
        .filter(s => s.length > 0)
        .length;
      
      const isValid = context.expectedSyllables
        ? syllables === context.expectedSyllables
        : true;
      
      const analysis = isValid
        ? `✅ Verso correto (${syllables} sílabas)`
        : `⚠️ Esperado ${context.expectedSyllables} sílabas, encontrado ${syllables}`;
      
      return {
        syllables,
        isValid,
        analysis,
      };
    },
  });
```

#### 4. `DETECT_RHYME_PATTERN` (Tool)

**Propósito:** Detectar padrão de rima de uma palavra.

```typescript
export const createDetectRhymePatternTool = (env: Env) =>
  createTool({
    id: "DETECT_RHYME_PATTERN",
    description: "Detecta o padrão de rima de uma palavra (últimas letras)",
    inputSchema: z.object({
      word: z.string().describe("Palavra para detectar rima"),
    }),
    outputSchema: z.object({
      rhymePattern: z.string(),
      lastSyllable: z.string(),
    }),
    execute: async ({ context }) => {
      const word = context.word.toLowerCase().trim();
      
      // Extrair última sílaba (método simplificado)
      const vowels = "aeiouáéíóúâêôãõ";
      let lastSyllable = "";
      
      for (let i = word.length - 1; i >= 0; i--) {
        lastSyllable = word[i] + lastSyllable;
        if (vowels.includes(word[i])) {
          break;
        }
      }
      
      // Padrão de rima (últimas 2-3 letras, maiúsculas)
      const rhymePattern = lastSyllable.slice(-3).toUpperCase();
      
      return {
        rhymePattern,
        lastSyllable,
      };
    },
  });
```

#### 5. `VALIDATE_POETRY_SCHEMA` (Tool)

**Propósito:** Validar se uma poesia segue o esquema de rima do estilo.

```typescript
export const createValidatePoetrySchemaTools = (env: Env) =>
  createTool({
    id: "VALIDATE_POETRY_SCHEMA",
    description: "Valida se a poesia segue o esquema de rima do estilo escolhido",
    inputSchema: z.object({
      verses: z.array(z.string()).describe("Array de versos da estrofe"),
      expectedSchema: z.string().describe("Esquema esperado (ex: 'AAAAAAAAAB')"),
    }),
    outputSchema: z.object({
      isValid: z.boolean(),
      detectedSchema: z.string(),
      errors: z.array(z.string()),
    }),
    execute: async ({ context }) => {
      const rhymePatterns: string[] = [];
      const errors: string[] = [];
      
      // Detectar rima de cada verso
      for (const verse of context.verses) {
        const words = verse.trim().split(/\s+/);
        const lastWord = words[words.length - 1]?.replace(/[.,;!?]$/, '') || "";
        
        // Extrair padrão (simplificado - usar DETECT_RHYME_PATTERN em produção)
        const pattern = lastWord.slice(-2).toUpperCase();
        rhymePatterns.push(pattern);
      }
      
      // Mapear rimas para letras (A, B, C...)
      const uniqueRhymes = [...new Set(rhymePatterns)];
      const rhymeMap = Object.fromEntries(
        uniqueRhymes.map((rhyme, i) => [rhyme, String.fromCharCode(65 + i)])
      );
      
      const detectedSchema = rhymePatterns.map(p => rhymeMap[p]).join('');
      const isValid = detectedSchema === context.expectedSchema;
      
      if (!isValid) {
        errors.push(
          `Esquema incorreto: esperado ${context.expectedSchema}, detectado ${detectedSchema}`
        );
      }
      
      return {
        isValid,
        detectedSchema,
        errors,
      };
    },
  });
```

#### 6. `SUGGEST_VERSE_COMPLETION` (Tool com IA)

**Propósito:** Sugerir completamento de verso usando IA + contexto de rima.

```typescript
export const createSuggestVerseCompletionTool = (env: Env) =>
  createTool({
    id: "SUGGEST_VERSE_COMPLETION",
    description: "Sugere completamento de verso usando IA, considerando tema e rima",
    inputSchema: z.object({
      partialVerse: z.string().describe("Verso parcial (início)"),
      rhymePattern: z.string().describe("Padrão de rima necessário (ex: 'ÃO')"),
      theme: z.string().optional().describe("Tema da estrofe"),
      style: z.string().describe("Estilo (martelo-alagoano, etc.)"),
      expectedSyllables: z.number().describe("Número de sílabas necessário"),
    }),
    outputSchema: z.object({
      suggestions: z.array(z.string()),
    }),
    execute: async ({ context }) => {
      // Buscar rimas compatíveis
      const localRhymes = await env.SELF.GET_LOCAL_RHYMES({
        rhymePattern: context.rhymePattern,
        syllables: undefined,
      });
      
      const rhymeWords = localRhymes.rhymes.map(r => r.palavra).join(", ");
      
      // Chamar IA para sugestões
      const aiPrompt = `
Você é um especialista em repente nordestino.

Estilo: ${context.style}
Tema: ${context.theme || "livre"}
Verso parcial: "${context.partialVerse}"
Métrica: ${context.expectedSyllables} sílabas
Deve terminar com rima: ${context.rhymePattern}
Palavras que rimam: ${rhymeWords}

Sugira 3 completamentos para este verso, mantendo a métrica e terminando com uma palavra que rime.
Retorne apenas os versos completos, um por linha.
      `.trim();
      
      try {
        const aiResponse = await env.DECO_CHAT_WORKSPACE_API.AI_GENERATE_TEXT({
          messages: [{ role: "user", content: aiPrompt }],
          model: "gpt-4o-mini",
          maxTokens: 200,
        });
        
        const suggestions = aiResponse.text
          .split('\n')
          .filter(line => line.trim().length > 0)
          .slice(0, 3);
        
        return { suggestions };
      } catch (error) {
        console.error("Erro ao gerar sugestões com IA:", error);
        return { suggestions: [] };
      }
    },
  });
```

---

## 🎨 Frontend: Interface de Edição

### Estrutura de Páginas

```
view/src/routes/
├── poetry/
│   ├── index.tsx          # Lista de rascunhos
│   ├── new.tsx            # Criar nova poesia
│   ├── edit.$id.tsx       # Editar rascunho
│   └── preview.$id.tsx    # Preview final
```

### Componentes Principais

#### 1. `PoetryEditor.tsx` - Editor Principal

**Funcionalidades:**
- Campos para cada verso
- Validação em tempo real (métrica + rima)
- Botão "Sugerir rima" ao lado de cada verso
- Painel lateral com sugestões
- Indicadores visuais (✅ ⚠️ ❌)

**Estrutura:**
```tsx
// view/src/components/PoetryEditor.tsx
import { useState } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useAnalyzeVerse, useSuggestRhymes } from '../hooks/usePoetryTools';

interface VerseEditorProps {
  verseNumber: number;
  expectedSyllables: number;
  rhymePattern: string;
  value: string;
  onChange: (value: string) => void;
}

function VerseEditor({ verseNumber, expectedSyllables, rhymePattern, value, onChange }: VerseEditorProps) {
  const analyzeVerse = useAnalyzeVerse();
  const suggestRhymes = useSuggestRhymes();
  
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const handleBlur = () => {
    if (value.trim()) {
      analyzeVerse.mutate({
        verse: value,
        expectedSyllables,
      });
    }
  };
  
  const isValid = analyzeVerse.data?.isValid;
  const syllables = analyzeVerse.data?.syllables || 0;
  
  return (
    <div className="flex gap-2 items-start">
      <span className="text-muted-foreground w-8">{verseNumber}.</span>
      
      <div className="flex-1">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={handleBlur}
          placeholder={`Verso ${verseNumber} (rima: ${rhymePattern})`}
          className={
            isValid === undefined ? '' :
            isValid ? 'border-green-500' :
            'border-red-500'
          }
        />
        
        {analyzeVerse.data && (
          <div className="text-sm mt-1">
            {isValid ? (
              <Badge variant="success">✅ {syllables} sílabas</Badge>
            ) : (
              <Badge variant="destructive">
                ⚠️ {syllables}/{expectedSyllables} sílabas
              </Badge>
            )}
          </div>
        )}
      </div>
      
      <Button
        variant="outline"
        size="sm"
        onClick={() => setShowSuggestions(!showSuggestions)}
      >
        💡 Sugerir
      </Button>
      
      {showSuggestions && (
        <SuggestionPanel
          rhymePattern={rhymePattern}
          onSelect={(word) => {
            // Inserir palavra no final do verso
            onChange(value + ' ' + word);
            setShowSuggestions(false);
          }}
        />
      )}
    </div>
  );
}

export function PoetryEditor({ style, draft }: { style: any; draft: any }) {
  const [verses, setVerses] = useState<string[]>(
    Array(style.versos_por_estrofe).fill('')
  );
  
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">{style.nome}</h2>
      <p className="text-muted-foreground">
        Esquema: {style.esquema_rima} | Métrica: {style.metrica}
      </p>
      
      <div className="space-y-3">
        {verses.map((verse, i) => (
          <VerseEditor
            key={i}
            verseNumber={i + 1}
            expectedSyllables={style.silabas_por_verso}
            rhymePattern={style.esquema_rima[i]}
            value={verse}
            onChange={(value) => {
              const newVerses = [...verses];
              newVerses[i] = value;
              setVerses(newVerses);
            }}
          />
        ))}
      </div>
      
      <Button size="lg" className="w-full">
        Salvar Rascunho
      </Button>
    </div>
  );
}
```

#### 2. `SuggestionPanel.tsx` - Painel de Sugestões

```tsx
// view/src/components/SuggestionPanel.tsx
import { useGetLocalRhymes, useRhymeBrainRhymes } from '../hooks/usePoetryTools';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';

export function SuggestionPanel({ rhymePattern, onSelect }: {
  rhymePattern: string;
  onSelect: (word: string) => void;
}) {
  const localRhymes = useGetLocalRhymes({ rhymePattern });
  const rhymeBrainRhymes = useRhymeBrainRhymes({ word: rhymePattern });
  
  return (
    <div className="absolute right-0 top-full mt-2 w-64 bg-white border rounded-lg shadow-lg p-4 z-10">
      <h4 className="font-semibold mb-2">Sugestões de rimas ({rhymePattern})</h4>
      
      <ScrollArea className="h-48">
        {localRhymes.data?.rhymes.length > 0 && (
          <div className="mb-3">
            <h5 className="text-xs text-muted-foreground mb-1">Dicionário Local</h5>
            <div className="flex flex-wrap gap-2">
              {localRhymes.data.rhymes.map((rhyme) => (
                <Badge
                  key={rhyme.palavra}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  onClick={() => onSelect(rhyme.palavra)}
                >
                  {rhyme.palavra} ({rhyme.silabas})
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        {rhymeBrainRhymes.data?.rhymes.length > 0 && (
          <div>
            <h5 className="text-xs text-muted-foreground mb-1">RhymeBrain</h5>
            <div className="flex flex-wrap gap-2">
              {rhymeBrainRhymes.data.rhymes.map((rhyme) => (
                <Badge
                  key={rhyme.word}
                  variant="secondary"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
                  onClick={() => onSelect(rhyme.word)}
                >
                  {rhyme.word}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </ScrollArea>
    </div>
  );
}
```

### Hooks TanStack Query

```typescript
// view/src/hooks/usePoetryTools.ts
import { useMutation, useQuery } from '@tanstack/react-query';
import { client } from '../lib/rpc';

export const useAnalyzeVerse = () => {
  return useMutation({
    mutationFn: (input: { verse: string; expectedSyllables: number }) =>
      client.ANALYZE_VERSE_METRIC(input),
  });
};

export const useGetLocalRhymes = (input: { rhymePattern: string }) => {
  return useQuery({
    queryKey: ['localRhymes', input.rhymePattern],
    queryFn: () => client.GET_LOCAL_RHYMES(input),
    enabled: !!input.rhymePattern,
  });
};

export const useRhymeBrainRhymes = (input: { word: string }) => {
  return useQuery({
    queryKey: ['rhymeBrainRhymes', input.word],
    queryFn: () => client.RHYMEBRAIN_GET_RHYMES(input),
    enabled: !!input.word,
    staleTime: 5 * 60 * 1000, // Cache por 5 minutos
  });
};

export const useSuggestVerse = () => {
  return useMutation({
    mutationFn: (input: {
      partialVerse: string;
      rhymePattern: string;
      theme?: string;
      style: string;
      expectedSyllables: number;
    }) => client.SUGGEST_VERSE_COMPLETION(input),
  });
};
```

---

## 🎮 Modos de Interação

### Modo 1: Criação Livre

- Usuário escreve do zero
- Sistema valida em tempo real
- Sugestões disponíveis, mas não obrigatórias

### Modo 2: Assistido (Lacunas)

- Sistema gera estrutura com lacunas
- Usuário preenche apenas palavras-chave
- Sistema sugere palavras que se encaixam

**Exemplo:**
```
Verso 1: No cenário de cada ______ (profissão/criação/ilusão)
Verso 2: Cada um se espelha no que ______ (faz)
```

### Modo 3: Desafio

- Sistema apresenta repente real com versos faltantes
- Usuário tenta completar
- Sistema compara com original

---

## 📊 Workflow Completo (Backend)

### Workflow: `CREATE_ASSISTED_POETRY`

**Orquestra:**
1. Carregar estilo escolhido
2. Gerar estrutura de estrofes
3. Para cada verso:
   - Detectar rima necessária
   - Buscar sugestões (local + RhymeBrain)
4. Retornar template preenchido

```typescript
// server/workflows/poetry.ts
import { createWorkflow, createStepFromTool } from "@deco/workers-runtime/mastra";
import { z } from "zod";

export const createAssistedPoetryWorkflow = (env: Env) => {
  const getLocalRhymes = createStepFromTool(createGetLocalRhymesTool(env));
  const getRhymeBrainRhymes = createStepFromTool(createRhymeBrainGetRhymesTool(env));
  
  return createWorkflow({
    id: "CREATE_ASSISTED_POETRY",
    inputSchema: z.object({
      styleSlug: z.string(),
      theme: z.string().optional(),
    }),
    outputSchema: z.object({
      draft: z.any(),
    }),
  })
    .map(async ({ inputData }) => {
      // Carregar estilo (simplificado - em produção, buscar de estilos.json)
      const styles: Record<string, any> = {
        "martelo-alagoano": {
          nome: "Martelo Alagoano",
          versos_por_estrofe: 10,
          silabas_por_verso: 10,
          esquema_rima: "AAAAAAAAAB",
        },
      };
      
      const style = styles[inputData.styleSlug];
      
      return {
        ...inputData,
        style,
        verses: Array(style.versos_por_estrofe).fill({ texto: "", sugestoes: [] }),
      };
    })
    // Para cada verso, buscar sugestões de rimas
    .map(async ({ inputData, getStepResult }) => {
      const verses = inputData.verses.map((v: any, i: number) => {
        const rhymePattern = inputData.style.esquema_rima[i];
        return {
          numero: i + 1,
          texto: "",
          rima: rhymePattern,
          silabas: 0,
          status: "vazio",
          sugestoes: [], // Será preenchido depois
        };
      });
      
      return {
        ...inputData,
        draft: {
          estilo_slug: inputData.styleSlug,
          estilo_nome: inputData.style.nome,
          versos_por_estrofe: inputData.style.versos_por_estrofe,
          estrofes: [
            {
              numero: 1,
              versos,
              completa: false,
            },
          ],
        },
      };
    })
    .commit();
};
```

---

## 🚀 Plano de Implementação

### Fase 1: MVP (1-2 semanas)

#### Backend
- [ ] Adicionar tools de poesia em `server/tools/poetry.ts`
- [ ] Implementar `RHYMEBRAIN_GET_RHYMES`
- [ ] Implementar `GET_LOCAL_RHYMES`
- [ ] Implementar `ANALYZE_VERSE_METRIC`
- [ ] Implementar `DETECT_RHYME_PATTERN`
- [ ] Criar schema de database (`poetry_drafts`)
- [ ] Migração do database (`npm run db:generate`)

#### Frontend
- [ ] Criar página `/poetry/new`
- [ ] Componente `PoetryEditor`
- [ ] Componente `VerseEditor` (com validação)
- [ ] Componente `SuggestionPanel`
- [ ] Hooks TanStack Query (`usePoetryTools.ts`)
- [ ] Integração com estilos existentes

#### Dados
- [ ] Criar `public/data/dicionario-rimas.json` (extrair de acervo)
- [ ] Script para popular dicionário (`scripts/extract-rhymes.ts`)

### Fase 2: IA Assistida (2-3 semanas)

- [ ] Tool `SUGGEST_VERSE_COMPLETION` (com IA)
- [ ] Tool `VALIDATE_POETRY_SCHEMA`
- [ ] Workflow `CREATE_ASSISTED_POETRY`
- [ ] Modo "Lacunas" no frontend
- [ ] Feedback inteligente (IA valida semântica)

### Fase 3: Gamificação (3-4 semanas)

- [ ] Modo "Desafio" (completar repentes reais)
- [ ] Sistema de pontuação
- [ ] Ranking de criadores
- [ ] Compartilhamento social

---

## 🧪 Exemplo de Uso

### Cenário: Criar Martelo Alagoano sobre "Tecnologia"

1. **Usuário acessa `/poetry/new`**
2. **Seleciona:** Martelo Alagoano
3. **Sistema carrega:**
   - 10 campos de verso
   - Esquema AAAAAAAAAB
   - Indicadores de métrica (10 sílabas)

4. **Usuário digita verso 1:**
   ```
   "No mundo digital da tecnologia"
   ```

5. **Sistema valida:**
   - ✅ 10 sílabas (correto)
   - ✅ Rima: "IA"
   - Sugestões para verso 2 (rima "IA"): "dia", "via", "guia"

6. **Usuário preenche todos os versos**

7. **Sistema valida esquema:**
   - ✅ AAAAAAAAAB (correto)
   - ✅ Mote triplo presente

8. **Salva rascunho no database**

9. **Exporta JSON compatível com acervo:**
   ```json
   {
     "id": "tecnologia-martelo-usuario123",
     "titulo": "Tecnologia no Sertão",
     "estilo": { "nome": "Martelo Alagoano", ... },
     "estrofes": [ ... ]
   }
   ```

---

## 📈 Métricas de Sucesso

- **Engajamento:** Tempo médio de criação de poesia
- **Qualidade:** % de poesias que seguem esquema correto
- **Conclusão:** % de rascunhos finalizados
- **Uso de IA:** % de sugestões aceitas
- **Compartilhamento:** % de poesias exportadas/compartilhadas

---

## 🔒 Considerações Técnicas

### Limitações do RhymeBrain

- **Português limitado:** Menos palavras que inglês
- **Sem contexto nordestino:** Não conhece gírias/regionalismos
- **Rate limit:** ~350 reqs/hora (grátis)

**Solução:**
- Priorizar dicionário local (extraído do acervo)
- Usar RhymeBrain apenas como fallback
- Implementar cache agressivo

### Performance

- **Cache de rimas:** LocalStorage no frontend
- **Validação debounced:** Não validar a cada tecla
- **Lazy loading:** Carregar estilos sob demanda

### Escalabilidade

- **Database:** Cloudflare Durable Objects (SQLite)
- **Armazenamento:** Limite por usuário (ex: 50 rascunhos)
- **CDN:** Servir dicionário de rimas via Cloudflare

---

## 🎯 Próximos Passos

1. **Validar viabilidade do RhymeBrain com português**
   - Testar API com palavras nordestinas
   - Comparar qualidade vs dicionário local

2. **Criar dicionário de rimas local**
   - Script para extrair rimas do acervo existente
   - Expandir com dicionário de português brasileiro

3. **Implementar MVP**
   - Backend tools (poetry.ts)
   - Frontend básico (PoetryEditor)
   - Testar com 1-2 estilos

4. **Feedback de cantadores/poetas**
   - Validar usabilidade
   - Ajustar sugestões de IA

---

## 📚 Referências

- **RhymeBrain API:** https://rhymebrain.com/api.html
- **Métrica poética:** https://pt.wikipedia.org/wiki/Métrica_(poesia)
- **Repente nordestino:** Documentação em `/estilos/*.md`
- **Projeto Vilanova:** `README.md`, `DATA-MODEL.md`

---

**Pronto para implementar! 🚀**

Este plano cobre:
- ✅ Integração RhymeBrain API
- ✅ Estrutura de dados (drafts, edit history)
- ✅ Backend tools completos
- ✅ Frontend interativo
- ✅ Workflows de IA
- ✅ Plano de implementação em fases

Quer que eu comece a implementar alguma parte específica?
