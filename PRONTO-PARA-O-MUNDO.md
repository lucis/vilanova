# 🎉 Vilanova - Pronto para o Mundo!

## ✅ Missão Cumprida

A landing page do **Vilanova** está funcional, linda e pronta para receber visitantes!

---

## 🌐 Como Acessar

**Desenvolvimento:**
- 🌐 https://localhost-aa14baa7.deco.host
- 📍 http://localhost:8787/

**Para rodar localmente:**
```bash
npm run dev
```

---

## 📐 O Que Está Implementado

### ✅ Landing Page Completa (8 Seções)

1. **Hero** - "Vilanova" com destaque especial
   - Título em caixa branca com texto Terracota
   - Botão GitHub em destaque (acima da descrição no mobile)
   - Imagem xilogravura dos violeiros

2. **O Que É Repente** - Conteúdo enciclopédico
   - 6 características fundamentais
   - Exemplo de estrofe completa (8 versos da Oitava)
   - Contexto histórico robusto (1830, Urgulino do Sabugi)
   - Referências bibliográficas

3. **Os Cantadores** - Transmissão geracional
   - 3 cards: Ivanildo Vilanova, Fabiane Ribeiro, José Jonas
   - Foto histórica de peleja

4. **Desafios da Preservação**
   - 3 problemas reais
   - Citações de Raimundo Lira

5. **Como o Vilanova Organiza**
   - Timeline com 6 funcionalidades
   - Badges de status honestos

6. **O Que Já Temos**
   - 4 estatísticas impactantes
   - 2 estrofes completas com caixinhas
   - Links para páginas de detalhe (a implementar)

7. **Por Que "Vilanova"?**
   - Homenagem a Ivanildo Vilanova
   - Foto de violeiro
   - Link para Dicionário MPB

8. **Entre Cordas e Poesia**
   - YouTube embed do Episódio 1
   - Lista de participantes
   - Produzida no RN, Lei Paulo Gustavo
   - **Chamado gamificado:** Issue #2 (nível FÁCIL)
   - Link para contribuir

---

## 🎨 Design Cultural

### Paleta Nordestina:
- **Terracota** #C84B31 ← Título "Vilanova"
- **Ocre** #D49B54
- **Azul Grego** #2E5266
- **Barro Claro** #E8D4B0 ← Background de estrofes
- **Bronze** #8B6F47 ← Bordas

### Tipografia:
- **Playfair Display** (títulos)
- **Lora** (corpo — fonte maior para acessibilidade)
- **Outfit** (UI)

### Elementos Únicos:
- Título "Vilanova" em caixa branca
- Estrofes completas em caixinhas estilizadas
- Foto histórica com efeito grayscale hover
- YouTube embed com bordas Bronze
- Badges gamificados de contribuição

---

## 📊 Conteúdo Rico

### Informação Histórica:
- 1830: Urgulino do Sabugi (primeiro cantador)
- Origem: Teixeira (PB) / Rio Pajeú (PE)
- Distinções: Repente ≠ Cordel ≠ Embolada
- Criadores de estilos documentados

### Citações de Mestres:
- Raimundo Lira: "O repente é puro, é santo, é divino..."
- Ivanildo Vilanova: "O cantador deve estar apto..."
- Anita Alves: "Se tiver que cortar, cortam do cordel e da viola"

### Estrofes Completas:
- Nonato Costa: "São Lourenço da Mata nos escuta..." (8 versos)
- Nonato Costa: "Aos colegas que ficam aqui, ressalto..." (8 versos)
- Nonato Neto: "Qualidade é um item que invalida..." (8 versos)

---

## 📁 Estrutura de Dados

### Arquivos JSON:
1. `/repentes/cantorias.json` — Catálogo simples
2. `/repentes/acervo-estruturado.json` — **Estrutura completa com estrofes** ⭐

### Esquema:
```json
{
  "repentes": [
    {
      "slug": "oitavas-os-nonatos-sao-lourenco-mata",
      "cantadores": [
        { "nome": "Nonato Costa", "slug": "nonato-costa" },
        { "nome": "Nonato Neto", "slug": "nonato-neto" }
      ],
      "estrofes": [
        {
          "numero": 1,
          "cantador": "Nonato Costa",
          "versos": [ "...", "...", ... ],
          "tema": "Humildade na competição"
        }
      ],
      "links": {
        "youtube": "",
        "spotify": null
      }
    }
  ]
}
```

---

## 🎯 Chamados para Contribuição

### 1. 🎨 Design (URGENTE)
**Localização:** README.md - Seção especial

> **Estamos buscando pessoas para pensar o design cultural do Vilanova.**

**Tipo de ajuda:**
- Ilustrações/SVGs de violas e cantadores
- Sistema de ícones customizado
- Padrões decorativos (azulejos, renda, xilogravura)
- Visualizações de estrutura poética

👉 [Propor melhorias de design](http://github.com/lucis/vilanova/issues/new?labels=design)

### 2. 🎮 Páginas dos Episódios (Nível FÁCIL)
**Localização:** Landing page - Seção "Entre Cordas e Poesia"

> Criar páginas específicas para cada episódio da websérie

**Tipo de ajuda:**
- Layout responsivo para cada episódio
- Embed do YouTube
- Conteúdo didático
- Baseado nas transcrições disponíveis

👉 [Issue #2](http://github.com/lucis/vilanova/issues/2)

---

## 📝 Próximas Tarefas

### Crítico (para ter site funcional):
1. [ ] Adicionar links do YouTube em `cantorias.json`
2. [ ] Extrair estrofes de todas as transcrições
3. [ ] Implementar `/cantorias/[slug]` (página de detalhe)
4. [ ] Implementar `/cantorias` (lista)

### Importante:
5. [ ] Página `/entre-cordas-e-poesia` (11 episódios)
6. [ ] Página `/estilos` (guia de estilos)
7. [ ] Página `/sobre`
8. [ ] Criar issues específicas para cada tarefa

### Desejável:
9. [ ] SVGs customizados
10. [ ] Fotos dos cantadores
11. [ ] Sistema de busca

---

## 🚀 Como Deployar (quando pronto)

```bash
npm run deploy
```

O site ficará disponível em: **vilanova.deco.page**

---

## 🎵 Estatísticas Atuais

- **4** repentes transcritos
- **3** estilos catalogados
- **11** episódios de websérie transcritos
- **4** estrofes completas estruturadas
- **8** seções da landing page
- **3** fotos integradas
- **100%** open source

---

## 💡 Decisões de Design Importantes

### 1. Estrofes Completas, Sempre
- Nunca citar só 2 versos
- Sempre mostrar a estrofe completa (8 versos na Oitava, 10 no Galope)
- Com metadados: cantador, estilo, link

### 2. Caixinhas Estilizadas
- Header colorido por estilo
- Background Barro Claro para versos
- Footer com informações e link

### 3. Tom Enciclopédico
- Estilo Câmara Cascudo
- Referências bibliográficas
- Contexto histórico robusto
- Sem "marketing fluff"

### 4. Gamificação de Contribuição
- Níveis de dificuldade (FÁCIL, MÉDIO, DIFÍCIL)
- Badges coloridos
- Links diretos para issues

---

## ✨ Destaques

### O Que Ficou Especialmente Bom:
1. ✅ Título "Vilanova" em caixa branca/laranja (super destaque)
2. ✅ Estrofes completas com estrutura visual clara
3. ✅ Identificação de Nonato Costa vs Nonato Neto
4. ✅ Contexto histórico de 1830
5. ✅ Tom respeitoso e educativo
6. ✅ Chamados claros para contribuição
7. ✅ Acessibilidade (fontes maiores)
8. ✅ Mobile-first perfeito

---

## 📖 Documentação Completa

### Para Desenvolvedores:
- `README.md` — Como contribuir
- `.cursorrules-vilanova` — Guidelines de IA
- `/plans/` — Specs de todas as páginas

### Para Designers:
- `/plans/04-landing-page-v2.md` — Design system
- `README.md` — Chamado para contribuição

### Para Pesquisadores:
- `/entre-cordas-e-poesia/` — 11 episódios transcritos
- `/repentes/` — Transcrições de cantorias
- `/repentes/acervo-estruturado.json` — Dados estruturados

---

## 🎊 Resultado Final

**Um portal que:**
- ✅ Educa sobre o repente com seriedade
- ✅ Respeita profundamente a tradição
- ✅ Mostra exemplos reais e estruturados
- ✅ Homenageia os mestres (Ivanildo Vilanova)
- ✅ Apresenta a websérie que inspirou tudo
- ✅ Convida para contribuir de forma clara
- ✅ Tem chamados gamificados (issues por nível)
- ✅ É acessível (fontes grandes, alto contraste)
- ✅ É culturalmente rico (referências históricas)
- ✅ Está pronto para o mundo 🌍

---

**"O repente é puro, é santo, é divino. É uma janela para a alma, uma janela para o mundo da sabedoria. A arte mais difícil do mundo."**

_— Raimundo Lira_

---

**Vilanova** · De Campina Grande para todo o Nordeste · Open Source (MIT)
