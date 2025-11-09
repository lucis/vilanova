# 🎵 Assistente de Poesia Nordestina - Visão Geral

> **Documento de referência rápida** para o plano completo em `plans/08-assistente-poesia.md`

## 🎯 O Que É?

Um **editor interativo** para criar poesias nordestinas (repente) com:
- ✅ Validação automática de métrica e rima
- ✅ Sugestões de palavras do acervo
- ✅ Ajuda da IA para completar versos
- ✅ Feedback visual em tempo real

---

## 🏗️ Arquitetura Simplificada

```
┌─────────────────────────────────────────────────────────────┐
│                     FRONTEND (React)                        │
├─────────────────────────────────────────────────────────────┤
│  /poetry/new          - Escolher estilo                     │
│  /poetry/edit/:id     - Editor interativo                   │
│  /poetry/preview/:id  - Preview final                       │
│  /poetry              - Lista de rascunhos                  │
└─────────────────────────────────────────────────────────────┘
                           ↕ RPC (client.*)
┌─────────────────────────────────────────────────────────────┐
│                    BACKEND (Tools)                          │
├─────────────────────────────────────────────────────────────┤
│  GET_LOCAL_RHYMES          - Buscar rimas no dicionário    │
│  ANALYZE_VERSE_METRIC      - Contar sílabas                │
│  DETECT_RHYME_PATTERN      - Detectar padrão de rima       │
│  VALIDATE_POETRY_SCHEMA    - Validar esquema completo      │
│  SUGGEST_VERSE_COMPLETION  - IA sugere versos              │
└─────────────────────────────────────────────────────────────┘
                           ↕ Database
┌─────────────────────────────────────────────────────────────┐
│                   DADOS (SQLite + JSON)                     │
├─────────────────────────────────────────────────────────────┤
│  poetry_drafts              - Rascunhos do usuário         │
│  poetry_edit_history        - Histórico de edições         │
│  dicionario-rimas.json      - Palavras do acervo           │
│  estilos.json               - Definições dos estilos       │
└─────────────────────────────────────────────────────────────┘
```

---

## 📊 Estrutura de Dados

### Rascunho (poetry_drafts)

```json
{
  "id": 1,
  "titulo": "Tecnologia no Sertão",
  "estilo_slug": "martelo-alagoano",
  "versos_por_estrofe": 10,
  "esquema_rima": "AAAAAAAAAB",
  "estrofes": [
    {
      "numero": 1,
      "versos": [
        {
          "numero": 1,
          "texto": "No mundo digital da tecnologia",
          "rima": "A",
          "silabas": 10,
          "status": "completo",
          "valido": true
        }
      ]
    }
  ],
  "progresso": 80,
  "status": "rascunho"
}
```

### Dicionário de Rimas (dicionario-rimas.json)

```json
{
  "metadata": {
    "total_rimas": 150,
    "fonte": "Acervo Projeto Vilanova"
  },
  "rimas": {
    "ÃO": [
      { "palavra": "profissão", "silabas": 4, "frequencia": 5 },
      { "palavra": "criação", "silabas": 3, "frequencia": 8 }
    ],
    "IA": [
      { "palavra": "tecnologia", "silabas": 5, "frequencia": 3 },
      { "palavra": "harmonia", "silabas": 4, "frequencia": 7 }
    ]
  }
}
```

---

## 🎨 Fluxo do Usuário

### 1. Escolher Estilo
```
┌─────────────────────────────────┐
│  📜 Martelo Alagoano           │
│  10 versos | 10 sílabas        │
│  Esquema: AAAAAAAAAB           │
│  Dificuldade: ●●●●○            │
└─────────────────────────────────┘
         [Continuar →]
```

### 2. Editar Versos
```
1. [No mundo digital da tecnologia] ✅ 10 sílabas | Rima: A
   └─ Rima detectada: "IA"                      [💡 Sugerir]

2. [Onde tudo que se quer se faz___] ⚠️ 9/10 sílabas | Rima: A
   └─ Rima incorreta! Esperado "IA"            [💡 Sugerir]

3. [_________________________________] ○ 0/10 sílabas | Rima: A
   └─ Sugestões: "harmonia", "sintonia"        [💡 Sugerir]
```

### 3. Painel de Sugestões
```
┌────────────────────────────────┐
│  💡 Sugestões para verso 3     │
├────────────────────────────────┤
│  📚 Dicionário Local:          │
│  • harmonia (4 sílabas)        │ ← Clica para inserir
│  • sintonia (4 sílabas)        │
│  • alegria (4 sílabas)         │
│                                │
│  🤖 IA Sugere Versos:          │
│  • "Conectando todos numa     │
│     sintonia"                  │ ← Clica para inserir verso
│  • "Trazendo luz e sabedoria" │
└────────────────────────────────┘
```

### 4. Preview Final
```
✅ Validação:
✅ Métrica correta (10 sílabas)
✅ Esquema: AAAAAAAAAB (correto!)
✅ Mote presente

🤖 Análise da IA:
"Excelente! A poesia mantém coerência
temática e as rimas fluem naturalmente."

[💾 Salvar] [📤 Exportar] [🎤 Adicionar ao Acervo]
```

---

## 🛠️ Tools (Backend)

### 1. GET_LOCAL_RHYMES
**Entrada:** `{ rhymePattern: "IA", syllables: 4 }`  
**Saída:** Lista de palavras que rimam com "IA" e têm 4 sílabas

### 2. ANALYZE_VERSE_METRIC
**Entrada:** `{ verse: "No mundo digital da tecnologia", expectedSyllables: 10 }`  
**Saída:** `{ syllables: 10, isValid: true }`

### 3. DETECT_RHYME_PATTERN
**Entrada:** `{ word: "tecnologia" }`  
**Saída:** `{ rhymePattern: "IA", lastSyllable: "gia" }`

### 4. VALIDATE_POETRY_SCHEMA
**Entrada:** `{ verses: [...], expectedSchema: "AAAAAAAAAB" }`  
**Saída:** `{ isValid: true, detectedSchema: "AAAAAAAAAB" }`

### 5. SUGGEST_VERSE_COMPLETION (IA)
**Entrada:** `{ partialVerse: "", rhymePattern: "IA", theme: "Tecnologia", syllables: 10 }`  
**Saída:** `{ suggestions: ["Conectando todos numa sintonia", ...] }`

---

## 📦 Componentes React

### Editor Principal
```typescript
<PoetryEditor draft={draft}>
  <StanzaEditor stanza={stanza}>
    <VerseEditor 
      verse={verse}
      expectedRhyme="A"
      expectedSyllables={10}
      isValid={true}
    />
  </StanzaEditor>
</PoetryEditor>
```

### Painel de Sugestões
```typescript
<RhymeSuggestionPanel
  rhymePattern="IA"
  onSelectWord={(word) => insertWord(word)}
  onSelectVerse={(verse) => insertVerse(verse)}
/>
```

### Indicadores Visuais
```typescript
<VerseStatusIndicator
  status="success"  // ✅
  status="warning"  // ⚠️
  status="empty"    // ○
/>
```

---

## 🚀 Plano de Implementação (Resumo)

### Fase 1: MVP (1-2 semanas)
- [ ] Script para extrair dicionário de rimas do acervo
- [ ] Tools básicos (validação, detecção de rima)
- [ ] Editor simples com validação em tempo real
- [ ] Salvar/listar rascunhos

### Fase 2: IA Assistida (2-3 semanas)
- [ ] Sugestões de rimas do dicionário
- [ ] IA sugere versos completos
- [ ] Painel lateral de sugestões
- [ ] Preview com análise da IA

### Fase 3: Social (3-4 semanas)
- [ ] Modo desafio (completar repentes reais)
- [ ] Ranking e pontuação
- [ ] Compartilhamento social
- [ ] Galeria pública

---

## 📝 Como Criar o Dicionário de Rimas

### Script: `scripts/extract-rhymes.ts`

1. **Ler todas as cantorias** em `public/data/cantorias/*.json`
2. **Extrair última palavra** de cada verso
3. **Detectar padrão de rima** (últimas 2-3 letras)
4. **Contar sílabas** (método simplificado)
5. **Contar frequência** (quantas vezes aparece)
6. **Salvar** em `public/data/dicionario-rimas.json`

**Executar:**
```bash
deno run --allow-read --allow-write scripts/extract-rhymes.ts
```

**Resultado:**
```
✅ Dicionário criado com 150 padrões de rima
✅ 800+ palavras catalogadas
✅ Frequências calculadas
```

---

## 🎯 Métricas de Sucesso

- **Engajamento:** Tempo médio de criação de poesia
- **Qualidade:** % de poesias que seguem esquema correto
- **Conclusão:** % de rascunhos finalizados
- **Uso de IA:** % de sugestões aceitas
- **Compartilhamento:** % de poesias exportadas

---

## 🔗 Links Importantes

- **Plano Completo:** `plans/08-assistente-poesia.md`
- **Estilos de Repente:** `estilos/*.md`
- **Data Model:** `DATA-MODEL.md`
- **Acervo:** `public/data/`

---

## ✨ Diferenciais

- ✅ **100% Offline** - Não depende de APIs externas
- ✅ **Português Nordestino** - Vocabulário do acervo real
- ✅ **Validação Instantânea** - Feedback em tempo real
- ✅ **IA Contextual** - Sugestões baseadas no tema
- ✅ **Preservação Cultural** - Ensina estilos de repente

---

**Pronto para começar! 🎵**

> Consulte `plans/08-assistente-poesia.md` para documentação completa com código, mockups detalhados e exemplos de implementação.
