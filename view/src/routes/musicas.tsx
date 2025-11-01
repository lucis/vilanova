import { createRoute, Link, type RootRoute } from "@tanstack/react-router";
import { Music, Youtube, FileText } from "lucide-react";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

// Import musicas data
import musicasIndex from "../../../public/data/musicas-index.json";

function extractYouTubeId(url: string): string {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  return match?.[1] || '';
}

function MusicasPage() {
  const musicas = musicasIndex.musicas;

  return (
    <div className="min-h-screen bg-[#F5EBE0]">
      <SiteHeader />

      {/* Hero */}
      <section className="py-12 md:py-16 px-5 md:px-12 bg-gradient-to-b from-white to-[#F5EBE0]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2E5266] mb-4 text-center">
            Músicas Inspiradas na Cantoria
          </h1>
          
          <p className="text-lg text-[#2E5266]/80 text-center max-w-3xl mx-auto mb-8">
            Canções autorais que celebram, homenageiam ou se inspiram na rica tradição 
            da cantoria de viola nordestina. Obras que mantêm viva a memória cultural 
            através da música popular brasileira.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-2">
                {musicas.length}
              </div>
              <div className="text-sm text-[#2E5266]/70">
                {musicas.length === 1 ? 'Música' : 'Músicas'} Catalogadas
              </div>
            </div>

            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-2">
                {musicas.filter(m => m.youtube).length}
              </div>
              <div className="text-sm text-[#2E5266]/70">Com Vídeo no YouTube</div>
            </div>

            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-2">
                {musicasIndex.metadata.total_estrofes}
              </div>
              <div className="text-sm text-[#2E5266]/70">Estrofes Transcritas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Lista de Músicas */}
      <section className="py-12 px-5 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {musicas.map((musica) => {
              const youtubeId = extractYouTubeId(musica.youtube || '');
              
              return (
                <Link
                  key={musica.id}
                  to="/musicas/$slug"
                  params={{ slug: musica.slug }}
                  className="group bg-white border-2 border-[#8B6F47] rounded-lg overflow-hidden hover:shadow-xl transition-all hover:scale-[1.02]"
                >
                  {/* Thumbnail */}
                  {youtubeId ? (
                    <div className="relative aspect-video bg-gray-200 overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                        alt={musica.titulo}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        onError={(e) => {
                          // Fallback para imagem de qualidade média
                          e.currentTarget.src = `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`;
                        }}
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <Youtube className="w-16 h-16 text-white opacity-80" />
                      </div>
                    </div>
                  ) : (
                    <div className="relative aspect-video bg-gradient-to-br from-[#C84B31] to-[#8B6F47] flex items-center justify-center">
                      <Music className="w-16 h-16 text-white opacity-50" />
                    </div>
                  )}

                  {/* Conteúdo */}
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-[#2E5266] mb-2 group-hover:text-[#C84B31] transition-colors">
                      {musica.titulo}
                    </h3>
                    
                    <p className="text-[#2E5266]/80 font-semibold mb-3">
                      {musica.artista}
                    </p>

                    {/* Badge do Estilo */}
                    <div className="inline-block bg-[#C84B31]/10 text-[#C84B31] px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      {musica.estilo_referencia}
                    </div>

                    {/* Indicadores */}
                    <div className="flex items-center gap-4 text-sm text-[#2E5266]/60">
                      {musica.youtube && (
                        <div className="flex items-center gap-1">
                          <Youtube className="w-4 h-4" />
                          <span>Vídeo</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        <span>Letra</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Call to action */}
          <div className="mt-12 bg-[#E8D4B0] border-l-4 border-[#4A7C59] p-6 rounded-r-lg">
            <h3 className="font-semibold text-lg text-[#2E5266] mb-2">
              Conhece outra música que homenageia a cantoria?
            </h3>
            <p className="text-[#2E5266]/80 mb-4">
              Ajude a expandir esta seção! Sugestões de músicas que celebram ou 
              se inspiram na tradição da cantoria são muito bem-vindas.
            </p>
            <a
              href="https://github.com/lucis/vilanova/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#C84B31] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#A63825] transition-colors"
            >
              <FileText className="w-5 h-5" />
              Sugerir Música
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export const MusicasRoute = createRoute({
  path: "/musicas",
  component: MusicasPage,
  getParentRoute: () => undefined as any,
});

export default (parentRoute: RootRoute) =>
  createRoute({
    path: "/musicas",
    component: MusicasPage,
    getParentRoute: () => parentRoute,
  });
