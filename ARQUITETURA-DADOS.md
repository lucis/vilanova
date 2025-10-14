# Arquitetura de Dados - Vilanova

## Princípio: Repositório como Fonte de Verdade

Todo o conteúdo do Vilanova está armazenado em **arquivos estáticos no repositório Git**:
- ✅ Fácil de editar (JSON é legível)
- ✅ Versionado (Git rastreia todas as mudanças)
- ✅ Sem banco de dados (simplicidade)
- ✅ Aberto (qualquer um pode contribuir via PR)
- ✅ Futuro: editável via forms no site (salvando no repo)

## Estrutura de Diretórios

```
vilanova/
├── public/data/          ← Fonte de verdade (usado pelo site)
│   ├── cantorias.json   
│   ├── acervo.json      
│   └── estilos.json     
├── repentes/             ← Arquivos originais + transcrições
│   ├── cantorias.json (cópia para public/data/)
│   ├── acervo-estruturado.json (cópia para public/data/)
│   └── *.txt (transcrições)
└── estilos/              ← Documentação dos estilos
    ├── README.md
    ├── galope-beira-mar.md
    ├── oitava.md
    ├── martelo-alagoano.md
    └── desafio-mote-decassilabos.md
```

## Arquivos de Dados

### 1. `/public/data/cantorias.json`

**Propósito**: Lista simplificada de cantorias para overview rápido

**Estrutura**:
```json
{
  "cantorias": [
    {
      "id": "unique-id",
      "titulo": "Nome da Cantoria",
      "cantadores": [
        { "nome": "Cantador 1", "perfil": null }
      ],
      "estilo": "Nome do Estilo",
      "local": "Cidade, Estado",
      "ano": 2023,
      "duracao": "4:27",
      "links": {
        "youtube": "URL",
        "spotify": null
      },
      "tags": ["tag1", "tag2"],
      "descricao": "Descrição curta",
      "destaque": true,
      "transcricao_disponivel": true,
      "transcricao_path": "/repentes/arquivo.txt"
    }
  ],
  "metadata": {
    "total_cantorias": 8,
    "com_transcricao": 8,
    "com_youtube": 3
  }
}
```

**Uso no site**: Páginas de lista rápida, estatísticas gerais

### 2. `/public/data/acervo.json`

**Propósito**: Dados completos com todas as estrofes estruturadas

**Estrutura**:
```json
{
  "repentes": [
    {
      "id": "unique-id",
      "slug": "url-friendly-slug",
      "titulo": "Título Completo",
      "estilo": {
        "nome": "Galope à Beira-Mar",
        "slug": "galope-beira-mar",
        "versos_por_estrofe": 10,
        "metrica": "hendecassílabos (11 sílabas)",
        "esquema_rima": "ABBAACCDDC",
        "mote_fixo": "Texto do mote"
      },
      "cantadores": [
        {
          "nome": "Nome Completo",
          "slug": "nome-slug",
          "apelido": "Apelido"
        }
      ],
      "local": "Cidade, Estado",
      "ano": 2023,
      "contexto": "Descrição do contexto",
      "estrofes": [
        {
          "numero": 1,
          "cantador": "Nome do Cantador",
          "versos": [
            "verso 1",
            "verso 2",
            "..."
          ],
          "tema": "Tema da estrofe"
        }
      ],
      "links": {
        "youtube": "URL",
        "spotify": null
      },
      "transcricao_path": "/repentes/arquivo.txt",
      "destaque": true
    }
  ],
  "metadata": {
    "total_repentes": 8,
    "total_estrofes_catalogadas": 34
  }
}
```

**Uso no site**: 
- Páginas de detalhe de cantorias
- Agregação de cantadores
- Busca em versos
- Análise de estilos por cantador

### 3. `/public/data/estilos.json`

**Propósito**: Catálogo de estilos com informações técnicas

**Estrutura**:
```json
{
  "estilos": [
    {
      "slug": "galope-beira-mar",
      "nome": "Galope à Beira-Mar",
      "resumo": "Descrição curta",
      "definicao": "Definição completa",
      "historia": "História de origem",
      "estrutura": {
        "metrica": "hendecassílabos (11 sílabas)",
        "versos_por_estrofe": 10,
        "esquema_rima": "ABBAACCDDC",
        "tonicas": "Posições 2, 5, 8 e 11",
        "obrigatoriedade": "Regras especiais"
      },
      "dificuldade": "Avançado",
      "nivel_numero": 3,
      "exemplo": "Estrofe de exemplo completa",
      "exemplo_autor": "Autor do exemplo",
      "temas_comuns": ["tema1", "tema2"],
      "curiosidade": "Fato interessante",
      "cantorias_count": 4
    }
  ],
  "metadata": {
    "total_estilos": 4,
    "por_dificuldade": {
      "intermediario": 1,
      "avancado": 2,
      "mestre": 1
    }
  }
}
```

**Uso no site**: 
- Páginas de lista e detalhe de estilos
- Informações técnicas em páginas de cantoria
- Guia educativo

## Entidades Derivadas

### Cantadores

**Não há arquivo JSON de cantadores**. São agregados dinamicamente de `acervo.json`:

```typescript
// view/src/lib/cantadores.ts
export function agregarCantadores(cantorias: Cantoria[]): Cantador[] {
  // Extrai cantadores únicos
  // Conta cantorias por cantador
  // Identifica estilos que cada um canta
  // Encontra parceiros frequentes
  // Calcula estatísticas
}
```

**Resultado**:
```typescript
{
  slug: "valdir-teles",
  nome: "Valdir Teles",
  apelido?: "Apelido",
  cantorias: [Cantoria, Cantoria],
  estilos: ["Galope à Beira-Mar", "Martelo Alagoano"],
  parceiros: [
    { nome: "Moacir", slug: "moacir", count: 1 },
    { nome: "Zé Cardoso", slug: "ze-cardoso", count: 1 }
  ],
  stats: {
    totalCantorias: 2,
    totalEstrofes: 16,
    estiloMaisFrequente: "Galope à Beira-Mar"
  }
}
```

## Fluxo de Dados no Site

### Páginas de Lista (Dinâmicas)

```tsx
// /cantorias
import acervoData from "../../../public/data/acervo.json";
const cantorias = acervoData.repentes;

// /estilos
import estilosData from "../../../public/data/estilos.json";
const estilos = estilosData.estilos;

// /cantadores
import acervoData from "../../../public/data/acervo.json";
import { agregarCantadores } from "../lib/cantadores";
const cantadores = agregarCantadores(acervoData.repentes);
```

### Páginas de Detalhe (Dinâmicas por enquanto)

```tsx
// /cantorias/:slug
const cantoria = acervoData.repentes.find(r => r.slug === slug);

// /estilos/:slug
const estilo = estilosData.estilos.find(e => e.slug === slug);

// /cantadores/:slug
const cantador = agregarCantadores(acervoData.repentes)
  .find(c => c.slug === slug);
```

## Sincronização dos Arquivos

### Arquivos Duplicados (Mantidos Sincronizados)

```
/repentes/cantorias.json  →  /public/data/cantorias.json
/repentes/acervo-estruturado.json  →  /public/data/acervo.json
```

**Quando editar**: Copiar manualmente ou criar script:
```bash
cp repentes/cantorias.json public/data/cantorias.json
cp repentes/acervo-estruturado.json public/data/acervo.json
```

### Estilos (Convertidos de MD)

```
/estilos/*.md  →  /public/data/estilos.json (gerado manualmente)
```

**Processo**:
1. Edite `/estilos/galope-beira-mar.md` (documentação)
2. Atualize `/public/data/estilos.json` (dados estruturados)

*Futuro: Script automatizado de conversão*

## Navegação Entre Entidades

### Relacionamentos

```
Cantoria
├─→ Cantadores (N:N)
├─→ Estilo (N:1)
└─→ Estrofes (1:N)

Cantador
└─→ Cantorias (N:N)
    └─→ Estilos (agregado)
    └─→ Parceiros (agregado)

Estilo
└─→ Cantorias (1:N)
    └─→ Cantadores (agregado)
```

### Links Cruzados

Todas as páginas incluem links para entidades relacionadas:

- **Página de Cantoria**: Links para cantadores individuais e estilo
- **Página de Estilo**: Links para cantorias e cantadores
- **Página de Cantador**: Links para cantorias, estilos e parceiros

## SEO e Performance

### Estratégia Atual (Tudo Dinâmico)

- ✅ Dados vêm de JSON estático
- ✅ Renderização client-side (React)
- ⚠️ SEO limitado (conteúdo carrega em runtime)

### Estratégia Futura (Híbrido)

- Listas permanecem dinâmicas
- Páginas de detalhe podem ser pré-renderizadas com script Deno
- SSG (Static Site Generation) para SEO perfeito

## Edição de Conteúdo

### Atual (Manual)

1. Editar JSON diretamente
2. Commit e push
3. Site reflete mudanças automaticamente

### Futuro (CMS no Site)

1. Form de edição no site
2. Salva diretamente no repositório via API
3. Commit automático
4. Deploy automático

## Princípios de Design

1. **Git como banco de dados**
2. **JSON como formato de dados**
3. **Markdown como documentação**
4. **Agregação em runtime** (cantadores)
5. **Sem build steps complexos**
6. **Tudo versionado e auditável**

Esta arquitetura garante simplicidade, transparência e facilita contribuições da comunidade.

