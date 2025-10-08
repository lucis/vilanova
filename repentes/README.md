# Acervo de Repentes - Vilanova

Esta pasta contém transcrições de repentes catalogados para o projeto Vilanova. Cada arquivo representa uma performance ou sessão de cantoria, com análise estrutural, temática e técnica.

## 📂 Organização dos Arquivos

### 1. Transcrições Brutas (.txt)
Arquivos originais com timestamps da transcrição automática:
```
[estilo]-[cantadores-ou-artista].txt
```

### 2. Estrofes Estruturadas (*-estruturado.md)
**NOVO!** Arquivos markdown com estrofes separadas visualmente:
```
[slug]-estruturado.md
```

Cada arquivo estruturado contém:
- Metadados completos (cantadores, local, estilo, YouTube)
- Informações do estilo (métrica, rimas, mote fixo)
- **Estrofes separadas por cantador**
- Tema de cada estrofe
- Versos formatados em blocos de código

**Propósito:** Facilitar visualização, identificar quem canta cada parte, servir como base para as páginas web.

### 3. Catálogo JSON (acervo-estruturado.json)
Arquivo estruturado com metadados E estrofes completas:
- Título e estilo
- Cantadores participantes (individuais)
- Local, ano e contexto
- Links para YouTube/Spotify
- **Array de estrofes** com versos e temas
- Indicação de transcrição disponível

**Ver:** [acervo-estruturado.json](./acervo-estruturado.json)

### 4. Catálogo Simples (cantorias.json)
Versão simplificada para referência rápida:

**Ver:** [cantorias.json](./cantorias.json)

## 📚 Repentes Catalogados

### Galope à Beira Mar
1. **[galope-beira-mar-sebastiao-ivanildo.txt](./galope-beira-mar-sebastiao-ivanildo.txt)**
   - Cantadores: Sebastião da Silva vs Ivanildo Vilanova
   - Local: Caruaru, PE
   - Tema: Autoestima, desafio, vida pessoal
   - Qualidade: Alta - duelo clássico entre mestres

2. **[galope-beira-mar-os-nonatos.txt](./galope-beira-mar-os-nonatos.txt)**
   - Artista: Os Nonatos (dupla)
   - Local: Serra Talhada, PE
   - Tema: Superioridade técnica, erudição
   - Peculiaridade: Uso de "dérbi" ao invés de "dez de"

3. **[galope-hipolito-rogerio-tv.txt](./galope-hipolito-rogerio-tv.txt)** ⭐ NOVO
   - Cantadores: Hipólito Moura vs Rogério Menezes
   - Local: TV Diário, Fortaleza, CE
   - Tema: Peleja intensa, provocações mútuas
   - Destaque: Referências a cantadores famosos (Zé Viola, Geraldo, Dinis)
   - **Estruturado:** [galope-hipolito-rogerio-tv-diario-estruturado.md](./galope-hipolito-rogerio-tv-diario-estruturado.md)
   - YouTube: https://www.youtube.com/watch?v=3CXPD0IkYQE

### Oitava
4. **[oitavas-dos-nonatos.txt](./oitavas-dos-nonatos.txt)**
   - Artista: Os Nonatos (Nonato Costa e Nonato Neto)
   - Local: São Lourenço da Mata, PE
   - Tema: Humildade, competição, sabedoria
   - Contexto: Festival/Competição
   - **Estruturado:** [oitavas-os-nonatos-sao-lourenco-mata-estruturado.md](./oitavas-os-nonatos-sao-lourenco-mata-estruturado.md)

### Martelo Alagoano
5. **[martelo-alagoano.txt](./martelo-alagoano.txt)**
   - Artista: [A identificar]
   - Tema: Sátira política, bravata, humor
   - Mote fixo: "Nos dez pés de martelo alagoano"

## 📊 Estatísticas do Acervo

- **Total de repentes:** 5 ⭐
- **Estilos catalogados:** 2 (Galope à Beira Mar, Oitava, Martelo Alagoano)
- **Cantadores identificados:** Sebastião da Silva, Ivanildo Vilanova, Os Nonatos (Nonato Costa e Nonato Neto), Hipólito Moura, Rogério Menezes
- **Estados representados:** Pernambuco (Caruaru, Serra Talhada, São Lourenço da Mata), Ceará (Fortaleza)
- **Estrofes estruturadas:** 10 estrofes (2 repentes completamente mapeados)
- **Links do YouTube:** 1 disponível

## 🎯 Próximos Passos

### Pendências de Catalogação
- [ ] Adicionar metadados ao banco de dados
- [ ] Criar registros de cantadores (Sebastião, Ivanildo, Os Nonatos)
- [ ] Criar registros de repentes (eventos/performances)
- [ ] Vincular transcrições aos repentes
- [ ] Extrair poesias individuais (cada estrofe)
- [ ] Gerar análises automáticas com IA
- [ ] Identificar cantador do Martelo Alagoano

### Estilos a Adicionar
- [ ] Sextilha
- [ ] Mourão Voltado
- [ ] Quadrão
- [ ] Décima
- [ ] Gemedeira
- [ ] Martelo Agalopado

### Fontes Futuras
- Websérie "Entre Cordas e Poesia"
- Festivais gravados (YouTube, Vimeo)
- Acervos pessoais de cantadores
- Rádios locais nordestinas
- Contribuições da comunidade

## 📝 Formato dos Arquivos

Cada arquivo contém:

1. **Cabeçalho**
   - Título e estilo
   - Artista(s)
   - Local e contexto

2. **Transcrição Completa**
   - Timestamps originais
   - Texto dos versos
   - Indicações de risos, aplausos, instrumentos

3. **Análise Estrutural**
   - Número de versos
   - Métrica (sílabas)
   - Esquema de rimas
   - Exemplos anotados

4. **Análise Temática**
   - Temas abordados
   - Figuras de linguagem
   - Referências culturais
   - Técnicas observadas

5. **Metadados**
   - Data de adição
   - Status de catalogação
   - Qualidade
   - Valor educacional

## 🤝 Como Contribuir

Se você tem transcrições de repentes, siga este formato:

```markdown
# [Título do Repente]

**Estilo:** [Nome do estilo]
**Cantadores:** [Nomes]
**Local:** [Cidade, Estado]
**Data:** [Se conhecido]
**Contexto:** [Festival, cantoria, etc]

## Transcrição
[timestamps] [texto]

## Análise Estrutural
[análise técnica]

## Metadados
- Data de adição:
- Fonte:
- Status:
```

Envie via pull request ou entre em contato através do projeto Vilanova.

## 📖 Recursos

- **Websérie:** [Entre Cordas e Poesia](https://www.youtube.com/watch?v=ULbBggbGpB8&list=PLngiJpynwciFIwyrG_EiOW-sKm1tRXSGU)
- **Documentação do Projeto:** [plans/](../plans/)
- **Schema de Banco de Dados:** [plans/03-database-schema.md](../plans/03-database-schema.md)

---

**Vilanova** - Preservando a história viva do repente nordestino através da tecnologia. 🎵
