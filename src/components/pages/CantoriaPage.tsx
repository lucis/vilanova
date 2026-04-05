import { Music, MapPin, Calendar } from "lucide-react";
import type { Cantoria, Estilo } from "@/lib/types";
import { SiteHeader } from "@/components/site-header";
import { EditButton } from "@/components/edit-button";
import { SiteFooter } from "@/components/site-footer";

function extractYouTubeId(url: string): string {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  return match?.[1] || '';
}

export function CantoriaPage({
  cantoria,
  currentPath,
  repentes,
  estilosCatalogo,
}: {
  cantoria: Cantoria;
  currentPath: string;
  repentes: Cantoria[];
  estilosCatalogo: Estilo[];
}) {
  const editPath = `public/data/cantorias/${cantoria.id}.json`;

  return (
    <div className="min-h-screen bg-[#F5EBE0]">
      <SiteHeader
        showBackButton
        backTo="/cantorias"
        backLabel="Cantorias"
        currentPath={currentPath}
        repentes={repentes}
        estilos={estilosCatalogo}
      />

      {/* Hero da Cantoria */}
      <section className="py-12 md:py-16 px-5 md:px-12 bg-gradient-to-b from-white to-[#F5EBE0]">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb e Edit Button */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="text-sm text-[#2E5266]/60">
              <a href="/" className="hover:text-[#C84B31]">Início</a>
              <span className="mx-2">→</span>
              <a href="/cantorias" className="hover:text-[#C84B31]">Cantorias</a>
              <span className="mx-2">→</span>
              <span className="text-[#2E5266]">{cantoria.titulo}</span>
            </div>
            <EditButton filePath={editPath} size="sm" />
          </div>
          
          {/* Título */}
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2E5266] mb-4">
            {cantoria.titulo}
          </h1>
          
          {/* Badge do Estilo */}
          <div className="inline-block bg-[#C84B31] text-white px-4 py-2 rounded-full font-semibold mb-6">
            {cantoria.estilo.nome}
          </div>
          
          {/* Metadados */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {cantoria.local && (
              <div className="flex items-center gap-2 text-[#2E5266]/80">
                <MapPin className="w-5 h-5 text-[#C84B31]" />
                <span>{cantoria.local}</span>
              </div>
            )}
            
            {cantoria.ano && (
              <div className="flex items-center gap-2 text-[#2E5266]/80">
                <Calendar className="w-5 h-5 text-[#C84B31]" />
                <span>{cantoria.ano}</span>
              </div>
            )}
            
            <div className="flex items-center gap-2 text-[#2E5266]/80">
              <Music className="w-5 h-5 text-[#C84B31]" />
              <span>{cantoria.estilo.metrica}</span>
            </div>
          </div>
          
          {/* Alerts de informações faltantes */}
          {(!cantoria.links.youtube || !cantoria.local || !cantoria.ano) && (
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg mb-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-blue-800 mb-2">
                    📝 Ajude a completar esta cantoria
                  </p>
                  <ul className="text-xs text-blue-700 space-y-1">
                    {!cantoria.links.youtube && <li>• Link do YouTube não informado</li>}
                    {!cantoria.local && <li>• Local da cantoria não informado</li>}
                    {!cantoria.ano && <li>• Ano não informado</li>}
                  </ul>
                </div>
                <EditButton
                  filePath={editPath}
                  label="Adicionar"
                  variant="text"
                  size="sm"
                />
              </div>
            </div>
          )}

          {/* Cantadores */}
          <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-6 mb-8">
            <h3 className="font-semibold text-lg text-[#2E5266] mb-4">Cantadores:</h3>
            <div className="flex flex-wrap gap-4">
              {cantoria.cantadores.map((cantador, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-12 h-12 bg-[#C84B31]/10 rounded-full flex items-center justify-center">
                    <span className="text-xl">🎵</span>
                  </div>
                  <div>
                    {cantador.slug ? (
                      <a
                        href={`/cantadores/${cantador.slug}`}
                        className="font-semibold text-[#C84B31] hover:underline"
                      >
                        {cantador.nome}
                      </a>
                    ) : (
                      <p className="font-semibold text-[#2E5266]">{cantador.nome}</p>
                    )}
                    {cantador.apelido && (
                      <p className="text-xs text-[#2E5266]/60 italic">{cantador.apelido}</p>
                    )}
                    {cantador.dupla && (
                      <p className="text-xs text-[#2E5266]/60">{cantador.dupla}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Informações do Estilo */}
          <div className="bg-[#E8D4B0] border-l-4 border-[#4A7C59] p-6 rounded-r-lg mb-8">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-lg text-[#2E5266]">
                Sobre o estilo {cantoria.estilo.nome}:
              </h3>
              {cantoria.estilo.slug && (
                <a
                  href={`/estilos/${cantoria.estilo.slug}`}
                  className="text-sm text-[#C84B31] hover:underline font-semibold whitespace-nowrap"
                >
                  Ver guia completo →
                </a>
              )}
            </div>
            <ul className="space-y-2 text-[#2E5266]/80">
              <li>• <strong>Versos por estrofe:</strong> {cantoria.estilo.versos_por_estrofe}</li>
              <li>• <strong>Métrica:</strong> {cantoria.estilo.metrica}</li>
              <li>• <strong>Esquema de rima:</strong> {cantoria.estilo.esquema_rima}</li>
              {cantoria.estilo.mote_fixo && (
                <li>• <strong>Mote fixo:</strong> "{cantoria.estilo.mote_fixo}"</li>
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* YouTube Player */}
      {cantoria.links.youtube && (
        <section className="py-12 md:py-16 px-5 md:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2E5266] mb-8 text-center">
              Assista à Cantoria
            </h2>
            
            <div className="relative rounded-lg overflow-hidden border-3 border-[#8B6F47] shadow-xl bg-black">
              <div className="aspect-video">
                <iframe 
                  src={`https://www.youtube.com/embed/${extractYouTubeId(cantoria.links.youtube)}`}
                  title={cantoria.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <a
                href={cantoria.links.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C84B31] hover:underline"
              >
                Ver no YouTube →
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Estrofes */}
      <section className="py-12 md:py-16 px-5 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2E5266] mb-8 text-center">
            Estrofes
          </h2>
          
          {/* Alert para cantorias sem estrofes */}
          {cantoria.estrofes.length === 0 && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-sm font-semibold text-yellow-800 mb-2">
                    💡 Esta cantoria ainda precisa de estrofes estruturadas
                  </p>
                  <p className="text-xs text-yellow-700">
                    A transcrição existe, mas as estrofes ainda não foram separadas e catalogadas. 
                    Você pode ajudar estruturando os versos!
                  </p>
                </div>
                <EditButton
                  filePath={editPath}
                  label="Estruturar"
                  variant="text"
                  size="sm"
                />
              </div>
            </div>
          )}

          {cantoria.estrofes.length > 0 ? (
            <div className="space-y-8">
              {cantoria.estrofes.map((estrofe, idx) => (
                <div
                  key={idx}
                  className="border-2 border-[#8B6F47] bg-white rounded-lg overflow-hidden"
                >
                  {/* Header */}
                  <div className="p-4 bg-[#C84B31]/5 border-b-2 border-[#8B6F47]">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div>
                        <span className="text-sm font-bold text-[#2E5266]">
                          Estrofe {estrofe.numero}
                        </span>
                        <span className="text-[#2E5266]/50 mx-2">·</span>
                        <span className="text-sm text-[#2E5266]/70">
                          {estrofe.cantador}
                        </span>
                      </div>
                      {estrofe.tema && (
                        <span className="text-xs text-[#2E5266]/60 italic">
                          {estrofe.tema}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Versos */}
                  <div className="p-6 md:p-8 bg-[#E8D4B0]">
                    <div className="space-y-2">
                      {estrofe.versos.map((verso, vIdx) => (
                        <p
                          key={vIdx}
                          className="text-base md:text-lg text-[#2E5266] leading-relaxed italic"
                        >
                          {verso}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-8 text-center">
              <p className="text-[#2E5266]/70 mb-4">
                As estrofes desta cantoria ainda estão sendo extraídas e estruturadas.
              </p>
              <a
                href={`https://github.com/lucis/vilanova/blob/main${cantoria.transcricao_path}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C84B31] font-semibold hover:underline"
              >
                Ver transcrição completa no GitHub →
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Contexto */}
      {cantoria.contexto && (
        <section className="py-12 px-5 md:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#E8D4B0] border-l-4 border-[#C84B31] p-6 rounded-r-lg">
              <h3 className="font-semibold text-lg text-[#2E5266] mb-2">Contexto:</h3>
              <p className="text-[#2E5266]/80">{cantoria.contexto}</p>
            </div>
          </div>
        </section>
      )}

      {/* Links Externos */}
      {(cantoria.links.youtube || cantoria.links.spotify) && (
        <section className="py-12 px-5 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-[#2E5266] mb-6 text-center">
              Ouça Esta Cantoria
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {cantoria.links.youtube && (
                <a
                  href={cantoria.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FF0000] text-white font-semibold rounded-lg hover:bg-[#CC0000] transition-all duration-300"
                >
                  ▶ YouTube
                </a>
              )}
              
              {cantoria.links.spotify && (
                <a
                  href={cantoria.links.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#1DB954] text-white font-semibold rounded-lg hover:bg-[#1aa34a] transition-all duration-300"
                >
                  ♫ Spotify
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      {/* CTA Contribuir */}
      <section className="py-16 px-5 md:px-12 bg-gradient-to-b from-[#2E5266] to-[#4A7C59]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ajude a Preservar Mais Cantorias
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

      <SiteFooter />
    </div>
  );
}
