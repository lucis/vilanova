# Página: Entre Cordas e Poesia

## 🎯 Objetivo

Criar uma página de homenagem à websérie documental "Entre Cordas e Poesia: A Saga da Cantoria de Viola no Nordeste Brasileiro", servindo como:
- Referência educacional sobre repente
- Catálogo navegável dos 11 episódios
- Portal para transcrições completas
- Material de apoio para o acervo do Vilanova

## 🎨 Design System

Seguir paleta e tipografia da landing page:
- **Primárias**: Terracota #C84B31, Ocre #D49B54, Barro Claro #E8D4B0
- **Secundárias**: Azul Grego #2E5266, Verde Carnaúba #4A7C59
- **Tipografia**: Playfair Display (títulos), Lora (corpo), Outfit (UI)

## 📐 Estrutura da Página

### Hero Section

**Layout:** Full-width com overlay de texto

**Background:**
- Thumbnail do episódio 1 com filtro escurecido (opacidade 40%)
- Gradiente sutil: transparente → Azul Grego #2E5266
- Pattern de cordas de viola (SVG, opacidade 3%)

**Conteúdo:**
```
Entre Cordas e Poesia
A Saga da Cantoria de Viola no Nordeste Brasileiro
```
_(Playfair Display, 3.5rem mobile / 4.5rem desktop, branco, peso 700)_

**Subtítulo:**
```
Uma websérie documental financiada pela Lei Paulo Gustavo que 
preserva a voz dos mestres que mantêm viva essa tradição milenar.

11 episódios · Direção: Fabrício Vale e Joalisson Diniz
```
_(Lora, 1.25rem, branco 90%, line-height 1.8)_

**Badge:**
_(Background Verde Carnaúba #4A7C59, texto branco, padding 8px 16px, border-radius 24px)_
"Lei Paulo Gustavo"

**CTA:**
```
[▶] Assistir Episódio 1
```
_(Botão grande Terracota, scroll smooth até a lista de episódios)_

**Spacing:** 120px vertical padding

---

### Seção: Sobre a Websérie

**Layout:** Grid 60/40 (desktop) | Stack (mobile)
- 60%: Texto
- 40%: Imagem decorativa (viola, cantadores)

**Título:**
```
Uma Janela para a Alma do Nordeste
```
_(Playfair Display, 2.5rem, Azul Grego #2E5266)_

**Texto:**
_(Lora, 1.125rem, line-height 1.8)_
```
"Entre Cordas e Poesia" é mais que um documentário. É um registro histórico 
essencial da cantoria de viola nordestina, capturado diretamente da voz dos 
mestres que vivem e respiram essa arte.

Ao longo de 11 episódios, a série desvenda:

→ As técnicas de improviso que tornam o repente único no mundo
→ A matemática poética por trás de cada verso
→ Os desafios e preconceitos enfrentados pelos cantadores
→ O papel fundamental das mulheres nessa tradição
→ A história e o futuro dessa manifestação cultural

Produzida com recursos da Lei Paulo Gustavo e dirigida por Fabrício Vale 
e Joalisson Diniz, a websérie apresenta entrevistas com cantadores de 
diferentes gerações, de Ivanildo Vilanova (que dá nome a este projeto) 
a jovens promessas como José Jonas.

Este material é referência obrigatória para entender o repente — e é 
exatamente esse tipo de conhecimento que o Portal Vilanova busca 
catalogar e preservar para as próximas gerações.
```

**Background:** Creme Cerâmica #F5EBE0

**Spacing:** 80px após seção

---

### Seção: Os Mestres Participantes

**Título:**
```
Quem Conta Essas Histórias
```
_(Playfair Display, 2.5rem, Terracota #C84B31, centralizado)_

**Layout:** Grid responsivo de cards (3 colunas desktop, 2 tablet, 1 mobile)

**Cards de Cantadores:**

_(Card com borda 2px Bronze #8B6F47, background branco, padding 24px, hover com elevação)_

```
🎵 Ivanildo Vilanova
"O Poeta do Improviso"

Cantador experiente de Caruaru, PE. 
Mestre em Sextilha e Mourão Voltado.
Episódios: 1, 7
```

```
🎵 Raimundo Lira
"O Sábio da Viola"

Senhor de terceira idade, poeta repentista.
"O repente é puro, é santo, é divino."
Episódios: 1
```

```
🎵 Zé Viola
"A Tradição Viva"

Herdeiro de uma família de cantadores.
"A viola é uma marca na minha vida."
Episódios: 1
```

```
🎵 Antônio Silva (Toninho)
"O Contemporâneo"

Repentista, músico e produtor.
Sobre os desafios da profissão.
Episódios: 1
```

```
🎺 Fabiane Ribeiro
"A Pioneira da Nova Geração"

Jovem cantadora do Maranhão.
Referência para novas gerações de mulheres.
Episódios: 9
```

```
🎺 Rafaela Pereira
"A Corajosa"

Poeta repentista, superando barreiras.
"Mulheres podem estar onde quiserem."
Episódios: 1, 9
```

```
🎺 Minervina Ferreira
"A Matriarca" (in memoriam)

Acolhia e incentivava jovens cantadoras.
Legado de apoio às mulheres no repente.
Episódios: 9
```

```
🌱 José Jonas
"A Nova Semente"

Adolescente iniciando na carreira.
Representa o futuro da cantoria.
Episódios: 1, 9, 11
```

```
🌱 Fátima Dantas
"A Jovem Poeta"

Poeta e cordelista em torno dos 20 anos.
"O repente mudou minha visão de mundo."
Episódios: 1, 9
```

**CTA ao final:**
```
[→] Ver Galeria Completa de Cantadores
```
_(Link para futura página /cantadores)_
_(Badge "Em breve" se não estiver pronta)_

**Background:** Gradiente suave Creme → Barro Claro

**Spacing:** 80px após seção

---

### Seção: Os 11 Episódios

**Título:**
```
A Jornada Completa
```
_(Playfair Display, 2.5rem, Azul Grego #2E5266, centralizado)_

**Subtítulo:**
```
Cada episódio desvenda um aspecto essencial da cantoria.
Assista em ordem para uma compreensão completa.
```
_(Outfit, 1.125rem, Azul Grego 70%, centralizado)_

**Layout:** Stack vertical de cards episódicos

---

#### Card de Episódio (Padrão)

**Estrutura Mobile First:**

```
[Número do Episódio] + Badge de Categoria
Título do Episódio

[Embed YouTube responsivo 16:9]

Duração: XX min

Descrição (2-3 linhas)

[Botão] Ver Transcrição Completa
[Botão] Tópicos Abordados ▼ (collapsible)
```

**Especificações:**

**Container:**
- Border: 3px solid Bronze #8B6F47
- Background: Branco
- Padding: 32px (desktop) / 20px (mobile)
- Margin bottom: 48px
- Border-radius: 8px
- Box-shadow: 4px 4px 0 rgba(198, 75, 49, 0.1)

**Número + Badge:**
```css
.episode-header {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.episode-number {
  font-family: 'Outfit', sans-serif;
  font-size: 0.875rem;
  font-weight: 700;
  color: #2E5266; /* Azul Grego */
  letter-spacing: 1px;
}

.episode-badge {
  font-size: 0.75rem;
  padding: 4px 12px;
  border-radius: 12px;
  font-weight: 600;
  /* Cores variam por categoria */
}
```

**Badges por Categoria:**
- 🎓 Fundamentos (Ocre #D49B54)
- 🎵 Técnica (Verde Carnaúba #4A7C59)
- 📖 História (Azul Grego #2E5266)
- 🎺 Contemporâneo (Terracota #C84B31)
- 🔮 Futuro (Verde Carnaúba claro)

**Título do Episódio:**
- Playfair Display, 1.75rem (mobile) / 2rem (desktop)
- Color: Azul Grego #2E5266
- Margin: 8px 0 24px

**YouTube Embed:**
```html
<div class="video-container">
  <iframe 
    src="https://www.youtube.com/embed/[VIDEO_ID]" 
    frameborder="0" 
    allowfullscreen>
  </iframe>
</div>
```

```css
.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  border-radius: 8px;
  margin: 24px 0;
  border: 3px solid #8B6F47; /* Bronze */
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

**Duração:**
- Outfit, 0.875rem, Azul Grego 60%
- Icon: ⏱️

**Descrição:**
- Lora, 1rem, line-height 1.6
- Max 3 linhas
- Color: Azul Grego 80%

**Botões:**

```css
.btn-transcript {
  background: linear-gradient(135deg, #C84B31, #D49B54);
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
  transition: all 300ms;
}

.btn-topics {
  background: transparent;
  border: 2px solid #2E5266;
  color: #2E5266;
  padding: 12px 24px;
  border-radius: 6px;
  font-family: 'Outfit', sans-serif;
  font-weight: 600;
}
```

**Tópicos Abordados (Collapsible):**

Quando expandido, mostra lista de bullets:
- Background: Barro Claro #E8D4B0
- Padding: 20px
- Border-left: 4px solid Terracota
- Lora, 1rem
- Animação smooth: max-height transition

---

### Episódios Detalhados

#### Episódio 1 - Para Valorizar a Cantoria
```
EPISÓDIO 1 🎓 Fundamentos

Para Valorizar a Cantoria

[YouTube Embed: ULbBggbGpB8]

⏱️ Duração: ~15 min

O episódio de abertura apresenta o coração da cantoria através da 
voz de mestres como Raimundo Lira, Zé Viola e Ivanildo Vilanova. 
Eles falam sobre o orgulho da profissão, os preconceitos enfrentados 
e o que significa ser um cantador de viola.

[Ver Transcrição Completa] [Tópicos Abordados ▼]

Tópicos:
• O que é repente e por que é a "maior arte do mundo"
• O cantador como biblioteca viva do Nordeste
• Preconceitos históricos e atuais
• Mulheres no repente: Rafaela Pereira
• Jovens cantadores: José Jonas e Fátima Dantas
• O papel cultural da cantoria na educação sertaneja
```

---

#### Episódio 2 - Sílabas Tônicas e Rimas
```
EPISÓDIO 2 🎓 Fundamentos

Sílabas Tônicas e Rimas

[YouTube Embed: 8OyCHRKxzSc]

⏱️ Duração: ~12 min

Episódio didático que desvenda a base fundamental da poesia de 
repente. Com explicações visuais em quadro branco, narrado por 
Fabrício e Sara (com audiodescrição para acessibilidade).

[Ver Transcrição Completa] [Tópicos Abordados ▼]

Tópicos:
• Como identificar a sílaba tônica de uma palavra
• O que realmente é uma rima (da vogal tônica em diante)
• A importância da oralidade sobre a escrita
• Exemplos: "história" rimando com "chora"
• Patativa do Açaré e A Morte de Nanã
• "O certo é o que o poeta pronuncia"
```

---

#### Episódio 3 - Métrica
```
EPISÓDIO 3 🎵 Técnica

Métrica

[YouTube Embed: 1Gphjb66_LA]

⏱️ Duração: ~11 min

A matemática por trás da poesia. Como os cantadores contam sílabas 
poéticas e mantêm a métrica perfeita, improvisando em segundos. 
Episódio técnico com exemplos práticos.

[Ver Transcrição Completa] [Tópicos Abordados ▼]

Tópicos:
• Contagem de sílabas poéticas (assopradas até a tônica final)
• Acomodação de versos: imprensar e esticar palavras
• Exemplos práticos: "minha alma" com 2, 3 ou 4 sílabas
• Caetano Veloso: "Onde pisas o chão, minha alma salta"
• Rapa: "Minha alma está armada"
• A liberdade do poeta na pronúncia
```

---

#### Episódio 4 - Estrofes e Gêneros
```
EPISÓDIO 4 🎵 Técnica

Estrofes e Gêneros

[YouTube Embed: Ty7UEIye-QA]

⏱️ Duração: ~XX min

Exploração da diversidade de formas poéticas do repente. Cada 
estilo tem suas próprias leis: Galope, Martelo, Sextilha, Mourão...

[Ver Transcrição Completa] [Tópicos Abordados ▼]

Tópicos:
• Principais gêneros da cantoria
• Galope à Beira Mar: 10 versos, mote fixo
• Martelo Alagoano: refrão triplo
• Sextilha: o mais versátil
• Quando usar cada estilo
```

---

#### Episódio 5 - A Peleja na Cantoria
```
EPISÓDIO 5 🎺 Contemporâneo

A Peleja na Cantoria

[YouTube Embed: ADytJaJSYTU]

⏱️ Duração: ~XX min

O duelo poético que define a cantoria. Como funciona a competição, 
as estratégias, a ética do improviso e os grandes embates históricos.

[Ver Transcrição Completa] [Tópicos Abordados ▼]

Tópicos:
• O que é uma peleja de repente
• Regras implícitas do duelo
• Técnicas de desafio
• Grandes pelejas históricas
• A diferença entre competição e colaboração
```

---

#### Episódio 6 - A Música do Repente
```
EPISÓDIO 6 🎵 Técnica

A Música do Repente

[YouTube Embed: rTkMk5cw7hc]

⏱️ Duração: ~XX min

A dimensão musical da cantoria. Como a viola é afinada, os ritmos, 
as melodias e a relação entre música e poesia no improviso.

[Ver Transcrição Completa] [Tópicos Abordados ▼]

Tópicos:
• Afinação da viola de repente
• Melodias tradicionais por estilo
• Ritmo e cadência
• A relação entre métrica e música
• Diferenças regionais
```

---

#### Episódio 7 - O Repente nos Sertões de Então
```
EPISÓDIO 7 📖 História

O Repente nos Sertões de Então

[YouTube Embed: 1Sa2dfnwJNs]

⏱️ Duração: ~XX min

Viagem ao passado: como era a cantoria nos sertões antigos, o papel 
social do cantador, as feiras, os encontros nas casas de fazenda.

[Ver Transcrição Completa] [Tópicos Abordados ▼]

Tópicos:
• Origens históricas da cantoria
• O cantador como comunicador do sertão
• Feiras e encontros tradicionais
• A função social do repente
• Transformações ao longo do tempo
```

---

#### Episódio 8 - Influências Afro e Indígena
```
EPISÓDIO 8 📖 História

Influências Afro e Indígena

[YouTube Embed: 9ZchytBjNgE]

⏱️ Duração: ~XX min

As raízes culturais do repente. Contribuições africanas e indígenas 
para essa tradição que, embora de origem europeia, se tornou 
profundamente nordestina.

[Ver Transcrição Completa] [Tópicos Abordados ▼]

Tópicos:
• Chegada da tradição europeia ao Brasil
• Incorporação de elementos africanos
• Influências indígenas
• A síntese cultural nordestina
• Ritmos e instrumentos
```

---

#### Episódio 9 - Mulheres no Repente
```
EPISÓDIO 9 🎺 Contemporâneo

Mulheres no Repente

[YouTube Embed: GlhAQnTlA7w]

⏱️ Duração: ~XX min

As cantadoras que conquistaram seu espaço numa tradição 
historicamente masculina. Desafios, conquistas e a nova geração 
de mulheres no repente.

[Ver Transcrição Completa] [Tópicos Abordados ▼]

Tópicos:
• Mulheres violeiras do século XIX: Vovó Pangula, Maria Tebana
• Mocinha da Passira: começou aos 11 anos
• Minervina Ferreira: a matriarca que acolhia jovens (in memoriam)
• Fabiane Ribeiro: referência da nova geração
• Rafaela Pereira: superando preconceitos
• Desafios específicos enfrentados pelas mulheres
• O acolhimento entre cantadoras
```

---

#### Episódio 10 - A Literatura do Repente
```
EPISÓDIO 10 📖 História

A Literatura do Repente

[YouTube Embed: z6Bfr4KipFQ]

⏱️ Duração: ~XX min

O reconhecimento do repente como literatura. A sofisticação técnica, 
o valor poético e a relação com a academia.

[Ver Transcrição Completa] [Tópicos Abordados ▼]

Tópicos:
• Repente como literatura oral
• Complexidade técnica e valor poético
• Relação com a academia
• Pesquisadores e estudiosos
• Preservação do patrimônio literário
```

---

#### Episódio 11 - O Repente nos Sertões do Amanhã
```
EPISÓDIO 11 🔮 Futuro

O Repente nos Sertões do Amanhã

[YouTube Embed: sd5yNkXyHV4]

⏱️ Duração: ~XX min

O futuro da cantoria. Novas gerações, desafios contemporâneos, 
tecnologia e preservação. Como garantir que essa tradição continue 
viva nos sertões do amanhã?

[Ver Transcrição Completa] [Tópicos Abordados ▼]

Tópicos:
• José Jonas e a nova geração
• Desafios da profissionalização hoje
• Tecnologia e repente
• Preservação digital (o Vilanova!)
• Visão dos jovens sobre o futuro
• Como manter a tradição viva
```

---

### Seção: As Transcrições

**Layout:** Box destacado, full-width

**Background:** Gradiente Terracota #C84B31 → Vermelho Lampião #A63D40

**Conteúdo:**
_(Padding: 80px vertical, texto branco, centralizado)_

**Título:**
```
Todo o Conhecimento, Preservado
```
_(Playfair Display, 2.5rem, branco, peso 700)_

**Descrição:**
_(Lora, 1.25rem, branco 95%, max-width 800px, centralizado)_
```
Cada episódio foi transcrito automaticamente usando IA (OpenAI Whisper 
via SearchAPI) para tornar o conteúdo acessível, pesquisável e 
preservado digitalmente.

As transcrições incluem:
→ Texto completo de todas as falas
→ Audiodescrição das cenas (nos episódios técnicos)
→ Identificação dos participantes
→ Formato txt para fácil leitura e análise

Este é o tipo de trabalho de preservação que o Portal Vilanova 
está fazendo: transformar áudio e vídeo em dados estruturados 
que podem ser catalogados, pesquisados e mantidos vivos para 
sempre.
```

**CTAs (lado a lado):**
```
[📄] Ver Todas as Transcrições
[💻] Explorar no GitHub
```
_(Botões brancos com texto Terracota, padding 16px 32px)_

---

### Seção: Como Esta Websérie Inspira o Vilanova

**Título:**
```
Da Inspiração à Ação
```
_(Playfair Display, 2.5rem, Azul Grego #2E5266, centralizado)_

**Layout:** 3 cards horizontais

**Card 1:**
```
🎯 O Problema que Vimos

A websérie mostra cantadores de todas as idades falando sobre 
os desafios da profissão e o risco de perder esse patrimônio 
cultural. Raimundo Lira, Zé Viola, Ivanildo — suas histórias 
merecem ser preservadas digitalmente.
```

**Card 2:**
```
💡 A Solução que Criamos

O Portal Vilanova aplica tecnologia (IA, transcrição, catalogação) 
para fazer exatamente o que esta websérie fez: preservar conhecimento. 
Só que de forma escalável, aberta e comunitária.
```

**Card 3:**
```
🤝 O Convite que Fazemos

Você pode contribuir. Compartilhe gravações, transcreva repentes, 
documente cantadores. Juntos, podemos criar o maior acervo digital 
de cantoria nordestina do mundo.
```

**CTA Central:**
```
[→] Conhecer o Portal Vilanova
```
_(Link para a home / seção específica)_

**Background:** Creme Cerâmica #F5EBE0

**Spacing:** 80px após seção

---

### Seção: Créditos

**Título:**
```
Créditos da Websérie
```
_(Playfair Display, 2rem, Azul Grego #2E5266)_

**Layout:** Lista simples, 2 colunas (desktop) / 1 coluna (mobile)

```
Direção: Fabrício Vale, Joalisson Diniz
Narração: Fabrício Vale, Sara (audiodescrição)
Financiamento: Lei Paulo Gustavo

Participações Especiais:
• Raimundo Lira (Poeta Repentista)
• Zé Viola (Poeta Repentista)  
• Ivanildo Vilanova (Poeta Repentista)
• Antônio Silva - Toninho (Repentista, Músico, Produtor)
• Fabiane Ribeiro (Cantadora)
• Rafaela Pereira (Poeta Repentista)
• Minervina Ferreira (in memoriam)
• José Jonas (Jovem Repentista)
• Fátima Dantas (Poeta e Cordelista)
• Anita Alves (Poeta e Cordelista)
• Rita de Cássia (Pesquisadora)
• E muitos outros mestres e apreciadores da cantoria

Playlist Completa: YouTube
```

_(Lora, 1rem, line-height 1.8)_

---

### CTA Final

**Background:** Gradiente Azul Grego #2E5266 → Verde Carnaúba #4A7C59

**Padding:** 80px vertical

**Título:**
```
Continue Explorando
```
_(Playfair Display, 2.5rem, branco, centralizado)_

**Grid de Links (2 colunas mobile, 4 desktop):**

```
📚 Acervo de Repentes
Explore repentes catalogados
[Em breve]

🎵 Galeria de Cantadores
Conheça os mestres
[Em breve]

📖 Guia de Estilos
Aprenda cada gênero
[Ver Guia]

🏠 Portal Vilanova
Voltar para a home
[Explorar]
```

_(Cards com background semi-transparente branco, hover com elevação)_

---

## 📱 Responsividade

### Mobile (< 768px)
- Hero com padding reduzido (60px vertical)
- Cards de cantadores em 1 coluna
- Vídeos em container flexível 16:9
- Botões full-width
- Texto reduzido: H1 3rem, H2 2rem, body 1rem

### Tablet (768px - 1024px)
- Hero com 80px vertical
- Cards de cantadores em 2 colunas
- Botões com largura natural

### Desktop (> 1024px)
- Full layout conforme especificado
- Cards de cantadores em 3 colunas
- Vídeos com max-width para não ficarem enormes

---

## 🔍 SEO e Meta Tags

```html
<title>Entre Cordas e Poesia - Documentário sobre Repente | Vilanova</title>

<meta name="description" content="Websérie documental sobre a cantoria de viola nordestina. 11 episódios com mestres como Ivanildo Vilanova, Raimundo Lira e Fabiane Ribeiro. Financiada pela Lei Paulo Gustavo.">

<meta property="og:title" content="Entre Cordas e Poesia - A Saga da Cantoria">
<meta property="og:description" content="Documentário completo sobre repente nordestino com transcrições e análises">
<meta property="og:image" content="[URL da thumbnail do ep 1]">
<meta property="og:type" content="website">

<meta name="keywords" content="repente, cantoria de viola, documentário, nordeste, Ivanildo Vilanova, Lei Paulo Gustavo">
```

---

## ⚙️ Funcionalidades Técnicas

### Transcrições
- Link para cada arquivo .txt no GitHub
- Preview com primeiros 200 caracteres
- Download button
- Opção de busca dentro da transcrição (futuro)

### YouTube Embeds
- Lazy loading (performance)
- Privacy-enhanced mode
- Playlist automática (próximo episódio)

### Navegação
- Anchor links para cada episódio
- Botão "Próximo Episódio" ao fim de cada card
- Progress indicator (scrollspy) mostrando qual episódio está visível

### Acessibilidade
- Alto contraste em todos os textos
- Foco claro em elementos interativos
- ARIA labels em vídeos e botões
- Keyboard navigation
- Transcrições servem como closed captions alternativas

---

## 🎯 Objetivos de Conversão

1. **Engajamento:** Usuário assiste pelo menos 1 episódio completo
2. **Aprofundamento:** Usuário lê pelo menos 1 transcrição
3. **Conversão Principal:** Usuário clica em "Conhecer o Portal Vilanova"
4. **Conversão Secundária:** Usuário acessa GitHub das transcrições
5. **Social Sharing:** Botões de compartilhamento (futuro)

---

Esta página transforma a websérie em um recurso educacional permanente, 
conectando o trabalho de documentação feito pelos diretores com a missão 
de preservação digital do Portal Vilanova.
