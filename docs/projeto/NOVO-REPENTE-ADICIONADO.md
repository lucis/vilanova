# Novo Repente Adicionado - Sistema de Estruturação

## ✅ Galope à Beira Mar - Hipólito Moura e Rogério Menezes

### 📝 Novo Repente Catalogado

**Título:** Galope à Beira Mar - Desafio na TV Diário  
**Cantadores:** Hipólito Moura vs Rogério Menezes  
**Local:** TV Diário, Fortaleza, Ceará  
**Estilo:** Galope à Beira Mar  
**YouTube:** https://www.youtube.com/watch?v=3CXPD0IkYQE  
**Estrofes:** 6 estrofes completas estruturadas  

### 🎭 Características desta Peleja

**Tipo:** Desafio intenso televisivo  
**Tom:** Agressivo, provocativo (típico de pelejas)  
**Destaques:**
- Provocações mútuas com humor ácido
- Referências a cantadores famosos (Zé Viola, Geraldo, Dinis)
- Demonstração técnica sob pressão
- Críticas pessoais (característica de pelejas)

### 📊 Estrofes Catalogadas

**6 estrofes de 10 versos decassílabos cada:**

1. **Hipólito Moura:** "Rogério, faz tempo que eu vivo tentando..."
   - Tema: Provocação inicial, diferenças de estilo

2. **Rogério Menezes:** "Você diz que é duro, igual Figueiredo..."
   - Tema: Resposta com ironia, comparações exageradas

3. **Hipólito Moura:** "Além de covarde, você é ingrato..."
   - Tema: Acusação de ingratidão, crítica pessoal forte

4. **Rogério Menezes:** "Hipólito falou por todo o Nordeste..."
   - Tema: Contra-ataque, crítica à inteligência

5. **Hipólito Moura:** "Meu verso lhe faz medo que só sarda..."
   - Tema: Escalada da agressão, dominação

6. **Rogério Menezes:** "Dizer que cantando eu sou um fracasso..."
   - Tema: Afirmação de superioridade, referências a mestres

---

## 🔧 Sistema de Estruturação Implementado

### Arquivos Criados

**1. Transcrição Bruta:**
```
/repentes/galope-hipolito-rogerio-tv.txt
```
- Texto original com timestamps
- Metadados básicos
- Análise estrutural manual

**2. Arquivo Estruturado (NOVO!):**
```
/repentes/galope-hipolito-rogerio-tv-diario-estruturado.md
```
- Estrofes separadas visualmente
- Identificação de cantador por estrofe
- Tema de cada estrofe
- Versos em blocos de código
- Metadados completos

**3. JSON Estruturado:**
```
/repentes/acervo-estruturado.json
```
- Array de estrofes com versos
- Dados prontos para consumo pela aplicação web

### Script Criado

**`scripts/estruturar-estrofes.ts`**

Funcionalidade:
- ✅ Lê `acervo-estruturado.json`
- ✅ Gera arquivos `.md` formatados para cada repente
- ✅ Separa estrofes visualmente
- ✅ Identifica cantador de cada estrofe
- ✅ Formata para fácil leitura

**Como rodar:**
```bash
deno run --allow-read --allow-write scripts/estruturar-estrofes.ts
```

---

## 📋 Papel do Sistema de Estruturação

### Problema:
Transcrições brutas são difíceis de ler e não separam:
- Quem canta cada estrofe
- Onde começa e termina cada estrofe
- Qual o tema de cada parte

### Solução:
Sistema de 3 camadas:

**Camada 1: Transcrição Bruta (.txt)**
- Output direto do Whisper
- Timestamps preservados
- Texto corrido

**Camada 2: JSON Estruturado**
- Dados para aplicação web
- Arrays de estrofes
- Metadados ricos
- Pronto para consumo via API/componentes

**Camada 3: Markdown Estruturado (.md)**
- Visualização humana facilitada
- Estrofes separadas com cabeçalhos
- Blocos de código para versos
- Documentação clara

---

## 🎯 Benefícios

### Para Leitura:
- ✅ Fácil identificar quem canta cada parte
- ✅ Estrofes visualmente separadas
- ✅ Tema contextualizado
- ✅ Metadados sempre visíveis

### Para Desenvolvimento:
- ✅ JSON pronto para React components
- ✅ Dados estruturados para busca
- ✅ Fácil adicionar novos repentes
- ✅ Script automatiza a geração

### Para Usuários:
- ✅ Páginas web com estrofes separadas
- ✅ Alternância visual entre cantadores
- ✅ Links funcionais
- ✅ Contexto completo

---

## 📊 Estado Atualizado do Acervo

### Antes:
- 4 repentes
- 4 estrofes catalogadas
- 0 links do YouTube

### Agora:
- **5 repentes** ⭐
- **10 estrofes catalogadas** ⭐
- **1 link do YouTube** ⭐
- **2 arquivos estruturados** ⭐

### Repentes com Estrofes Completas:
1. ✅ Oitavas - Os Nonatos (4 estrofes)
2. ✅ Galope - Hipólito e Rogério (6 estrofes)

### Repentes Pendentes:
3. ⏳ Galope - Os Nonatos (Serra Talhada)
4. ⏳ Galope - Sebastião e Ivanildo
5. ⏳ Martelo Alagoano

---

## 🚀 Próximos Passos

### Imediato:
1. ✅ Extrair estrofes dos 3 repentes restantes
2. ✅ Rodar script de estruturação
3. ✅ Verificar páginas de detalhe funcionando
4. ✅ Adicionar mais links do YouTube

### Páginas:
- Rota `/cantorias/[slug]` já implementada
- Consome `acervo-estruturado.json`
- Exibe estrofes separadas
- Links funcionais

---

## 🎵 Como Funciona a Estruturação

```
1. Adicionar repente ao acervo-estruturado.json
   ↓
2. Incluir array de estrofes com:
   - numero
   - cantador
   - versos (array de strings)
   - tema
   ↓
3. Rodar: deno run --allow-read --allow-write scripts/estruturar-estrofes.ts
   ↓
4. Arquivos .md são gerados automaticamente
   ↓
5. Páginas web consomem o JSON
```

---

**O Vilanova agora tem um sistema completo de estruturação de estrofes!** 🎉

Cada repente será:
- Transcrito (Whisper)
- Estruturado (estrofes separadas)
- Documentado (arquivos .md)
- Disponibilizado (páginas web)

**Feito com ❤️ para preservar a cantoria nordestina**
