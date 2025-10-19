/**
 * Utilitário para carregar dados do acervo de forma dinâmica
 * 
 * Nova estrutura:
 * - public/data/index.json → Lista de todas as cantorias (leve)
 * - public/data/cantorias/{id}.json → Arquivo individual com estrofes completas
 */

import indexData from "../../../public/data/index.json";

export interface CantoriaIndex {
  id: string;
  slug: string;
  titulo: string;
  estilo: string;
  destaque: boolean;
  youtube: string | null;
  _ref: string;
}

export interface AcervoIndex {
  cantorias: CantoriaIndex[];
  metadata: {
    ultima_atualizacao: string;
    total_repentes: number;
    total_estrofes_catalogadas: number;
  };
}

export interface Cantoria {
  id: string;
  slug: string;
  titulo: string;
  estilo: {
    nome: string;
    slug: string;
    versos_por_estrofe: number;
    metrica: string;
    esquema_rima: string;
    mote_fixo?: string;
  };
  cantadores: Array<{
    nome: string;
    slug: string;
    dupla?: string;
    apelido?: string;
  }>;
  local: string | null;
  ano: number | null;
  duracao?: string;
  contexto: string;
  estrofes: Array<{
    numero: number;
    cantador: string;
    versos: string[];
    tema: string;
  }>;
  links: {
    youtube?: string;
    spotify?: string | null;
  };
  transcricao_path: string;
  audio_path: string | null;
  destaque: boolean;
}

/**
 * Carrega o índice de cantorias (leve, sem estrofes)
 */
export function getIndex(): AcervoIndex {
  return indexData as AcervoIndex;
}

/**
 * Carrega uma cantoria completa (com estrofes)
 * @param id - ID da cantoria
 */
export async function loadCantoria(id: string): Promise<Cantoria> {
  // Durante desenvolvimento, importa diretamente
  const module = await import(`../../../public/data/cantorias/${id}.json`);
  return module.default;
}

/**
 * Carrega todas as cantorias completas (use com cuidado!)
 * Prefer usar getIndex() e carregar sob demanda com loadCantoria()
 */
export async function loadAllCantorias(): Promise<Cantoria[]> {
  const index = getIndex();
  const promises = index.cantorias.map(c => loadCantoria(c.id));
  return Promise.all(promises);
}

/**
 * Busca uma cantoria por slug
 */
export async function loadCantoriaBySlug(slug: string): Promise<Cantoria | null> {
  const index = getIndex();
  const entry = index.cantorias.find(c => c.slug === slug);
  if (!entry) return null;
  return loadCantoria(entry.id);
}

/**
 * Retorna cantorias do índice filtradas por critérios
 */
export function filterCantorias(filters: {
  estilo?: string;
  destaque?: boolean;
  comYoutube?: boolean;
}): CantoriaIndex[] {
  const index = getIndex();
  let result = [...index.cantorias];

  if (filters.estilo) {
    result = result.filter(c => c.estilo === filters.estilo);
  }

  if (filters.destaque !== undefined) {
    result = result.filter(c => c.destaque === filters.destaque);
  }

  if (filters.comYoutube) {
    result = result.filter(c => c.youtube !== null);
  }

  return result;
}

