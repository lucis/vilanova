# 📖 Dicionário de Rimas - Documentação

## Visão Geral

O **Dicionário de Rimas** é uma página interativa que visualiza e agrupa as palavras finais dos versos de todas as cantorias do acervo Vilanova. É uma ferramenta única para poetas, estudantes e entusiastas do repente descobrirem padrões de rima e explorarem o vocabulário dos cantadores.

## Funcionalidades

### 🎯 Agrupamento Inteligente

As rimas são agrupadas por suas **terminações fonéticas** (últimas 2-4 letras normalizadas), permitindo descobrir:
- Palavras que rimam entre si
- Frequência de uso de cada rima
- Contexto dos versos onde aparecem

**Exemplo:**
- Terminação `-ente`: independente (10x), valente (4x), serpente (3x)
- Terminação `-oano`: alagoano (32x)
- Terminação `-mar`: mar (23x)

### 🔍 Filtros Disponíveis

1. **Por Letra**: Navegue pelas rimas começando com cada letra do alfabeto
2. **Por Estilo**: Filtre rimas de um estilo específico (Martelo Alagoano, Galope à Beira Mar, etc.)
3. **Busca**: Pesquise por palavra ou terminação específica
4. **Ordenação**: Por frequência (mais usadas) ou ordem alfabética

### 📊 Estatísticas em Tempo Real

A página mostra:
- Total de terminações de rimas diferentes
- Total de palavras únicas
- Total de versos catalogados
- Número de cantorias analisadas

### 🎨 Interface Interativa

- **Cards Expansíveis**: Clique em uma terminação para ver todas as palavras e versos
- **Contexto Rico**: Cada verso mostra:
  - Texto completo do verso
  - Link para a cantoria
  - Nome do cantador
  - Estilo da cantoria
- **Responsivo**: Funciona perfeitamente em desktop e mobile

## Como Usar

### Para Poetas e Estudantes

1. **Encontrar Rimas**: Digite uma palavra na busca para ver com que ela rima
2. **Inspiração**: Navegue pelas terminações mais frequentes para descobrir vocabulário comum
3. **Estudar Padrões**: Compare como diferentes cantadores usam as mesmas rimas

### Para Pesquisadores

1. **Análise de Vocabulário**: Veja quais palavras são mais usadas em cada estilo
2. **Padrões de Rima**: Identifique preferências de rima por estilo ou cantador
3. **Contexto Histórico**: Veja como palavras são usadas em diferentes contextos

## Exemplo de Uso

```
Buscar: "amor"
Resultado: 
  - Terminação "-amor"
    • amor (15 ocorrências)
      - "Sei que acima da morte está o amor." (Pensamentos e Pensadores)
      - "O amor é mais nobre, é mais humano" (Ivanildo Vilanova)
```

## Dados Processados

Atualmente o dicionário analisa:
- **12 cantorias** com versos completos
- **104 estrofes** catalogadas
- **980 versos** transcritos
- **436 terminações** de rima diferentes

Os dados são extraídos em tempo real do acervo, então novos repentes adicionados aparecem automaticamente.

## Navegação

Acesse: `/rimas` ou clique em "Rimas" no menu de navegação

## Implementação Técnica

### Arquivos

- **Página**: `/view/src/routes/rimas.tsx`
- **Utilitários**: `/view/src/lib/rhymes.ts`
- **Navegação**: Adicionado em `/view/src/components/site-header.tsx`

### Algoritmo de Agrupamento

1. **Extração**: Remove pontuação e extrai palavra final de cada verso
2. **Normalização**: Remove acentos e converte para minúsculas
3. **Terminação**: Extrai últimas 2-4 letras dependendo do tamanho da palavra
4. **Agrupamento**: Agrupa palavras com mesma terminação

### Performance

- Processamento em memória usando `useMemo` para cache
- Filtros aplicados de forma eficiente com Maps
- Interface responsiva e rápida

## Futuras Melhorias

- [ ] Visualização de esquemas de rima (AABB, ABAB, etc.)
- [ ] Exportar lista de rimas como PDF
- [ ] Sons de rima (fonética completa, não apenas terminação)
- [ ] Estatísticas de evolução temporal das rimas
- [ ] API pública para consulta de rimas

## Contribuindo

Para adicionar novas cantorias que aparecerão no dicionário:
1. Adicione o arquivo JSON em `public/data/cantorias/`
2. Inclua as estrofes completas com todos os versos
3. O dicionário atualizará automaticamente

## Créditos

Desenvolvido para o **Projeto Vilanova** - preservação digital da cantoria nordestina.

---

**Feito com ❤️ para o repente nordestino**
