# Implementação da Landing Page - Vilanova

## ✅ O Que Foi Implementado

### 1. Meta Tags Atualizadas (`index.html`)
- ✅ Título: "Vilanova - Preservação Digital da Cantoria Nordestina"
- ✅ Descrição atualizada com foco em "organização do acervo disperso"
- ✅ Keywords: Ivanildo Vilanova, Teixeira, Rio Pajeú, preservação cultural
- ✅ Open Graph com imagem da xilogravura
- ✅ Theme color: Azul Grego #2E5266
- ✅ Lang: pt-BR

### 2. Google Fonts Adicionadas (`index.html`)
- ✅ Playfair Display (títulos): weights 600, 700
- ✅ Lora (corpo): regular, medium, semibold, itálico
- ✅ Outfit (UI): weights 500, 600, 700
- ✅ Preconnect para performance

### 3. Estilos CSS (`view/src/styles.css`)
- ✅ Body font: Lora (serif)
- ✅ `.font-serif`: Playfair Display
- ✅ `.font-sans`: Outfit

### 4. Landing Page Implementada (`view/src/routes/home.tsx`)

#### Seções Implementadas:

**✅ Seção 1: Hero**
- Layout grid 55/45 (desktop) / stack (mobile)
- Imagem: xilogravura dos dois violeiros
- CTA primário: "Contribuir no GitHub" (com ícone)
- CTA secundário: "Ver Acervo"
- Scroll indicator animado
- Texto revisado: tom sério, informativo, Câmara Cascudo

**✅ Seção 2: O Que É Repente**
- Definição enciclopédica
- 6 características fundamentais em grid 2x3:
  - Dois cantadores alternados (ícone 🎸)
  - Viola de 10 cordas (ícone 🎵)
  - Métrica rigorosa (ícone 📏)
  - Rima perfeita (ícone 🔗)
  - Improviso imediato (ícone ⚡)
  - Forte no Nordeste (ícone 🗺️)
- Citação: "Quem não calça as sandálias da humildade..."
- **Contexto histórico completo:**
  - Origem: Provença → Portugal → Brasil
  - 1830: Urgulino do Sabugi (primeiro cantador)
  - Agostinho da Costa ("Pai da Poesia Popular")
  - Distinções: Repente ≠ Cordel ≠ Embolada
  - Citação dos jesuítas e catequese
  - Função social do cantador
- **Referências**: Câmara Cascudo, Leonardo Mota, José Edimar
- CTA: "Explorar Guia de Estilos" (badge EM BREVE)

**✅ Seção 3: Os Cantadores**
- Título: "Transmissão Oral de Geração em Geração"
- Contexto sobre aprendizado familiar
- Histórico de preconceito
- Mulheres na cantoria (séc. XIX até hoje)
- Desafios dos jovens
- 3 cards de cantadores:
  - Ivanildo Vilanova (Terracota)
  - Fabiane Ribeiro (Verde Carnaúba)
  - José Jonas (Azul Grego)
- Foto histórica: peleja (com efeito grayscale hover)
- CTA: "Ver Galeria de Cantadores" (EM CONSTRUÇÃO)

**✅ Seção 4: Desafios da Preservação**
- 3 cards de problema:
  - Acervo disperso (YouTube, fitas, rádio)
  - Memória oral em risco (Ivanildo 79 anos, Minervina †)
  - Falta de valorização (citação Anita Alves)
- Citação grande: Raimundo Lira sobre a arte

**✅ Seção 5: Como o Vilanova Organiza**
- Timeline vertical com 6 itens:
  1. Encontramos repentes (🚧 EM CONSTRUÇÃO)
  2. Transcrevemos automaticamente (✅ JÁ FUNCIONA)
  3. Analisamos estrutura (✅ JÁ FUNCIONA)
  4. Catalogamos cantadores (🚧 EM CONSTRUÇÃO)
  5. Organizamos em acervo (🚧 EM CONSTRUÇÃO)
  6. Editor com IA (📋 PLANEJADO)
- Status badges coloridos

**✅ Seção 6: O Que Já Temos**
- 4 estatísticas grandes (2x4 grid):
  - 4+ Repentes
  - 3 Estilos
  - 11 Episódios
  - 100% Open Source
- 2 cards de exemplos:
  - Galope à Beira Mar (Os Nonatos)
  - Martelo Alagoano
- CTA: "Ver Todo o Acervo" (EM BREVE)

**✅ Seção 7: Por Que "Vilanova"?**
- Grid 60/40
- Texto sobre homenagem a Ivanildo
- Citação dele
- Menção ao estilo "Remo da Canoa" que ele criou
- Foto: De_repente_um_repentista.jpg (sépia)
- Link externo: Dicionário MPB

**✅ Footer**
- 4 colunas: Vilanova, Projeto, Conteúdo, Comunidade
- Links para GitHub
- Copyright e badges (Open Source, Cloudflare, Deco)
- "Feito com ❤️ para o Nordeste"

---

## 🎨 Design Implementado

### Paleta de Cores Aplicada:
- ✅ Terracota #C84B31 (CTAs, destaques)
- ✅ Ocre #D49B54 (badges, acentos)
- ✅ Barro Claro #E8D4B0 (backgrounds)
- ✅ Azul Grego #2E5266 (texto principal)
- ✅ Verde Carnaúba #4A7C59 (sucesso)
- ✅ Creme Cerâmica #F5EBE0 (background principal)
- ✅ Bronze #8B6F47 (bordas)
- ✅ Vermelho Lampião #A63D40 (alertas)

### Tipografia:
- ✅ H1/H2: Playfair Display (serif, elegante)
- ✅ Body: Lora (serif, legível)
- ✅ UI/Labels: Outfit (sans-serif)

### Componentes:
- ✅ Buttons com gradiente Terracota → Ocre
- ✅ Cards com borda Bronze e hover elevation
- ✅ Citações com borda lateral Terracota
- ✅ Badges de status coloridos
- ✅ Scroll indicator animado

### Responsividade:
- ✅ Mobile-first approach
- ✅ Grids responsivos (1 col mobile → 2-4 desktop)
- ✅ Stack vertical em mobile
- ✅ Padding adaptativo
- ✅ Fontes escaláveis

---

## 📋 Seções NÃO Implementadas (Futuras)

### Ainda Faltam:
- [ ] Seção 8: "Ouça as Cantorias" (cards com YouTube/Spotify)
- [ ] Seção 9: "Entre Cordas e Poesia" (embed do YouTube)
- [ ] Seção 10: "Estilos de Repente" (grid de estilos)
- [ ] Seção 11: "Para Quem é o Vilanova?" (4 públicos)
- [ ] Seção 12: "Open Source" (contribuições)
- [ ] Seção 13: CTA Final grande

**Prioridade para próxima iteração:**
1. Seção das Cantorias (com YouTube embeds)
2. Seção da Websérie
3. Seção de Estilos

---

## 🖼️ Fotos Utilizadas

### Implementadas:
- ✅ `/public/fotos/lucis2244_dois_violeiros_num_pe_de_parede_cantoria_xilografia.png`
  - Localização: Hero (à direita)
  - Efeito: Nenhum
  
- ✅ `/public/fotos/De_repente,_um_repentista.jpg`
  - Localização: Seção "Por Que Vilanova?"
  - Efeito: Sépia suave (filter: sepia(0.2))
  
- ✅ `/public/fotos/fotopasspretozefranpelejas.jpg`
  - Localização: Seção "Os Cantadores"
  - Efeito: Grayscale com hover para colorido

### Fotos Necessárias (futuras):
- [ ] Foto de Ivanildo Vilanova (substituir SVG de viola)
- [ ] Foto de Fabiane Ribeiro (substituir SVG)
- [ ] Foto de José Jonas (substituir SVG)
- [ ] Thumbnails dos episódios da websérie
- [ ] Fotos das cantorias para os cards

---

## 🎯 Tom e Conteúdo

### Mudanças de Tom (Estilo Câmara Cascudo):

**Antes (marketeiro):**
> "Imagine criar poesia perfeita..."
> "Por mais de 500 anos..."

**Depois (educativo, sério):**
> "Arte brasileira de improviso cantado, alternada por dois poetas..."
> "Há gerações, cantadores de viola..."
> "Por volta de 1830, surgem os primeiros cantadores..."

### Princípios Aplicados:
- ✅ Tom enciclopédico mas acessível
- ✅ Baseado em fatos históricos documentados
- ✅ Citações de mestres e pesquisadores
- ✅ Referências bibliográficas
- ✅ Honestidade sobre status (EM BREVE, EM CONSTRUÇÃO)
- ✅ Contexto cultural e social
- ✅ Respeito pela tradição

---

## 🔧 Tecnologias Usadas

- ✅ React (TanStack Router)
- ✅ TailwindCSS (utility-first)
- ✅ Lucide React (ícones: Github, ExternalLink)
- ✅ Google Fonts (Playfair Display, Lora, Outfit)
- ✅ CSS custom properties (paleta de cores)

---

## 🚀 Como Rodar

```bash
cd /Users/lucis/personal/vilanova
npm run dev
```

Acesse: `http://localhost:8787`

---

## 📝 Próximos Passos

### Imediato:
1. ✅ Adicionar links do YouTube em `/repentes/cantorias.json`
2. ✅ Implementar seções faltantes (8-13)
3. ✅ Adicionar fotos reais dos cantadores
4. ✅ Verificar responsividade em dispositivos reais

### Curto Prazo:
1. Criar página `/entre-cordas-e-poesia`
2. Criar página `/estilos`
3. Criar página `/sobre`
4. Criar página `/contribuir`

### Médio Prazo:
1. Implementar acervo funcional
2. Sistema de busca
3. Galeria de cantadores

---

## 🎨 SVGs a Criar

Para próxima iteração, criar SVGs minimalistas:
- Duas violas cruzadas
- Viola nordestina (10 cordas)
- Régua/métrica
- Nó/entrelaçamento (rimas)
- Raio (improviso)
- Mapa do Nordeste

**Estilo:** Linhas simples em Bronze #8B6F47, minimalista, cultural

---

## ✨ Destaques da Implementação

### O Que Ficou Muito Bom:
- ✅ Tom respeitoso e educativo (estilo Câmara Cascudo)
- ✅ Contexto histórico robusto (1830, Urgulino do Sabugi)
- ✅ Distinções claras (Repente ≠ Cordel ≠ Embolada)
- ✅ Citações autênticas dos mestres
- ✅ Honestidade sobre status do projeto
- ✅ Homenagem a Ivanildo bem integrada
- ✅ Fotos históricas com efeitos sutis
- ✅ Mobile-first responsivo
- ✅ CTA para GitHub em destaque no hero

### O Que Pode Melhorar:
- Adicionar mais seções (cantorias, websérie, estilos)
- Trocar ícones emoji por SVGs customizados
- Adicionar fotos reais dos cantadores
- Implementar animações de scroll suaves
- Adicionar mais informações históricas do cordel-nos-cocais.txt

---

## 📚 Referências Usadas

### Fontes Citadas:
1. **Cordel nos Cocais** - José Edimar Mendes Barbosa (2011)
2. **Câmara Cascudo** - "Representantes legítimos de todos os bardos menestréis"
3. **Leonardo Mota** - "Repórter do sertão, professor itinerante"
4. **Atila de Almeida** - Historiador da poesia popular
5. **Entre Cordas e Poesia** - Websérie documental (2024)

### Informações Históricas:
- 1830: Surgimento dos primeiros cantadores documentados
- Urgulino do Sabugi: Primeiro cantador de que se tem registro
- Agostinho da Costa: "Pai da Poesia Popular"
- Origem: Divisa Paraíba-Pernambuco (Teixeira/Rio Pajeú)
- Silvino Pirauá Lima: Criador da Sextilha
- Zé Pretinho: Criador do Galope à Beira Mar
- Ivanildo Vilanova: Criador do Remo da Canoa

---

## 🎯 Status Atual

**Pronto para Deploy Inicial:** ✅ SIM

A landing page atual está funcional e apresentável, com:
- Design cultural e respeitoso
- Conteúdo educativo e historicamente preciso
- CTAs claros
- Mobile-friendly
- SEO otimizado

**Pode ser colocada no ar?** Sim, com as seguintes observações:
- Algumas seções ainda não implementadas (badges "EM BREVE" indicam isso)
- Fotos dos cantadores ainda são placeholders (SVGs)
- Links para páginas secundárias ainda não funcionais

Mas o suficiente está pronto para ter presença online e começar a receber contribuições.

---

**Próxima ação:** Implementar as seções restantes (Cantorias, Websérie, Estilos)
