# Vilanova - Sumário do Projeto

## ✅ O Que Foi Criado

### 📁 Estrutura de Planejamento (`docs/plans/`)

1. **[01-overview.md](../plans/01-overview.md)** - Visão geral completa
   - ✅ Definição como projeto aberto e nunca finalizado
   - ✅ Origem em Campina Grande, feito para todo Nordeste
   - ✅ Missão de usar IA para catalogação e digitalização
   - ✅ Referência à websérie "Entre Cordas e Poesia"
   - ✅ Arquitetura, funcionalidades e roadmap

2. **[02-analise-estrutura-poesias.md](../plans/02-analise-estrutura-poesias.md)** - Estrutura de dados
   - ✅ Análise detalhada dos exemplos (Galope, Oitavas, Martelo)
   - ✅ Identificação de padrões de rima
   - ✅ Modelos TypeScript completos
   - ✅ **Nota crítica**: Respeito às adaptações fonéticas dos poetas
   - ✅ Schemas Zod para IA

3. **[03-database-schema.md](../plans/03-database-schema.md)** - Schema de banco
   - ✅ 18 tabelas completas
   - ✅ **NOVO**: Calendário de cantorias (eventos recorrentes)
   - ✅ **NOVO**: Arquivos de áudio para transcrição
   - ✅ Relacionamentos e índices

4. **[04-landing-page.md](../plans/04-landing-page.md)** - Landing page
   - ✅ Estrutura completa da página
   - ✅ Seção dedicada à websérie
   - ✅ Design system com cores nordestinas

5. **[05-backoffice-tools.md](../plans/05-backoffice-tools.md)** - **NOVO**: Ferramentas admin
   - ✅ Tool: Upload de áudio MP3/WAV
   - ✅ Tool: Transcrição com OpenAI Whisper
   - ✅ Tool: Criar repente a partir de transcrição
   - ✅ Tool: Extrair poesias com IA
   - ✅ Tool: Criar eventos de cantoria
   - ✅ Workflow completo de processamento
   - ✅ Interface de backoffice (mockup)

### 📝 Acervo de Repentes (`repentes/`)

Transcrições organizadas e analisadas:

1. **[galope-beira-mar-sebastiao-ivanildo.txt](repentes/galope-beira-mar-sebastiao-ivanildo.txt)**
   - Sebastião da Silva vs Ivanildo Vilanova
   - Caruaru, PE
   - Análise completa do duelo

2. **[galope-beira-mar-os-nonatos.txt](repentes/galope-beira-mar-os-nonatos.txt)**
   - Os Nonatos
   - Serra Talhada, PE
   - ✅ Correção: "dérbi" é adaptação fonética de "dez de"

3. **[oitavas-dos-nonatos.txt](repentes/oitavas-dos-nonatos.txt)**
   - Os Nonatos
   - São Lourenço da Mata, PE
   - Estilo: Oitava (8 versos)

4. **[martelo-alagoano.txt](repentes/martelo-alagoano.txt)**
   - Artista a identificar
   - ✅ Mote correto: "Nos dez **pés** de martelo alagoano"

5. **[README.md](repentes/README.md)** - Índice do acervo
   - Estatísticas
   - Formato de arquivos
   - Guia de contribuição

### 📄 Documentação Principal

1. **[README.md](README.md)** - Atualizado completamente
   - ✅ Projeto aberto e comunitário
   - ✅ Nascido em Campina Grande, feito para todo Nordeste
   - ✅ IA para catalogação e digitalização
   - ✅ Deploy: vilanova.deco.page
   - ✅ Guia de contribuição expandido
   - ✅ Princípios de contribuição

2. **[index.html](index.html)** - SEO otimizado
   - ✅ Meta tags atualizadas
   - ✅ Open Graph para redes sociais
   - ✅ Descrição do projeto comunitário

## 🎯 Conceitos-Chave Estabelecidos

### 1. Adaptações Fonéticas
**CRÍTICO**: Os poetas adaptam pronúncia para manter métrica.

**Exemplos:**
- "dez de" → pronunciado "dérbi" (mantém métrica)
- "para" → "pra"
- Elisões e contrações são intencionais

**Implicação para IA:**
- Não corrigir estas "variações"
- Entender a intenção original
- Respeitar a escolha do poeta

### 2. Motes Corretos
- **Galope à Beira Mar**: "Nos dez **de** galope na/da beira do mar"
- **Martelo Alagoano**: "Nos dez **pés** de martelo alagoano"

### 3. Calendário de Cantorias
Suporte a eventos recorrentes:
```json
{
  "title": "Clube do Repente",
  "city": "Campina Grande",
  "recurrenceText": "Toda primeira quinta-feira do mês",
  "recurrenceRule": {
    "frequency": "monthly",
    "ordinal": "first",
    "weekday": 4
  }
}
```

## 🛠️ Funcionalidades Planejadas

### Backoffice (Admin/Moderador)
1. ✅ Upload de MP3/WAV
2. ✅ Transcrição automática (Whisper)
3. ✅ Criar repente com metadados
4. ✅ Extrair poesias com IA
5. ✅ Gerenciar eventos de cantoria

### Frontend (Público)
1. 🚧 Editor de poesia com IA
2. 🚧 Visualizador de estrutura poética
3. 🚧 Calendário de cantorias
4. 🚧 Busca e filtros
5. 🚧 Perfis de cantadores

### Backend (API)
1. 🚧 Tools de análise poética
2. 🚧 Workflows de processamento
3. 🚧 API pública para pesquisadores

## 📊 Estado Atual

### ✅ Completo
- Documentação e planejamento
- Análise de estruturas poéticas
- Schema de banco de dados
- Design de tools de backoffice
- Acervo inicial (4 repentes)
- SEO e branding

### 🚧 Próximos Passos

**Fase 1 - Fundação (Próxima):**
1. Implementar schema do banco de dados
2. Criar tools privadas de backoffice
3. Interface de upload de áudio
4. Integração com Whisper API

**Fase 2 - Catalogação:**
1. Adicionar cantadores ao banco
2. Catalogar repentes existentes
3. Vincular transcrições
4. Extrair poesias com IA

**Fase 3 - Editor Público:**
1. Interface de criação de poesias
2. Análise em tempo real
3. Sugestões de IA
4. Validação de estrutura

## 🤝 Contribuindo

**O projeto está pronto para receber contribuições!**

Áreas prioritárias:
- 📝 Transcrições de repentes
- 💻 Implementação do schema de banco
- 🎨 Design da interface
- 📚 Documentação de estilos
- 📅 Cadastro de eventos

## 🔗 Links Importantes

- **Deploy**: [vilanova.deco.page](https://vilanova.deco.page)
- **Websérie**: [Entre Cordas e Poesia](https://www.youtube.com/watch?v=ULbBggbGpB8&list=PLngiJpynwciFIwyrG_EiOW-sKm1tRXSGU)
- **GitHub**: (a ser configurado)

---

**Vilanova** - Um projeto aberto de estudo e exaltação da cultura do Repente 🎵

*De Campina Grande para todo o Nordeste, construído com a comunidade.*



