# 🤖 Guia Rápido para IA - Vilanova

> Instruções condensadas para assistentes de IA (Cursor, Windsurf, GitHub Copilot, Claude, etc.)

---

## 📁 Estrutura de Dados Modular

```
public/data/
├── index.json        ← Índice (SEMPRE atualize ao adicionar cantoria)
├── estilos.json      ← Referência de estilos
└── cantorias/        ← Arquivos individuais (um por cantoria)
    ├── {id}.json
```

**Importante:** Arquivos pequenos (2-8 KB) são melhores para IA processar!

---

## ➕ Adicionar Cantoria (Fluxo Completo)

### Input do usuário:
```
Adicione esta cantoria:
https://www.youtube.com/watch?v=MrQSh9-k5XU

[Transcrição ou informações]
```

### Seu processo:

#### 1. Crie arquivo individual
**Localização:** `public/data/cantorias/{id}.json`

**ID Format:** kebab-case sem acentos
- ✅ `pensamento-positivo-os-nonatos`
- ❌ `Pensamento_Positivo`

**Estrutura mínima:**
```json
{
  "id": "cantoria-id",
  "slug": "url-slug",
  "titulo": "Título",
  "estilo": { /* ver estilos.json */ },
  "cantadores": [{ "nome": "...", "slug": "..." }],
  "local": null,
  "ano": null,
  "contexto": "...",
  "estrofes": [ /* array de estrofes */ ],
  "links": { "youtube": "..." },
  "destaque": true,
  "_metadata": {
    "created_at": "YYYY-MM-DD",
    "file_ref": "/cantorias/{id}.json"
  }
}
```

#### 2. Atualize índice
**Arquivo:** `public/data/index.json`

```json
// Adicione no array "cantorias"
{
  "id": "cantoria-id",
  "slug": "url-slug",
  "titulo": "Título",
  "estilo": "Nome do Estilo",
  "destaque": true,
  "youtube": "URL",
  "_ref": "/cantorias/{id}.json"
}

// Atualize "metadata"
"metadata": {
  "ultima_atualizacao": "2025-01-17",  // ← Data ATUAL
  "total_repentes": 14,                // ← INCREMENTE
  "total_estrofes_catalogadas": 65     // ← SOME estrofes novas
}
```

#### 3. Atualize acervoCompat.ts
**Arquivo:** `view/src/lib/acervoCompat.ts`

Adicione import e inclua no array `repentes`.

#### 4. Sincronize
```bash
npm run data:sync
```

### ⚠️ NÃO crie arquivos .txt

- ❌ Não crie `repentes/{id}.txt` (duplicação!)
- ✅ Tudo já está no JSON

---

## 🎵 Estilos - Referência Rápida

Consulte `public/data/estilos.json` para estrutura completa.

| Estilo | Versos | Métrica | Rima |
|--------|--------|---------|------|
| Sextilha | 6 | 7 sílabas | AABCCB |
| Oitava | 8 | 7 sílabas | ABBAACCA |
| Martelo Alagoano | 10 + mote 3x | 10 sílabas | AAAAAAAAAB |
| Galope à Beira Mar | 10 | 10 sílabas | AAAAABBCCM |
| Décima | 10 | 10 sílabas | ABBAACCDDC |

---

## 🚨 SEMPRE Faça

- ✅ Crie arquivo em `cantorias/{id}.json`
- ✅ Adicione entrada em `index.json` (array `cantorias`)
- ✅ Atualize `metadata` (total_repentes, total_estrofes, data)
- ✅ Use ID único
- ✅ Valide JSON (sintaxe correta)

## 🚫 NUNCA Faça

- ❌ Edite `acervo.json` (obsoleto)
- ❌ Edite arquivos em `dist/` (gerados pelo build)
- ❌ Esqueça de atualizar `index.json`
- ❌ Use IDs duplicados
- ❌ Importe diretamente de `public/data/acervo.json`

---

## 📝 Imports Corretos

```typescript
// ✅ Para usar dados agregados (retrocompatível)
import acervoData from "../lib/acervoCompat";
const cantorias = acervoData.repentes;

// ✅ Para usar nova estrutura modular
import { getIndex, loadCantoria } from "../lib/loadAcervo";
const index = getIndex();
const cantoria = await loadCantoria('cantoria-id');
```

---

## 🔍 Exemplos Reais

### Exemplo 1: Pensamento Positivo (Os Nonatos)

**Arquivo:** `public/data/cantorias/pensamento-positivo-os-nonatos.json`

- ID: `pensamento-positivo-os-nonatos`
- Estilo: Martelo Alagoano
- Cantadores: Nonato Costa, Nonato Neto
- Estrofes: 8
- YouTube: https://www.youtube.com/watch?v=MrQSh9-k5XU

### Exemplo 2: Lampião e a Gruta de Angicos

**Arquivo:** `public/data/cantorias/sextilha-lampiao-gruta-angicos.json`

- ID: `sextilha-lampiao-gruta-angicos`
- Estilo: Sextilha
- Cantadores: Valdir Teles, Sebastião Dias
- Estrofes: 22
- YouTube: https://www.youtube.com/watch?v=f1dN-dkSOuY

---

## 📊 Metadata Atual (Referência)

```json
{
  "ultima_atualizacao": "2025-01-17",
  "total_repentes": 13,
  "total_estrofes_catalogadas": 57
}
```

**Ao adicionar:** Incremente esses números!

---

## 🎯 Resumo Ultra-Curto

**Adicionar cantoria:**
1. Crie `cantorias/{id}.json`
2. Atualize `index.json` (array + metadata)
3. Atualize `acervoCompat.ts` (import + array)
4. Rode `npm run data:sync`

**Editar cantoria:**
1. Edite `cantorias/{id}.json`
2. Atualize metadata em `index.json` se necessário

**Imports:**
- Use `import acervoData from "../lib/acervoCompat"`

**NUNCA:**
- Edite `dist/`
- Crie `acervo.json`
- Esqueça `index.json`

---

**Documentação completa:** Veja `.cursorrules` e `docs/projeto/DATA-MODEL.md`

