# Estrutura Geral do Site - Vilanova

## 🎯 Visão Geral

O Portal Vilanova é estruturado em camadas progressivas de engajamento:
1. **Landing Page** - Apresentação e conversão inicial
2. **Páginas de Conteúdo** - Educação e referência
3. **Ferramentas** - Criação e catalogação (backoffice + público)
4. **Acervo** - Exploração e pesquisa
5. **Comunidade** - Contribuição e discussão

## 📐 Arquitetura de Informação

```
/                              Landing Page
├── /entre-cordas-e-poesia     Homenagem à websérie documental
├── /estilos                   Guia completo de estilos de repente
│   ├── /galope-beira-mar      Página individual do estilo
│   ├── /martelo-alagoano      Página individual do estilo
│   ├── /sextilha              Página individual do estilo
│   └── ...                    Outros estilos
├── /cantadores                Galeria de cantadores (perfis)
│   └── /[slug]                Perfil individual de cantador
├── /acervo                    Catálogo de repentes
│   ├── /repentes              Lista de repentes transcritos
│   │   └── /[id]              Página individual de repente
│   └── /buscar                Busca avançada no acervo
├── /calendario                Eventos e cantorias (futuro)
├── /editor                    Editor público com IA (futuro)
├── /aprender                  Tutoriais e aprendizado (futuro)
├── /sobre                     Sobre o projeto
├── /contribuir                Como contribuir
└── /api                       Documentação da API (futuro)
```

---

## 📄 Páginas Principais

### 1. Landing Page `/`
**Status:** 🔄 Em revisão (este documento)
**Prioridade:** 🔴 Crítica

**Objetivo:** Converter visitantes em usuários engajados e contribuidores

**Seções:**
- Hero com CTA principal
- O que é repente (storytelling)
- Problema de preservação
- Nossa solução tecnológica
- Features (com links para páginas específicas)
- Websérie Entre Cordas e Poesia
- CTA final de contribuição

**Documento:** `plans/04-landing-page.md` (atualizar)

---

### 2. Entre Cordas e Poesia `/entre-cordas-e-poesia`
**Status:** ✅ Planejada
**Prioridade:** 🟡 Alta

**Objetivo:** Homenagear e catalogar a websérie documental

**Seções:**
- Hero com thumbnail
- Sobre a websérie
- Os mestres participantes
- 11 episódios (com embeds + transcrições)
- Como inspira o Vilanova
- Créditos

**Documento:** `plans/06-entre-cordas.md` (criado)

**Dados necessários:**
- Transcrições dos 11 episódios ✅ (já temos)
- Metadados dos vídeos (duração de cada)
- Fotos dos participantes (opcional)

---

### 3. Guia de Estilos `/estilos`
**Status:** 📋 Planejada
**Prioridade:** 🟡 Alta

**Objetivo:** Enciclopédia visual e interativa dos estilos de repente

**Estrutura:**

#### Página Index `/estilos`

**Hero:**
```
Os Estilos do Repente
Cada um com suas próprias leis poéticas
```

**Grid de Estilos (Cards Interativos):**

Cada card mostra:
- Nome do estilo
- Ícone visual distintivo
- Dificuldade (Iniciante / Intermediário / Avançado)
- Métrica (ex: 7 sílabas, 10 sílabas)
- Número de versos
- Padrão de rima visual (ex: ABCBDB)
- Badge: "X repentes no acervo"
- CTA: "Explorar"

**Filtros:**
- Por dificuldade
- Por métrica
- Por popularidade
- Com/sem mote fixo

**Estilos a incluir:**
1. ✅ Galope à Beira Mar (temos no DB)
2. ✅ Martelo Alagoano (temos no DB)
3. ✅ Sextilha (temos no DB)
4. Mourão Voltado
5. Martelo Agalopado
6. Decassílabo
7. Gemedeira
8. Quadrão
9. Dez Pés de Quadrão
10. Oitava (Os Nonatos usam)

---

#### Página Individual `/estilos/[slug]`

**Exemplo:** `/estilos/galope-beira-mar`

**Seções:**

**1. Hero:**
```
🌊 Galope à Beira Mar
"Nos dez de galope na beira do mar"

📊 Dificuldade: Avançada
📝 10 versos por estrofe
📐 Métrica: 10 sílabas (decassílabos)
🎵 Mote fixo no último verso
```

**2. Anatomia do Estilo:**

Visual interativo mostrando:
```
Verso 1 (10 sílabas) - Rima A
Verso 2 (10 sílabas) - Rima A
Verso 3 (10 sílabas) - Rima A
Verso 4 (10 sílabas) - Rima A
Verso 5 (10 sílabas) - Rima A
Verso 6 (10 sílabas) - Rima B
Verso 7 (10 sílabas) - Rima B
Verso 8 (10 sílabas) - Rima C
Verso 9 (10 sílabas) - Rima C
Verso 10 (10 sílabas) - MOTE FIXO

Esquema de Rimas: AAAAABBCCM
```

**3. Exemplo Real:**

Transcrição completa de um repente nesse estilo do acervo, com:
- Destaque visual da estrutura
- Sílabas numeradas (hover para ver contagem)
- Rimas coloridas
- Player de áudio (se disponível)
- Metadados: cantadores, local, data

**4. Contexto Histórico:**

Texto educativo sobre:
- Origem do estilo
- Características únicas
- Quando é usado
- Grandes mestres conhecidos por esse estilo

**5. Aprenda a Fazer:**

Tutorial passo a passo:
- Como contar as 10 sílabas
- Como manter o padrão de rimas
- O que significa o mote fixo
- Temas comuns nesse estilo

**CTA:** "Criar Seu Próprio" → Link para editor (quando disponível)

**6. Repentes no Acervo:**

Lista de repentes catalogados nesse estilo:
- Thumbnail/preview
- Cantadores
- Data
- Link para página completa

**CTA:** "Ver Todos os Repentes"

---

**Dados Necessários no DB:**

```typescript
// Schema já existente em schema.ts:
repentesTable {
  id
  titulo
  cantadores (JSON)
  evento_local
  evento_data
  estilo_id (FK para estiloCategoriaTable)
  transcricao_completa
  audio_url
  analise_metrica (JSON)
  analise_rima (JSON)
  figuras_linguagem (JSON)
}

estiloCategoriaTable {
  id
  nome (ex: "Galope à Beira Mar")
  slug (ex: "galope-beira-mar")
  descricao
  dificuldade (enum: iniciante, intermediario, avancado)
  num_versos
  metrica_silabas
  esquema_rima (ex: "AAAAABBCCM")
  tem_mote_fixo (boolean)
  mote_fixo_texto (ex: "Nos dez de galope na beira do mar")
  contexto_historico (text)
  caracteristicas_unicas (text)
  icone_visual (string - emoji ou nome de ícone)
}
```

---

### 4. Galeria de Cantadores `/cantadores`
**Status:** 📋 Planejada
**Prioridade:** 🟡 Alta

**Objetivo:** Catalogar e homenagear os mestres do repente

#### Página Index `/cantadores`

**Hero:**
```
Os Mestres da Cantoria
Bibliotecas vivas da cultura nordestina
```

**Filtros:**
- Por estado/região
- Por geração (veteranos, contemporâneos, jovens)
- Por especialidade (estilo preferido)
- Mulheres cantadoras
- Ativos/Inativos/In Memoriam

**Grid de Cantadores:**

Card mostra:
- Foto (se disponível) ou avatar com iniciais
- Nome completo
- Apelido/alcunha (ex: "O Matemático dos Versos")
- Local de origem
- Badge de status (Ativo, In Memoriam)
- Número de repentes no acervo
- Estilos favoritos (tags)
- CTA: "Ver Perfil"

**Seção Especial:**
"Participantes de Entre Cordas e Poesia" com destaque

---

#### Página Individual `/cantadores/[slug]`

**Exemplo:** `/cantadores/ivanildo-vilanova`

**Seções:**

**1. Hero:**
```
[Foto grande]

Ivanildo Vilanova
"O Poeta do Improviso"

📍 Caruaru, Pernambuco
🎵 Cantador Ativo
⭐ Especialidades: Sextilha, Mourão Voltado
```

**2. Biografia:**

Texto livre sobre o cantador:
- História de vida
- Início na cantoria
- Influências
- Conquistas
- Curiosidades

**3. No Acervo do Vilanova:**

```
X repentes catalogados
Y participações em eventos
Z colaborações com outros cantadores
```

Lista dos repentes:
- Thumbnails
- Título
- Data
- Parceiro de cantoria
- Estilo
- Link para página completa

**4. Na Websérie:**

Se participou de Entre Cordas e Poesia:
- Lista de episódios
- Citações marcantes
- Embed de trechos específicos

**5. Links Externos:**

- YouTube (se tiver canal)
- Instagram
- Facebook
- Site pessoal
- Outras referências

**6. Linha do Tempo:**

Visual cronológico:
- Marcos importantes da carreira
- Participações em eventos
- Gravações históricas

---

**Dados Necessários no DB:**

```typescript
cantadoresTable {
  id
  nome_completo
  apelido
  slug
  foto_url
  biografia
  data_nascimento
  local_origem (cidade, estado)
  status (enum: ativo, inativo, in_memoriam)
  estilos_favoritos (JSON array de estilo_ids)
  redes_sociais (JSON)
  participou_entre_cordas (boolean)
  citacoes_marcantes (JSON)
}

// Relação many-to-many
repentes_cantadores {
  repente_id
  cantador_id
}
```

---

### 5. Acervo `/acervo`
**Status:** 📋 Planejada
**Prioridade:** 🟢 Média

**Objetivo:** Navegação e descoberta do catálogo de repentes

#### Landing do Acervo `/acervo`

**Hero:**
```
Acervo Digital de Repentes
X repentes · Y cantadores · Z estilos
```

**Navegação:**
- Ver todos os repentes (`/acervo/repentes`)
- Buscar no acervo (`/acervo/buscar`)
- Explorar por estilo (links para `/estilos`)
- Explorar por cantador (links para `/cantadores`)

**Destaques:**
- Repentes recém-adicionados
- Repentes históricos importantes
- Gravações raras

---

#### Lista de Repentes `/acervo/repentes`

**Filtros Avançados:**
- Estilo
- Cantadores
- Local
- Data/Época
- Tema
- Com/sem áudio
- Qualidade da transcrição

**Ordenação:**
- Mais recentes
- Mais antigos
- Alfabética
- Por popularidade

**Layout:** Cards em grid

Card mostra:
- Título ou primeiros versos
- Cantadores (com fotos pequenas)
- Estilo (badge colorida)
- Local e data
- Ícone se tem áudio
- Preview de texto (primeiras linhas)

---

#### Página Individual de Repente `/acervo/repentes/[id]`

**Exemplo:** `/acervo/repentes/galope-os-nonatos-2023`

**Seções:**

**1. Header:**
```
Galope à Beira Mar
Os Nonatos em Serra Talhada
[Play Button] 3:45

📍 Serra Talhada, Pernambuco
📅 2023
🎵 Estilo: Galope à Beira Mar
```

**2. Player de Áudio:**
(se disponível)
- Controles completos
- Waveform visual
- Timestamps sincronizados com transcrição

**3. Transcrição Completa:**

Texto formatado com:
- Estrofes separadas
- Versos numerados
- Sílabas destacáveis (click para ver contagem)
- Rimas coloridas
- Scroll sincronizado com áudio

**4. Análise Estrutural:**

Visualização interativa:
- Métrica verificada por verso
- Esquema de rimas
- Figuras de linguagem identificadas
- Adaptações fonéticas
- Estatísticas (vocabulário, complexidade)

**5. Contexto:**

Informações sobre:
- O evento onde foi gravado
- Tema da cantoria
- Contexto histórico/social
- Notas do transcrevedor

**6. Cantadores:**

Cards dos participantes com link para perfis

**7. Repentes Relacionados:**

- Mesmo estilo
- Mesmos cantadores
- Mesmo evento
- Tema similar

---

#### Busca Avançada `/acervo/buscar`

**Interface de Busca:**

**Busca por Texto:**
- Busca semântica (não apenas palavras-chave)
- Buscar dentro de transcrições
- Buscar por temas
- Buscar por versos específicos

**Filtros Combinados:**
- Todos os filtros da lista
- Busca por cantador (autocomplete)
- Busca por local (mapa interativo?)
- Busca por período (timeline)

**Resultados:**
- Destacando onde o termo foi encontrado
- Preview contextual
- Relevância score

---

### 6. Calendário `/calendario`
**Status:** 🔮 Futuro
**Prioridade:** 🟢 Média

**Objetivo:** Divulgar eventos de cantoria

**Features:**
- Eventos recorrentes (ex: Clube do Repente toda primeira quinta)
- Eventos únicos (festivais)
- Filtro por região
- RSVP / "Tenho interesse"
- Integração com Google Calendar
- Cantadores confirmados

---

### 7. Editor Público `/editor`
**Status:** 🔮 Futuro
**Prioridade:** 🟡 Alta (mas complexo)

**Objetivo:** Ferramenta para criar repentes com auxílio de IA

**Features:**
- Escolher estilo
- Editor com análise em tempo real
- Sugestões de palavras que rimam
- Validação automática de métrica
- Geração de versos pela IA
- Salvar/publicar no acervo comunitário

**Documento:** Será detalhado quando formos implementar

---

### 8. Aprender `/aprender`
**Status:** 🔮 Futuro
**Prioridade:** 🟢 Média

**Objetivo:** Tutoriais interativos para aprender repente

**Features:**
- Trilhas de aprendizado
- Exercícios práticos
- Feedback automático
- Gamificação
- Certificados
- Progressão por estilo

---

### 9. Sobre `/sobre`
**Status:** 📋 Planejada
**Prioridade:** 🟡 Alta

**Conteúdo:**
- História do projeto
- Por que "Vilanova"? (homenagem a Ivanildo Vilanova)
- Equipe (se houver)
- Tecnologia utilizada
- Open source
- Agradecimentos

---

### 10. Contribuir `/contribuir`
**Status:** 📋 Planejada
**Prioridade:** 🟡 Alta

**Seções:**
- Como você pode ajudar
- Compartilhar gravações
- Transcrever repentes
- Documentar cantadores
- Contribuir com código (GitHub)
- Contribuir com design
- Divulgar o projeto
- Guia de contribuição técnico
- Código de conduta

---

### 11. API Documentation `/api`
**Status:** 🔮 Futuro
**Prioridade:** 🟢 Baixa

**Objetivo:** Docs para pesquisadores usarem a API

**Conteúdo:**
- Endpoints disponíveis
- Autenticação
- Rate limits
- Schemas dos dados
- Exemplos de uso
- SDKs (se houver)

---

## 🎨 Componentes Compartilhados

### Navigation Bar

**Desktop:**
```
[Logo Vilanova]    Estilos | Cantadores | Acervo | Entre Cordas    [Contribuir]
```

**Mobile:**
```
[☰ Menu]    [Logo]    [🔍 Buscar]
```

**Footer:** (mesma estrutura em todas as páginas)

---

## 🗄️ Priorização de Desenvolvimento

### Fase 1: MVP Público (Atual)
🔴 **Crítico:**
- ✅ Landing page revisada (este doc)
- ✅ Entre Cordas e Poesia
- 📋 Estilos (index + 3 páginas individuais)
- 📋 Sobre
- 📋 Contribuir

### Fase 2: Acervo
🟡 **Alto:**
- Cantadores (index + perfis básicos)
- Acervo (index + lista + páginas individuais)
- Busca simples

### Fase 3: Interatividade
🟢 **Médio:**
- Editor público
- Calendário
- Aprender (tutoriais básicos)

### Fase 4: Comunidade
🟢 **Baixo:**
- API pública
- Sistema de contribuição direta
- Perfis de usuários
- Comentários/discussões

---

## 📊 Métricas de Sucesso

### Para Landing Page:
- Taxa de scroll até o final
- Cliques em CTAs principais
- Tempo na página
- Taxa de bounce

### Para Conteúdo:
- Páginas mais visitadas
- Tempo médio por página
- Taxa de retorno
- Compartilhamentos sociais

### Para Acervo:
- Repentes mais acessados
- Uso da busca
- Downloads de transcrições
- Players de áudio reproduzidos

### Para Contribuição:
- Visitantes em /contribuir
- Cliques para GitHub
- Issues abertas
- PRs recebidos

---

Este documento serve como roadmap e referência para todas as páginas do portal. Cada página listada aqui merecerá seu próprio documento detalhado quando for implementada.
