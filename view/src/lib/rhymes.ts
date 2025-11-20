/**
 * Utilitário para extrair e agrupar rimas do acervo
 */

import type { Cantoria, Estrofe } from "./types";

export interface RhymeWord {
  word: string; // Palavra final normalizada
  original: string; // Palavra original (com acentos, maiúsculas)
  verse: string; // Verso completo
  cantoriaId: string;
  cantoriaTitle: string;
  cantadorName: string;
  estilo: string;
  estrofeNumero: number;
  versoNumero: number; // Posição do verso na estrofe (0-indexed)
}

export interface RhymeGroup {
  rhyme: string; // Terminação da rima (últimas 2-3 sílabas)
  words: Map<string, RhymeWord[]>; // Agrupado por palavra completa
  count: number; // Total de ocorrências
}

/**
 * Extrai a palavra final de um verso (remove pontuação)
 */
function extractLastWord(verse: string): string {
  // Remove pontuação final e espaços
  const cleaned = verse.trim().replace(/[.,!?;:"'»«""]$/g, '');
  const words = cleaned.split(/\s+/);
  return words[words.length - 1] || '';
}

/**
 * Normaliza palavra para comparação (remove acentos, lowercase)
 */
function normalizeWord(word: string): string {
  return word
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

/**
 * Extrai a terminação da rima (últimas 2-4 letras dependendo do tamanho)
 */
function extractRhymeSuffix(word: string): string {
  const normalized = normalizeWord(word);
  
  // Para palavras muito curtas, usar a palavra inteira
  if (normalized.length <= 3) {
    return normalized;
  }
  
  // Para palavras médias (4-6 letras), pegar últimas 3 letras
  if (normalized.length <= 6) {
    return normalized.slice(-3);
  }
  
  // Para palavras longas, pegar últimas 4 letras
  return normalized.slice(-4);
}

/**
 * Extrai todas as rimas de uma cantoria
 */
export function extractRhymesFromCantoria(cantoria: Cantoria): RhymeWord[] {
  const rhymes: RhymeWord[] = [];

  cantoria.estrofes.forEach((estrofe: Estrofe) => {
    estrofe.versos.forEach((verso: string, index: number) => {
      const original = extractLastWord(verso);
      if (!original) return;

      const word = normalizeWord(original);

      rhymes.push({
        word,
        original,
        verse: verso,
        cantoriaId: cantoria.id,
        cantoriaTitle: cantoria.titulo,
        cantadorName: estrofe.cantador,
        estilo: cantoria.estilo.nome,
        estrofeNumero: estrofe.numero,
        versoNumero: index,
      });
    });
  });

  return rhymes;
}

/**
 * Agrupa rimas por terminação
 */
export function groupRhymesByEnding(rhymeWords: RhymeWord[]): Map<string, RhymeGroup> {
  const groups = new Map<string, RhymeGroup>();

  rhymeWords.forEach((rhymeWord) => {
    const suffix = extractRhymeSuffix(rhymeWord.word);

    if (!groups.has(suffix)) {
      groups.set(suffix, {
        rhyme: suffix,
        words: new Map(),
        count: 0,
      });
    }

    const group = groups.get(suffix)!;
    
    if (!group.words.has(rhymeWord.word)) {
      group.words.set(rhymeWord.word, []);
    }
    
    group.words.get(rhymeWord.word)!.push(rhymeWord);
    group.count++;
  });

  return groups;
}

/**
 * Extrai todas as rimas de um conjunto de cantorias
 */
export function extractAllRhymes(cantorias: Cantoria[]): RhymeWord[] {
  const allRhymes: RhymeWord[] = [];

  cantorias.forEach((cantoria) => {
    const rhymes = extractRhymesFromCantoria(cantoria);
    allRhymes.push(...rhymes);
  });

  return allRhymes;
}

/**
 * Obtém estatísticas das rimas
 */
export function getRhymeStats(rhymeGroups: Map<string, RhymeGroup>) {
  let totalRhymes = 0;
  let totalWords = 0;
  const styleCount = new Map<string, number>();

  rhymeGroups.forEach((group) => {
    totalRhymes += group.count;
    totalWords += group.words.size;

    group.words.forEach((words) => {
      words.forEach((word) => {
        styleCount.set(word.estilo, (styleCount.get(word.estilo) || 0) + 1);
      });
    });
  });

  return {
    totalRhymeGroups: rhymeGroups.size,
    totalRhymes,
    totalUniqueWords: totalWords,
    styleCount,
  };
}

/**
 * Filtra grupos de rimas por letra inicial
 */
export function filterByLetter(
  rhymeGroups: Map<string, RhymeGroup>,
  letter: string
): Map<string, RhymeGroup> {
  const filtered = new Map<string, RhymeGroup>();

  rhymeGroups.forEach((group, key) => {
    if (key.startsWith(letter.toLowerCase())) {
      filtered.set(key, group);
    }
  });

  return filtered;
}

/**
 * Ordena grupos de rimas por número de ocorrências
 */
export function sortByFrequency(
  rhymeGroups: Map<string, RhymeGroup>
): [string, RhymeGroup][] {
  return Array.from(rhymeGroups.entries()).sort((a, b) => b[1].count - a[1].count);
}

/**
 * Ordena grupos de rimas alfabeticamente
 */
export function sortAlphabetically(
  rhymeGroups: Map<string, RhymeGroup>
): [string, RhymeGroup][] {
  return Array.from(rhymeGroups.entries()).sort((a, b) => a[0].localeCompare(b[0]));
}
