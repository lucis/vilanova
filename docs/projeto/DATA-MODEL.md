# 📊 Data Model - Projeto Vilanova

> **Última atualização:** 2025-01-17 - Refatoração para arquivos modulares

## 🎯 Arquitetura de Dados

O Vilanova usa uma **arquitetura modular** para facilitar manutenção por IA e humanos:

```
public/data/
├── index.json                    # Índice leve (lista de cantorias)
├── estilos.json                  # Catálogo de estilos de repente
└── cantorias/                    # Arquivos individuais por cantoria
    ├── pensamento-positivo-os-nonatos.json
    ├── oitavas-os-nonatos-sao-lourenco.json
    └── ... (13 arquivos no total)
```

### 💡 **Por que arquivos separados?**

1. **✅ Fácil para IA editar** - Arquivos pequenos (2-8 KB) são mais gerenciáveis
2. **✅ Git-friendly** - Mudanças em uma cantoria não afetam outras
3. **✅ Performance** - Carrega só o necessário
4. **✅ Colaboração** - Menos conflitos de merge

---

## 📄 Estrutura dos Arquivos

### 1. `index.json` - Índice de Cantorias

Lista leve com metadados básicos. Use este para listar cantorias sem carregar estrofes.

**⚠️ IMPORTANTE - Ordenação:** A ordem dos itens no array `cantorias` é **cronológica** (primeira = mais antiga, última = mais recente). Para exibir as mais recentes primeiro, inverta a ordem do array com `.reverse()`.

```json
{
  "$schema": "https://json-schema.org/draft-07/schema#",
  "title": "Índice de Cantorias - Vilanova",
  "cantorias": [
    {
      "id": "pensamento-positivo-os-nonatos",
      "slug": "pensamento-positivo-martelo-alagoano-os-nonatos",
      "titulo": "Pensamento Positivo (Martelo Alagoano)",
      "estilo": "Martelo Alagoano",
      "destaque": true,
      "youtube": "https://www.youtube.com/watch?v=MrQSh9-k5XU",
      "_ref": "/cantorias/pensamento-positivo-os-nonatos.json"
    }
  ],
  "metadata": {
    "ultima_atualizacao": "2025-01-17",
    "total_repentes": 13,
    "total_estrofes_catalogadas": 57
  }
}
```

### 2. `cantorias/{id}.json` - Cantoria Completa

Arquivo individual com **todos os dados** incluindo estrofes.

```json
{
  "id": "pensamento-positivo-os-nonatos",
  "slug": "pensamento-positivo-martelo-alagoano-os-nonatos",
  "titulo": "Pensamento Positivo (Martelo Alagoano)",
  "estilo": {
    "nome": "Martelo Alagoano",
    "slug": "martelo-alagoano",
    "versos_por_estrofe": 10,
    "metrica": "decassílabos (10 sílabas)",
    "esquema_rima": "AAAAAAAAAB + mote triplo",
    "mote_fixo": "Nos dez pés de martelo Alagoano (repetido 3x)"
  },
  "cantadores": [
    {
      "nome": "Nonato Costa",
      "slug": "nonato-costa",
      "dupla": "Os Nonatos"
    }
  ],
  "local": null,
  "ano": null,
  "duracao": "5:07",
  "contexto": "Mensagem motivacional sobre persistência, fé e trabalho",
  "estrofes": [
    {
      "numero": 1,
      "cantador": "Os Nonatos",
      "versos": [
        "Quem consegue manter-se firme em pé,",
        "não tem medo da crise quando sofre.",
        "Todo mundo no peito tem um cofre",
        "como banco central pra guardar fé.",
        "A hipótese de ser faz quem não é.",
        "Trabalhar noite e dia mês e ano.",
        "Sonhar alto, rezar e fazer plano",
        "ir a luta buscando o que não há.",
        "De vez em quando tem um que chega lá",
        "nos dez pés de martelo Alagoano."
      ],
      "tema": "Resiliência e fé - perseverança diante das crises"
    }
  ],
  "links": {
    "youtube": "https://www.youtube.com/watch?v=MrQSh9-k5XU",
    "spotify": null
  },
  "transcricao_path": "/repentes/pensamento-positivo-os-nonatos.txt",
  "audio_path": null,
  "destaque": true,
  "_metadata": {
    "created_at": "2025-01-17",
    "file_ref": "/cantorias/pensamento-positivo-os-nonatos.json",
    "source": "Projeto Vilanova - vilanova.deco.page"
  }
}
```

---

## 🤖 Como Adicionar uma Nova Cantoria via IA (Cursor/Windsurf)

### Método 1: Via Prompt Natural (Recomendado)

Basta enviar o link do YouTube e pedir:

```
Adicione esta nova cantoria:
https://www.youtube.com/watch?v=ID_DO_VIDEO

[Copie/cole a transcrição se tiver]

Título: [Nome da Cantoria]
Estilo: [Martelo Alagoano/Sextilha/Oitava/etc]
Cantadores: [Nomes]
```

A IA irá:
1. ✅ Criar arquivo individual em `public/data/cantorias/{id}.json`
2. ✅ Atualizar `public/data/index.json`
3. ✅ Atualizar metadados (total_repentes, total_estrofes)
4. ✅ Criar transcrição em `repentes/{id}.txt`
5. ✅ Rodar script de sincronização

### Método 2: Edição Manual

1. **Crie o arquivo** em `public/data/cantorias/`:

```bash
# Nome do arquivo: {id}.json (use kebab-case)
public/data/cantorias/nova-cantoria-2025.json
```

2. **Use este template**:

```json
{
  "id": "nova-cantoria-2025",
  "slug": "nova-cantoria-titulo-amigavel",
  "titulo": "Título da Nova Cantoria",
  "estilo": {
    "nome": "Martelo Alagoano",
    "slug": "martelo-alagoano",
    "versos_por_estrofe": 10,
    "metrica": "decassílabos (10 sílabas)",
    "esquema_rima": "AAAAAAAAAB + mote triplo",
    "mote_fixo": "Nos dez pés de martelo Alagoano (3x)"
  },
  "cantadores": [
    {
      "nome": "Nome do Cantador",
      "slug": "cantador-slug"
    }
  ],
  "local": null,
  "ano": 2025,
  "duracao": "5:30",
  "contexto": "Descrição breve do contexto",
  "estrofes": [],
  "links": {
    "youtube": "https://www.youtube.com/watch?v=...",
    "spotify": null
  },
  "transcricao_path": "/repentes/nova-cantoria.txt",
  "audio_path": null,
  "destaque": true,
  "_metadata": {
    "created_at": "2025-01-17",
    "file_ref": "/cantorias/nova-cantoria-2025.json",
    "source": "Projeto Vilanova"
  }
}
```

3. **Atualize o índice**:

Adicione entrada em `public/data/index.json`:

```json
{
  "id": "nova-cantoria-2025",
  "slug": "nova-cantoria-titulo-amigavel",
  "titulo": "Título da Nova Cantoria",
  "estilo": "Martelo Alagoano",
  "destaque": true,
  "youtube": "https://www.youtube.com/watch?v=...",
  "_ref": "/cantorias/nova-cantoria-2025.json"
}
```

4. **Atualize metadata** em `index.json`:

```json
"metadata": {
  "ultima_atualizacao": "2025-01-17",
  "total_repentes": 14,  // ← Incremente
  "total_estrofes_catalogadas": 57  // ← Some as estrofes novas
}
```

5. **Rode o script de sync**:

```bash
npm run sync-data
```

---

## 🛠️ Utilitários para Desenvolvedores

### JavaScript/TypeScript

```typescript
import { getIndex, loadCantoria } from '@/lib/loadAcervo';

// Listar todas (leve, sem estrofes)
const index = getIndex();
console.log(index.cantorias); // Array de CantoriaIndex

// Carregar uma completa (com estrofes)
const cantoria = await loadCantoria('pensamento-positivo-os-nonatos');
console.log(cantoria.estrofes); // Array de Estrofes

// Filtrar
import { filterCantorias } from '@/lib/loadAcervo';
const destaques = filterCantorias({ destaque: true });
const comYoutube = filterCantorias({ comYoutube: true });
```

### CLI

```bash
# Contar cantorias
jq '.cantorias | length' public/data/index.json

# Listar só os títulos
jq -r '.cantorias[].titulo' public/data/index.json

# Buscar cantoria específica
jq '.cantorias[] | select(.id == "pensamento-positivo-os-nonatos")' public/data/index.json

# Ver estrofes de uma cantoria
jq '.estrofes' public/data/cantorias/pensamento-positivo-os-nonatos.json
```

---

## 📦 Scripts Disponíveis

### `scripts/split-acervo.ts`

Divide `acervo.json` em arquivos individuais.

```bash
npx tsx scripts/split-acervo.ts
```

### `scripts/merge-acervo.ts` (futuro)

Reconstrói `acervo.json` a partir dos arquivos individuais (para compatibilidade).

---

## ✅ Checklist de Qualidade

Ao adicionar nova cantoria, verifique:

- [ ] **ID único** (sem conflitos)
- [ ] **Slug amigável** (kebab-case)
- [ ] **Estilo correto** com esquema de rima
- [ ] **Arquivo em** `public/data/cantorias/`
- [ ] **Entrada em** `public/data/index.json`
- [ ] **Metadata atualizado** (totals)
- [ ] **JSON válido** (sem erros de sintaxe)
- [ ] **Transcrição** em `repentes/` (se disponível)
- [ ] **Link YouTube** funcional

---

## 🔄 Migração do Sistema Antigo

Se você tem código usando o antigo `acervo.json`:

### ❌ **Antes:**
```typescript
import acervoData from "../../../public/data/acervo.json";
const cantorias = acervoData.repentes;
```

### ✅ **Depois:**
```typescript
import acervoData from "../lib/acervoCompat";
const cantorias = acervoData.repentes; // Mesma interface!
```

O arquivo `acervoCompat.ts` garante retrocompatibilidade total.

---

## 📚 Mais Informações

- **Estrutura de dados antiga:** Ver histórico Git antes de 2025-01-17
- **Documentação dos estilos:** `docs/estilos/README.md`
- **Transcrições:** `/repentes/README.md`
- **Guia de contribuição:** `/README.md`

---

**Dúvidas?** Abra uma issue no GitHub ou pergunte à IA! 🤖

