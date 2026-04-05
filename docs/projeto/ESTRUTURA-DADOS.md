# 📊 Estrutura de Dados - Vilanova

> **Refatoração realizada em 2025-01-17** para eliminar duplicação de dados

## 🎯 Fonte Única de Verdade

Todos os dados das cantorias estão centralizados em **um único arquivo**:

```
📁 public/data/acervo.json  ← ÚNICA FONTE DE VERDADE
```

### ✅ **Benefícios:**
- ✅ **Sem duplicação** de dados
- ✅ **Fácil manutenção** - edita-se apenas um arquivo
- ✅ **Consistência** garantida em toda aplicação
- ✅ **Build automático** copia para `dist/` via Vite

---

## 📁 Estrutura de Arquivos

```
vilanova/
├── public/data/
│   ├── acervo.json       ← 🎯 FONTE ÚNICA (cantorias + estrofes)
│   ├── estilos.json      ← Informações sobre estilos de repente
│   └── README.md         ← Documentação detalhada
│
├── repentes/
│   ├── *.txt             ← Transcrições de cantorias (texto puro)
│   └── README.md         ← Documentação das transcrições
│
└── dist/client/data/     ← 🤖 GERADO automaticamente pelo build
    ├── acervo.json       (cópia de public/data/acervo.json)
    └── estilos.json      (cópia de public/data/estilos.json)
```

### 🚫 **Arquivos Removidos (Duplicados):**

Estes arquivos foram **deletados** para eliminar duplicação:

- ❌ `public/data/cantorias.json`
- ❌ `repentes/acervo-estruturado.json`
- ❌ `repentes/cantorias.json`
- ❌ `dist/client/data/cantorias.json`

---

## 📝 Como Adicionar uma Nova Cantoria

### 1️⃣ Edite **apenas** `/public/data/acervo.json`

```json
{
  "repentes": [
    // ... cantorias existentes
    {
      "id": "nova-cantoria-2025",
      "slug": "nova-cantoria-titulo-amigavel",
      "titulo": "Nova Cantoria Incrível",
      "estilo": {
        "nome": "Martelo Alagoano",
        "slug": "martelo-alagoano",
        "versos_por_estrofe": 10,
        "metrica": "decassílabos (10 sílabas)",
        "esquema_rima": "ABBAACCDDC",
        "mote_fixo": "Nos dez pés de martelo Alagoano (3x)"
      },
      "cantadores": [
        {
          "nome": "Cantador Exemplo",
          "slug": "cantador-exemplo"
        }
      ],
      "local": "Caruaru, PE",
      "ano": 2025,
      "duracao": "5:30",
      "contexto": "Descrição do contexto da cantoria",
      "estrofes": [
        {
          "numero": 1,
          "cantador": "Cantador Exemplo",
          "versos": [
            "Primeiro verso da estrofe",
            "Segundo verso da estrofe",
            // ... mais versos
          ],
          "tema": "Tema abordado nesta estrofe"
        }
        // ... mais estrofes
      ],
      "links": {
        "youtube": "https://www.youtube.com/watch?v=ID_DO_VIDEO",
        "spotify": null
      },
      "transcricao_path": "/repentes/nova-cantoria.txt",
      "audio_path": null,
      "destaque": true
    }
  ],
  "metadata": {
    "ultima_atualizacao": "2025-01-17",
    "total_repentes": 12,              // ← Atualizar
    "total_estrofes_catalogadas": 65   // ← Atualizar
  }
}
```

### 2️⃣ Atualize os metadados

Sempre que adicionar/remover cantorias, atualize:

- `metadata.total_repentes`
- `metadata.total_estrofes_catalogadas`
- `metadata.ultima_atualizacao`

### 3️⃣ (Opcional) Adicione a transcrição completa

Crie um arquivo texto em `/repentes/`:

```bash
repentes/nova-cantoria.txt
```

---

## 🔄 Workflow de Desenvolvimento

### Durante o desenvolvimento (`npm run dev`):

```bash
npm run dev
```

- Vite serve arquivos diretamente de `public/`
- Mudanças em `public/data/acervo.json` refletem imediatamente
- Hot Module Replacement (HMR) funciona normalmente

### Durante o build (`npm run build`):

```bash
npm run build
```

- Vite copia `public/` → `dist/client/`
- Arquivos JSON são copiados automaticamente
- Não edite arquivos em `dist/` manualmente!

### Durante o deploy:

```bash
npm run deploy
```

- Usa o conteúdo de `dist/` gerado pelo build
- Deploy no Cloudflare Workers/Pages

---

## 🎨 Componentes que Consomem os Dados

Todos os componentes React importam do mesmo lugar:

```typescript
// Padrão usado em todos os componentes
import acervoData from "../../../public/data/acervo.json";
import estilosData from "../../../public/data/estilos.json";

// Uso
const cantorias = acervoData.repentes;
const totalRepentes = acervoData.metadata.total_repentes;
```

### Componentes que usam `acervo.json`:

- `home.tsx` - Estatísticas e exemplos destacados
- `cantorias.tsx` - Lista paginada de cantorias
- `cantoria.tsx` - Página individual de cada cantoria
- `cantadores.tsx` - Lista agregada de cantadores
- `cantador.tsx` - Perfil individual de cantador
- `estilos.tsx` - Lista de estilos com exemplos
- `estilo.tsx` - Página individual de cada estilo

---

## ✅ Checklist de Qualidade

Antes de adicionar uma nova cantoria, verifique:

- [ ] **ID único** (sem conflitos com IDs existentes)
- [ ] **Slug amigável** para URL (minúsculas, hífens)
- [ ] **Estilo correto** com esquema de rima válido
- [ ] **Cantadores** com nomes consistentes
- [ ] **Links** válidos (YouTube, Spotify)
- [ ] **Estrofes** estruturadas corretamente (se disponível)
- [ ] **Metadados atualizados** (total_repentes, total_estrofes, data)
- [ ] **JSON válido** (sem erros de sintaxe)
- [ ] **Destaque** apropriado (true/false)

---

## 🔍 Validação

Para validar o JSON:

```bash
# Verificar sintaxe
jq . public/data/acervo.json > /dev/null && echo "✅ JSON válido"

# Contar repentes
jq '.metadata.total_repentes' public/data/acervo.json

# Contar estrofes
jq '[.repentes[].estrofes | length] | add' public/data/acervo.json

# Listar IDs (verificar duplicatas)
jq '.repentes[].id' public/data/acervo.json | sort | uniq -d
```

---

## 📚 Mais Informações

- **Documentação detalhada:** `/public/data/README.md`
- **Sobre transcrições:** `/repentes/README.md`
- **Guia de contribuição:** `/README.md`

---

**Última atualização:** 2025-01-17
**Responsável pela refatoração:** Eliminação de arquivos duplicados

