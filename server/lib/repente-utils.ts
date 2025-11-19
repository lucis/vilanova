/**
 * Utility functions for repente processing
 * 
 * This file contains helper functions for:
 * - Syllable counting (contagem silábica poética)
 * - Rhyme validation (validação de rimas)
 * - Prompt building for AI completion
 */

interface Estilo {
  nome: string;
  slug: string;
  estrutura: {
    metrica: string;
    versos_por_estrofe: number;
    esquema_rima: string;
    tonicas?: string;
    obrigatoriedade?: string;
  };
  exemplo: string;
  exemplo_autor?: string;
}

/**
 * Load estilos from JSON file
 */
export async function loadEstilos(): Promise<Estilo[]> {
  // In production, this would be loaded from the file system
  // For now, we'll import it directly
  const response = await fetch('https://vilanova.deco.site/data/estilos.json');
  const data = await response.json();
  return data.estilos;
}

/**
 * Count poetic syllables (sílabas poéticas)
 * Counts up to the last stressed syllable (última tônica)
 */
export function countSyllables(verso: string): number {
  // Remove extra spaces
  verso = verso.trim().toLowerCase();
  
  if (!verso) return 0;

  // Simple syllable counting (Portuguese)
  // This is a simplified version - a full implementation would need
  // phonetic rules for Portuguese
  
  // Split into potential syllables based on vowels
  const vowels = 'aeiouáéíóúâêôãõ';
  let count = 0;
  let prevWasVowel = false;

  for (let i = 0; i < verso.length; i++) {
    const char = verso[i];
    const isVowel = vowels.includes(char);

    if (isVowel && !prevWasVowel) {
      count++;
    }

    prevWasVowel = isVowel;
  }

  // Adjust for common patterns
  // This is simplified - real implementation needs more rules
  return count;
}

/**
 * Extract rhyme from a verse (últimas sílabas tônicas)
 */
export function extractRhyme(verso: string): string {
  // Get last word
  const words = verso.trim().split(/\s+/);
  const lastWord = words[words.length - 1];
  
  if (!lastWord) return '';

  // Remove punctuation
  const clean = lastWord.replace(/[.,!?;:]/g, '').toLowerCase();
  
  // Get last 3-4 characters as rhyme sound
  return clean.slice(-4);
}

/**
 * Check if two verses rhyme
 */
export function checkRhyme(rhyme1: string, rhyme2: string): boolean {
  if (!rhyme1 || !rhyme2) return false;
  
  // Simple phonetic comparison
  // Real implementation would use phonetic rules
  return rhyme1.slice(-3) === rhyme2.slice(-3);
}

/**
 * Parse rhyme scheme (ex: "ABBAACCA" -> pairs of indices that should rhyme)
 */
export function parseRhymeScheme(esquema: string): [number, number][] {
  const pairs: [number, number][] = [];
  const seen = new Map<string, number[]>();

  // Group indices by rhyme letter
  for (let i = 0; i < esquema.length; i++) {
    const letter = esquema[i];
    if (!seen.has(letter)) {
      seen.set(letter, []);
    }
    seen.get(letter)!.push(i);
  }

  // Create pairs from groups
  seen.forEach(indices => {
    for (let i = 0; i < indices.length - 1; i++) {
      for (let j = i + 1; j < indices.length; j++) {
        pairs.push([indices[i], indices[j]]);
      }
    }
  });

  return pairs;
}

/**
 * Validate metrics (syllable count) for all verses
 */
export function validateMetrics(versos: string[], estilo: Estilo): any[] {
  const metricaMatch = estilo.estrutura.metrica.match(/(\d+)/);
  const expectedSyllables = metricaMatch ? parseInt(metricaMatch[0]) : 0;

  return versos.map((verso, i) => {
    const silabas = countSyllables(verso);
    
    return {
      verso: i + 1,
      silabas,
      valido: Math.abs(silabas - expectedSyllables) <= 1, // Allow 1 syllable tolerance
    };
  });
}

/**
 * Validate rhymes according to estilo scheme
 */
export function validateRhymes(versos: string[], estilo: Estilo): any {
  const esquema = estilo.estrutura.esquema_rima;
  const ultimasSilabas = versos.map(extractRhyme);
  
  const pairs = parseRhymeScheme(esquema);
  
  const paresValidados = pairs.map(([i, j]) => ({
    versos: [i + 1, j + 1],
    rima: ultimasSilabas[i],
    valido: checkRhyme(ultimasSilabas[i], ultimasSilabas[j]),
  }));

  return {
    esquema,
    valido: paresValidados.every(p => p.valido),
    pares: paresValidados,
  };
}

/**
 * Build prompt for AI completion
 */
export function buildPrompt(
  estilo: Estilo,
  versos: (string | null)[],
  versosFaltantes: number[]
): string {
  return `
Você é um mestre em repente nordestino. Complete os versos faltantes seguindo as regras do estilo ${estilo.nome}.

REGRAS DO ESTILO:
- Métrica: ${estilo.estrutura.metrica}
- Esquema de rima: ${estilo.estrutura.esquema_rima}
- Total de versos: ${estilo.estrutura.versos_por_estrofe}
${estilo.estrutura.obrigatoriedade ? `- OBRIGATÓRIO: ${estilo.estrutura.obrigatoriedade}` : ''}

EXEMPLO DE REFERÊNCIA:
${estilo.exemplo}
${estilo.exemplo_autor ? `(${estilo.exemplo_autor})` : ''}

ESTROFE INCOMPLETA:
${versos.map((v, i) => `${i + 1}. ${v || '[A COMPLETAR]'}`).join('\n')}

INSTRUÇÕES:
1. Complete APENAS os versos marcados [A COMPLETAR]
2. Mantenha a métrica exata (contagem de sílabas poéticas)
3. Respeite o esquema de rimas
4. Use linguagem poética natural do repente nordestino
5. Mantenha coerência temática com os versos existentes
6. Se houver mote fixo, use-o exatamente como especificado

Complete agora os versos faltantes com maestria poética.
  `.trim();
}

/**
 * Build schema for AI_GENERATE_OBJECT
 */
export function buildSchema(versosFaltantes: number[]): any {
  const properties: any = {};
  
  versosFaltantes.forEach(i => {
    properties[`verso_${i}`] = {
      type: 'string',
      description: `Verso ${i + 1} da estrofe, seguindo métrica e rima do estilo`
    };
  });

  return {
    type: 'object',
    properties,
    required: versosFaltantes.map(i => `verso_${i}`)
  };
}
