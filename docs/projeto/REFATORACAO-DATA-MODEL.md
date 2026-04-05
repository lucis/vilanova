# 🔄 Refatoração do Data Model - 2025-01-17

## 📝 Resumo da Mudança

Refatoramos o sistema de dados de **um arquivo monolítico** para **arquivos modulares** otimizados para edição por IA.

---

## ✅ O Que Foi Feito

### 1. Nova Arquitetura de Dados

**Antes:**
```
public/data/acervo.json  (54 KB - difícil de editar)
```

**Depois:**
```
public/data/
├── index.json           (5 KB - índice leve)
├── estilos.json         (10 KB - mantido)
└── cantorias/           (13 arquivos de 2-8 KB cada)
    ├── pensamento-positivo-os-nonatos.json
    ├── oitavas-os-nonatos-sao-lourenco.json
    └── ...
```

### 2. Camada de Compatibilidade

Criamos `view/src/lib/acervoCompat.ts` que:
- ✅ Importa todos os arquivos individuais
- ✅ Agrega em formato compatível com código existente
- ✅ **ZERO breaking changes** nos componentes React

### 3. Utilitários para Carregamento

Criamos `view/src/lib/loadAcervo.ts` com funções:
- `getIndex()` - Carrega índice leve
- `loadCantoria(id)` - Carrega cantoria completa
- `loadAllCantorias()` - Carrega tudo (use com cuidado)
- `filterCantorias()` - Filtra no índice

### 4. Scripts de Manutenção

- `npm run data:split` - Divide acervo.json em arquivos individuais
- `npm run data:sync` - Sincroniza public/data/ → dist/client/data/

### 5. Componentes Atualizados

Todos os componentes agora usam `acervoCompat.ts`:
- ✅ `home.tsx`
- ✅ `cantorias.tsx`
- ✅ `cantoria.tsx`
- ✅ `cantadores.tsx`
- ✅ `cantador.tsx`
- ✅ `estilos.tsx`
- ✅ `estilo.tsx`
- ✅ `global-search.tsx`

---

## 📊 Estatísticas

| Métrica | Valor Atual |
|---------|-------------|
| **Total de Cantorias** | 13 |
| **Total de Estrofes** | 57 |
| **Tamanho por Arquivo** | 2-8 KB (média 4 KB) |
| **Arquivo Mais Pesado** | `sextilha-lampiao-gruta-angicos.json` (8 KB) |
| **Breaking Changes** | 0 (retrocompatível) |

---

## 🎯 Benefícios

### Para IA (Cursor, Windsurf, etc.)

- ✅ **Arquivos menores** (2-8 KB) cabem melhor no contexto
- ✅ **Fácil de localizar** - um arquivo por cantoria
- ✅ **Edição isolada** - não precisa processar todo o acervo
- ✅ **Menos erros** - escopo menor reduz alucinações

### Para Desenvolvedores

- ✅ **Git-friendly** - Mudanças isoladas por cantoria
- ✅ **Menos conflitos** de merge em PRs colaborativos
- ✅ **Performance** - Carrega dados sob demanda
- ✅ **Organização clara** - Um arquivo = uma cantoria

### Para Contribuidores

- ✅ **Fácil de entender** - Estrutura intuitiva
- ✅ **Fácil de editar** - JSON pequeno e limpo
- ✅ **Fácil de adicionar** - Copie um arquivo existente como template

---

## 🔧 Processo de Adição de Cantoria (Para IA)

Quando receber pedido para adicionar cantoria:

### 1. Crie arquivo individual
```bash
public/data/cantorias/{id}.json
```

### 2. Adicione entrada no índice
Edite `public/data/index.json` → array `cantorias`

### 3. Atualize metadata
Em `index.json`:
- `metadata.total_repentes` += 1
- `metadata.total_estrofes_catalogadas` += N (número de estrofes)
- `metadata.ultima_atualizacao` = data atual

### 4. (Opcional) Crie transcrição
```bash
repentes/{id}.txt
```

### 5. Rode sync
```bash
npm run data:sync  # Copia para dist/
```

---

## 📁 Arquivos Removidos

Os seguintes arquivos foram **deletados** (duplicados):

- ❌ `repentes/acervo-estruturado.json` (duplicata)
- ❌ `repentes/cantorias.json` (versão antiga)
- ❌ `public/data/cantorias.json` (versão simplificada redundante)
- ❌ `dist/client/data/cantorias.json` (cópia)

**Backup temporário:** `public/data/acervo.json.backup` 
(pode ser deletado após validação completa)

---

## ✅ Validação Pós-Refatoração

```bash
# Verificar estrutura
ls -lh public/data/cantorias/ | wc -l  # Deve ser 13

# Verificar índice
jq '.cantorias | length' public/data/index.json  # Deve ser 13

# Testar build
npm run build  # Deve compilar sem erros

# Testar dev
npm run dev    # Deve funcionar normalmente
```

---

## 🚨 Rollback (Se Necessário)

Se algo der errado:

```bash
# Restaurar backup
cp public/data/acervo.json.backup public/data/acervo.json

# Reverter componentes
git restore view/src/lib/acervoCompat.ts
git restore view/src/lib/loadAcervo.ts
git restore view/src/routes/*.tsx
git restore view/src/components/global-search.tsx

# Deletar arquivos novos
rm -rf public/data/cantorias/
rm public/data/index.json
```

---

## 📚 Próximos Passos

- [ ] Validar em produção após deploy
- [ ] Remover `acervo.json.backup` após confirmação
- [ ] Criar script de validação automática
- [ ] Adicionar CI/CD check para integridade dos dados
- [ ] Considerar criar tipos TypeScript para os JSONs

---

**Data da Refatoração:** 2025-01-17  
**Responsável:** Cursor AI + Lucis  
**Motivação:** Facilitar edição por IA e colaboração humana  
**Status:** ✅ Concluído com sucesso

