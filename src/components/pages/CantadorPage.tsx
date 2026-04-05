import { Music2, Youtube } from "lucide-react";
import type { Cantador } from "@/lib/cantadores";
import type { AcervoData, Cantoria, Estilo } from "@/lib/types";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

function extractYouTubeId(url: string): string {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  return match?.[1] || '';
}

export function CantadorPage({
  cantador,
  acervo,
  currentPath,
  estilosCatalogo,
}: {
  cantador: Cantador;
  acervo: Pick<AcervoData, "repentes" | "metadata">;
  currentPath: string;
  estilosCatalogo: Estilo[];
}) {
  return (
    <div className="min-h-screen bg-[#F5EBE0]">
      <SiteHeader
        showBackButton
        backTo="/cantadores"
        backLabel="Cantadores"
        currentPath={currentPath}
        repentes={acervo.repentes as Cantoria[]}
        estilos={estilosCatalogo}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 px-5 md:px-12 bg-gradient-to-b from-white to-[#F5EBE0]">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb e Edit Button */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="text-sm text-[#2E5266]/60">
              <a href="/" className="hover:text-[#C84B31]">Início</a>
              <span className="mx-2">→</span>
              <a href="/cantadores" className="hover:text-[#C84B31]">Cantadores</a>
              <span className="mx-2">→</span>
              <span className="text-[#2E5266]">{cantador.nome}</span>
            </div>
            <a
              href={`https://github.com/lucis/vilanova/issues/new?title=Biografia: ${encodeURIComponent(cantador.nome)}&body=Gostaria de adicionar informações sobre ${encodeURIComponent(cantador.nome)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs border-2 border-[#8B6F47] text-[#2E5266] rounded-lg hover:bg-[#8B6F47] hover:text-white transition-colors font-semibold whitespace-nowrap"
            >
              💡 Sugerir Bio
            </a>
          </div>
          
          {/* Avatar e Nome */}
          <div className="flex items-start gap-6 mb-8">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-[#C84B31]/20 to-[#4A7C59]/20 rounded-full flex items-center justify-center flex-shrink-0">
              <Music2 className="w-12 h-12 md:w-16 md:h-16 text-[#2E5266]/60" />
            </div>
            
            <div className="flex-1">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2E5266] mb-2">
                {cantador.nome}
              </h1>
              
              {cantador.apelido && (
                <p className="text-xl text-[#C84B31] italic mb-4">
                  "{cantador.apelido}"
                </p>
              )}
              
              {/* Stats */}
              <div className="flex flex-wrap gap-4">
                <div className="bg-white border-2 border-[#8B6F47] rounded-lg px-4 py-2">
                  <span className="text-2xl font-bold text-[#C84B31]">{cantador.stats.totalCantorias}</span>
                  <span className="text-sm text-[#2E5266]/70 ml-2">
                    {cantador.stats.totalCantorias === 1 ? 'cantoria' : 'cantorias'}
                  </span>
                </div>
                <div className="bg-white border-2 border-[#8B6F47] rounded-lg px-4 py-2">
                  <span className="text-2xl font-bold text-[#C84B31]">{cantador.stats.totalEstrofes}</span>
                  <span className="text-sm text-[#2E5266]/70 ml-2">
                    {cantador.stats.totalEstrofes === 1 ? 'estrofe' : 'estrofes'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Alert para biografia */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm font-semibold text-blue-800 mb-1">
                  📖 Conhece a história deste cantador?
                </p>
                <p className="text-xs text-blue-700">
                  Ajude a adicionar biografia, prêmios, datas importantes e links pessoais (Instagram, YouTube).
                </p>
              </div>
              <a
                href={`https://github.com/lucis/vilanova/issues/new?title=Biografia: ${encodeURIComponent(cantador.nome)}&labels=biografia&body=**Nome:** ${encodeURIComponent(cantador.nome)}%0A%0A**Informações a adicionar:**%0A- Biografia:%20%0A- Data de nascimento:%20%0A- Local:%20%0A- Prêmios:%20%0A- Links (Instagram, YouTube, etc):%20`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-700 font-semibold hover:underline whitespace-nowrap"
              >
                Contribuir →
              </a>
            </div>
          </div>
          
          {/* Estilos que domina */}
          {cantador.estilos.length > 0 && (
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-6 mb-8">
              <h3 className="font-semibold text-lg text-[#2E5266] mb-4">Estilos:</h3>
              <div className="flex flex-wrap gap-2">
                {cantador.estilos.map((estilo, idx) => (
                  <span key={idx} className="inline-block bg-[#E8D4B0] text-[#2E5266] px-4 py-2 rounded-full font-semibold border-2 border-[#8B6F47]">
                    {estilo}
                  </span>
                ))}
              </div>
              {cantador.stats.estiloMaisFrequente && (
                <p className="text-sm text-[#2E5266]/60 mt-3">
                  Estilo mais frequente: <strong>{cantador.stats.estiloMaisFrequente}</strong>
                </p>
              )}
            </div>
          )}
          
          {/* Parceiros */}
          {cantador.parceiros.length > 0 && (
            <div className="bg-[#E8D4B0] border-l-4 border-[#4A7C59] p-6 rounded-r-lg mb-8">
              <h3 className="font-semibold text-lg text-[#2E5266] mb-4">Parceiros de Cantoria:</h3>
              <div className="flex flex-wrap gap-3">
                {cantador.parceiros.map((parceiro, idx) => (
                  <a
                    key={idx}
                    href={`/cantadores/${parceiro.slug}`}
                    className="inline-flex items-center gap-2 bg-white border-2 border-[#8B6F47] text-[#2E5266] px-4 py-2 rounded-lg hover:bg-[#8B6F47] hover:text-white transition-colors"
                  >
                    <span>{parceiro.nome}</span>
                    <span className="text-xs bg-[#C84B31]/20 px-2 py-0.5 rounded">
                      {parceiro.count}x
                    </span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Cantorias */}
      <section className="py-12 md:py-16 px-5 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2E5266] mb-8 text-center">
            Cantorias no Acervo
          </h2>
          
          <div className="space-y-6">
            {cantador.cantorias.map((cantoria) => {
              const youtubeId = extractYouTubeId(cantoria.links.youtube);
              const thumbnailUrl = youtubeId 
                ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
                : null;
              
              return (
                <a
                  key={cantoria.id}
                  href={`/cantorias/${cantoria.slug}`}
                  className="border-2 border-[#8B6F47] rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row group"
                >
                  {/* Thumbnail */}
                  {thumbnailUrl && (
                    <div className="relative md:w-64 aspect-video md:aspect-auto bg-[#E8D4B0] flex-shrink-0 overflow-hidden">
                      <img 
                        src={thumbnailUrl} 
                        alt={cantoria.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Youtube className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  )}
                  
                  {/* Conteúdo */}
                  <div className="p-5 flex-1">
                    {/* Estilo */}
                    <div className="inline-block bg-[#D49B54]/20 text-[#8B6F47] text-xs px-3 py-1 rounded-full font-semibold mb-3">
                      {cantoria.estilo.nome}
                    </div>
                    
                    {/* Título */}
                    <h3 className="font-serif text-xl font-bold text-[#2E5266] mb-2 group-hover:text-[#C84B31] transition-colors">
                      {cantoria.titulo}
                    </h3>
                    
                    {/* Cantadores */}
                    <div className="text-sm text-[#2E5266]/70 mb-3">
                      {cantoria.cantadores.map(c => c.nome).join(" • ")}
                    </div>
                    
                    {/* Contexto */}
                    {cantoria.contexto && (
                      <p className="text-sm text-[#2E5266]/60 line-clamp-2">
                        {cantoria.contexto}
                      </p>
                    )}
                    
                    {/* Metadados */}
                    <div className="flex items-center gap-4 text-xs text-[#2E5266]/60 mt-3">
                      {cantoria.estrofes.length > 0 && (
                        <span>{cantoria.estrofes.length} estrofes</span>
                      )}
                      {cantoria.links.youtube && (
                        <span className="flex items-center gap-1">
                          <Youtube className="w-3 h-3" />
                          Vídeo
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

