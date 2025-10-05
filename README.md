# Vilanova

> A História Viva da Cantoria Nordestina, Preservada com Tecnologia

**Vilanova** é um projeto open source de preservação digital da cantoria de viola nordestina. Usamos Inteligência Artificial para transcrever, catalogar e organizar repentes históricos antes que essa memória cultural se perca.

O nome é uma **homenagem em vida** ao poeta **Ivanildo Vilanova**, mestre da cantoria que participa da websérie documental ["Entre Cordas e Poesia"](https://www.youtube.com/watch?v=ULbBggbGpB8&list=PLngiJpynwciFIwyrG_EiOW-sKm1tRXSGU).

---

## 🎯 O Que Fazemos

- **📝 Transcrição Automática**: MP3/WAV → OpenAI Whisper → Texto estruturado
- **📊 Análise de Estrutura**: IA identifica estilos, métrica, rimas e figuras de linguagem
- **👥 Catalogação de Cantadores**: Perfis completos com biografias e repertórios
- **📚 Acervo Pesquisável**: Busca por cantador, estilo, tema, local e época
- **🎓 Material Educativo**: Guias de estilos e tutoriais interativos

---

## 🚀 Como Começar a Contribuir

### 1. Clone o Repositório

```bash
git clone https://github.com/lucis/vilanova.git
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

### 4. Explore as Issues

Temos várias issues abertas esperando contribuição:

👉 **[Ver Issues no GitHub](https://github.com/lucis/vilanova/issues)**

**Boas issues para começar:**
- Issues com label `good first issue`
- Issues com label `documentation`
- Issues com label `content` (adicionar cantorias, biografias)

### 5. Faça Seu Primeiro Commit

1. Crie uma branch: `git checkout -b feat/sua-feature`
2. Faça suas alterações
3. Commit: `git commit -m "feat: descrição clara do que foi feito"`
4. Push: `git push origin feat/sua-feature`
5. Abra um Pull Request

---

## 🎵 Cantorias no Acervo

Atualmente temos **4 cantorias transcritas**:

- **Galope à Beira Mar** - Os Nonatos (Serra Talhada, PE)
- **Galope à Beira Mar** - Sebastião da Silva e Ivanildo Vilanova (Caruaru, PE)
- **Oitavas** - Os Nonatos (São Lourenço da Mata, PE)
- **Martelo Alagoano** - Artista a identificar

📁 **Ver transcrições:** [`/repentes/`](./repentes/)  
📋 **Catálogo completo:** [`/repentes/cantorias.json`](./repentes/cantorias.json)

**Quer adicionar cantorias ao acervo?** [Veja como contribuir com conteúdo](#contribuindo-com-conteúdo)

---

## 📚 Estrutura do Projeto

```
vilanova/
├── server/              # Backend (Cloudflare Workers + Deco)
│   ├── main.ts         # Entry point
│   ├── schema.ts       # Database schema (Drizzle ORM)
│   ├── tools/          # Domain-organized tools
│   └── workflows/      # Multi-step workflows
├── view/               # Frontend (React + TailwindCSS)
│   └── src/
│       ├── routes/     # TanStack Router pages
│       ├── components/ # UI components
│       └── hooks/      # TanStack Query hooks
├── repentes/           # Transcrições e dados
│   ├── *.txt          # Transcrições individuais
│   └── cantorias.json # Catálogo de cantorias
├── entre-cordas-e-poesia/  # Websérie documental
│   ├── episodio-*.txt      # Transcrições dos 11 episódios
│   └── README.md           # Sobre a série
└── plans/              # Documentação de planejamento
    ├── 01-overview.md
    ├── 04-landing-page-v2.md
    ├── 06-entre-cordas.md
    └── 07-site.md
```

---

## 💡 Formas de Contribuir

### 🎙️ Contribuindo com Conteúdo

**Adicionar Cantorias:**
1. Edite [`/repentes/cantorias.json`](./repentes/cantorias.json)
2. Adicione metadados (cantadores, estilo, local, links)
3. Se tiver transcrição, adicione arquivo `.txt` em `/repentes/`
4. Abra um PR com descrição detalhada

**Documentar Cantadores:**
1. Pesquise biografia, trajetória, estilos favoritos
2. Adicione informações estruturadas
3. Inclua fontes e referências

**Transcrever Repentes:**
1. Use a ferramenta de backoffice (em breve)
2. Ou faça upload de MP3 e deixe a IA transcrever
3. Revise e corrija adaptações fonéticas importantes

### 💻 Contribuindo com Código

**Áreas que precisam de ajuda:**
- Frontend (React + TailwindCSS + TanStack)
- Backend tools e workflows (Mastra + Deco)
- Database schema (Drizzle ORM + SQLite)
- Análise de IA (prompts, validação)

**Leia antes:**
- [Regras de Desenvolvimento](.cursorrules-vilanova) (IA guidelines)
- [Planos de Páginas](./plans/) (specs completas)

### 🎨 Contribuindo com Design

**Precisamos de:**
- Ilustrações culturais (evitar clichês de IA)
- Ícones para estilos de repente
- Melhorias de UX/UI
- Visualizações de dados (métrica, rimas)

### 📖 Contribuindo com Documentação

- Melhorar READMEs
- Escrever tutoriais
- Documentar processos
- Traduzir conteúdo

---

## 🧠 Usando IA para Contribuir

Este projeto é **IA-friendly**! Recomendamos usar editores com IA:

**Cursor / Windsurf / VS Code + Copilot:**
- Leia os arquivos em `/.cursorrules-vilanova` e `/plans/`
- Use o contexto do projeto para gerar código consistente
- A IA entende nossa arquitetura (Deco + Mastra + TanStack)

**Dicas:**
- Antes de codificar, leia os plans relevantes
- Use os exemplos existentes como referência
- Peça à IA para seguir os padrões do projeto

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
- [x] Estrutura básica do projeto
- [x] Transcrição de 4 repentes
- [x] Transcrição da websérie "Entre Cordas e Poesia"
- [x] Design system e identidade visual

### 🚧 Fase 2: Landing Page e Conteúdo (Atual)
- [ ] Landing page completa com storytelling
- [ ] Página de homenagem à websérie
- [ ] Guia de estilos (3 estilos iniciais)
- [ ] Galeria básica de cantadores
- [ ] Página "Sobre" e "Contribuir"

### 📋 Fase 3: Acervo Interativo
- [ ] Sistema de busca no acervo
- [ ] Players de áudio sincronizados com transcrição
- [ ] Visualização de análise estrutural
- [ ] Perfis completos de cantadores

### 🔮 Fase 4: Ferramentas Públicas
- [ ] Editor de repentes com IA
- [ ] Calendário de cantorias
- [ ] Sistema de aprendizado gamificado
- [ ] API pública para pesquisadores

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

- 🌐 **Site:** [vilanova.deco.page](https://vilanova.deco.page) (em breve)
- 💻 **GitHub:** [github.com/lucis/vilanova](https://github.com/lucis/vilanova)
- 📺 **Websérie:** [Entre Cordas e Poesia](https://www.youtube.com/watch?v=ULbBggbGpB8&list=PLngiJpynwciFIwyrG_EiOW-sKm1tRXSGU)
- 📖 **Issues:** [Veja como ajudar](https://github.com/lucis/vilanova/issues)

---

**Feito com ❤️ para o Nordeste brasileiro**

_"O repente é puro, é santo, é divino. É uma janela para a alma, uma janela para o mundo da sabedoria."_ — Raimundo Lira