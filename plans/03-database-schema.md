# Schema de Banco de Dados - Vilanova

## 🗄️ Visão Geral

O banco de dados do Vilanova organiza:
1. **Catalogação Cultural**: Cantadores, repentes, transcrições
2. **Estrutura Poética**: Estilos, regras, templates
3. **Conteúdo**: Poesias, versos, análises
4. **Usuários**: Perfis, criações, aprendizado

## 📊 Diagrama de Entidades

```
┌─────────────┐
│   users     │
└──────┬──────┘
       │ 1:N
       │
┌──────▼──────┐      ┌──────────────┐
│  cantadores │      │poetry_styles │
└──────┬──────┘      └──────┬───────┘
       │ 1:N                │ 1:N
       │                    │
┌──────▼────────┐    ┌──────▼────────┐
│   repentes    │    │   poetries    │
└──────┬────────┘    └──────┬────────┘
       │ 1:N                │ 1:N
       │                    │
┌──────▼────────┐    ┌──────▼────────┐
│ transcriptions│    │    stanzas    │
└───────────────┘    └──────┬────────┘
                            │ 1:N
                            │
                     ┌──────▼────────┐
                     │    verses     │
                     └───────────────┘
```

## 📋 Tabelas Detalhadas

### 1. users (Usuários da Plataforma)

```typescript
table: users
columns:
  - id: integer PRIMARY KEY
  - email: text UNIQUE NOT NULL
  - name: text
  - avatarUrl: text
  - role: text DEFAULT 'user' // 'user', 'admin', 'moderator'
  - bio: text
  - location: text // Cidade/Estado
  
  // Preferências
  - preferredStyles: text // JSON array de IDs de estilos favoritos
  
  // Estatísticas
  - poetriesCreated: integer DEFAULT 0
  - totalVerses: integer DEFAULT 0
  - learningStreak: integer DEFAULT 0 // Dias consecutivos aprendendo
  
  - createdAt: integer (timestamp)
  - updatedAt: integer (timestamp)

indexes:
  - email (unique)
  - createdAt
```

### 2. cantadores (Artistas do Repente)

```typescript
table: cantadores
columns:
  - id: integer PRIMARY KEY
  - name: text NOT NULL
  - slug: text UNIQUE NOT NULL // "sebastiao-da-silva"
  - stageName: text // Nome artístico se diferente
  - photoUrl: text
  
  // Informações biográficas
  - birthDate: integer (timestamp)
  - birthPlace: text // Cidade/Estado
  - deathDate: integer (timestamp) // Se aplicável
  - biography: text // Biografia completa
  
  // Carreira
  - activeYears: text // "1980-2020" ou "1980-presente"
  - specialties: text // JSON array de estilos que domina
  - awards: text // JSON array de prêmios
  
  // Estatísticas
  - repenteCount: integer DEFAULT 0 // Quantos repentes catalogados
  - poetryCount: integer DEFAULT 0 // Quantas poesias individuais
  
  // Links
  - websiteUrl: text
  - youtubeUrl: text
  - instagramHandle: text
  - facebookUrl: text
  
  - createdAt: integer (timestamp)
  - updatedAt: integer (timestamp)

indexes:
  - slug (unique)
  - name
  - birthPlace
```

### 3. repentes (Sessões de Repente)

```typescript
table: repentes
columns:
  - id: integer PRIMARY KEY
  - title: text NOT NULL // "Sebastião vs Ivanildo - Festival 2023"
  - slug: text UNIQUE NOT NULL
  - description: text
  
  // Participantes (relacionamento N:N através de tabela junction)
  // Ver: repente_cantadores
  
  // Evento
  - eventName: text // "Festival de Repente de Caruaru"
  - date: integer (timestamp)
  - location: text // Cidade/Estado
  - venue: text // Local específico
  
  // Mídia
  - videoUrl: text // YouTube, Vimeo, etc
  - audioUrl: text
  - thumbnailUrl: text
  
  // Metadados
  - duration: integer // Duração em segundos
  - viewCount: integer DEFAULT 0
  - likeCount: integer DEFAULT 0
  
  // Transcrição
  - hasTranscription: integer DEFAULT 0 // Boolean (0 ou 1)
  - transcriptionStatus: text // 'pending', 'in_progress', 'completed'
  
  - createdAt: integer (timestamp)
  - updatedAt: integer (timestamp)

indexes:
  - slug (unique)
  - date
  - location
  - transcriptionStatus
```

### 4. repente_cantadores (Junction Table)

```typescript
table: repente_cantadores
columns:
  - id: integer PRIMARY KEY
  - repenteId: integer REFERENCES repentes(id)
  - cantadorId: integer REFERENCES cantadores(id)
  - role: text // 'cantador_1', 'cantador_2', 'convidado'
  
indexes:
  - repenteId, cantadorId (composite unique)
```

### 5. transcriptions (Transcrições de Repentes)

```typescript
table: transcriptions
columns:
  - id: integer PRIMARY KEY
  - repenteId: integer REFERENCES repentes(id)
  
  // Conteúdo
  - fullText: text // Transcrição completa
  - segments: text // JSON: [{start, end, speaker, text}]
  
  // Processamento
  - method: text // 'manual', 'ai_whisper', 'ai_other'
  - quality: text // 'draft', 'reviewed', 'verified'
  - reviewedBy: integer REFERENCES users(id)
  - reviewedAt: integer (timestamp)
  
  // Análise
  - hasPoetryExtraction: integer DEFAULT 0 // Já extraiu poesias?
  - poetriesExtracted: integer DEFAULT 0
  
  - createdAt: integer (timestamp)
  - updatedAt: integer (timestamp)

indexes:
  - repenteId
  - quality
```

### 6. poetry_styles (Estilos de Repente)

```typescript
table: poetry_styles
columns:
  - id: integer PRIMARY KEY
  - name: text NOT NULL // "Galope à Beira Mar"
  - slug: text UNIQUE NOT NULL // "galope-beira-mar"
  - description: text
  - longDescription: text // Descrição detalhada
  
  // Estrutura (JSON complexo)
  - structure: text // JSON: VerseStructure completo
  
  // Características
  - difficulty: text // 'iniciante', 'intermediário', 'avançado', 'mestre'
  - versesPerStanza: integer
  - syllablesPerVerse: integer // Pode ser médio se varia
  - rhymePattern: text // "AAAAABBCCM"
  - hasMote: integer // Boolean
  - motePosition: text // JSON array: [10] ou [9, 10]
  
  // Metadados
  - origin: text // História do estilo
  - typicalTheme: text // Tema típico
  - examples: text // JSON array de IDs de poesias exemplo
  
  // Estatísticas
  - poetryCount: integer DEFAULT 0 // Quantas poesias nesse estilo
  - popularityScore: integer DEFAULT 0
  
  - createdAt: integer (timestamp)
  - updatedAt: integer (timestamp)

indexes:
  - slug (unique)
  - difficulty
  - popularityScore DESC
```

### 7. poetries (Poesias Completas)

```typescript
table: poetries
columns:
  - id: integer PRIMARY KEY
  - title: text // Pode ser null para poesias de duelo
  - slug: text UNIQUE
  
  // Estilo
  - styleId: integer REFERENCES poetry_styles(id)
  
  // Autoria
  - authorId: integer REFERENCES cantadores(id) // Pode ser null
  - createdByUserId: integer REFERENCES users(id) // Se criado por usuário
  - isUserGenerated: integer DEFAULT 0 // Criado por usuário vs catalogado
  - isAiAssisted: integer DEFAULT 0 // Teve ajuda de IA?
  - isImprovisedDuel: integer DEFAULT 0 // É improviso de cantoria?
  
  // Contexto
  - repenteId: integer REFERENCES repentes(id)
  - transcriptionId: integer REFERENCES transcriptions(id)
  - theme: text // Tema abordado
  - occasion: text // Ocasião/evento
  - date: integer (timestamp) // Data de criação/performance
  - location: text
  
  // Mote
  - hasMote: integer DEFAULT 0
  - moteText: text // JSON array de linhas do mote
  
  // Análise (JSON)
  - analysis: text // JSON: PoetryAnalysis completo
  - validationScore: integer DEFAULT 0 // 0-100
  - isValid: integer DEFAULT 1 // Respeita as regras?
  
  // Estatísticas
  - viewCount: integer DEFAULT 0
  - likeCount: integer DEFAULT 0
  - shareCount: integer DEFAULT 0
  - stanzaCount: integer DEFAULT 0
  - verseCount: integer DEFAULT 0
  
  // Publicação
  - status: text DEFAULT 'draft' // 'draft', 'published', 'archived'
  - publishedAt: integer (timestamp)
  
  - createdAt: integer (timestamp)
  - updatedAt: integer (timestamp)

indexes:
  - slug (unique)
  - styleId
  - authorId
  - createdByUserId
  - repenteId
  - status
  - publishedAt DESC
  - validationScore DESC
```

### 8. stanzas (Estrofes)

```typescript
table: stanzas
columns:
  - id: integer PRIMARY KEY
  - poetryId: integer REFERENCES poetries(id)
  - order: integer NOT NULL // 1, 2, 3...
  
  // Análise
  - isValid: integer DEFAULT 1
  - validationErrors: text // JSON array de erros
  
  - createdAt: integer (timestamp)

indexes:
  - poetryId, order (composite)
```

### 9. verses (Versos)

```typescript
table: verses
columns:
  - id: integer PRIMARY KEY
  - stanzaId: integer REFERENCES stanzas(id)
  - poetryId: integer REFERENCES poetries(id) // Desnormalizado para queries rápidas
  - order: integer NOT NULL // 1-10 dentro da estrofe
  
  // Conteúdo
  - text: text NOT NULL
  
  // Análise Silábica (JSON)
  - syllables: text // JSON: [{text, position, isStressed}]
  - syllableCount: integer
  
  // Análise de Rima
  - rhymeSound: text // "-AR", "-EU"
  - rhymeGroup: text // "A", "B", "C"
  - rhymesWith: text // JSON array de verse IDs
  - isMote: integer DEFAULT 0
  
  // Validação
  - isValid: integer DEFAULT 1
  - validationErrors: text // JSON array
  
  // Metadados
  - wasAiGenerated: integer DEFAULT 0
  - wasAiSuggested: integer DEFAULT 0
  
  - createdAt: integer (timestamp)

indexes:
  - stanzaId, order (composite)
  - poetryId
  - rhymeGroup
```

### 10. poetry_likes (Curtidas em Poesias)

```typescript
table: poetry_likes
columns:
  - id: integer PRIMARY KEY
  - userId: integer REFERENCES users(id)
  - poetryId: integer REFERENCES poetries(id)
  - createdAt: integer (timestamp)

indexes:
  - userId, poetryId (composite unique)
  - poetryId
```

### 11. user_learning_progress (Progresso de Aprendizado)

```typescript
table: user_learning_progress
columns:
  - id: integer PRIMARY KEY
  - userId: integer REFERENCES users(id)
  - styleId: integer REFERENCES poetry_styles(id)
  
  // Progresso
  - level: integer DEFAULT 1 // Nível de maestria
  - experiencePoints: integer DEFAULT 0
  - poetriesCompleted: integer DEFAULT 0
  - versesWritten: integer DEFAULT 0
  
  // Estatísticas de Qualidade
  - averageValidationScore: integer DEFAULT 0
  - perfectPoetries: integer DEFAULT 0 // Poesias 100% válidas
  
  // Timestamps
  - lastPracticedAt: integer (timestamp)
  - startedAt: integer (timestamp)
  - updatedAt: integer (timestamp)

indexes:
  - userId, styleId (composite unique)
  - userId
```

### 12. motes (Motes Catalogados)

```typescript
table: motes
columns:
  - id: integer PRIMARY KEY
  - text: text NOT NULL // JSON array de linhas
  - styleId: integer REFERENCES poetry_styles(id)
  
  // Classificação
  - isFixed: integer DEFAULT 0 // É fixo ou varia?
  - theme: text
  - difficulty: text
  
  // Origem
  - origin: text // De onde veio esse mote
  - authorId: integer REFERENCES cantadores(id)
  - isTraditional: integer DEFAULT 0
  
  // Estatísticas
  - usageCount: integer DEFAULT 0 // Quantas poesias usam
  
  - createdAt: integer (timestamp)

indexes:
  - styleId
  - isFixed
  - usageCount DESC
```

### 13. word_rhymes (Dicionário de Rimas)

```typescript
table: word_rhymes
columns:
  - id: integer PRIMARY KEY
  - word: text NOT NULL
  - rhymeSound: text NOT NULL // "-AR", "-EU", "-ANTO"
  - syllableCount: integer
  - syllables: text // JSON array
  
  // Classificação
  - partOfSpeech: text // 'substantivo', 'verbo', 'adjetivo'
  - isRegional: integer DEFAULT 0
  - region: text // Se regional
  
  // Metadados
  - meaning: text
  - examples: text // JSON array de exemplos de uso
  - frequency: integer DEFAULT 0 // Frequência de uso em repentes

indexes:
  - word (unique)
  - rhymeSound
  - syllableCount
  - frequency DESC
```

### 14. ai_suggestions (Cache de Sugestões de IA)

```typescript
table: ai_suggestions
columns:
  - id: integer PRIMARY KEY
  - userId: integer REFERENCES users(id)
  - poetryId: integer REFERENCES poetries(id)
  - versePosition: integer // Posição do verso sendo escrito
  
  // Input context
  - inputContext: text // JSON do contexto enviado à IA
  
  // Sugestões
  - suggestions: text // JSON array de sugestões
  - selectedSuggestion: integer // Índice da sugestão escolhida
  
  // Timestamps
  - createdAt: integer (timestamp)
  - usedAt: integer (timestamp) // Quando foi usada

indexes:
  - userId, poetryId (composite)
  - createdAt
```

### 15. cantoria_events (Calendário de Cantorias)

```typescript
table: cantoria_events
columns:
  - id: integer PRIMARY KEY
  - title: text NOT NULL // "Clube do Repente", "Festival de Caruaru"
  - slug: text UNIQUE NOT NULL
  - description: text
  
  // Localização
  - venue: text // "Casa da Cultura"
  - address: text
  - city: text NOT NULL
  - state: text NOT NULL
  - coordinates: text // JSON: {lat, lng}
  
  // Data e Hora
  - eventDate: integer (timestamp) // Data específica do evento
  - startTime: text // "19:00"
  - endTime: text // "23:00"
  - timezone: text DEFAULT 'America/Fortaleza'
  
  // Recorrência
  - isRecurring: integer DEFAULT 0 // Evento recorrente?
  - recurrenceRule: text // JSON com regra de recorrência
  - recurrenceText: text // "Toda primeira quinta-feira do mês"
  
  // Participantes
  - confirmedCantadores: text // JSON array de cantador IDs
  - expectedCantadores: text // JSON array quando ainda não confirmados
  
  // Informações
  - entryFee: text // "R$ 10,00" ou "Gratuito"
  - capacity: integer // Lotação
  - registrationRequired: integer DEFAULT 0
  - registrationUrl: text
  
  // Links
  - websiteUrl: text
  - facebookEventUrl: text
  - instagramPost: text
  - ticketUrl: text
  
  // Organização
  - organizerId: integer REFERENCES users(id)
  - organizerName: text // Nome do organizador
  - organizerContact: text // Telefone/email
  
  // Status
  - status: text DEFAULT 'scheduled' // 'scheduled', 'happening', 'finished', 'cancelled'
  - isFeatured: integer DEFAULT 0 // Destacar na home?
  
  // Metadados
  - posterUrl: text // Imagem do cartaz
  - tags: text // JSON array: ["festival", "competição", "tradicional"]
  
  - createdAt: integer (timestamp)
  - updatedAt: integer (timestamp)

indexes:
  - slug (unique)
  - eventDate
  - city, state (composite)
  - status
  - isRecurring
  - isFeatured
```

### 16. event_recurrence_exceptions (Exceções de Recorrência)

```typescript
table: event_recurrence_exceptions
columns:
  - id: integer PRIMARY KEY
  - eventId: integer REFERENCES cantoria_events(id)
  - exceptionDate: integer (timestamp) // Data da exceção
  - reason: text // "Feriado", "Cancelado", "Adiado"
  - alternativeDate: integer (timestamp) // Data alternativa
  
  - createdAt: integer (timestamp)

indexes:
  - eventId, exceptionDate (composite)
```

### 17. event_attendees (Participantes/Interessados)

```typescript
table: event_attendees
columns:
  - id: integer PRIMARY KEY
  - eventId: integer REFERENCES cantoria_events(id)
  - userId: integer REFERENCES users(id)
  - status: text // 'interested', 'going', 'attended'
  
  - createdAt: integer (timestamp)
  - updatedAt: integer (timestamp)

indexes:
  - eventId, userId (composite unique)
  - userId
```

### 18. audio_files (Arquivos de Áudio para Transcrição)

```typescript
table: audio_files
columns:
  - id: integer PRIMARY KEY
  - fileName: text NOT NULL
  - fileUrl: text NOT NULL // URL do arquivo no storage
  - fileSize: integer // Bytes
  - duration: integer // Segundos
  - mimeType: text // "audio/mpeg"
  
  // Upload
  - uploadedBy: integer REFERENCES users(id)
  - uploadedAt: integer (timestamp)
  
  // Transcrição
  - transcriptionStatus: text DEFAULT 'pending' // 'pending', 'processing', 'completed', 'failed'
  - transcriptionId: integer REFERENCES transcriptions(id)
  - transcriptionStartedAt: integer (timestamp)
  - transcriptionCompletedAt: integer (timestamp)
  - transcriptionError: text // Erro se falhou
  
  // Metadados de origem
  - sourceType: text // 'upload', 'youtube', 'external'
  - sourceUrl: text // URL original se de fonte externa
  - eventId: integer REFERENCES cantoria_events(id) // Se vinculado a evento
  
  // Metadados sugeridos (preenchido por usuário no upload)
  - suggestedTitle: text
  - suggestedCantadores: text // JSON array de nomes
  - suggestedDate: integer (timestamp)
  - suggestedLocation: text
  - notes: text
  
  - createdAt: integer (timestamp)
  - updatedAt: integer (timestamp)

indexes:
  - uploadedBy
  - transcriptionStatus
  - eventId
  - createdAt DESC
```

## 🔄 Relacionamentos Importantes

### Usuário → Cantador
- Um usuário pode ter um perfil de cantador associado
- Nem todo usuário é cantador cadastrado

### Repente → Cantadores (N:N)
- Um repente tem múltiplos cantadores
- Um cantador participa de múltiplos repentes
- Junction table: `repente_cantadores`

### Repente → Transcrição (1:1)
- Um repente tem uma transcrição
- Uma transcrição pertence a um repente

### Transcrição → Poesias (1:N)
- Uma transcrição gera múltiplas poesias extraídas
- Cada poesia pode referenciar a transcrição original

### Poesia → Estrofes → Versos (1:N:N)
- Hierarquia clara de conteúdo
- Permite análise granular

### Estilo → Poesias (1:N)
- Um estilo tem muitas poesias
- Cada poesia segue um estilo

## 📊 Queries Importantes

### 1. Buscar Poesias por Cantador

```sql
SELECT p.*, c.name as cantador_name, ps.name as style_name
FROM poetries p
LEFT JOIN cantadores c ON p.authorId = c.id
LEFT JOIN poetry_styles ps ON p.styleId = ps.id
WHERE c.slug = 'sebastiao-da-silva'
  AND p.status = 'published'
ORDER BY p.publishedAt DESC;
```

### 2. Repentes de um Cantador

```sql
SELECT r.*, c.name
FROM repentes r
JOIN repente_cantadores rc ON r.id = rc.repenteId
JOIN cantadores c ON rc.cantadorId = c.id
WHERE c.slug = 'ivanildo-vilanova'
ORDER BY r.date DESC;
```

### 3. Poesias por Estilo com Análise

```sql
SELECT p.*, ps.name as style_name
FROM poetries p
JOIN poetry_styles ps ON p.styleId = ps.id
WHERE ps.slug = 'galope-beira-mar'
  AND p.validationScore >= 80
  AND p.status = 'published'
ORDER BY p.validationScore DESC, p.likeCount DESC
LIMIT 20;
```

### 4. Progresso de Aprendizado do Usuário

```sql
SELECT ps.name, ps.difficulty, ulp.*
FROM user_learning_progress ulp
JOIN poetry_styles ps ON ulp.styleId = ps.id
WHERE ulp.userId = ?
ORDER BY ulp.experiencePoints DESC;
```

### 5. Sugestões de Palavras para Rimar

```sql
SELECT word, syllableCount, meaning, frequency
FROM word_rhymes
WHERE rhymeSound = ?
  AND syllableCount <= ?
ORDER BY frequency DESC, length(word) DESC
LIMIT 10;
```

## 🚀 Migrations e Índices

### Prioridade de Índices

**Alto impacto (criar primeiro):**
1. `poetries.styleId` - Busca por estilo
2. `poetries.status, publishedAt` - Listagem pública
3. `verses.poetryId` - Carregamento de poesias
4. `stanzas.poetryId, order` - Ordem de estrofes
5. `word_rhymes.rhymeSound, syllableCount` - Sugestões de rima

**Médio impacto:**
6. `repentes.date` - Listagem cronológica
7. `cantadores.slug` - Perfis de cantadores
8. `user_learning_progress.userId, styleId` - Progresso

**Baixo impacto (adicionar conforme necessário):**
9. Full-text search em `poetries.title, theme`
10. `poetry_likes.userId, poetryId` - Validação de curtidas

Esta estrutura de banco suporta todas as funcionalidades do Vilanova mantendo performance e flexibilidade para crescimento futuro.
