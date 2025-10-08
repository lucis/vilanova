#!/usr/bin/env -S deno run --allow-read --allow-write

/**
 * Script para estruturar estrofes dos repentes
 * 
 * Lê o acervo-estruturado.json e gera arquivos TXT formatados
 * com estrofes separadas visualmente para facilitar visualização
 */

import acervoData from "../repentes/acervo-estruturado.json" with { type: "json" };

interface Estrofe {
  numero: number;
  cantador: string;
  versos: string[];
  tema: string;
}

interface Repente {
  id: string;
  slug: string;
  titulo: string;
  estilo: {
    nome: string;
    metrica: string;
    esquema_rima: string;
    mote_fixo?: string;
  };
  cantadores: Array<{
    nome: string;
    dupla?: string;
  }>;
  local: string | null;
  ano: number | null;
  contexto: string;
  estrofes: Estrofe[];
  links: {
    youtube: string;
    spotify: string | null;
  };
}

function gerarArquivoEstruturado(repente: Repente): string {
  const { titulo, estilo, cantadores, local, ano, contexto, estrofes, links } = repente;
  
  let conteudo = `# ${titulo}\n\n`;
  
  // Metadados
  conteudo += `**Estilo:** ${estilo.nome}\n`;
  conteudo += `**Cantadores:** ${cantadores.map(c => c.nome).join(" e ")}\n`;
  if (local) conteudo += `**Local:** ${local}\n`;
  if (ano) conteudo += `**Ano:** ${ano}\n`;
  conteudo += `**Contexto:** ${contexto}\n`;
  if (links.youtube) conteudo += `**YouTube:** ${links.youtube}\n`;
  
  conteudo += `\n---\n\n`;
  
  // Informações do Estilo
  conteudo += `## Informações do Estilo\n\n`;
  conteudo += `- **Métrica:** ${estilo.metrica}\n`;
  conteudo += `- **Esquema de rima:** ${estilo.esquema_rima}\n`;
  if (estilo.mote_fixo) {
    conteudo += `- **Mote fixo:** "${estilo.mote_fixo}"\n`;
  }
  
  conteudo += `\n---\n\n`;
  
  // Estrofes
  if (estrofes.length > 0) {
    conteudo += `## Estrofes\n\n`;
    
    for (const estrofe of estrofes) {
      conteudo += `### Estrofe ${estrofe.numero} — ${estrofe.cantador}\n\n`;
      conteudo += `_Tema: ${estrofe.tema}_\n\n`;
      conteudo += `\`\`\`\n`;
      
      estrofe.versos.forEach((verso, idx) => {
        conteudo += `${verso}\n`;
      });
      
      conteudo += `\`\`\`\n\n`;
    }
  } else {
    conteudo += `## Estrofes\n\n`;
    conteudo += `_As estrofes desta cantoria ainda estão sendo extraídas e estruturadas._\n\n`;
  }
  
  return conteudo;
}

async function main() {
  console.log("🎵 Estruturando estrofes dos repentes...\n");
  
  for (const repente of acervoData.repentes as Repente[]) {
    if (repente.estrofes.length > 0) {
      const conteudo = gerarArquivoEstruturado(repente);
      const fileName = `${repente.slug}-estruturado.md`;
      const filePath = `./repentes/${fileName}`;
      
      await Deno.writeTextFile(filePath, conteudo);
      console.log(`✓ Criado: ${fileName} (${repente.estrofes.length} estrofes)`);
    } else {
      console.log(`○ Pulado: ${repente.slug} (sem estrofes estruturadas ainda)`);
    }
  }
  
  console.log(`\n✅ Processo concluído!`);
  console.log(`\nArquivos gerados em /repentes/*-estruturado.md`);
  console.log(`\nEsses arquivos servem para:`);
  console.log(`  - Visualização clara das estrofes separadas`);
  console.log(`  - Identificação de quem canta cada parte`);
  console.log(`  - Base para as páginas de detalhe`);
}

if (import.meta.main) {
  main();
}

