# Vilanova

> A História Viva da Cantoria Nordestina, Preservada com Tecnologia

**Vilanova** é um projeto open source de preservação digital da cantoria de viola nordestina. Usamos Inteligência Artificial para transcrever, catalogar e organizar repentes históricos antes que essa memória cultural se perca.

O nome é uma **homenagem em vida** ao poeta **Ivanildo Vilanova**, mestre da cantoria que participa da websérie documental ["Entre Cordas e Poesia"](https://www.youtube.com/watch?v=ULbBggbGpB8&list=PLngiJpynwciFIwyrG_EiOW-sKm1tRXSGU).

💻 **[Repositório](https://github.com/lucis/vilanova)**

---

## 🎯 O Que Fazemos

- **📝 Transcrição Automática**: MP3/WAV → OpenAI Whisper → Texto estruturado
- **📊 Análise de Estrutura**: IA identifica estilos, métrica, rimas e figuras de linguagem
- **👥 Catalogação de Cantadores**: Perfis completos com biografias e repertórios
- **📚 Acervo Pesquisável**: Busca por cantador, estilo, tema, local e época
- **🎓 Material Educativo**: Guias de estilos e tutoriais interativos

---

## 🚀 Stack e deploy

O site é gerado com **[Astro](https://astro.build)** em modo **estático** (SSG): cada rota vira HTML no build, o que favorece SEO e indexação.

- **UI**: Astro + React (ilhas para busca e filtros) + Tailwind CSS v4
- **Dados**: JSON em `public/data/` lidos em tempo de build via `src/lib/acervo.ts`
- **Produção**: **[Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/)** com ficheiros estáticos (`wrangler deploy`)

### Desenvolvimento

```bash
npm install
npm run dev
```

### Build e preview local

```bash
npm run build
npx wrangler dev
```

### Deploy (CLI)

```bash
npx wrangler login
npm run deploy
```

### Deploy (Git — Workers Builds)

No painel Cloudflare: **Compute → Workers & Pages → Create** → ligue o repositório e configure:

- **Build command**: `npm run build`
- **Deploy command**: `npx wrangler deploy`

Ajuste `site` em `[astro.config.mjs](astro.config.mjs)` para o teu domínio canónico (Open Graph e sitemap).

---

## 📊 Estrutura de Dados (Data Model)

O Vilanova usa uma **arquitetura modular** otimizada para edição por IA:

```
public/data/
├── index.json              # Índice leve (lista de cantorias)
├── estilos.json            # Catálogo de estilos de repente
└── cantorias/              # 📁 Arquivos individuais (2-8 KB cada)
    ├── pensamento-positivo-os-nonatos.json
    ├── oitavas-os-nonatos-sao-lourenco.json
    └── ... (13 arquivos)
```

### Por que arquivos separados?

- ✅ **Fácil para IA** - Arquivos pequenos são mais gerenciáveis por LLMs
- ✅ **Git-friendly** - Mudanças isoladas, menos conflitos
- ✅ **Performance** - Carrega só o necessário
- ✅ **Manutenção** - Um arquivo por cantoria

📖 **[Ver documentação completa do data model](docs/projeto/DATA-MODEL.md)**

### Como Adicionar uma Cantoria via IA Editor (Cursor/Windsurf)

**É muito simples!** Basta abrir o projeto no Cursor ou Windsurf e pedir:

```
Adicione esta cantoria ao acervo:
https://www.youtube.com/watch?v=MrQSh9-k5XU

[Cole a transcrição ou informações que tiver]

Título: Pensamento Positivo
Estilo: Martelo Alagoano
Cantadores: Os Nonatos
```

A IA irá:

1. ✅ Criar arquivo em `public/data/cantorias/{id}.json`
2. ✅ Atualizar `public/data/index.json`
3. ✅ Atualizar metadados automaticamente
4. ✅ Criar transcrição estruturada em `repentes/`

**Sem esforço manual!** A arquitetura modular facilita muito o trabalho da IA.

---

## 🤝 Como Começar a Contribuir

### 1. Clone o Repositório

```bash
git clone http://github.com/lucis/vilanova.git
cd vilanova
```

### 2. Configure o Ambiente

**Pré-requisitos:**

- Node.js >=18.0.0
- npm >=8.0.0
- Deno >=2.0.0
- Editor com IA (recomendamos: Cursor, VS Code com Copilot, ou Windsurf)

**Instale as dependências:**

```bash
npm install
```

**Configure a aplicação:**

```bash
deco login
npm run configure
```

### 3. Rode o Projeto Localmente

```bash
npm run dev
```

Acesse: `http://localhost:8787`

### 4. **Explore as Issues — Sua Contribuição Começa Aqui!**

Temos várias issues abertas esperando contribuição:

👉 **[Ver Issues no GitHub](http://github.com/lucis/vilanova/issues)**

**Tipos de Issues:**

**🎨 Design & UX:**

- `design` — Melhorias visuais, identidade cultural
- `ux` — Experiência do usuário, acessibilidade
- **PRECISAMOS DE AJUDA!** Adoraríamos ter alguém pensando no design cultural do projeto

**💻 Desenvolvimento:**

- `good first issue` — Perfeitas para começar
- `backend` — Tools, workflows, database
- `frontend` — React, TailwindCSS, componentes

**📝 Conteúdo:**

- `content` — Adicionar cantorias, biografias, transcrições
- `documentation` — Melhorar docs, tutoriais

**🧠 IA & Análise:**

- `ai` — Melhorar prompts, análise de estrutura
- `transcription` — Transcrição e revisão

### 5. Faça Seu Primeiro Commit

1. Crie uma branch: `git checkout -b feat/sua-feature`
2. Faça suas alterações
3. Commit: `git commit -m "feat: descrição clara do que foi feito"`
4. Push: `git push origin feat/sua-feature`
5. Abra um Pull Request

---

## 🎨 Contribua com Design!

**Estamos precisando de ajuda com design!**

Se você tem experiência com:

- Design de interfaces culturais e memoráveis
- Ilustrações que fogem de clichês
- Tipografia e hierarquia visual
- Design system e paletas de cores
- UX para portais educativos

**Por favor, abra uma issue propondo melhorias!**

Ideias que adoraríamos ver:

- Ilustrações/SVGs minimalistas de violas e cantadores
- Padrões decorativos (azulejos, renda, xilogravura)
- Visualizações de dados (estrutura de versos, esquemas de rima)
- Melhoria da identidade visual
- Sistema de ícones customizado

👉 **[Abrir issue de design](http://github.com/lucis/vilanova/issues/new?labels=design)**

---

## 🎵 Cantorias no Acervo

Atualmente temos **4 cantorias transcritas**:

- **Galope à Beira Mar** - Os Nonatos (Serra Talhada, PE)
- **Galope à Beira Mar** - Sebastião da Silva e Ivanildo Vilanova (Caruaru, PE)
- **Oitavas** - Os Nonatos (São Lourenço da Mata, PE)
- **Martelo Alagoano** - Artista a identificar

📁 **Ver transcrições:** `[/repentes/](./repentes/)`  
📋 **Catálogo completo:** `[/repentes/cantorias.json](./repentes/cantorias.json)`

**Quer adicionar cantorias ao acervo?** [Veja como contribuir com conteúdo](#contribuindo-com-conteúdo)

---

## 📚 Estrutura do Projeto

```
vilanova/
├── src/                 # Astro + React (páginas, componentes, acervo em build)
├── public/data/         # JSON do acervo (cantorias, index, estilos)
├── repentes/            # Transcrições .txt (e ficheiros de áudio se houver)
├── entre-cordas-e-poesia/  # Websérie (transcrições .txt)
├── musicas/             # Ficheiros de músicas catalogadas
└── docs/                # Toda a documentação em Markdown
    ├── README.md        # Índice
    ├── plans/           # Planeamento e specs
    ├── estilos/         # Guias por estilo de repente
    ├── projeto/         # Data model, resumos, histórico
    └── …
```

---

## 💡 Formas de Contribuir

### 🎨 Design (PRECISAMOS DE AJUDA!)

**Estamos buscando pessoas para pensar o design cultural do Vilanova.**

Se você tem experiência com design, **por favor abra uma issue** propondo:

- Ilustrações/SVGs de violas, cantadores, elementos nordestinos
- Sistema de ícones customizado
- Padrões decorativos (azulejos, renda, xilogravura)
- Visualizações de estrutura poética
- Melhoria da identidade visual

**Nosso desafio:** Criar um design que seja culturalmente rico, respeitoso 
com a tradição, mas moderno e acessível. Fugir de clichês.

👉 **[Propor melhorias de design](http://github.com/lucis/vilanova/issues/new?labels=design)**

### 🎙️ Conteúdo

**Adicionar Cantorias:**

1. Edite `[/repentes/cantorias.json](./repentes/cantorias.json)`
2. Adicione metadados (cantadores, estilo, local, links YouTube/Spotify)
3. Se tiver transcrição, adicione arquivo `.txt` em `/repentes/`
4. Abra um PR

**Documentar Cantadores:**

- Biografias, trajetórias, estilos favoritos
- Fontes e referências bibliográficas
- Fotos (com permissão)

**Transcrever Repentes:**

- Use a ferramenta de backoffice (em desenvolvimento)
- Revise adaptações fonéticas importantes

### 💻 Código

**Áreas que precisam de ajuda:**

- Frontend (React + TailwindCSS + TanStack Router)
- Backend (Deco Tools e Workflows)
- Database (Drizzle ORM + SQLite)
- Análise de IA (prompts, validação de estrutura)

**Leia antes:**

- [Regras de Desenvolvimento](.cursorrules)
- [Planos de Páginas](./docs/plans/)
- [Índice da documentação](./docs/README.md)
- [Documentação Deco](https://docs.deco.page)

### 📖 Documentação

- Melhorar READMEs
- Escrever tutoriais sobre estilos
- Documentar o processo de catalogação
- Criar guias de contribuição

---

## 🧠 Usando IA para Contribuir

Este projeto é **IA-friendly**! O template Deco funciona muito bem com editores de IA.

**Recomendamos:**

- Cursor
- Windsurf
- VS Code + GitHub Copilot

**Como usar:**

1. Abra o projeto no seu editor com IA
2. Leia `.cursorrules` e a pasta `docs/plans/` (e `docs/projeto/DATA-MODEL.md` se precisar de detalhe)
3. A IA entenderá a arquitetura atual (Astro estático + JSON em `public/data/`)
4. Peça à IA para seguir os padrões do projeto
5. Use exemplos existentes como referência

---

## 🗄️ Banco de Dados

Por enquanto, usamos **JSON files como banco de dados**:

- **Cantorias:** `/repentes/cantorias.json`
- **Estilos:** Schema em `/server/schema.ts` (a ser populado)
- **Cantadores:** Schema definido, dados a adicionar

**Futuro:** Migraremos para SQLite (Cloudflare Durable Objects) quando tivermos volume suficiente.

---

## 🎯 Roadmap

### ✅ Fase 1: Fundação (Concluído)

- Estrutura básica do projeto
- Transcrição de 4 repentes
- Transcrição da websérie "Entre Cordas e Poesia"
- Design system e identidade visual

### 🚧 Fase 2: Landing Page e Conteúdo (Atual)

- Landing page completa com storytelling
- Página de homenagem à websérie
- Guia de estilos (3 estilos iniciais)
- Galeria básica de cantadores
- Página "Sobre" e "Contribuir"

### 📋 Fase 3: Acervo Interativo

- Sistema de busca no acervo
- Players de áudio sincronizados com transcrição
- Visualização de análise estrutural
- Perfis completos de cantadores

### 🔮 Fase 4: Ferramentas Públicas

- Editor de repentes com IA
- Calendário de cantorias
- Sistema de aprendizado gamificado
- API pública para pesquisadores

---

## 📜 Homenagem: Ivanildo Vilanova

O projeto **Vilanova** é uma homenagem ao poeta **Ivanildo Vilanova**, cantador de Caruaru (PE) que dedicou sua vida ao repente.

> "O cantador deve estar apto a cantar o sertão, a praia, a universidade, a linguagem do caboclo. A cantoria ela tem que viajar em todos os aspectos."  
> — Ivanildo Vilanova

**Por que Vilanova?**

Ivanildo representa a essência do que queremos preservar: um cantador que domina múltiplos estilos (Sextilha, Mourão Voltado), que se adaptou aos tempos modernos sem perder a tradição, e que sempre apoiou novas gerações.

Ele participa da websérie ["Entre Cordas e Poesia"](https://www.youtube.com/watch?v=ULbBggbGpB8&list=PLngiJpynwciFIwyrG_EiOW-sKm1tRXSGU), que inspirou a criação deste projeto.

**Saiba mais:** [Ivanildo Vilanova no Dicionário MPB](https://dicionariompb.com.br/artista/ivanildo-vilanova/)

---

## 📄 Licença

Este projeto é **open source** sob a [Licença MIT](./LICENSE).

Você é livre para:

- ✅ Usar comercialmente
- ✅ Modificar e distribuir
- ✅ Uso privado
- ✅ Contribuir de volta (incentivado!)

---

## 🙏 Agradecimentos

- **Ivanildo Vilanova** e todos os cantadores que mantêm viva essa tradição
- **Fabrício Vale e Joalisson Diniz** pela websérie "Entre Cordas e Poesia"
- **Lei Paulo Gustavo** pelo financiamento da websérie
- Todos os contribuidores deste projeto open source

---

## 🔗 Links Úteis

### Projeto:

- 🌐 **Site:** [localhost-aa14baa7.deco.host](https://localhost-aa14baa7.deco.host) (em desenvolvimento)
- 💻 **GitHub:** [github.com/lucis/vilanova](http://github.com/lucis/vilanova)
- 📋 **Issues:** [Veja como ajudar](http://github.com/lucis/vilanova/issues)
- 💬 **Discussões:** [GitHub Discussions](http://github.com/lucis/vilanova/discussions)

### Conteúdo:

- 📺 **Websérie:** [Entre Cordas e Poesia](https://www.youtube.com/watch?v=ULbBggbGpB8&list=PLngiJpynwciFIwyrG_EiOW-sKm1tRXSGU)
- 🎵 **Ivanildo Vilanova:** [Dicionário MPB](https://dicionariompb.com.br/artista/ivanildo-vilanova/)
- 📚 **Transcrições:** [/entre-cordas-e-poesia](./entre-cordas-e-poesia/)

### Tecnologia:

- 🔧 **Deco Platform:** [decocms.com](https://decocms.com)
- 📖 **Documentação:** [docs.deco.page](https://docs.deco.page)
- 🚀 **Deploy:** Baseado em Cloudflare Workers

---

**Feito com ❤️ para o Nordeste brasileiro**

*"O repente é puro, é santo, é divino. É uma janela para a alma, uma janela para o mundo da sabedoria."* — Raimundo Lira