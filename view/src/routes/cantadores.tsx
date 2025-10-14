import { createRoute, Link, type RootRoute } from "@tanstack/react-router";
import { Music2 } from "lucide-react";
import acervoData from "../../../public/data/acervo.json";
import { useMemo, useState } from "react";
import { agregarCantadores } from "../lib/cantadores";
import type { Cantoria } from "../lib/types";
import { SiteHeader } from "../components/site-header";

function CantadoresPage() {
  const cantadores = useMemo(() => {
    return agregarCantadores(acervoData.repentes as Cantoria[]);
  }, []);

  const [sortBy, setSortBy] = useState<string>("alfabetica");

  const cantadoresOrdenados = useMemo(() => {
    const sorted = [...cantadores];
    
    if (sortBy === "mais-cantorias") {
      sorted.sort((a, b) => b.stats.totalCantorias - a.stats.totalCantorias);
    } else if (sortBy === "mais-estrofes") {
      sorted.sort((a, b) => b.stats.totalEstrofes - a.stats.totalEstrofes);
    } else {
      sorted.sort((a, b) => a.nome.localeCompare(b.nome));
    }
    
    return sorted;
  }, [cantadores, sortBy]);

  return (
    <div className="min-h-screen bg-[#F5EBE0]">
      <SiteHeader />

      {/* Hero */}
      <section className="py-12 md:py-16 px-5 md:px-12 bg-gradient-to-b from-white to-[#F5EBE0]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2E5266] mb-4 text-center">
            Cantadores
          </h1>
          
          <p className="text-xl text-[#2E5266]/70 text-center max-w-3xl mx-auto mb-8">
            Os poetas e mestres do improviso nordestino catalogados no acervo Vilanova
          </p>
          
          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-1">{cantadores.length}</div>
              <div className="text-sm text-[#2E5266]/70">Cantadores</div>
            </div>
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-1">{acervoData.metadata.total_repentes}</div>
              <div className="text-sm text-[#2E5266]/70">Cantorias</div>
            </div>
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-1">{acervoData.metadata.total_estrofes_catalogadas}</div>
              <div className="text-sm text-[#2E5266]/70">Estrofes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 px-5 md:px-12 bg-white border-y-2 border-[#8B6F47]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 justify-center">
            <label className="text-sm font-semibold text-[#2E5266]">Ordenar:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border-2 border-[#8B6F47] rounded-lg bg-white text-[#2E5266] focus:outline-none focus:border-[#C84B31]"
            >
              <option value="alfabetica">A-Z</option>
              <option value="mais-cantorias">Mais Cantorias</option>
              <option value="mais-estrofes">Mais Estrofes</option>
            </select>
          </div>
        </div>
      </section>

      {/* Lista de Cantadores */}
      <section className="py-12 md:py-16 px-5 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cantadoresOrdenados.map((cantador) => (
              <Link
                key={cantador.slug}
                to="/cantadores/$slug"
                params={{ slug: cantador.slug }}
                className="border-2 border-[#8B6F47] rounded-lg p-6 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                {/* Avatar */}
                <div className="w-20 h-20 bg-gradient-to-br from-[#C84B31]/20 to-[#4A7C59]/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Music2 className="w-10 h-10 text-[#2E5266]/60" />
                </div>
                
                {/* Nome */}
                <h3 className="font-serif text-xl font-bold text-[#2E5266] mb-1 group-hover:text-[#C84B31] transition-colors">
                  {cantador.nome}
                </h3>
                
                {cantador.apelido && (
                  <p className="text-sm text-[#C84B31] italic mb-3">
                    "{cantador.apelido}"
                  </p>
                )}
                
                {/* Estatísticas */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#2E5266]/60">Cantorias:</span>
                    <span className="font-bold text-[#2E5266]">{cantador.stats.totalCantorias}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#2E5266]/60">Estrofes:</span>
                    <span className="font-bold text-[#2E5266]">{cantador.stats.totalEstrofes}</span>
                  </div>
                </div>
                
                {/* Estilos */}
                {cantador.estilos.length > 0 && (
                  <div className="mb-4">
                    <p className="text-xs text-[#2E5266]/60 mb-2">Estilos:</p>
                    <div className="flex flex-wrap gap-1">
                      {cantador.estilos.slice(0, 3).map((estilo, idx) => (
                        <span key={idx} className="text-xs bg-[#E8D4B0] text-[#2E5266] px-2 py-1 rounded">
                          {estilo}
                        </span>
                      ))}
                      {cantador.estilos.length > 3 && (
                        <span className="text-xs text-[#2E5266]/60">+{cantador.estilos.length - 3}</span>
                      )}
                    </div>
                  </div>
                )}
                
                {/* Parceiros */}
                {cantador.parceiros.length > 0 && (
                  <div>
                    <p className="text-xs text-[#2E5266]/60 mb-2">Parceiros:</p>
                    <div className="flex flex-wrap gap-1">
                      {cantador.parceiros.slice(0, 2).map((parceiro, idx) => (
                        <span key={idx} className="text-xs bg-white border border-[#8B6F47] text-[#2E5266] px-2 py-1 rounded">
                          {parceiro.nome}
                        </span>
                      ))}
                      {cantador.parceiros.length > 2 && (
                        <span className="text-xs text-[#2E5266]/60">+{cantador.parceiros.length - 2}</span>
                      )}
                    </div>
                  </div>
                )}
                
                <div className="mt-4 pt-4 border-t border-[#8B6F47]/30 text-sm text-[#C84B31] font-semibold group-hover:underline">
                  Ver perfil completo →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 md:px-12 bg-gradient-to-b from-[#2E5266] to-[#4A7C59]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ajude a Catalogar Mais Cantadores
          </h2>
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            Conhece a história de algum desses mestres? Contribua com biografias e informações
          </p>
          <a
            href="http://github.com/lucis/vilanova/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#2E5266] font-bold rounded-lg hover:bg-white/90 transition-all duration-300"
          >
            Contribuir no GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E5266] py-8 px-5 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-[#F5EBE0]/60">
            © 2025 Vilanova · Open Source (MIT) · vilanova.deco.page
          </p>
          <p className="text-sm text-[#F5EBE0]/60 mt-2">
            Feito com ❤️ para o Nordeste brasileiro
          </p>
        </div>
      </footer>
    </div>
  );
}

export default (parentRoute: RootRoute) =>
  createRoute({
    path: "/cantadores",
    component: CantadoresPage,
    getParentRoute: () => parentRoute,
  });

