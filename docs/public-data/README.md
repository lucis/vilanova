# Estrutura de Dados do Vilanova

## 📁 Arquivos de Dados

### ✅ `acervo.json` - FONTE ÚNICA DE VERDADE

Este é o **único** arquivo que contém os dados das cantorias. Todos os componentes React importam deste arquivo.

**Estrutura:**
```json
{
  "$schema": "https://json-schema.org/draft-07/schema#",
  "title": "Acervo Estruturado de Repentes - Vilanova",
  "repentes": [
    {
      "id": "identificador-unico",
      "slug": "url-amigavel",
      "titulo": "Título da Cantoria",
      "estilo": {
        "nome": "Nome do Estilo",
        "slug": "estilo-slug",
        "versos_por_estrofe": 10,
        "metrica": "decassílabos (10 sílabas)",
        "esquema_rima": "ABBAACCDDC",
        "mote_fixo": "Mote repetido (se houver)"
      },
      "cantadores": [...],
      "local": "Local da Cantoria",
      "ano": 2024,
      "duracao": "5:07",
      "contexto": "Descrição do contexto",
      "estrofes": [
        {
          "numero": 1,
          "cantador": "Nome do Cantador",
          "versos": ["verso 1", "verso 2", ...],
          "tema": "Tema da estrofe"
        }
      ],
      "links": {
        "youtube": "https://www.youtube.com/watch?v=...",
        "spotify": null
      },
      "transcricao_path": "/repentes/nome-arquivo.txt",
      "audio_path": null,
      "destaque": true
    }
  ],
  "metadata": {
    "ultima_atualizacao": "2025-01-17",
    "total_repentes": 11,
    "total_estrofes_catalogadas": 57
  }
}
```

### ✅ `estilos.json` - Informações sobre Estilos de Repente

Catálogo de estilos (Sextilha, Oitava, Martelo, etc.) com suas características técnicas.

---

## 🚫 Arquivos Removidos (Duplicados)

Removemos os seguintes arquivos para eliminar duplicação:

- ❌ `public/data/cantorias.json` - Era uma versão simplificada, mas todos os componentes já usam `acervo.json`
- ❌ `repentes/acervo-estruturado.json` - Era uma cópia/rascunho. Use apenas `public/data/acervo.json`
- ❌ `repentes/cantorias.json` - Versão antiga/redundante

---

## 📝 Como Adicionar uma Nova Cantoria

1. **Edite apenas** `/public/data/acervo.json`
2. Adicione um novo objeto no array `repentes`
3. Siga a estrutura acima
4. Atualize `metadata.total_repentes` e `metadata.total_estrofes_catalogadas`
5. Atualize `metadata.ultima_atualizacao`

### Exemplo de Nova Entrada Mínima:

```json
{
  "id": "nova-cantoria-id",
  "slug": "nova-cantoria-slug",
  "titulo": "Título da Nova Cantoria",
  "estilo": {
    "nome": "Sextilha",
    "slug": "sextilha",
    "versos_por_estrofe": 6,
    "metrica": "setissílabos (7 sílabas)",
    "esquema_rima": "AABCCB"
  },
  "cantadores": [
    {
      "nome": "Nome do Cantador",
      "slug": "cantador-slug"
    }
  ],
  "local": null,
  "ano": null,
  "duracao": null,
  "contexto": "Descrição breve",
  "estrofes": [],
  "links": {
    "youtube": "",
    "spotify": null
  },
  "transcricao_path": "/repentes/nome-arquivo.txt",
  "audio_path": null,
  "destaque": false
}
```

---

## 🔄 Build e Deploy

O Vite automaticamente copia `public/` para `dist/client/` durante o build:

```bash
npm run dev    # Desenvolvimento - usa public/data/acervo.json diretamente
npm run build  # Build - copia para dist/client/data/acervo.json
npm run deploy # Deploy - usa o build em dist/
```

**Não edite arquivos em `dist/` manualmente!** Eles são gerados automaticamente.

---

## 🎯 Componentes que Usam os Dados

Todos importam diretamente de `public/data/`:

- `home.tsx` - Estatísticas e exemplos
- `cantorias.tsx` - Lista de cantorias
- `cantoria.tsx` - Página individual de cantoria
- `cantadores.tsx` - Lista de cantadores
- `cantador.tsx` - Página individual de cantador
- `estilos.tsx` - Lista de estilos
- `estilo.tsx` - Página individual de estilo

**Import padrão:**
```typescript
import acervoData from "../../../public/data/acervo.json";
```

---

## ✅ Checklist de Qualidade

Antes de adicionar uma nova cantoria, verifique:

- [ ] ID único (sem duplicatas)
- [ ] Slug amigável para URL
- [ ] Esquema de rima correto para o estilo
- [ ] Link do YouTube válido (se disponível)
- [ ] Transcrição estruturada (se disponível)
- [ ] Metadata atualizado (total_repentes, total_estrofes, data)
- [ ] JSON válido (sem erros de sintaxe)

---

**Última atualização desta documentação:** 2025-01-17

