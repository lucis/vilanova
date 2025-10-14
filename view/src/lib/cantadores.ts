import type { Cantoria } from "./types";

export interface Cantador {
  slug: string;
  nome: string;
  apelido?: string;
  cantorias: Cantoria[];
  estilos: string[];
  parceiros: Array<{ nome: string; slug: string; count: number }>;
  stats: {
    totalCantorias: number;
    totalEstrofes: number;
    estiloMaisFrequente: string | null;
  };
}

export function agregarCantadores(cantorias: Cantoria[]): Cantador[] {
  const cantadoresMap = new Map<string, Cantador>();

  // Primeira passagem: criar estrutura básica
  cantorias.forEach((cantoria) => {
    cantoria.cantadores.forEach((c) => {
      if (!c.slug) return; // Pular cantadores sem slug

      if (!cantadoresMap.has(c.slug)) {
        cantadoresMap.set(c.slug, {
          slug: c.slug,
          nome: c.nome,
          apelido: c.apelido,
          cantorias: [],
          estilos: [],
          parceiros: [],
          stats: {
            totalCantorias: 0,
            totalEstrofes: 0,
            estiloMaisFrequente: null,
          },
        });
      }

      const cantador = cantadoresMap.get(c.slug)!;
      cantador.cantorias.push(cantoria);
    });
  });

  // Segunda passagem: calcular estatísticas e parceiros
  cantadoresMap.forEach((cantador) => {
    // Estilos únicos
    const estilosSet = new Set<string>();
    const estilosCount = new Map<string, number>();
    const parceirosMap = new Map<string, { nome: string; slug: string; count: number }>();

    cantador.cantorias.forEach((cantoria) => {
      // Adicionar estilo
      estilosSet.add(cantoria.estilo.nome);
      estilosCount.set(
        cantoria.estilo.nome,
        (estilosCount.get(cantoria.estilo.nome) || 0) + 1
      );

      // Contar parceiros (outros cantadores na mesma cantoria)
      cantoria.cantadores.forEach((outro) => {
        if (outro.slug && outro.slug !== cantador.slug) {
          if (!parceirosMap.has(outro.slug)) {
            parceirosMap.set(outro.slug, {
              nome: outro.nome,
              slug: outro.slug,
              count: 0,
            });
          }
          const parceiro = parceirosMap.get(outro.slug)!;
          parceiro.count++;
        }
      });
    });

    // Atualizar cantador
    cantador.estilos = Array.from(estilosSet);
    cantador.parceiros = Array.from(parceirosMap.values()).sort(
      (a, b) => b.count - a.count
    );
    cantador.stats.totalCantorias = cantador.cantorias.length;
    cantador.stats.totalEstrofes = cantador.cantorias.reduce(
      (sum, c) => sum + (c.estrofes?.length || 0),
      0
    );

    // Estilo mais frequente
    let maxCount = 0;
    let estiloMaisFrequente: string | null = null;
    estilosCount.forEach((count, estilo) => {
      if (count > maxCount) {
        maxCount = count;
        estiloMaisFrequente = estilo;
      }
    });
    cantador.stats.estiloMaisFrequente = estiloMaisFrequente;
  });

  // Retornar array ordenado alfabeticamente
  return Array.from(cantadoresMap.values()).sort((a, b) =>
    a.nome.localeCompare(b.nome)
  );
}

