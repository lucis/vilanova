# Correções Finais - Sistema de Acervo

## ✅ Erros Conceituais Corrigidos

### 1. **Citações de Versos → Estrofes Completas**

**❌ ERRO ANTERIOR:**
Citava apenas 2 versos isolados:
```
"Chega a hora da onça beber água
e quem sofrer da pressão tome remédio"
```

**✅ CORRETO AGORA:**
Cita estrofes completas de 8 versos (no caso da Oitava):
```
Aos colegas que ficam aqui, ressalto
que é comum ter pequeno, grande e médio
Os que vão do Recife pra o Planalto
vão atrás de troféu, fama e assédio
Na fornalha não diminui a frágua,
não pretendo levar nem deixar mágoa
Chega a hora da onça beber água
e quem sofrer da pressão tome remédio
```

**Por quê?** No repente, os versos fazem sentido dentro da estrofe completa. 
A estrutura poética é fundamental — não são versos soltos.

---

### 2. **Caixinhas com Metadados**

**Novo formato de apresentação:**

```
[Estrofe completa em background Barro Claro]
────────────────────────────────────────
Cantador: Nonato Costa · Estilo: Oitava
[Link] Ver cantoria completa →
```

Cada estrofe agora inclui:
- ✅ Nome do cantador individual
- ✅ Estilo do repente
- ✅ Link para página de detalhe da cantoria
- ✅ Local (quando relevante)

---

### 3. **Identificação dos Cantadores (Os Nonatos)**

**Dupla:** Os Nonatos
- **Nonato Costa** (estimativa)
- **Nonato Neto** (estimativa)

**Lógica de identificação:**
- Estrofes alternadas entre os dois
- Um se refere ao outro na terceira pessoa
- Baseado na transcrição e alternância típica do repente

**Nota:** Identificação inicial estimada. Será verificada posteriormente.

---

### 4. **Texto sobre Transcrição Corrigido**

**❌ ANTES:**
> "Respeitamos que 'o certo é o que o poeta pronuncia'. 
> Se canta 'história' (e não 'história'), mantemos."

**✅ AGORA:**
> "Mapeamos cada estrofe, identificamos versos, contamos sílabas 
> poéticas, analisamos esquemas de rima e transformamos tudo 
> em dados estruturados."

**Foco:** Estruturação de dados, não apenas transcrição literal.

---

## 📁 Novo Sistema de Organização

### Arquivo Criado: `acervo-estruturado.json`

Estrutura detalhada para cada repente:

```json
{
  "repentes": [
    {
      "id": "oitavas-os-nonatos-sao-lourenco",
      "slug": "oitavas-os-nonatos-sao-lourenco-mata",
      "titulo": "Oitavas em São Lourenço da Mata",
      "estilo": {
        "nome": "Oitava",
        "slug": "oitava",
        "versos_por_estrofe": 8,
        "metrica": "setissílabos (7 sílabas)",
        "esquema_rima": "ABBAACCA"
      },
      "cantadores": [
        {
          "nome": "Nonato Costa",
          "slug": "nonato-costa",
          "dupla": "Os Nonatos"
        },
        {
          "nome": "Nonato Neto",
          "slug": "nonato-neto",
          "dupla": "Os Nonatos"
        }
      ],
      "estrofes": [
        {
          "numero": 1,
          "cantador": "Nonato Costa",
          "versos": [
            "São Lourenço da Mata nos escuta",
            "e pelo povo que aplaude, agora exalto",
            "Mesmo estando em primeiro na disputa,",
            "com respeito aos outros eu não falto",
            "Obrigado a vocês desta cidade",
            "pela grande receptividade",
            "Quem não calça as sandálias da humildade",
            "torce o pé se correr desalta"
          ],
          "tema": "Humildade na competição"
        }
        // ... mais estrofes
      ]
    }
  ]
}
```

---

## 🎨 Melhorias na Landing Page

### Estrofes Completas com Design Especial:

**Elementos visuais:**
- Box com header colorido (por estilo)
- Background Barro Claro para os versos
- Versos em linhas separadas (cada um é um `<span>`)
- Versos mais importantes em negrito
- Footer com cantador, estilo e link

**Exemplo implementado:**

```tsx
<div className="border-2 border-[#8B6F47] bg-white rounded-lg overflow-hidden">
  <div className="p-4 bg-[#C84B31]/5">
    {/* Header com ícone e info do estilo */}
  </div>
  
  <div className="p-6 bg-[#E8D4B0]">
    {/* 8 versos da estrofe */}
  </div>
  
  <div className="p-4 bg-white border-t-2">
    {/* Cantador · Estilo · Link */}
  </div>
</div>
```

---

## 🔗 Links para Páginas de Detalhe

Formato de URL:
```
/cantorias/{slug}
```

Exemplos:
- `/cantorias/oitavas-os-nonatos-sao-lourenco-mata`
- `/cantorias/galope-beira-mar-os-nonatos-serra-talhada`
- `/cantorias/galope-beira-mar-sebastiao-ivanildo-caruaru`
- `/cantorias/martelo-alagoano`

**Status:** Links presentes na landing page, páginas serão implementadas usando o JSON.

---

## 📊 Próximos Passos

### Imediato:
1. ✅ Extrair estrofes completas de todas as transcrições
2. ✅ Identificar cantadores individuais (especialmente Os Nonatos)
3. ✅ Preencher `acervo-estruturado.json` completamente
4. ✅ Criar páginas de detalhe `/cantorias/[slug]`
5. ✅ Criar página de lista `/cantorias`

### Estrutura das Páginas:

**`/cantorias` (lista):**
- Grid de cards
- Filtros por estilo, cantador, local
- Preview de cada cantoria

**`/cantorias/[slug]` (detalhe):**
- Player de áudio (quando disponível)
- Título e contexto
- Todas as estrofes, alternando entre cantadores
- Análise estrutural
- Links para:
  - Perfis dos cantadores
  - Página do estilo
  - YouTube/Spotify

### Dados Necessários:

Para cada repente em `acervo-estruturado.json`:
- [ ] Estrofes completas extraídas
- [ ] Identificação de qual cantador faz cada estrofe
- [ ] Temas de cada estrofe
- [ ] Links para YouTube/Spotify
- [ ] Áudio próprio (se disponível)

---

## 📝 README Atualizado

### Novas Seções:

**🚀 Sobre a Tecnologia:**
- Explicação sobre Deco Platform
- Por que escolhemos Deco
- Template e ferramentas incluídas
- Link para documentação

**🎨 Contribua com Design:**
- Seção especial destacada
- Lista de contribuições possíveis
- Link direto para abrir issue de design
- Ênfase: "PRECISAMOS DE AJUDA!"

**🧠 Usando IA para Contribuir:**
- Editores recomendados (Cursor, Windsurf, Copilot)
- Como usar a IA com o projeto
- Referência aos `.cursorrules-vilanova`

---

## 🎯 Chamado para Design

**Adicionado ao README:**

> **Estamos buscando pessoas para pensar o design cultural do Vilanova.**
> 
> Se você tem experiência com design, **por favor abra uma issue** propondo:
> - Ilustrações/SVGs de violas, cantadores, elementos nordestinos
> - Sistema de ícones customizado
> - Padrões decorativos (azulejos, renda, xilogravura)
> - Visualizações de estrutura poética
> - Melhoria da identidade visual
>
> **Nosso desafio:** Criar um design que seja culturalmente rico, respeitoso 
> com a tradição, mas moderno e acessível. Fugir de clichês.
>
> 👉 **[Propor melhorias de design](http://github.com/lucis/vilanova/issues/new?labels=design)**

---

## 🔄 Mudanças em Arquivos

### Criados:
- ✅ `/repentes/acervo-estruturado.json` — Estrutura completa com estrofes
- ✅ `/CORRECOES-FINAIS.md` — Este documento

### Modificados:
- ✅ `/README.md` — Seções de tecnologia, design, contribuição
- ✅ `/view/src/routes/home.tsx` — Estrofes completas, caixinhas, correções
- ✅ Todos os links corrigidos (http://github.com/...)

---

## 🎵 Estado Atual

**Landing Page:**
- ✅ 8 seções implementadas
- ✅ Estrofes completas (8 versos)
- ✅ Caixinhas com cantador/estilo/link
- ✅ Links para páginas de detalhe (a implementar)
- ✅ Websérie com embed do YouTube
- ✅ Design culturalmente respeitoso
- ✅ Totalmente responsivo
- ✅ Fontes aumentadas para acessibilidade

**Próximo passo crítico:**
Implementar as páginas `/cantorias/[slug]` usando o `acervo-estruturado.json`
