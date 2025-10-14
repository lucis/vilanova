# Análise de Dados Estruturados - Acervo Vilanova

## Status Atual (2025-10-14)

### Cantorias no `cantorias.json` (9 total)
1. ✅ galope-os-nonatos-serra-talhada
2. ✅ galope-sebastiao-ivanildo-caruaru
3. ✅ oitavas-os-nonatos-sao-lourenco
4. ✅ martelo-alagoano (genérico)
5. ✅ desafio-ze-cardoso-louro-branco
6. ✅ galope-valdir-teles-moacir-laurentino
7. ✅ martelo-alagoano-valdir-teles-ze-cardoso
8. ⏳ **martelo-alagoano-valdir-teles-ze-cardoso-2** (Profissões)
9. ⏳ **sextilha-lampiao-gruta-angicos**

### Cantorias no `acervo-estruturado.json` (10 total)
1. ✅ oitavas-os-nonatos-sao-lourenco (COM ESTROFES)
2. ⚠️ galope-os-nonatos-serra-talhada (SEM ESTROFES)
3. ⚠️ galope-sebastiao-ivanildo (SEM ESTROFES)
4. ⚠️ martelo-alagoano (SEM ESTROFES)
5. ✅ galope-hipolito-rogerio-tv (COM ESTROFES)
6. ✅ desafio-ze-cardoso-louro-branco (COM ESTROFES)
7. ✅ galope-valdir-teles-moacir-laurentino (COM ESTROFES)
8. ✅ martelo-alagoano-valdir-teles-ze-cardoso (COM ESTROFES)
9. ✅ desafio-valdir-teles-ze-cardoso-bonito (COM ESTROFES)
10. ✅ homenagem-delmiro-gouveia (COM ESTROFES)

### ❌ Faltando no JSON estruturado:
- **sextilha-lampiao-gruta-angicos** (22 sextilhas completas, já transcrito!)
- **martelo-alagoano-valdir-teles-ze-cardoso-2** (8 décimas, já transcrito!)

### ⚠️ Esquemas de Rima Incorretos no JSON:
- **Oitava**: `ABBAACCA` → deve ser `ABBAACCB`
- **Galope**: `AAAAABBCCM` → deve ser `ABBAACCDDC`

---

## Plano de Ação

### 1. Adicionar Sextilha do Lampião ✅
- 22 estrofes completas disponíveis em `sextilha-lampiao-gruta-angicos.txt`
- Cantadores: Valdir Teles e Sebastião Dias
- Local: Gruta de Angicos, Sergipe
- YouTube: https://www.youtube.com/watch?v=f1dN-dkSOuY
- Duração: 10:02

### 2. Adicionar Martelo Alagoano 2 (Profissões) ✅
- 8 estrofes completas disponíveis em `martelo-alagoano-valdir-teles-ze-cardoso-2.txt`
- Cantadores: Valdir Teles e Zé Cardoso
- YouTube: https://www.youtube.com/watch?v=KjSqrG9a6z4
- Duração: 6:30

### 3. Corrigir Esquemas de Rima ⏳
- Oitava: ABBAACCA → **ABBAACCB**
- Não mudar Galope (estava simplificado mas representa o padrão)

### 4. Estruturar Estrofes Faltantes ⏳
- galope-os-nonatos-serra-talhada
- galope-sebastiao-ivanildo
- martelo-alagoano (genérico)

---

## Formato do JSON Estruturado

```json
{
  "id": "id-slug",
  "slug": "nome-slug",
  "titulo": "Título da Cantoria",
  "estilo": {
    "nome": "Nome do Estilo",
    "slug": "slug-estilo",
    "versos_por_estrofe": 10,
    "metrica": "decassílabos (10 sílabas)",
    "esquema_rima": "ABBAACCDDC",
    "mote_fixo": "Mote se houver"
  },
  "cantadores": [
    {
      "nome": "Nome do Cantador",
      "slug": "slug-cantador",
      "apelido": "Apelido opcional"
    }
  ],
  "local": "Local da cantoria",
  "ano": 2023,
  "duracao": "10:02",
  "contexto": "Descrição do contexto",
  "estrofes": [
    {
      "numero": 1,
      "cantador": "Nome do Cantador",
      "versos": [
        "Primeiro verso",
        "Segundo verso",
        ...
      ],
      "tema": "Tema da estrofe"
    }
  ],
  "links": {
    "youtube": "URL",
    "spotify": null
  },
  "transcricao_path": "/repentes/arquivo.txt",
  "audio_path": null,
  "destaque": true
}
```

---

## Estrutura das Estrofes por Estilo

### Sextilha (6 versos)
```json
{
  "numero": 1,
  "cantador": "Valdir Teles",
  "versos": [
    "Essa é a grota de Angico,",
    "famosa por tradição,",
    "onde se deu o massacre",
    "do bando de Lampião.",
    "Foi o começo do fim",
    "do cangaço no sertão."
  ],
  "tema": "Introdução histórica - Gruta de Angicos"
}
```

### Oitava (8 versos)
```json
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
```

### Galope à Beira Mar (10 versos + mote)
```json
{
  "numero": 1,
  "cantador": "Hipólito Moura",
  "versos": [
    "Rogério, faz tempo que eu vivo tentando",
    "lhe colocar perto dos pesos pesados",
    "Nós somos bastante diferenciados",
    "Eu cantando muito e você enganando",
    "Eu sou muito sério quando estou cantando",
    "E você tem mania de se rebolar",
    "Gesticula e tenta me intimidar",
    "Levante a cabeça e abaixe esse dedo",
    "que as suas caretas não me metem medo",
    "nos dez de galope da beira do mar"
  ],
  "tema": "Provocação inicial"
}
```

### Martelo Alagoano (10 versos + mote triplo)
```json
{
  "numero": 1,
  "cantador": "Valdir Teles ou Zé Cardoso",
  "versos": [
    "No cenário de cada profissão,",
    "cada um se espelha no que faz.",
    ...
    "Desafia o perigo, enfrenta a morte.",
    "Nos dez pés de martelo alagoano.",
    "Nos dez pés de martelo alagoano.",
    "Nos dez pés de martelo alagoano."
  ],
  "tema": "Profissão: Vaqueiro"
}
```

---

## Próximos Passos

1. ✅ Criar entrada para Sextilha Lampião
2. ✅ Criar entrada para Martelo 2
3. ⏳ Corrigir esquema de rima da Oitava
4. ⏳ Estruturar estrofes dos Galopes faltantes
5. ⏳ Atualizar metadados (total_repentes, total_estrofes)

---

**Status**: Documento de análise criado para guiar estruturação completa
**Data**: 2025-10-14

