import { createRoute, Link, type RootRoute } from "@tanstack/react-router";
import estilosData from "../../../public/data/estilos.json";
import acervoData from "../../../public/data/acervo.json";
import { useMemo } from "react";
import type { Estilo } from "../lib/types";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

const DIFICULDADE_COLORS = {
  "Iniciante": "bg-green-100 text-green-800 border-green-300",
  "Intermediário": "bg-blue-100 text-blue-800 border-blue-300",
  "Avançado": "bg-orange-100 text-orange-800 border-orange-300",
  "Mestre": "bg-red-100 text-red-800 border-red-300",
};

const METRICA_ICONS = {
  "7": "🎵",
  "10": "🎶",
  "11": "🎼",
};

function EstilosPage() {
  const estilos = estilosData.estilos as Estilo[];
  
  // Contar cantorias reais por estilo
  const cantoriasPorEstilo = useMemo(() => {
    const counts: Record<string, number> = {};
    acervoData.repentes.forEach((cantoria: any) => {
      const slug = cantoria.estilo.slug;
      counts[slug] = (counts[slug] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-[#F5EBE0]">
      <SiteHeader />

      {/* Hero */}
      <section className="py-12 md:py-16 px-5 md:px-12 bg-gradient-to-b from-white to-[#F5EBE0]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2E5266] mb-4 text-center">
            Guia de Estilos de Repente
          </h1>
          
          <p className="text-xl text-[#2E5266]/70 text-center max-w-3xl mx-auto mb-8">
            Conheça as modalidades poéticas do repente nordestino: estruturas, regras, história e exemplos
          </p>
          
          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-1">{estilos.length}</div>
              <div className="text-sm text-[#2E5266]/70">Estilos Catalogados</div>
            </div>
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-1">3</div>
              <div className="text-sm text-[#2E5266]/70">Métricas Diferentes</div>
            </div>
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-1">{acervoData.metadata.total_repentes}</div>
              <div className="text-sm text-[#2E5266]/70">Cantorias no Acervo</div>
            </div>
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-1">{acervoData.metadata.total_estrofes_catalogadas}</div>
              <div className="text-sm text-[#2E5266]/70">Estrofes Analisadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Estilos */}
      <section className="py-12 md:py-16 px-5 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {estilos.map((estilo) => {
              const cantoriasCount = cantoriasPorEstilo[estilo.slug] || 0;
              const metricaNum = estilo.estrutura.metrica.match(/\d+/)?.[0] || "";
              const icon = METRICA_ICONS[metricaNum as keyof typeof METRICA_ICONS] || "📝";
              const dificuldadeColor = DIFICULDADE_COLORS[estilo.dificuldade as keyof typeof DIFICULDADE_COLORS] || "bg-gray-100 text-gray-800 border-gray-300";
              
              return (
                <Link
                  key={estilo.slug}
                  to="/estilos/$slug"
                  params={{ slug: estilo.slug }}
                  className="border-2 border-[#8B6F47] rounded-lg overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  {/* Header */}
                  <div className="p-6 bg-gradient-to-r from-[#E8D4B0] to-white border-b-2 border-[#8B6F47]">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="text-4xl">{icon}</div>
                        <div>
                          <h3 className="font-serif text-2xl font-bold text-[#2E5266] group-hover:text-[#C84B31] transition-colors">
                            {estilo.nome}
                          </h3>
                          <p className="text-sm text-[#2E5266]/60 mt-1">
                            {estilo.estrutura.metrica}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <span className={`inline-block text-xs px-3 py-1 rounded-full font-semibold border ${dificuldadeColor}`}>
                        {estilo.dificuldade}
                      </span>
                      <span className="inline-block bg-[#4A7C59]/10 text-[#4A7C59] text-xs px-3 py-1 rounded-full font-semibold border border-[#4A7C59]/30">
                        {estilo.estrutura.versos_por_estrofe} versos
                      </span>
                      <span className="inline-block bg-[#C84B31]/10 text-[#C84B31] text-xs px-3 py-1 rounded-full font-semibold border border-[#C84B31]/30">
                        {cantoriasCount} {cantoriasCount === 1 ? 'cantoria' : 'cantorias'}
                      </span>
                    </div>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="p-6">
                    <p className="text-[#2E5266]/80 mb-4 leading-relaxed">
                      {estilo.resumo}
                    </p>
                    
                    <div className="bg-[#F5EBE0] p-4 rounded-lg mb-4">
                      <p className="text-sm font-semibold text-[#2E5266] mb-2">
                        Esquema de rima:
                      </p>
                      <p className="font-mono text-lg text-[#C84B31] font-bold">
                        {estilo.estrutura.esquema_rima}
                      </p>
                    </div>
                    
                    {estilo.curiosidade && (
                      <div className="border-l-4 border-[#4A7C59] pl-4 py-2">
                        <p className="text-sm text-[#2E5266]/70 italic">
                          💡 {estilo.curiosidade}
                        </p>
                      </div>
                    )}
                    
                    <div className="mt-4 text-[#C84B31] font-semibold group-hover:underline flex items-center gap-2">
                      Ver detalhes completos
                      <span>→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 md:px-12 bg-gradient-to-b from-[#2E5266] to-[#4A7C59]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Explore as Cantorias por Estilo
          </h2>
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            Veja exemplos reais de cada estilo em ação
          </p>
          <Link
            to="/cantorias"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2E5266] font-bold rounded-lg hover:bg-white/90 transition-all duration-300"
          >
            Ver Acervo de Cantorias
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default (parentRoute: RootRoute) =>
  createRoute({
    path: "/estilos",
    component: EstilosPage,
    getParentRoute: () => parentRoute,
  });

