#!/usr/bin/env node
/**
 * Script para dividir acervo.json em arquivos individuais
 * Executa: node --loader ts-node/esm scripts/split-acervo.ts
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');

interface Cantoria {
  id: string;
  slug: string;
  titulo: string;
  [key: string]: any;
}

interface Acervo {
  repentes: Cantoria[];
  metadata: any;
}

async function splitAcervo() {
  console.log('📂 Lendo acervo.json...');
  
  const acervoPath = path.join(ROOT, 'public/data/acervo.json');
  const acervo: Acervo = JSON.parse(fs.readFileSync(acervoPath, 'utf-8'));
  
  const cantoriasDir = path.join(ROOT, 'public/data/cantorias');
  
  // Criar pasta se não existir
  if (!fs.existsSync(cantoriasDir)) {
    fs.mkdirSync(cantoriasDir, { recursive: true });
  }
  
  // Criar índice simplificado
  const index = {
    $schema: "https://json-schema.org/draft-07/schema#",
    title: "Índice de Cantorias - Vilanova",
    description: "Lista de todas as cantorias disponíveis. Cada cantoria está em seu próprio arquivo.",
    cantorias: acervo.repentes.map(cantoria => ({
      id: cantoria.id,
      slug: cantoria.slug,
      titulo: cantoria.titulo,
      estilo: cantoria.estilo.nome,
      destaque: cantoria.destaque,
      youtube: cantoria.links.youtube || null,
      _ref: `/cantorias/${cantoria.id}.json`
    })),
    metadata: {
      ...acervo.metadata,
      ultima_atualizacao: new Date().toISOString().split('T')[0]
    }
  };
  
  console.log('📝 Criando arquivo index.json...');
  fs.writeFileSync(
    path.join(ROOT, 'public/data/index.json'),
    JSON.stringify(index, null, 2),
    'utf-8'
  );
  
  console.log('✂️  Dividindo cantorias em arquivos individuais...');
  
  for (const cantoria of acervo.repentes) {
    const filename = `${cantoria.id}.json`;
    const filepath = path.join(cantoriasDir, filename);
    
    // Adicionar metadados ao arquivo individual
    const cantoriaComMeta = {
      ...cantoria,
      _metadata: {
        created_at: acervo.metadata.ultima_atualizacao,
        file_ref: `/cantorias/${filename}`,
        source: "Projeto Vilanova - vilanova.deco.page"
      }
    };
    
    fs.writeFileSync(
      filepath,
      JSON.stringify(cantoriaComMeta, null, 2),
      'utf-8'
    );
    
    console.log(`  ✅ ${filename}`);
  }
  
  console.log('');
  console.log(`✅ Concluído!`);
  console.log(`   📊 ${acervo.repentes.length} cantorias divididas`);
  console.log(`   📁 Arquivos em: public/data/cantorias/`);
  console.log(`   📇 Índice em: public/data/index.json`);
  console.log('');
  console.log('⚠️  IMPORTANTE: O arquivo acervo.json ainda existe.');
  console.log('   Revise os novos arquivos antes de deletá-lo.');
}

splitAcervo().catch(console.error);

