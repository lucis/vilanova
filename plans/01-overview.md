# Vilanova - Visão Geral do Projeto

## 🎯 Um Projeto Aberto e Nunca Finalizado

O **Vilanova** nasceu em **Campina Grande, Paraíba**, mas é feito para todo o **Nordeste brasileiro**. Somos um **projeto aberto e comunitário**, nunca finalizado, em constante evolução com a participação da comunidade.

Nossa missão é usar **Inteligência Artificial** para:
- **Catalogação** da história da cantoria
- **Digitalização** automática de repentes
- **Organização** estruturada de cantadores, estilos e eventos
- **Preservação** do patrimônio cultural nordestino

**✨ Todos estão convidados a contribuir!**

**🔗 Deploy:** [vilanova.deco.page](https://vilanova.deco.page)

## 🎭 O que é Repente?

O repente é uma das manifestações artísticas mais importantes do Brasil, sendo uma tradição oral passada de geração em geração há séculos. Chegou ao Nordeste através da imigração europeia nos últimos 500 anos e se transformou em uma expressão cultural única.

**Características do Repente:**
- Arte improvisada na hora, durante "cantorias de viola"
- Dois cantadores duelam poeticamente
- Transmite educação, cultura e valores através de versos
- Exige genialidade, memória e domínio de técnicas poéticas complexas
- Cada estilo tem regras rígidas de métrica, rima e estrutura

### 📺 Saiba Mais: Websérie Documentário

Para entender a profundidade e beleza dessa arte, assista à websérie **"Entre Cordas e Poesia: A Saga da Cantoria de Viola no Nordeste Brasileiro"**.

**Sobre a Websérie:**
- Série de entrevistas com mestres cantadores
- Participações de: Ivanildo Vilanova, Zé Viola, Raimundo Lira, Antônio Silva, Rafaela Pereira, José Jonas e Fátima Dantas
- Direção: Fabrício Vale e Joalisson Diniz
- Financiamento: Lei Paulo Gustavo
- **Link:** [Assista no YouTube](https://www.youtube.com/watch?v=ULbBggbGpB8&list=PLngiJpynwciFIwyrG_EiOW-sKm1tRXSGU)

Esta websérie é uma introdução perfeita ao universo da cantoria de viola, com depoimentos de cantadores que preservam essa tradição viva.

## 🏗️ Arquitetura do Vilanova

### 1. Catalogação Digital
Preservação e organização de:
- **Cantadores**: Perfis dos artistas do repente
- **Repentes**: Sessões/performances completas
- **Transcrições**: Texto dos versos cantados
- **Poesias Individuais**: Obras isoladas catalogadas
- **Estilos**: Modalidades de repente com suas regras

### 2. Editor Inteligente de Poesia
Sistema de criação assistida por IA que:
- Identifica automaticamente sílabas e métrica
- Sugere palavras que respeitam rima e métrica
- Gera continuações poéticas respeitando o estilo escolhido
- Valida se o verso respeita as regras do estilo
- Ensina as regras através da prática

### 3. Motor de IA Poética
Baseado em schemas de dados que representam:
- Estrutura de cada estilo (versos, sílabas, rimas)
- Regras de validação
- Padrões de geração
- Critérios de avaliação

## 🎨 Funcionalidades Principais

### Para Estudantes
- **Modo Aprendizado**: Tutorial interativo sobre cada estilo
- **Escrita Assistida**: IA ajuda a completar versos respeitando as regras
- **Validação em Tempo Real**: Feedback imediato sobre métrica e rima
- **Sugestões Inteligentes**: Palavras que rimam e cabem na métrica

### Para Pesquisadores
- **Arquivo Digital**: Acervo organizado de repentes transcritos
- **Busca Avançada**: Por cantador, estilo, tema, época
- **Análise de Padrões**: Estatísticas sobre vocabulário, temas, técnicas
- **API de Acesso**: Dados estruturados para pesquisa acadêmica

### Para Apreciadores
- **Biblioteca de Repentes**: Ouça e leia repentes históricos
- **Perfis de Cantadores**: Conheça os mestres da arte
- **Guia de Estilos**: Aprenda sobre cada modalidade
- **Comunidade**: Compartilhe suas criações

## 📊 Estilos de Repente

### Classificação por Estrutura

#### 1. Estilos com Mote Fixo
**Exemplo: Galope à Beira Mar**
- 10 versos por estrofe
- Último verso é sempre o mote fixo
- Tema: autoestima, desafio entre cantadores
- Métrica: decassílabos
- Rima: AAAAAAAAAB (9 versos rimando entre si + mote)

**Exemplo: Mourão Voltado**
- 10 versos por estrofe
- Dois últimos versos são o mote
- Rima: AAAAAAABBB

#### 2. Estilos Livres
**Exemplo: Sextilha**
- 6 versos por estrofe
- Sem mote fixo
- Tema livre
- Métrica: setissílabos
- Rima: ABCBDB

**Exemplo: Quadrão**
- 7 versos por estrofe
- Métrica: setissílabos
- Rima: ABABCCB

## 🔄 Fluxo de Trabalho do Usuário

### Modo Criação
1. **Escolher Estilo**: Galope à Beira Mar, Sextilha, etc.
2. **Ver Template**: Sistema mostra estrutura visual
3. **Escrever Livremente**: Digite seus versos
4. **Assistência da IA**:
   - Conta sílabas automaticamente
   - Destaca problemas de métrica
   - Sugere palavras que rimam
   - Gera próximos versos como sugestão
5. **Validação**: Sistema confirma se respeita as regras
6. **Publicação**: Salva no perfil do usuário

### Modo Estudo
1. **Explorar Acervo**: Navegue por repentes catalogados
2. **Ler Transcrição**: Veja o texto completo
3. **Análise Estrutural**: Sistema destaca métrica e rimas
4. **Praticar**: Tente completar versos de repentes famosos

## 🛠️ Stack Tecnológico

### Backend (MCP Server)
- Cloudflare Workers + Deco Runtime
- Drizzle ORM + SQLite (Durable Objects)
- Tools para análise poética com IA
- Workflows para geração e validação

### Frontend
- React + TanStack Router
- Tailwind CSS + shadcn/ui
- Editor de texto com destaque de métrica
- Interface visual de estrutura poética

### IA
- `AI_GENERATE_OBJECT` para análise e geração estruturada
- Schemas Zod representando estruturas poéticas
- Validação de métrica e rima
- Sugestão de palavras contextuais

## 📈 Roadmap de Desenvolvimento

### Fase 1: Fundação (MVP)
- [ ] Modelagem de dados (estilos, versos, rimas)
- [ ] Banco de dados (cantadores, repentes, poesias)
- [ ] Landing page explicativa
- [ ] Cadastro de estilos básicos (Galope, Sextilha)

### Fase 2: Editor Básico
- [ ] Interface de escrita livre
- [ ] Contador de sílabas com IA
- [ ] Validação de rima
- [ ] Sugestão de palavras

### Fase 3: Geração com IA
- [ ] Geração de versos completos
- [ ] Continuação inteligente de poesias
- [ ] Múltiplas sugestões
- [ ] Avaliação de qualidade

### Fase 4: Catalogação
- [ ] CRUD de cantadores
- [ ] CRUD de repentes
- [ ] Upload de transcrições
- [ ] Busca e filtros

### Fase 5: Comunidade
- [ ] Perfis de usuários
- [ ] Compartilhamento de criações
- [ ] Sistema de avaliação
- [ ] Desafios e concursos

## 🎯 Métricas de Sucesso

- **Preservação**: Quantidade de repentes catalogados
- **Educação**: Usuários ativos aprendendo
- **Criação**: Poesias geradas que respeitam as regras
- **Engajamento**: Tempo gasto praticando e criando
- **Qualidade**: Avaliação da comunidade sobre gerações da IA

## 🌟 Diferenciais

1. **Projeto Aberto e Comunitário** - Nunca finalizado, sempre crescendo
2. **Nascido em Campina Grande** - Feito para todo o Nordeste
3. **IA para Catalogação** - Transcrição e organização automática
4. **Respeito às Adaptações** - IA entende as intenções fonéticas dos poetas
5. **Dados Estruturados** - API aberta para pesquisadores
6. **Educação Acessível** - Ferramentas para aprender e criar
7. **Calendário de Cantorias** - Eventos recorrentes e únicos
8. **Backoffice com IA** - Upload de MP3 → Transcrição automática → Catalogação

## 🤝 Natureza Comunitária

**Vilanova é de todos e para todos:**
- Código open source no GitHub
- Contribuições bem-vindas de qualquer pessoa
- Dados abertos para pesquisa acadêmica
- Plataforma em constante evolução
- Feedback da comunidade guia o desenvolvimento

**Exemplo:** O "Clube do Repente" em Campina Grande acontece toda primeira quinta-feira do mês. O Vilanova permite cadastrar eventos recorrentes assim, mantendo a comunidade conectada.

## 🗺️ De Campina Grande para o Nordeste

Começamos em **Campina Grande, PB**, terra de grandes cantadores, mas o Vilanova representa **todo o Nordeste**:
- Pernambuco (Caruaru, Recife, Serra Talhada)
- Paraíba (Campina Grande, João Pessoa, Patos)
- Ceará (Fortaleza, Juazeiro do Norte, Sobral)
- Rio Grande do Norte (Natal, Mossoró, Caicó)
- Alagoas, Sergipe, Bahia e Maranhão

**Cada região tem suas variações, seus mestres, seus eventos - e o Vilanova quer documentar todos.**

---

**Vilanova** - Um projeto aberto de estudo e exaltação da cultura do Repente, começando em Campina Grande, feito para todo o Nordeste, construído com a comunidade. 🎵
