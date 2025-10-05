# Landing Page - Vilanova (v2)
## Jornada Narrativa Mobile-First

## 🎯 Conceito da Nova Landing Page

**Storytelling Progressivo:** O usuário descobre a história do repente enquanto descobre o que o Vilanova oferece. Cada seção revela uma parte da história E uma funcionalidade do portal.

**Mobile-Friendly:** Design que funciona perfeitamente em telas pequenas, com stack vertical, ilustrações que funcionam em qualquer tamanho, CTAs destacados.

**Integração Natural:** Em vez de separar "o que é repente" de "o que o Vilanova faz", mesclamos ambos em uma jornada única.

---

## 🎨 Design System
_(Mantém o mesmo de 04-landing-page.md)_

**Paleta de Cores:**
- **Primárias:** Terracota #C84B31, Ocre #D49B54, Barro Claro #E8D4B0
- **Secundárias:** Azul Grego #2E5266, Verde Carnaúba #4A7C59, Creme Cerâmica #F5EBE0
- **Acentos:** Bronze #8B6F47, Vermelho Lampião #A63D40

**Tipografia:**
- **Títulos:** Playfair Display (peso 600-700)
- **UI/Labels:** Outfit (peso 500-600)
- **Corpo:** Lora (1.125rem, line-height 1.8)

**Espaçamento:** Sistema base 8px, max-width 1280px

---

## 📐 Estrutura da Página (Jornada Narrativa)

### 1. Hero - O Convite

**Layout Mobile:** Stack vertical, padding 20px
**Layout Desktop:** Grid 55/45

**Visual:**
- Background: Creme Cerâmica #F5EBE0
- Pattern sutil: Azulejos gregos + renda renascença (opacidade 3%)
- Imagem: `/public/fotos/lucis2244_dois_violeiros_num_pe_de_parede_cantoria_xilografia.png` 
  - Estilo xilogravura de dois violeiros em pé de parede
  - Posicionada à direita em desktop, acima do texto em mobile
  - Border-radius: 8px, box-shadow suave

**Conteúdo:**

```
Vilanova
```
_(Playfair Display, 3rem mobile / 3.5rem desktop, Azul Grego #2E5266, peso 700)_

```
Organizando o Repente Nordestino no Mundo Digital
```
_(Lora, 1.25rem mobile / 1.5rem desktop, Azul Grego 85%, line-height 1.6)_

```
Há gerações, cantadores de viola improvisam versos que guardam 
a memória e a sabedoria do Nordeste. São os "repórteres do sertão", 
professores que levaram conhecimento onde livro não chegava.

Mas esse acervo imenso está espalhado: em gravações de rádio antigas, 
fitas cassete esquecidas, vídeos perdidos no YouTube, na memória 
de mestres que não estarão aqui para sempre.

O Vilanova usa Inteligência Artificial para catalogar, transcrever 
e organizar esse patrimônio cultural disperso. Somos open source 
e precisamos de contribuidores.
```
_(Lora, 1.125rem mobile / 1.25rem desktop, line-height 1.8, Azul Grego 80%)_

**CTAs:**
```
[💻] Contribuir no GitHub
[📚] Ver Acervo
```
_(Botões lado a lado em desktop, stack em mobile)_
- Primário (GitHub): Gradiente Terracota → Ocre, texto branco, ícone GitHub
- Secundário (Acervo): Outline Azul Grego

**Scroll Indicator:**
_(Pequena animação sutil indicando "role para descobrir mais")_

---

### 2. O Que É Repente - A Magia do Improviso

**Background:** Gradiente suave Creme → Barro Claro

**Layout:** Stack vertical (mobile e desktop)

**Título:**
```
O Que É Repente?
```
_(Playfair Display, 2.25rem mobile / 2.75rem desktop, Terracota #C84B31, centralizado)_

**Subtítulo:**
```
Arte brasileira de improviso cantado, alternada por dois poetas 
ao som da viola, criando versos "de repente" em métrica e rima perfeitas.
```
_(Outfit, 1.125rem mobile / 1.25rem desktop, Azul Grego 70%, centralizado, padding 20px)_

**Características Fundamentais:**

_(Box destacado, background branco, border 3px Bronze, padding 32px mobile / 48px desktop)_

```
[SVG: Duas violas cruzadas] 
Dois Cantadores Alternados
O repente se dá sempre em dupla, cada poeta 
aguarda sua vez de improvisar a resposta.

[SVG: Viola nordestina] 
Viola de 10 Cordas
Instrumento característico na afinação nordestina. 
Quando é pandeiro, chama-se coco de embolada.

[SVG: Régua/métrica] 
Métrica Rigorosa
Predominam versos heptassílabos (7 sílabas) e 
decassílabos (10 sílabas). Contagem precisa obrigatória.

[SVG: Nó/entrelaçamento] 
Rima Perfeita
Não se aceita rima toante ou aproximada. 
O extremo rigor na rima é marca da cantoria.

[SVG: Raio] 
Improviso Imediato
Versos criados na hora, sem decorar. 
É isso que caracteriza o "repente".

[SVG: Mapa do Nordeste] 
Forte no Nordeste
Origem na divisa Paraíba-Pernambuco (Teixeira/Rio Pajeú) 
no século XIX. Presente em todo o Nordeste brasileiro.
```

**Citação em Destaque:**

_(Bloco com borda esquerda 4px Terracota, background Barro Claro, padding 24px, margin 32px 0)_

```
"Quem não calça as sandálias da humildade
torce o pé se correr desalta"

— Os Nonatos, em Oitava
```
_(Itálico, Lora, 1.125rem mobile / 1.375rem desktop, Azul Grego)_

**Contexto e História:**

```
A cantoria de viola tem raízes nos trovadores de Provença (França, 
século XI) e na trova medieval portuguesa. No Brasil, encontrou 
terreno fértil no sertão nordestino. Historicamente, situa-se a 
origem do repentista brasileiro na divisa entre Paraíba e Pernambuco, 
região de Teixeira e Rio Pajeú, no século XIX.

Por volta de 1830, surgem os primeiros cantadores de que se tem 
registro: Urgulino do Sabugi (considerado o primeiro), seu irmão 
Nicandro, ambos filhos de Agostinho da Costa, "o Pai da Poesia 
Popular". Seguiram-se Germano da Lagoa, Romano da Mãe D'Água, 
Silvino Pirauá Lima (criador da Sextilha).

O termo "repente" vem do improviso — criar versos "de repente", 
na hora. Como observa Câmara Cascudo, os cantadores são 
"representantes legítimos de todos os bardos menestréis". 

Distinções importantes:
• Repente ≠ Cordel: Cordel é poesia publicada em folhetos. 
  Repente é poesia oral improvisada.
• Repente ≠ Embolada: Quando o instrumento é pandeiro (não viola), 
  o gênero se chama coco de embolada, com ritmo mais rápido.
• Cantoria de viola: Dois cantadores com viola de 10 cordas na 
  afinação nordestina, alternando versos improvisados.

"No Nordeste, os jesuítas catequizavam por meio da poesia por 
ficar mais fácil de conservar a mensagem na memória, seguindo 
assim o estilo da Grécia Antiga."

A função social do cantador foi ampla: "repórter do sertão, 
professor itinerante, guardião da memória oral", como relata 
Leonardo Mota. Gerações aprenderam valores, ética, política 
através da cantoria — em tempos onde livro não chegava ao interior.

Hoje, conforme relatam os próprios cantadores em "Entre Cordas e 
Poesia", a tradição enfrenta: preconceito social persistente, 
falta de apoio público, diminuição das cantorias de pé de parede, 
e um acervo histórico disperso em risco de se perder.
```
_(Lora, 1rem mobile / 1.125rem desktop, line-height 1.8, Azul Grego 85%)_

**Referências Históricas:**
_(Texto pequeno, Outfit, 0.75rem, Azul Grego 50%, margin-top 16px)_
```
Fontes: Cordel nos Cocais (José Edimar Mendes Barbosa), 
Câmara Cascudo, Leonardo Mota, Atila de Almeida
```

**CTA em Destaque:**

_(Box gradiente Verde Carnaúba 10% → transparente, padding 24px, border-left 4px Verde Carnaúba)_

```
📚 Quer entender como funcionam esses estilos?

[→] Explorar Guia de Estilos
```
_(Link para `/estilos` — badge "EM BREVE" se não estiver pronto)_

---

### 3. Os Cantadores - Quem São Esses Mestres

**Background:** Branco

**Título:**
```
Os Cantadores: Transmissão Oral de Geração em Geração
```
_(Playfair Display, 2.25rem mobile / 2.75rem desktop, Azul Grego #2E5266, centralizado)_

**Introdução:**
```
O aprendizado da cantoria se dá tradicionalmente em família. 
Pai ensina filho, tio ensina sobrinho, avô passa para neto. 
É comum cantadores relatarem: "aprendi com meu pai", "meu avô 
era cantador", "herdei do meu tio".

A profissão historicamente enfrentou preconceito social. 
No início do século XX, cantador era descrito como "beberrão, 
valentão, conquistador, jogador, parasita". Famílias empatavam 
namoros com cantadores. Esse estigma persiste em algumas regiões.

Mulheres enfrentam obstáculos adicionais. Há registros de 
violeiras desde o século XIX (Vovó Pangula, Maria Tebana, 
Chica Barrosa), mas o meio sempre foi majoritariamente masculino. 
Cantadoras contemporâneas como Fabiane Ribeiro e Rafaela Pereira 
ainda relatam dificuldades específicas por serem mulheres.

Jovens que seguem a cantoria hoje são frequentemente chamados 
de "velhos" pelos pares, por escolherem uma arte associada a 
gerações anteriores. Mesmo assim, novos cantadores surgem.
```
_(Lora, 1rem mobile / 1.125rem desktop, line-height 1.8, centralizado, max-width 800px)_

**Grid de Cantadores Destacados:**

_(Grid: 1 coluna mobile, 2 colunas tablet, 3 colunas desktop)_

**Nota:** Fotos dos cantadores serão adicionadas posteriormente. Por ora, usamos SVGs de violas em cores distintas.

**Card 1:**
```
[Foto: Ivanildo Vilanova | ou SVG: Viola minimalista em Terracota]

Ivanildo Vilanova
"O Poeta do Improviso"

📍 Caruaru, PE
🎵 Mestre em Sextilha e Mourão Voltado

"O cantador deve estar apto a cantar o sertão, 
a praia, a universidade, a linguagem do caboclo."
```

**Card 2:**
```
[Foto: Fabiane Ribeiro | ou SVG: Viola minimalista em Verde Carnaúba]

Fabiane Ribeiro
"Referência para Jovens Cantadoras"

📍 Maranhão
🎺 Pioneira da nova geração

"Ela me incentivou e foi quem me deu coragem."
— Rafaela Pereira, sobre Fabiane
```

**Card 3:**
```
[Foto: José Jonas | ou SVG: Viola minimalista em Azul Grego]

José Jonas
"A Nova Semente"

📍 Adolescente, iniciando carreira
🌱 Representa a continuidade da tradição

"Fui chamado de velho várias vezes por seguir 
na cantoria. Mas continuo."
```

_(Cards com borda 2px Bronze, padding 24px, hover com elevação)_

**CTA:**

_(Background Creme Cerâmica, padding 32px, centralizado)_

```
Estamos catalogando a história de cada cantador.
Suas vozes. Seus repentes. Seu legado.

[→] Ver Galeria de Cantadores
```
_(Link para `/cantadores` — badge "EM CONSTRUÇÃO" se não estiver pronto)_

**Foto Histórica:**

_(Full-width, margin-top 32px)_
- Imagem: `/public/fotos/fotopasspretozefranpelejas.jpg`
- Alt: "Cantadores em peleja histórica"
- Caption: "Peleja histórica registrada — memória viva da cantoria nordestina"
- Border-radius: 8px, box-shadow suave
- Grayscale ou sépia filter

---

### 4. O Problema - História se Perdendo

**Background:** Gradiente Vermelho Lampião 5% → Terracota 3%

**Título:**
```
Desafios da Preservação do Repente
```
_(Playfair Display, 2.25rem mobile / 2.75rem desktop, Vermelho Lampião #A63D40, centralizado)_

**3 Cards de Problema:**

_(Stack vertical mobile, grid 3 colunas desktop)_

**Card 1:**
```
📼 Acervo Disperso

Repentes históricos estão espalhados: em canais 
de YouTube sem views, gravações de rádio antiga, 
fitas cassete nas casas dos cantadores.

Está tudo lá, mas ninguém consegue achar. 
Precisamos catalogar antes que se perca.
```

**Card 2:**
```
👴 Memória Oral em Risco

Ivanildo Vilanova tem 79 anos e continua cantando. 
Mas Minervina Ferreira, que acolhia jovens 
cantadoras, já partiu.

Cada mestre que se vai leva histórias, técnicas, 
repentes que nunca foram gravados.
```

**Card 3:**
```
📉 Falta de Valorização

"Se tiver que cortar tempo de um evento, cortam 
do cordel e da viola" — Anita Alves

Falta apoio público, falta inserir nas escolas. 
Jovens enfrentam preconceito. Cantorias de pé 
de parede estão diminuindo.
```

_(Cards com borda 2px Bronze, background Creme Cerâmica, padding 24px mobile / 32px desktop)_

**Citação de Mestre:**

_(Box destacado, background branco, border-left 4px Terracota, padding 32px, italic)_

```
"O repente é puro, é santo, é divino. É uma janela para a alma, 
uma janela para o mundo da sabedoria. A arte mais difícil do mundo."

— Raimundo Lira, cantador
```

---

### 5. A Solução - O Que o Vilanova Faz

**Background:** Gradiente Azul Grego 3% → Verde Carnaúba 2%

**Título:**
```
Como o Vilanova Organiza Esse Acervo
```
_(Playfair Display, 2.25rem mobile / 2.75rem desktop, Azul Grego #2E5266, centralizado)_

**Introdução:**
```
Usamos Inteligência Artificial para encontrar, catalogar e organizar 
o repente nordestino espalhado na internet e na memória oral.

Não estamos criando nada novo. Estamos organizando o que já existe.
```
_(Lora, 1.125rem, centralizado, max-width 800px)_

**O Que Fazemos (Timeline Vertical):**

_(Linha vertical em Bronze conectando os itens, icons grandes em cada item)_

**Item 1:**
```
🔍 Encontramos Repentes na Internet

Vasculhamos YouTube, Spotify, SoundCloud, arquivos 
públicos. Identificamos cantorias perdidas em canais 
com 50 views.

🚧 EM CONSTRUÇÃO
```

**Item 2:**
```
🎙️ Transcrevemos Automaticamente

MP3/WAV → OpenAI Whisper → Texto estruturado

Respeitamos que "o certo é o que o poeta pronuncia". 
Se canta "história" (e não "história"), mantemos.

✅ JÁ FUNCIONA (4 repentes transcritos)
```

**Item 3:**
```
📊 Analisamos a Estrutura

IA identifica automaticamente:
• Qual estilo (Galope, Martelo, Sextilha...)
• Métrica de cada verso (contagem de sílabas)
• Esquema de rimas
• Adaptações fonéticas intencionais

✅ JÁ FUNCIONA
```

**Item 4:**
```
👥 Catalogamos Cantadores

Perfis com biografia, trajetória, estilos favoritos.
Homenageamos desde veteranos até jovens de 15 anos.

Baseado em "Entre Cordas e Poesia" e contribuições 
da comunidade.

🚧 EM CONSTRUÇÃO
```

**Item 5:**
```
📚 Organizamos Tudo em Acervo Pesquisável

Busque por cantador, estilo, tema, local, época.
API aberta para pesquisadores.

🚧 EM CONSTRUÇÃO
```

**Item 5:**
```
✍️ Editor com IA (Futuro)

Crie seus próprios repentes com:
• Análise em tempo real
• Sugestões de rimas
• Validação de métrica
• Aprendizado gamificado

📋 PLANEJADO
```

**Item 6:**
```
📅 Calendário de Cantorias (Futuro)

"Clube do Repente" toda primeira quinta em Campina Grande
Festivais anuais: Caruaru, Serra Talhada

📋 PLANEJADO
```

---

### 6. O Que Já Temos - Resultados Concretos

**Background:** Creme Cerâmica #F5EBE0

**Título:**
```
O Que Já Conquistamos
```
_(Playfair Display, 2.25rem mobile / 2.75rem desktop, Verde Carnaúba #4A7C59, centralizado)_

**Estatísticas Destacadas:**

_(Grid: 2 colunas mobile, 4 colunas desktop, números grandes e impactantes)_

```
4+
Repentes Transcritos

3
Estilos Catalogados

11
Episódios de Websérie

100%
Open Source
```

_(Outfit, números em 3rem, labels em 1rem)_

**Exemplos Reais:**

_(Carousel ou stack de cards)_

**Card Exemplo 1:**
```
🌊 Galope à Beira Mar

Os Nonatos em Serra Talhada
10 versos, métrica perfeita, rimas AAAAABBCCM

"Quem não calça as sandálias da humildade
torce o pé se correr desalta"

[Ver Transcrição Completa]
```

**Card Exemplo 2:**
```
🔨 Martelo Alagoano

Artista a identificar
Mote triplo, métrica decassílaba

"Nos dez pés de martelo alagoano"

[Ver Transcrição Completa]
```

_(Cards com borda 3px Bronze, background branco, padding 24px)_

**CTA:**
```
[→] Ver Todo o Acervo
```
_(Link para `/acervo` quando disponível)_

---

### 7. Por Que "Vilanova"? - Homenagem a um Mestre

**Background:** Barro Claro #E8D4B0 com pattern de viola (SVG, opacidade 5%)

**Layout:** 60/40 desktop (texto à esquerda, foto à direita) | Stack mobile

**Título:**
```
Por Que Vilanova?
```
_(Playfair Display, 2rem mobile / 2.5rem desktop, Terracota #C84B31)_

**Conteúdo:**

```
Este projeto é uma homenagem em vida ao poeta Ivanildo Vilanova, 
cantador de Caruaru (Pernambuco) que dedicou sua vida ao repente.
```
_(Lora, 1.125rem, Azul Grego 85%, line-height 1.8)_

**Foto:**
_(À direita em desktop, acima do texto em mobile)_
- Imagem: `/public/fotos/De_repente,_um_repentista.jpg`
- Alt: "Violeiro em apresentação de repente"
- Border 3px Bronze, border-radius 8px
- Grayscale ou sépia filter suave (opcional)

**Citação:**

_(Box com borda esquerda 4px Terracota, background branco, padding 24px, italic)_

```
"O cantador deve estar apto a cantar o sertão, a praia, a universidade, 
a linguagem do caboclo. A cantoria ela tem que viajar em todos os 
aspectos."

— Ivanildo Vilanova
```
_(Lora, 1.125rem, Azul Grego)_

**Texto Complementar:**

```
Ivanildo representa a essência do que queremos preservar: um cantador 
que domina múltiplos estilos (Sextilha, Mourão Voltado), que se adaptou 
aos tempos modernos sem perder a tradição, e que sempre apoiou novas 
gerações.

Ele participa da websérie "Entre Cordas e Poesia", que inspirou a 
criação deste projeto.
```
_(Lora, 1rem, Azul Grego 80%, line-height 1.8)_

**Link:**
```
[→] Saiba mais sobre Ivanildo Vilanova
```
_(Link para: https://dicionariompb.com.br/artista/ivanildo-vilanova/)_
_(Target: _blank, rel: noopener noreferrer)_

**Spacing:** 60px após seção

---

### 8. Ouça as Cantorias - Acervo Disponível

**Background:** Branco

**Título:**
```
Ouça os Mestres
```
_(Playfair Display, 2.25rem mobile / 2.75rem desktop, Azul Grego #2E5266, centralizado)_

**Subtítulo:**
```
Cantorias transcritas e catalogadas. Disponíveis no YouTube e Spotify 
para você descobrir a beleza do improviso poético.
```
_(Lora, 1rem mobile / 1.125rem desktop, Azul Grego 70%, centralizado, max-width 800px)_

**Grid de Cantorias:**

_(Grid: 1 coluna mobile, 2 colunas desktop, cards com bordas Bronze)_

**Card 1:**
```
🌊 Galope à Beira Mar

Os Nonatos
Serra Talhada, PE

"Quem não calça as sandálias da humildade
torce o pé se correr desalta"

⏱️ 3:45 min
📝 Transcrição disponível

[▶ YouTube] [♫ Spotify] [📄 Ver Transcrição]
```

**Card 2:**
```
🌊 Galope à Beira Mar

Sebastião da Silva e Ivanildo Vilanova
Caruaru, PE

Duelo histórico entre dois dos maiores 
mestres do repente nordestino.

📝 Transcrição disponível

[▶ YouTube] [♫ Spotify] [📄 Ver Transcrição]
```

**Card 3:**
```
📖 Oitavas

Os Nonatos
São Lourenço da Mata, PE

Oitavas memoráveis com versos de sabedoria 
e filosofia sertaneja.

📝 Transcrição disponível

[▶ YouTube] [♫ Spotify] [📄 Ver Transcrição]
```

**Card 4:**
```
🔨 Martelo Alagoano

Artista a identificar

Exemplo clássico do mote triplo 
"Nos dez pés de martelo alagoano"

📝 Transcrição disponível

[▶ YouTube] [♫ Spotify] [📄 Ver Transcrição]
```

_(Cards com borda 2px Bronze, padding 24px, hover com elevação)_
_(Botões: YouTube (Vermelho), Spotify (Verde), Transcrição (Terracota outline))_

**CTA:**

_(Box gradiente Creme → Barro Claro, padding 32px, centralizado)_

```
Temos 4 cantorias totalmente transcritas e analisadas.
Em breve: dezenas de cantorias históricas catalogadas.

[→] Ver Todo o Acervo
```
_(Badge "EM BREVE" se página do acervo não estiver pronta)_

**Nota Técnica:**

_(Texto pequeno, Outfit, 0.875rem, Azul Grego 60%, centralizado)_
```
💡 Cada transcrição foi feita com IA (OpenAI Whisper) e revisada 
manualmente para respeitar adaptações fonéticas intencionais.
```

**Spacing:** 80px após seção

---

### 10. Entre Cordas e Poesia - A Websérie que Inspirou Tudo

**Background:** Gradiente Azul Grego → Verde Carnaúba (escuro)

**Layout:** 50/50 desktop (player à esquerda, texto à direita) | Stack mobile

**Conteúdo em Texto Branco:**

**Título:**
```
"Entre Cordas e Poesia"
A Websérie Documental que Conta a História Completa
```
_(Playfair Display, 2rem mobile / 2.5rem desktop, branco, peso 700)_

**Player do YouTube:**

_(Embed responsivo 16:9, border 3px Bronze, border-radius 8px)_
- Thumbnail: Episódio 1
- URL: https://www.youtube.com/watch?v=ULbBggbGpB8

**Descrição:**

```
11 episódios documentando a cantoria de viola através da voz 
dos próprios mestres.

Featuring:
→ Ivanildo Vilanova (que dá nome a este projeto)
→ Raimundo Lira, Zé Viola, Antônio Silva
→ Fabiane Ribeiro, Rafaela Pereira, Minervina Ferreira
→ José Jonas, Fátima Dantas, e mais

Direção: Fabrício Vale e Joalisson Diniz
Financiamento: Lei Paulo Gustavo

Esta websérie foi o combustível que inspirou o Vilanova. 
Ela mostra o problema da preservação — e nós criamos a solução.

Transcrevemos todos os 11 episódios usando IA para tornar 
o conteúdo pesquisável e acessível.
```
_(Lora, 1rem mobile / 1.125rem desktop, branco 95%, line-height 1.8)_

**Badge:**
_(Background Verde Carnaúba, padding 8px 16px, border-radius 20px)_
"Lei Paulo Gustavo"

**CTAs:**

```
[▶] Assistir Playlist Completa
[📄] Ver Transcrições dos 11 Episódios
```

_(Botões brancos com texto Azul Grego)_

- Assistir → Link para YouTube playlist
- Transcrições → Link para `/entre-cordas-e-poesia`

---

### 11. Estilos de Repente - A Diversidade Poética

**Background:** Branco

**Título:**
```
Cada Estilo, Uma Lei Poética Diferente
```
_(Playfair Display, 2.25rem mobile / 2.75rem desktop, Terracota #C84B31, centralizado)_

**Introdução:**
```
Galope à Beira Mar sempre termina com "Nos dez de galope na beira do mar".
Martelo Alagoano repete três vezes "Nos dez pés de martelo alagoano".
Sextilha tem 6 versos de 7 sílabas.

Cada estilo tem suas próprias regras de métrica, rima e estrutura.
```
_(Lora, 1rem mobile / 1.125rem desktop, centralizado, max-width 800px)_

**Grid de Estilos:**

_(Grid: 1 coluna mobile, 2 colunas tablet, 3 colunas desktop)_

**Card Galope:**
```
🌊 Galope à Beira Mar

📊 Avançado
📝 10 versos
📐 10 sílabas
🎵 Mote fixo no final

"Nos dez de galope na beira do mar"

Esquema: AAAAABBCCM

[Ver Detalhes]
```

**Card Sextilha:**
```
📖 Sextilha

📊 Intermediário
📝 6 versos
📐 7 sílabas
🎵 Sem mote fixo

O estilo mais versátil e popular

Esquema: ABCBDB

[Ver Detalhes]
```

**Card Martelo:**
```
🔨 Martelo Alagoano

📊 Avançado
📝 10 versos
📐 10 sílabas
🎵 Refrão triplo

"Nos dez pés de martelo alagoano"

Esquema: AAAAAAAAAB (+ mote 3x)

[Ver Detalhes]
```

_(Cards com borda 2px Bronze, padding 24px, hover com elevação)_

**CTA:**

_(Box destacado, gradiente Ocre 10%, padding 32px)_

```
Explore todos os estilos com exemplos reais, 
análises de estrutura e tutoriais interativos.

[→] Ver Guia Completo de Estilos
```
_(Link para `/estilos`)_

**Criadores Históricos dos Estilos:**

_(Box informativo, background Barro Claro, padding 24px, border-left 3px Terracota)_

```
Cada estilo tem um criador histórico documentado:

• Sextilha: Silvino Pirauá Lima (PB)
• Galope à Beira Mar: Zé Pretinho (Morada Nova, CE)
• Martelo Agalopado: Silvino Pirauá Lima (PB)
• Remo da Canoa: Ivanildo Vilanova (PE) - adaptação recente do coco
• Martelo: Jaime de Martelo (diplomata francês, séc. XVII)

"Os menestréis do passado ampliaram consideravelmente o acervo 
do repente com a criação de novos estilos."
```

_(Texto pequeno, Outfit, 0.75rem, Azul Grego 60%)_
```
Fonte: Cordel nos Cocais (José Edimar Mendes Barbosa, 2011)
```

---

### 12. Para Quem é o Vilanova? - Públicos

**Background:** Gradiente Barro Claro → Creme

**Título:**
```
Para Quem é Esse Projeto?
```
_(Playfair Display, 2.25rem mobile / 2.75rem desktop, Azul Grego, centralizado)_

**Grid de Públicos:**

_(Grid: 1 coluna mobile, 2 colunas desktop)_

**Card 1:**
```
🎓 Para Estudantes e Aprendizes

• Tutoriais interativos sobre cada estilo
• Exemplos reais analisados
• Editor com feedback de IA (em breve)
• Aprenda com os mestres
```

**Card 2:**
```
🔬 Para Pesquisadores e Acadêmicos

• Acervo digital completo
• Transcrições precisas
• Dados estruturados
• API pública (futura)
```

**Card 3:**
```
🎵 Para Cantadores Profissionais

• Preserve seu legado
• Compartilhe suas obras
• Alcance novos públicos
• Inspire novas gerações
```

**Card 4:**
```
❤️ Para Apreciadores da Cultura

• Ouça repentes históricos
• Conheça os mestres
• Descubra novos talentos
• Apoie a preservação cultural
```

_(Cards com borda 2px Bronze, padding 32px, background branco)_

---

### 13. Open Source - Projeto Comunitário

**Background:** Azul Grego #2E5266 (escuro)

**Conteúdo em branco:**

**Título:**
```
Um Projeto Aberto e Nunca Finalizado
```
_(Playfair Display, 2.25rem mobile / 2.75rem desktop, branco, centralizado)_

**Descrição:**
```
O Vilanova não é uma empresa. É uma comunidade.

Todo o código é open source (MIT License).
Todos os dados são públicos.
Todas as decisões são transparentes.

Qualquer pessoa pode:
```
_(Lora, 1.125rem, branco 95%, centralizado, max-width 800px)_

**Grid de Contribuições:**

_(Grid: 2 colunas mobile, 4 colunas desktop)_

```
📝 Compartilhar Gravações
Tem repentes em MP3?
Compartilhe conosco

💻 Contribuir com Código
Desenvolvedores bem-vindos
GitHub Issues abertas

🎨 Ajudar com Design
UX/UI, ilustrações
Visualizações de dados

📚 Documentar História
Biografias de cantadores
Contexto de eventos
```

_(Cards com background semi-transparente branco 10%, padding 24px)_

**Estatísticas GitHub:**

_(Inline badges)_
```
⭐ X stars   🍴 Y forks   📝 Z issues abertas
```

**CTA Principal:**

_(Botão grande, background branco, texto Azul Grego, padding 20px 48px)_
```
[GitHub Icon] Contribuir no GitHub
```
_(Link: https://github.com/lucis/vilanova)_

**Linha Secundária:**
```
Projeto 100% open source · MIT License · vilanova.deco.page
```
_(Outfit, 0.875rem, branco 70%)_

---

### 14. CTA Final - Junte-se a Nós

**Background:** Gradiente Terracota → Vermelho Lampião

**Padding:** 80px vertical mobile / 120px desktop

**Título:**
```
Faça Parte Dessa História
```
_(Playfair Display, 2.5rem mobile / 3rem desktop, branco, centralizado, peso 700)_

**Texto:**
```
A cantoria nordestina é patrimônio cultural do Brasil.
Mas está em risco.

Com tecnologia, comunidade e muito respeito pela tradição,
podemos preservar essa história para as próximas gerações.

O que você vai fazer hoje?
```
_(Lora, 1.125rem mobile / 1.25rem desktop, branco 95%, centralizado, max-width 900px, line-height 1.8)_

**CTAs Finais:**

_(Grid: 1 coluna mobile, 3 colunas desktop, gap 16px)_

```
[🎵] Explorar Acervo
Veja repentes transcritos

[📖] Guia de Estilos
Aprenda cada gênero

[💻] GitHub
Contribua com código
```

_(Botões grandes, background branco, texto Terracota, padding 16px 32px)_

---

### Footer

**Background:** Azul Grego #2E5266 (escuro)
**Texto:** Creme Cerâmica #F5EBE0
**Padding:** 48px vertical

**Layout:** 4 colunas desktop, stack mobile

**Coluna 1: Vilanova**
```
Vilanova

Um projeto aberto de preservação da 
cantoria nordestina através de IA.

De Campina Grande para todo o Nordeste.
```

**Coluna 2: Projeto**
```
→ GitHub
→ Roadmap
→ Contribuir
→ Sobre
```

**Coluna 3: Conteúdo**
```
→ Acervo (em breve)
→ Estilos
→ Cantadores (em breve)
→ Entre Cordas e Poesia
```

**Coluna 4: Comunidade**
```
→ GitHub Issues
→ Discussões
→ Contato
```

**Copyright:**
_(Centralizado, border-top 1px Bronze, padding-top 24px)_
```
© 2025 Vilanova · Open Source (MIT) · vilanova.deco.page

Feito com ❤️ para o Nordeste brasileiro
```

**Badges:**
- "Open Source" (Verde Carnaúba)
- "Cloudflare Workers"
- "Powered by Deco"

---

## 📱 Responsividade Detalhada

### Mobile (< 768px)
- Todas as sections em stack vertical
- Hero: Imagem acima do texto
- Cards: 1 coluna
- CTAs: Full-width
- Padding reduzido: 20px lateral
- Fontes reduzidas: H1 3rem, H2 2.25rem, body 1rem
- Scroll suave entre seções

### Tablet (768px - 1024px)
- Alguns grids em 2 colunas (cantadores, públicos)
- Hero: Pode manter 55/45
- Padding: 40px lateral
- Fontes intermediárias

### Desktop (> 1024px)
- Full layout conforme especificado
- Grids em 3-4 colunas onde indicado
- Max-width 1280px com margens laterais
- Parallax suave em algumas seções
- Animações de scroll

---

## 🎯 Princípios da Nova Landing

### 1. Storytelling Progressivo
Cada seção revela:
- Uma parte da história do repente
- Uma funcionalidade do Vilanova
- Um problema e sua solução
- Um convite à ação

### 2. Honestidade Total
- O que está pronto: destaque com "✅ JÁ FUNCIONA"
- O que está em andamento: "🚧 EM CONSTRUÇÃO"
- O que está planejado: "📋 PLANEJADO"
- Badges "EM BREVE" em CTAs para páginas não prontas

### 3. Mobile-First
- Toda seção funciona perfeitamente em tela pequena
- Imagens responsivas
- CTAs acessíveis com um toque
- Texto legível sem zoom

### 4. Visual Único
- Foge de clichês de IA/tech
- Paleta terrosa e cultural
- Tipografia com personalidade
- Ilustrações/fotos que remetem à cultura nordestina

### 5. Conversão Clara
Cada seção tem pelo menos um CTA:
- Primário: Leva para funcionalidade principal
- Secundário: Leva para GitHub/contribuição
- Terciário: Leva para conteúdo educativo

---

## 🔍 SEO e Meta Tags

```html
<title>Vilanova - Preservação Digital da Cantoria Nordestina com IA</title>

<meta name="description" content="Projeto open source que usa IA para transcrever, catalogar e preservar repentes nordestinos. Acervo digital de cantadores, estilos e cantorias históricas.">

<meta name="keywords" content="repente, cantoria de viola, nordeste, IA, preservação cultural, Ivanildo Vilanova, cordel, open source">

<meta property="og:title" content="Vilanova - A História Viva da Cantoria Nordestina">
<meta property="og:description" content="Preservando o patrimônio cultural do repente com tecnologia">
<meta property="og:image" content="[URL da imagem de cantadores]">
<meta property="og:type" content="website">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Vilanova - Preservação Digital da Cantoria">
<meta name="twitter:description" content="Projeto open source de catalogação de repentes com IA">
<meta name="twitter:image" content="[URL da imagem]">
```

---

## ✅ Checklist de Implementação

### Conteúdo:
- [ ] Textos finais revisados
- [ ] Fotos/ilustrações de cantadores
- [ ] Embed do YouTube configurado
- [ ] Links para páginas secundárias (alguns com badge "EM BREVE")
- [ ] Metadados SEO completos

### Design:
- [ ] Paleta de cores aplicada consistentemente
- [ ] Tipografia (Playfair, Lora, Outfit) carregada
- [ ] Espaçamento seguindo sistema base 8px
- [ ] Componentes mobile-friendly testados
- [ ] Hover states em todos os CTAs

### Funcionalidade:
- [ ] Scroll suave entre seções
- [ ] CTAs funcionais (mesmo que alguns levem para "em breve")
- [ ] Embeds do YouTube com lazy load
- [ ] Badges de status ("EM BREVE", "EM CONSTRUÇÃO") funcionais
- [ ] Links externos abrindo em nova aba

### Performance:
- [ ] Imagens otimizadas e responsivas
- [ ] Lazy loading de imagens below the fold
- [ ] YouTube embed com privacy-enhanced mode
- [ ] CSS minificado
- [ ] Fontes com font-display: swap

### Acessibilidade:
- [ ] Alto contraste em todos os textos
- [ ] Focus states claros
- [ ] ARIA labels em elementos interativos
- [ ] Keyboard navigation testada
- [ ] Screen reader friendly

---

Esta landing page conta uma história envolvente que mistura a riqueza cultural do repente com a solução tecnológica do Vilanova, guiando o usuário em uma jornada que termina com um convite claro à ação.
