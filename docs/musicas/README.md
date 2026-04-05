# 🎵 Músicas Inspiradas na Cantoria

Esta seção do Projeto Vilanova cataloga **músicas autorais** que prestam homenagem, celebram ou se inspiram na tradição da cantoria de viola nordestina.

## 📌 Diferença entre Cantorias e Músicas

### Cantorias (Repente)
- Improviso em tempo real
- Duelo poético entre cantadores
- Estrutura métrica rigorosa (Sextilha, Martelo, Galope, etc.)
- Preservação de eventos específicos
- Exemplo: Valdir Teles e Zé Cardoso improvisando em praça pública

### Músicas (esta seção)
- Composições autorais
- Inspiradas na cantoria ou homenageando cantadores
- Podem seguir estruturas de estilos tradicionais
- Arte da música popular brasileira
- Exemplo: "Martelo Alagoano" de Alceu Valença

---

## 🎼 Acervo Atual

### 1. Martelo Alagoano - Alceu Valença (1980)

**Álbum:** Coração Bobo  
**Duração:** 4:23  
**YouTube:** [Ver vídeo](https://youtu.be/bujZdiDSnJU)

Uma das mais belas homenagens à cantoria na MPB. Alceu Valença celebra o estilo Martelo Alagoano e os grandes mestres da viola.

**Destaques:**
- Respeita a métrica do Martelo Alagoano (10 versos decassílabos)
- Homenageia cantadores lendários: Dimas Batista, Pinto do Monteiro, Lourival Batista, Cego Aderaldo, Mocinha de Passira
- Mapeia geograficamente a cantoria: Campina Grande, Monteiro, Passira, Panelas, Ingazeira
- Sintetiza as três raízes culturais brasileiras (portuguesa, africana, indígena)

**Arquivo de dados:** `/public/data/musicas/martelo-alagoano-alceu-valenca.json`

---

## 📂 Estrutura de Dados

Cada música tem:

```json
{
  "id": "slug-da-musica",
  "titulo": "Nome da Música",
  "artista": {
    "nome": "Nome do Artista",
    "slug": "artista-slug"
  },
  "estilo_referencia": {
    "nome": "Estilo que inspira",
    "metrica": "estrutura métrica",
    "esquema_rima": "padrão de rimas"
  },
  "ano": 1980,
  "album": "Nome do Álbum",
  "estrofes": [
    {
      "numero": 1,
      "versos": ["verso 1", "verso 2", ...],
      "comentario": "Análise cultural e contexto"
    }
  ],
  "links": {
    "youtube": "URL",
    "spotify": "URL"
  }
}
```

---

## 🎯 Critérios para Inclusão

Uma música pode entrar nesta seção se:

1. **Faz referência explícita** à cantoria, repente ou viola nordestina
2. **Homenageia cantadores** específicos ou a tradição em geral
3. **Usa estrutura métrica** inspirada em estilos de repente
4. **Celebra a cultura** da cantoria e do sertão nordestino
5. É uma **obra autoral** (não é improviso)

---

## 🎨 Sugestões de Músicas para Adicionar

Conhece outras músicas que celebram a cantoria? Sugestões bem-vindas:

- Músicas de Elba Ramalho, Geraldo Azevedo, Zé Ramalho com temática sertaneja
- Composições que referenciem cantadores históricos
- Obras que utilizem estruturas poéticas da cantoria
- Músicas regionais que prestem tributo à viola

**[Abrir issue no GitHub](https://github.com/lucis/vilanova/issues)** para sugerir!

---

## 📝 Como Adicionar uma Nova Música

### Via Prompt (recomendado)
Se você usa Cursor/Windsurf, basta pedir:

```
Adicione a música [NOME] de [ARTISTA] à seção Músicas do Vilanova.

Link: [YouTube/Spotify]
Letra: [cole a letra]
Contexto: [informações sobre a música]
```

### Manualmente

1. **Crie o arquivo JSON** em `/public/data/musicas/`:

```bash
/public/data/musicas/nome-da-musica-artista.json
```

2. **Atualize o índice** em `/public/data/musicas-index.json`:

```json
{
  "musicas": [
    {
      "id": "nome-da-musica-artista",
      "slug": "nome-da-musica-artista",
      "titulo": "Nome da Música",
      "artista": "Nome do Artista",
      "estilo_referencia": "Estilo",
      "_ref": "/musicas/nome-da-musica-artista.json"
    }
  ]
}
```

3. **Crie a transcrição** (opcional) em `/musicas/`:

```bash
/musicas/nome-da-musica-artista.txt
```

---

## 🎭 Impacto Cultural

Esta seção documenta como a cantoria nordestina influenciou a Música Popular Brasileira e continua viva através de artistas que a celebram e reinterpretam.

**Preservamos não apenas os repentes originais, mas também seu legado cultural.**

---

**Projeto Vilanova** - Preservando a Cantoria Nordestina  
[vilanova.deco.page](https://localhost-aa14baa7.deco.host) | [GitHub](https://github.com/lucis/vilanova)
