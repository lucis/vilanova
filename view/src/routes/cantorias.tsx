import { createRoute, Link, type RootRoute } from "@tanstack/react-router";
import { Music, Youtube, FileText } from "lucide-react";
import acervoData from "../../../public/data/acervo.json";
import { useState, useMemo } from "react";
import type { Cantoria } from "../lib/types";
import { SiteHeader } from "../components/site-header";

function extractYouTubeId(url: string): string {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  return match?.[1] || '';
}

function CantoriasPage() {
  const cantorias = acervoData.repentes as Cantoria[];
  
  const [filterEstilo, setFilterEstilo] = useState<string>("todos");
  const [sortBy, setSortBy] = useState<string>("recentes");

  // Extrair estilos únicos
  const estilos = useMemo(() => {
    const uniqueEstilos = new Set(cantorias.map(c => c.estilo.nome));
    return Array.from(uniqueEstilos).sort();
  }, [cantorias]);

  // Filtrar e ordenar cantorias
  const cantoriasFiltradas = useMemo(() => {
    let filtered = [...cantorias];
    
    // Filtro por estilo
    if (filterEstilo !== "todos") {
      filtered = filtered.filter(c => c.estilo.nome === filterEstilo);
    }
    
    // Ordenação primária
    if (sortBy === "alfabetica") {
      filtered.sort((a, b) => a.titulo.localeCompare(b.titulo));
    } else if (sortBy === "estilo") {
      filtered.sort((a, b) => a.estilo.nome.localeCompare(b.estilo.nome));
    } else if (sortBy === "destaque") {
      filtered.sort((a, b) => (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0));
    }
    
    // Ordenação secundária: sempre colocar cantorias COM vídeo primeiro
    filtered.sort((a, b) => {
      const aTemVideo = a.links.youtube ? 1 : 0;
      const bTemVideo = b.links.youtube ? 1 : 0;
      return bTemVideo - aTemVideo; // Com vídeo primeiro
    });
    
    return filtered;
  }, [cantorias, filterEstilo, sortBy]);

  // Estatísticas
  const stats = useMemo(() => {
    const cantadoresSet = new Set<string>();
    cantorias.forEach(c => {
      c.cantadores.forEach(cantador => cantadoresSet.add(cantador.nome));
    });
    
    return {
      totalCantorias: cantorias.length,
      totalEstilos: estilos.length,
      totalCantadores: cantadoresSet.size,
      comYoutube: cantorias.filter(c => c.links.youtube).length,
    };
  }, [cantorias, estilos]);

  return (
    <div className="min-h-screen bg-[#F5EBE0]">
      <SiteHeader />

      {/* Hero */}
      <section className="py-12 md:py-16 px-5 md:px-12 bg-gradient-to-b from-white to-[#F5EBE0]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2E5266] mb-4 text-center">
            Acervo de Cantorias
          </h1>
          
          <p className="text-xl text-[#2E5266]/70 text-center max-w-3xl mx-auto mb-4">
            Cantorias catalogadas, transcritas e estruturadas do repente nordestino
          </p>
          
          <div className="text-center mb-8">
            <a
              href="https://github.com/lucis/vilanova/blob/main/public/data/acervo.json"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#C84B31] hover:underline"
            >
              📄 Ver dados brutos no GitHub
            </a>
          </div>
          
          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-1">{stats.totalCantorias}</div>
              <div className="text-sm text-[#2E5266]/70">Cantorias</div>
            </div>
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-1">{stats.totalEstilos}</div>
              <div className="text-sm text-[#2E5266]/70">Estilos</div>
            </div>
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-1">{stats.totalCantadores}</div>
              <div className="text-sm text-[#2E5266]/70">Cantadores</div>
            </div>
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-1">{stats.comYoutube}</div>
              <div className="text-sm text-[#2E5266]/70">Com Vídeo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 px-5 md:px-12 bg-white border-y-2 border-[#8B6F47]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Filtro por Estilo */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold text-[#2E5266]">Estilo:</label>
              <select
                value={filterEstilo}
                onChange={(e) => setFilterEstilo(e.target.value)}
                className="px-4 py-2 border-2 border-[#8B6F47] rounded-lg bg-white text-[#2E5266] focus:outline-none focus:border-[#C84B31]"
              >
                <option value="todos">Todos os Estilos</option>
                {estilos.map(estilo => (
                  <option key={estilo} value={estilo}>{estilo}</option>
                ))}
              </select>
            </div>
            
            {/* Ordenação */}
            <div className="flex items-center gap-3">
              <label className="text-sm font-semibold text-[#2E5266]">Ordenar:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border-2 border-[#8B6F47] rounded-lg bg-white text-[#2E5266] focus:outline-none focus:border-[#C84B31]"
              >
                <option value="recentes">Mais Recentes</option>
                <option value="alfabetica">A-Z</option>
                <option value="estilo">Por Estilo</option>
                <option value="destaque">Em Destaque</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Cantorias */}
      <section className="py-12 md:py-16 px-5 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cantoriasFiltradas.map((cantoria) => {
              const youtubeId = extractYouTubeId(cantoria.links.youtube);
              const thumbnailUrl = youtubeId 
                ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
                : null;
              
              return (
                <Link
                  key={cantoria.id}
                  to="/cantorias/$slug"
                  params={{ slug: cantoria.slug }}
                  className="border-2 border-[#8B6F47] rounded-lg overflow-hidden bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video bg-[#E8D4B0] flex items-center justify-center overflow-hidden">
                    {thumbnailUrl ? (
                      <>
                        <img 
                          src={thumbnailUrl} 
                          alt={cantoria.titulo}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Youtube className="w-16 h-16 text-white" />
                        </div>
                      </>
                    ) : (
                      <Music className="w-16 h-16 text-[#8B6F47]/30" />
                    )}
                    
                    {/* Badges */}
                    <div className="absolute top-2 left-2 flex flex-col gap-2">
                      {cantoria.destaque && (
                        <span className="inline-block bg-[#C84B31] text-white text-xs px-2 py-1 rounded font-semibold">
                          Destaque
                        </span>
                      )}
                      {cantoria.estrofes.length > 0 && (
                        <span className="inline-block bg-[#4A7C59] text-white text-xs px-2 py-1 rounded font-semibold flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          Estruturado
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Conteúdo */}
                  <div className="p-5">
                    {/* Estilo */}
                    <div className="inline-block bg-[#D49B54]/20 text-[#8B6F47] text-xs px-3 py-1 rounded-full font-semibold mb-3">
                      {cantoria.estilo.nome}
                    </div>
                    
                    {/* Título */}
                    <h3 className="font-serif text-xl font-bold text-[#2E5266] mb-3 line-clamp-2 group-hover:text-[#C84B31] transition-colors">
                      {cantoria.titulo}
                    </h3>
                    
                    {/* Cantadores */}
                    <div className="text-sm text-[#2E5266]/70 mb-3">
                      {cantoria.cantadores.map(c => c.nome).join(" • ")}
                    </div>
                    
                    {/* Metadados */}
                    <div className="flex items-center gap-4 text-xs text-[#2E5266]/60">
                      {cantoria.estrofes.length > 0 && (
                        <span className="flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          {cantoria.estrofes.length} estrofes
                        </span>
                      )}
                      {cantoria.links.youtube && (
                        <span className="flex items-center gap-1">
                          <Youtube className="w-3 h-3" />
                          Vídeo
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          
          {cantoriasFiltradas.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-[#2E5266]/60">
                Nenhuma cantoria encontrada com os filtros selecionados.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 md:px-12 bg-gradient-to-b from-[#2E5266] to-[#4A7C59]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ajude a Expandir o Acervo
          </h2>
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            Tem gravações de repentes? Conhece cantadores? 
            Contribua com o acervo do Vilanova.
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
    path: "/cantorias",
    component: CantoriasPage,
    getParentRoute: () => parentRoute,
  });

