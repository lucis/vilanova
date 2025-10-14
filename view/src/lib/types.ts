// Tipos compartilhados para o acervo Vilanova

export interface Estilo {
  slug: string;
  nome: string;
  resumo: string;
  definicao: string;
  historia: string;
  estrutura: {
    metrica: string;
    versos_por_estrofe: number;
    esquema_rima: string;
    tonicas: string;
    obrigatoriedade: string;
  };
  dificuldade: string;
  nivel_numero: number;
  exemplo: string;
  exemplo_autor: string;
  temas_comuns: string[];
  curiosidade: string;
  cantorias_count: number;
}

export interface EstiloInfo {
  nome: string;
  slug: string;
  versos_por_estrofe: number;
  metrica: string;
  esquema_rima: string;
  mote_fixo?: string;
}

export interface CantadorInfo {
  nome: string;
  slug: string;
  apelido?: string;
  dupla?: string;
}

export interface Estrofe {
  numero: number;
  cantador: string;
  versos: string[];
  tema: string;
}

export interface Cantoria {
  id: string;
  slug: string;
  titulo: string;
  estilo: EstiloInfo;
  cantadores: CantadorInfo[];
  local: string | null;
  ano: number | null;
  duracao?: string;
  contexto: string;
  estrofes: Estrofe[];
  links: {
    youtube: string;
    spotify: string | null;
  };
  transcricao_path: string;
  audio_path: string | null;
  destaque: boolean;
}

export interface AcervoData {
  repentes: Cantoria[];
  metadata: {
    ultima_atualizacao: string;
    total_repentes: number;
    total_estrofes_catalogadas: number;
    observacoes: string[];
  };
}

export interface EstilosData {
  estilos: Estilo[];
  metadata: {
    ultima_atualizacao: string;
    total_estilos: number;
    por_dificuldade: Record<string, number>;
    por_metrica: Record<string, number>;
  };
}

