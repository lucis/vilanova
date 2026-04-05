# GitHub Copilot Instructions - Projeto Vilanova

Este é o **Projeto Vilanova** - acervo digital de repente nordestino.

## 📊 Estrutura de Dados

**IMPORTANTE:** Dados estão em arquivos modulares, não em arquivo único!

```
public/data/
├── index.json        # Índice de todas as cantorias (SEMPRE atualize)
└── cantorias/        # Arquivos individuais por cantoria
    ├── {id}.json     # Cantoria completa com estrofes
```

## 🎵 Adicionar Nova Cantoria

1. **Crie** `public/data/cantorias/{id}.json`
2. **Adicione** entrada em `public/data/index.json` (array `cantorias`)
3. **Atualize** `metadata` em `index.json`:
   - `total_repentes` += 1
   - `total_estrofes_catalogadas` += N
   - `ultima_atualizacao` = data atual
4. **(Opcional)** Crie transcrição em `repentes/{id}.txt`

## 🚨 NUNCA FAÇA ISSO

- ❌ NÃO edite `dist/` (gerado automaticamente)
- ❌ NÃO crie `acervo.json` (obsoleto)
- ❌ NÃO esqueça de atualizar `index.json`
- ❌ NÃO use IDs duplicados

## ✅ SEMPRE FAÇA ISSO

- ✅ Use dados via `src/lib/acervo.ts` (build Astro)
- ✅ Siga estrutura de estilos em `estilos.json`
- ✅ Valide contagem de sílabas
- ✅ Atualize metadata

## 📚 Consulte

- `docs/projeto/DATA-MODEL.md` - Estrutura completa
- `docs/public-data/README.md` - Guia de uso de `public/data/`
- `docs/README.md` - Índice da pasta `docs/`
- `.cursorrules` - Regras detalhadas
