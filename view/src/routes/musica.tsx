import * as React from "react";
import { createRoute, Link, type RootRoute } from "@tanstack/react-router";
import { Music, Calendar, Disc, Youtube } from "lucide-react";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";

// Import musicas data
import musicasIndex from "../../../public/data/musicas-index.json";

interface Musica {
  id: string;
  slug: string;
  titulo: string;
  tipo: string;
  artista: {
    nome: string;
    slug: string;
  };
  estilo_referencia: {
    nome: string;
    slug: string;
    versos_por_estrofe: number;
    metrica: string;
    esquema_rima: string;
    descricao: string;
  };
  ano: number;
  album: string;
  duracao: string;
  contexto: string;
  estrofes: Array<{
    numero: number;
    versos: string[];
    comentario: string;
  }>;
  links: {
    youtube: string;
    spotify: string | null;
    youtube_embed: string;
  };
  transcricao_path: string;
  destaque: boolean;
  _metadata: {
    created_at: string;
    file_ref: string;
    source: string;
    categoria: string;
  };
}

function extractYouTubeId(url: string): string {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  return match?.[1] || '';
}

async function loadMusica(slug: string): Promise<Musica | null> {
  try {
    const musicaIndex = musicasIndex.musicas.find(m => m.slug === slug);
    if (!musicaIndex) return null;

    // Load the full musica data from its individual file
    const response = await fetch(`/data/musicas/${musicaIndex.id}.json`);
    if (!response.ok) return null;
    
    return await response.json();
  } catch (error) {
    console.error('Error loading musica:', error);
    return null;
  }
}

function MusicaDetail() {
  const { slug } = MusicaDetailRoute.useParams();
  const [musica, setMusica] = React.useState<Musica | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    loadMusica(slug).then(data => {
      setMusica(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5EBE0] flex items-center justify-center">
        <div className="text-center">
          <Music className="w-12 h-12 text-[#C84B31] mx-auto mb-4 animate-pulse" />
          <p className="text-[#2E5266]">Carregando...</p>
        </div>
      </div>
    );
  }

  if (!musica) {
    return (
      <div className="min-h-screen bg-[#F5EBE0] flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="font-serif text-3xl font-bold text-[#2E5266] mb-4">
            Música não encontrada
          </h1>
          <Link to="/musicas" className="text-[#C84B31] hover:underline">
            ← Voltar para Músicas
          </Link>
        </div>
      </div>
    );
  }

  const youtubeId = extractYouTubeId(musica.links.youtube);

  return (
    <div className="min-h-screen bg-[#F5EBE0]">
      <SiteHeader showBackButton backTo="/musicas" backLabel="Músicas" />

      {/* Hero da Música */}
      <section className="py-8 md:py-12 px-5 md:px-8 bg-gradient-to-b from-white to-[#F5EBE0]">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="text-sm text-[#2E5266]/60 mb-4">
            <Link to="/" className="hover:text-[#C84B31]">Início</Link>
            <span className="mx-2">→</span>
            <Link to="/musicas" className="hover:text-[#C84B31]">Músicas</Link>
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
            <Link
              to="/musicas"
              className="inline-flex items-center gap-2 text-[#C84B31] hover:underline font-semibold"
            >
              ← Ver todas as músicas
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export const MusicaDetailRoute = createRoute({
  path: "/musicas/$slug",
  component: MusicaDetail,
  getParentRoute: () => undefined as any,
});

export default (parentRoute: RootRoute) =>
  createRoute({
    path: "/musicas/$slug",
    component: MusicaDetail,
    getParentRoute: () => parentRoute,
  });
