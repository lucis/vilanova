import type { Cantoria, Estilo } from "./types";
import type { Cantador } from "./cantadores";

export interface MusicaSearchItem {
  slug: string;
  titulo: string;
  artista: string;
  estilo_referencia: string;
}

export interface AcervoSearchVersoHit {
  verso: string;
  cantoriaTitulo: string;
  slug: string;
}

export interface AcervoSearchResults {
  cantorias: Cantoria[];
  cantadores: Cantador[];
  estilos: Estilo[];
  versos: AcervoSearchVersoHit[];
  musicas: MusicaSearchItem[];
}

const DEFAULT_LIMITS = {
  cantorias: 200,
  cantadores: 200,
  estilos: 50,
  versos: 100,
  musicas: 50,
};

export function searchAcervo(
  query: string,
  input: {
    repentes: Cantoria[];
    estilos: Estilo[];
    cantadores: Cantador[];
    musicas?: MusicaSearchItem[];
  },
  limits = DEFAULT_LIMITS,
): AcervoSearchResults {
  const empty: AcervoSearchResults = {
    cantorias: [],
    cantadores: [],
    estilos: [],
    versos: [],
    musicas: [],
  };

  const q = query.trim().toLowerCase();
  if (q.length < 2) return empty;

  const { repentes, estilos, cantadores, musicas = [] } = input;

  const cantoriasFiltradas = repentes
    .filter(
      (r) =>
        r.titulo.toLowerCase().includes(q) ||
        (r.contexto?.toLowerCase().includes(q) ?? false) ||
        r.cantadores.some((c) => c.nome.toLowerCase().includes(q)),
    )
    .slice(0, limits.cantorias);

  const cantadoresFiltrados = cantadores
    .filter(
      (c) =>
        c.nome.toLowerCase().includes(q) ||
        (c.apelido && c.apelido.toLowerCase().includes(q)),
    )
    .slice(0, limits.cantadores);

  const estilosFiltrados = estilos
    .filter(
      (e) =>
        e.nome.toLowerCase().includes(q) ||
        e.resumo.toLowerCase().includes(q) ||
        e.definicao.toLowerCase().includes(q),
    )
    .slice(0, limits.estilos);

  const versos: AcervoSearchVersoHit[] = [];
  for (const cantoria of repentes) {
    const lista = cantoria.estrofes ?? [];
    for (const estrofe of lista) {
      for (const verso of estrofe.versos) {
        if (verso.toLowerCase().includes(q) && versos.length < limits.versos) {
          versos.push({
            verso,
            cantoriaTitulo: cantoria.titulo,
            slug: cantoria.slug,
          });
        }
      }
    }
  }

  const musicasFiltradas = musicas
    .filter(
      (m) =>
        m.titulo.toLowerCase().includes(q) ||
        m.artista.toLowerCase().includes(q) ||
        m.estilo_referencia.toLowerCase().includes(q),
    )
    .slice(0, limits.musicas);

  return {
    cantorias: cantoriasFiltradas,
    cantadores: cantadoresFiltrados,
    estilos: estilosFiltrados,
    versos,
    musicas: musicasFiltradas,
  };
}

export function countSearchResults(r: AcervoSearchResults): number {
  return (
    r.cantorias.length +
    r.cantadores.length +
    r.estilos.length +
    r.versos.length +
    r.musicas.length
  );
}
