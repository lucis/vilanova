import { Music, Calendar, Disc, Youtube } from "lucide-react";
import type { Cantoria, Estilo, Musica } from "@/lib/types";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export type { Musica };

function extractYouTubeId(url: string): string {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  return match?.[1] || '';
}

export function MusicaPage({
  musica,
  currentPath,
  repentes,
  estilosCatalogo,
}: {
  musica: Musica;
  currentPath: string;
  repentes: Cantoria[];
  estilosCatalogo: Estilo[];
}) {
  const youtubeId = extractYouTubeId(musica.links.youtube);

  return (
    <div className="min-h-screen bg-[#F5EBE0]">
      <SiteHeader
        showBackButton
        backTo="/musicas"
        backLabel="Músicas"
        currentPath={currentPath}
        repentes={repentes}
        estilos={estilosCatalogo}
      />

      {/* Hero da Música */}
      <section className="py-8 md:py-12 px-5 md:px-8 bg-gradient-to-b from-white to-[#F5EBE0]">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-[#2E5266]/60 mb-4">
            <a href="/" className="hover:text-[#C84B31]">Início</a>
            <span className="mx-2">→</span>
            <a href="/musicas" className="hover:text-[#C84B31]">Músicas</a>
            <span className="mx-2">→</span>
            <span className="text-[#2E5266]">{musica.titulo}</span>
          </div>
          
          {/* Título */}
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-[#2E5266] mb-3">
            {musica.titulo}
          </h1>
          
          <h2 className="text-xl md:text-2xl text-[#2E5266]/80 font-semibold mb-6">
            {musica.artista.nome}
          </h2>

          {/* YouTube Embed - Square Format */}
          {youtubeId && (
            <div className="mb-8">
              <div className="relative w-full max-w-md mx-auto aspect-square bg-black rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}`}
                  title={musica.titulo}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                ></iframe>
              </div>
            </div>
          )}
          
          {/* Badge do Estilo */}
          <div className="inline-block bg-[#C84B31] text-white px-4 py-2 rounded-full font-semibold mb-6">
            Homenagem: {musica.estilo_referencia.nome}
          </div>
          
          {/* Metadados */}
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {musica.ano && (
              <div className="flex items-center gap-2 text-[#2E5266]/80">
                <Calendar className="w-5 h-5 text-[#C84B31]" />
                <span>{musica.ano}</span>
              </div>
            )}
            
            {musica.album && (
              <div className="flex items-center gap-2 text-[#2E5266]/80">
                <Disc className="w-5 h-5 text-[#C84B31]" />
                <span>{musica.album}</span>
              </div>
            )}
            
            {musica.duracao && (
              <div className="flex items-center gap-2 text-[#2E5266]/80">
                <Music className="w-5 h-5 text-[#C84B31]" />
                <span>{musica.duracao}</span>
              </div>
            )}
          </div>

          {/* Contexto */}
          {musica.contexto && (
            <div className="bg-[#E8D4B0] border-l-4 border-[#4A7C59] p-5 rounded-r-lg mb-8">
              <p className="text-[#2E5266] leading-relaxed">
                {musica.contexto}
              </p>
            </div>
          )}

          {/* Informações do Estilo Referenciado */}
          <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-5 mb-8">
            <h3 className="font-semibold text-lg text-[#2E5266] mb-3">
              Sobre o Estilo: {musica.estilo_referencia.nome}
            </h3>
            <div className="space-y-2 text-sm text-[#2E5266]/80">
              <p><strong>Métrica:</strong> {musica.estilo_referencia.metrica}</p>
              <p><strong>Versos por estrofe:</strong> {musica.estilo_referencia.versos_por_estrofe}</p>
              <p><strong>Esquema de rima:</strong> {musica.estilo_referencia.esquema_rima}</p>
              <p className="pt-2 border-t border-[#8B6F47]/30">
                {musica.estilo_referencia.descricao}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Letra e Comentários */}
      <section className="py-8 px-5 md:px-8 bg-[#F5EBE0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#2E5266] mb-8 text-center">
            Letra e Comentários
          </h2>

          <div className="space-y-12">
            {musica.estrofes.map((estrofe, idx) => (
              <div key={idx} className="bg-white border-2 border-[#8B6F47] rounded-lg overflow-hidden">
                {/* Cabeçalho da Estrofe */}
                <div className="bg-[#C84B31] text-white px-5 py-3">
                  <h3 className="font-semibold text-lg">
                    Estrofe {estrofe.numero}
                  </h3>
                </div>

                {/* Versos */}
                <div className="p-6 md:p-8">
                  <div className="font-serif text-lg leading-relaxed text-[#2E5266] mb-6 space-y-1">
                    {estrofe.versos.map((verso, vIdx) => (
                      <div key={vIdx}>
                        {verso ? (
                          <p className="min-h-[1.5rem]">{verso}</p>
                        ) : (
                          <p className="min-h-[1rem]">&nbsp;</p>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Comentário */}
                  {estrofe.comentario && (
                    <div className="bg-[#E8D4B0] border-l-4 border-[#4A7C59] p-5 rounded-r-lg">
                      <p className="text-[#2E5266]/90 leading-relaxed text-base">
                        <strong className="text-[#4A7C59]">💭 Comentário:</strong>{' '}
                        {estrofe.comentario}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Links Adicionais */}
          {(musica.links.youtube || musica.links.spotify) && (
            <div className="mt-12 bg-white border-2 border-[#8B6F47] rounded-lg p-6">
              <h3 className="font-semibold text-lg text-[#2E5266] mb-4">
                Ouça a música:
              </h3>
              <div className="flex flex-wrap gap-4">
                {musica.links.youtube && (
                  <a
                    href={musica.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                  >
                    <Youtube className="w-5 h-5" />
                    YouTube
                  </a>
                )}
                {musica.links.spotify && (
                  <a
                    href={musica.links.spotify}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    <Music className="w-5 h-5" />
                    Spotify
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Navegação */}
          <div className="mt-12 text-center">
            <a
              href="/musicas"
              className="inline-flex items-center gap-2 text-[#C84B31] hover:underline font-semibold"
            >
              ← Ver todas as músicas
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
