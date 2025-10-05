# Análise e Estrutura de Dados das Poesias

## 🔍 Análise dos Exemplos Fornecidos

### Galope à Beira Mar - Exemplo 1 (Sebastião da Silva vs Ivanildo Vilanova)

#### Estrutura Identificada

**Estrofe 1 (Sebastião da Silva):**
```
Esse desafio aqui foi cantado pela dupla que fez especial        (A)
Porém, eu quero nesse festival lhe desafiar com todo tratado     (A)
Cantar com colega que é preparado e diz que é poeta espetacular  (A)
Mas hoje, aqui, eu quero lhe enfrentar                           (A)
Matar no repente, no meu apogeu                                  (B)
Na trilha do verso, quem corre sou eu                            (B)
Nos dez de galope, na beira do mar                               (C) [MOTE]
```

**Análise:**
- 10 versos por estrofe
- Métrica: decassílabos (10 sílabas poéticas)
- Esquema de rima: AAAAAABBBC
- Último verso sempre igual: "Nos dez de galope na/da beira do mar" (MOTE)
- Os versos 1-6 rimam entre si (rima A)
- Versos 7-8 rimam entre si (rima B)
- Verso 9 é independente ou rima com próxima estrofe
- Verso 10 é o mote fixo

**Padrão de Rima Completo:**
```
Verso 1:  -AL  (especial)         → A
Verso 2:  -ADO (tratado)          → A  
Verso 3:  -AR  (espetacular)      → A
Verso 4:  -AR  (enfrentar)        → A
Verso 5:  -EU  (apogeu)           → B
Verso 6:  -EU  (sou eu)           → B
Verso 7:  -AR  (mar)              → MOTE (sempre igual)
```

**Correção:** Analisando melhor, o Galope à Beira Mar tem **10 versos**, mas a estrutura é:
- 9 versos livres (com padrões de rima internos)
- 1 verso final fixo (o mote)

### Galope à Beira Mar - Exemplo 2 (Os Nonatos)

**Estrofe 1:**
```
Eu estou na terra que o rei Virgulino                          (A)
Assombrou o mundo com rifle e pistola                          (A)
Mas eu no cangaço que a arma é viola                           (A)
Faço cantador grosso, fala fino                                (A)
Na USP do verso sou eu quem ensino                             (A)
No reino da arte eu sou o quasar                               (B)
No quartel da fama eu sou militar                              (B)
E quem não se conforma a perder quando eu canto                (C)
Cresça e apareça e brilhe do meu tanto                         (C)
Nos dérbi galope da beira do mar                               (MOTE)
```

**Padrão de Rima:**
```
Verso 1:  -INO (Virgulino)    → A
Verso 2:  -OLA (pistola)      → A
Verso 3:  -OLA (viola)        → A
Verso 4:  -INO (fino)         → A
Verso 5:  -INO (ensino)       → A
Verso 6:  -AR  (quasar)       → B
Verso 7:  -AR  (militar)      → B
Verso 8:  -ANTO (canto)       → C
Verso 9:  -ANTO (tanto)       → C
Verso 10: -AR  (mar)          → MOTE
```

**Esquema de Rima: AAAAABBCCM** (M = Mote)

### Sextilha - Análise

Observando o exemplo de sextilha fornecido (que na verdade é o mesmo do Galope à Beira Mar dos Nonatos), vou usar conhecimento sobre sextilhas tradicionais:

**Estrutura Típica de Sextilha:**
```
Verso 1: 7 sílabas - rima A
Verso 2: 7 sílabas - rima B
Verso 3: 7 sílabas - rima C
Verso 4: 7 sílabas - rima B
Verso 5: 7 sílabas - rima D
Verso 6: 7 sílabas - rima B
```

**Esquema de Rima: ABCBDB**

## 📐 Modelo de Dados para Estrutura Poética

### 1. Estilo de Repente (Style)

```typescript
interface PoetryStyle {
  id: string;
  name: string; // "Galope à Beira Mar", "Sextilha"
  slug: string; // "galope-beira-mar", "sextilha"
  description: string;
  origin?: string; // História/origem do estilo
  difficulty: 'iniciante' | 'intermediário' | 'avançado' | 'mestre';
  
  structure: VerseStructure; // Estrutura dos versos
  hasMote: boolean; // Tem mote fixo?
  motePosition?: number[]; // Posições do mote (ex: [10] ou [9, 10])
  
  theme?: string; // Tema típico do estilo
  examples?: string[]; // IDs de poesias exemplo
  
  createdAt: Date;
  updatedAt: Date;
}
```

### 2. Estrutura de Versos (VerseStructure)

```typescript
interface VerseStructure {
  versesPerStanza: number; // Quantos versos por estrofe
  syllablesPerVerse: number | number[]; // Sílabas por verso (pode variar)
  rhymeScheme: RhymeScheme; // Esquema de rimas
  
  // Regras especiais
  rules?: StructureRule[];
}

interface RhymeScheme {
  pattern: string; // "AAAAABBCCM", "ABCBDB"
  description?: string; // Explicação do padrão
  
  // Detalhamento por posição
  verses: VerseRhyme[];
}

interface VerseRhyme {
  position: number; // 1-indexed (verso 1, verso 2...)
  rhymeGroup: string; // "A", "B", "C", "M" (mote)
  isMote: boolean; // É parte do mote?
  mustRhymeWith: number[]; // Índices dos versos que devem rimar
}

interface StructureRule {
  type: 'syllable_count' | 'rhyme_pattern' | 'mote_required' | 'theme_constraint';
  description: string;
  validation: string; // Expressão ou regra de validação
}
```

### 3. Poesia/Verso Individual

```typescript
interface Poetry {
  id: string;
  title?: string; // Nem sempre tem título
  styleId: string; // Referência ao estilo
  
  // Autoria
  authorId?: string; // Cantador (se conhecido)
  isImprovisedDuel: boolean; // É improviso de cantoria?
  
  // Conteúdo
  stanzas: Stanza[]; // Estrofes
  mote?: Mote; // Se tiver mote
  
  // Contexto
  theme?: string; // Tema abordado
  occasion?: string; // Ocasião/evento
  date?: Date;
  location?: string;
  
  // Análise (gerada por IA)
  analysis?: PoetryAnalysis;
  
  // Relacionamentos
  duelId?: string; // Se faz parte de um duelo
  repenteSessionId?: string; // Sessão de repente
  transcriptId?: string; // Transcrição original
  
  createdAt: Date;
  updatedAt: Date;
}

interface Stanza {
  order: number; // Ordem da estrofe
  verses: Verse[]; // Versos
}

interface Verse {
  order: number; // Ordem do verso na estrofe (1-10)
  text: string; // Texto do verso
  
  // Análise métrica (calculada por IA)
  syllables: Syllable[]; // Divisão silábica
  syllableCount: number; // Contagem
  
  // Análise de rima
  rhymeSound: string; // Som final (-AR, -EU, -ANTO)
  rhymeGroup: string; // Grupo de rima (A, B, C)
  rhymesWith: number[]; // Índices de versos que rimam
  
  isMote: boolean; // É parte do mote?
  isValid: boolean; // Respeita as regras?
  validationErrors?: string[]; // Erros encontrados
}

interface Syllable {
  text: string; // Sílaba
  position: number; // Posição na palavra
  isStressed: boolean; // É tônica?
}

interface Mote {
  text: string[]; // Linhas do mote
  verses: number[]; // Posições dos versos (ex: [10])
  isFixed: boolean; // É fixo ou varia?
}
```

### 4. Análise Poética (gerada por IA)

```typescript
interface PoetryAnalysis {
  // Conformidade com estilo
  styleCompliance: {
    isValid: boolean;
    score: number; // 0-100
    errors: ValidationError[];
  };
  
  // Análise de rima
  rhymeAnalysis: {
    correctRhymes: number;
    incorrectRhymes: number;
    rhymeQuality: 'perfeita' | 'toante' | 'consonante' | 'rica';
  };
  
  // Análise métrica
  metricAnalysis: {
    correctVerses: number;
    incorrectVerses: number;
    averageSyllables: number;
  };
  
  // Análise de conteúdo
  contentAnalysis: {
    themes: string[]; // Temas identificados
    sentiment: 'positivo' | 'negativo' | 'neutro' | 'misto';
    vocabulary: {
      complexity: 'simples' | 'moderado' | 'complexo';
      uniqueWords: number;
      regionalTerms: string[]; // Termos regionais identificados
    };
  };
  
  // Qualidade geral
  overallQuality: {
    score: number; // 0-100
    strengths: string[];
    improvements: string[];
  };
}

interface ValidationError {
  verseNumber: number;
  errorType: 'syllable_count' | 'rhyme_pattern' | 'mote_missing' | 'structure';
  expected: string;
  found: string;
  suggestion?: string;
}
```

## 🎯 Schemas para IA (Zod)

### Schema para Análise de Verso

```typescript
const verseAnalysisSchema = z.object({
  syllables: z.array(z.object({
    text: z.string(),
    position: z.number(),
    isStressed: z.boolean(),
  })),
  syllableCount: z.number(),
  rhymeSound: z.string(),
  isValid: z.boolean(),
  errors: z.array(z.string()).optional(),
});
```

### Schema para Geração de Verso

```typescript
const verseGenerationInputSchema = z.object({
  styleId: z.string(),
  position: z.number(), // Posição do verso na estrofe
  previousVerses: z.array(z.string()), // Versos anteriores para contexto
  theme: z.string().optional(), // Tema sugerido
  rhymeWith: z.array(z.string()).optional(), // Palavras para rimar
  mote: z.string().optional(), // Mote se aplicável
});

const verseGenerationOutputSchema = z.object({
  verse: z.string(),
  syllables: z.array(z.string()),
  syllableCount: z.number(),
  rhymeSound: z.string(),
  alternatives: z.array(z.object({
    verse: z.string(),
    explanation: z.string(),
  })),
});
```

### Schema para Sugestão de Palavras

```typescript
const wordSuggestionInputSchema = z.object({
  rhymeWith: z.string(), // Palavra para rimar
  syllablesNeeded: z.number(), // Sílabas restantes no verso
  context: z.string(), // Contexto/tema do verso
  avoidWords: z.array(z.string()).optional(), // Palavras já usadas
});

const wordSuggestionOutputSchema = z.object({
  suggestions: z.array(z.object({
    word: z.string(),
    syllableCount: z.number(),
    meaning: z.string(),
    exampleUsage: z.string(),
    relevanceScore: z.number(),
  })),
});
```

## 📊 Exemplos de Estilos Catalogados

### Galope à Beira Mar

```json
{
  "id": "galope-beira-mar",
  "name": "Galope à Beira Mar",
  "slug": "galope-beira-mar",
  "description": "Estilo de dez versos onde o tema remete à autoestima dos cantadores e ao desafio com o adversário. O último verso é sempre 'Nos dez de galope na/da beira do mar'.",
  "difficulty": "avançado",
  "structure": {
    "versesPerStanza": 10,
    "syllablesPerVerse": 10,
    "rhymeScheme": {
      "pattern": "AAAAABBCCM",
      "description": "Cinco primeiros versos rimam entre si, dois seguintes rimam entre si, dois seguintes rimam entre si, e o último é o mote fixo.",
      "verses": [
        { "position": 1, "rhymeGroup": "A", "isMote": false, "mustRhymeWith": [2, 3, 4, 5] },
        { "position": 2, "rhymeGroup": "A", "isMote": false, "mustRhymeWith": [1, 3, 4, 5] },
        { "position": 3, "rhymeGroup": "A", "isMote": false, "mustRhymeWith": [1, 2, 4, 5] },
        { "position": 4, "rhymeGroup": "A", "isMote": false, "mustRhymeWith": [1, 2, 3, 5] },
        { "position": 5, "rhymeGroup": "A", "isMote": false, "mustRhymeWith": [1, 2, 3, 4] },
        { "position": 6, "rhymeGroup": "B", "isMote": false, "mustRhymeWith": [7] },
        { "position": 7, "rhymeGroup": "B", "isMote": false, "mustRhymeWith": [6] },
        { "position": 8, "rhymeGroup": "C", "isMote": false, "mustRhymeWith": [9] },
        { "position": 9, "rhymeGroup": "C", "isMote": false, "mustRhymeWith": [8] },
        { "position": 10, "rhymeGroup": "M", "isMote": true, "mustRhymeWith": [] }
      ]
    }
  },
  "hasMote": true,
  "motePosition": [10],
  "theme": "Autoestima, desafio, competição entre cantadores"
}
```

### Sextilha

```json
{
  "id": "sextilha",
  "name": "Sextilha",
  "slug": "sextilha",
  "description": "Estilo de seis versos setissílabos com esquema de rima ABCBDB. É um dos estilos mais livres e populares do repente.",
  "difficulty": "intermediário",
  "structure": {
    "versesPerStanza": 6,
    "syllablesPerVerse": 7,
    "rhymeScheme": {
      "pattern": "ABCBDB",
      "description": "Segundo, quarto e sexto versos rimam entre si. Primeiro, terceiro e quinto são livres (mas podem rimar entre si).",
      "verses": [
        { "position": 1, "rhymeGroup": "A", "isMote": false, "mustRhymeWith": [] },
        { "position": 2, "rhymeGroup": "B", "isMote": false, "mustRhymeWith": [4, 6] },
        { "position": 3, "rhymeGroup": "C", "isMote": false, "mustRhymeWith": [] },
        { "position": 4, "rhymeGroup": "B", "isMote": false, "mustRhymeWith": [2, 6] },
        { "position": 5, "rhymeGroup": "D", "isMote": false, "mustRhymeWith": [] },
        { "position": 6, "rhymeGroup": "B", "isMote": false, "mustRhymeWith": [2, 4] }
      ]
    }
  },
  "hasMote": false,
  "theme": "Livre - pode abordar qualquer tema"
}
```

## 🔄 Fluxo de Validação e Geração

### 1. Validação de Verso Existente

```
Input: Texto do verso + Estilo + Posição na estrofe
  ↓
[AI_GENERATE_OBJECT: verseAnalysisSchema]
  ↓
Output: {
  syllables: [...],
  syllableCount: 10,
  rhymeSound: "-AR",
  isValid: true,
  errors: []
}
```

### 2. Geração de Próximo Verso

```
Input: {
  style: "galope-beira-mar",
  position: 6,
  previousVerses: ["verso 1", "verso 2", ...],
  theme: "desafio",
  rhymeWith: ["preparado", "tratado"]
}
  ↓
[AI_GENERATE_OBJECT: verseGenerationOutputSchema]
  ↓
Output: {
  verse: "No mundo da arte eu sou consagrado",
  syllables: ["No", "mun", "do", "da", "ar", "te", "eu", "sou", "con", "sa", "gra", "do"],
  syllableCount: 10,
  rhymeSound: "-ADO",
  alternatives: [...]
}
```

### 3. Sugestão de Palavras para Rima

```
Input: {
  rhymeWith: "preparado",
  syllablesNeeded: 5,
  context: "cantador habilidoso"
}
  ↓
[AI_GENERATE_OBJECT: wordSuggestionOutputSchema]
  ↓
Output: {
  suggestions: [
    { word: "consagrado", syllableCount: 4, meaning: "...", relevanceScore: 0.95 },
    { word: "dedicado", syllableCount: 4, meaning: "...", relevanceScore: 0.88 },
    ...
  ]
}
```

## 📚 Outros Estilos a Catalogar

- **Mourão Voltado** - 10 versos, dois últimos são mote
- **Quadrão** - 7 versos setissílabos
- **Décima** - 10 versos setissílabos
- **Martelo Agalopado** - 10 versos decassílabos
- **Gemedeira** - 8 versos setissílabos
- **Oitava** - 8 versos setissílabos

Cada um terá seu próprio schema de estrutura catalogado no banco de dados.
