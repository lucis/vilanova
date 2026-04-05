import { Music } from "lucide-react";
import { useMemo } from "react";
import type { AcervoData, Estilo, Cantoria } from "@/lib/types";
import { SiteHeader } from "@/components/site-header";
import { EditButton } from "@/components/edit-button";
import { SiteFooter } from "@/components/site-footer";

function extractYouTubeId(url: string): string {
  if (!url) return '';
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/);
  return match?.[1] || '';
}

const DIFICULDADE_COLORS = {
  "Iniciante": "bg-green-100 text-green-800 border-green-300",
  "Intermediário": "bg-blue-100 text-blue-800 border-blue-300",
  "Avançado": "bg-orange-100 text-orange-800 border-orange-300",
  "Mestre": "bg-red-100 text-red-800 border-red-300",
};

export function EstiloPage({
  estilo,
  acervo,
  currentPath,
  estilosList,
}: {
  estilo: Estilo;
  acervo: Pick<AcervoData, "repentes" | "metadata">;
  currentPath: string;
  estilosList: Estilo[];
}) {
  const cantoriasDoEstilo = useMemo(() => {
    return (acervo.repentes as Cantoria[]).filter(
      (r) => r.estilo.slug === estilo.slug,
    );
  }, [acervo.repentes, estilo.slug]);

  const cantadoresDoEstilo = useMemo(() => {
    const cantadoresSet = new Map<string, { nome: string; slug: string; count: number }>();
    
    cantoriasDoEstilo.forEach(cantoria => {
      cantoria.cantadores.forEach(c => {
        if (!c.slug) return;
        if (!cantadoresSet.has(c.slug)) {
          cantadoresSet.set(c.slug, { nome: c.nome, slug: c.slug, count: 0 });
        }
        const cantador = cantadoresSet.get(c.slug)!;
        cantador.count++;
      });
    });
    
    return Array.from(cantadoresSet.values()).sort((a, b) => b.count - a.count);
  }, [cantoriasDoEstilo]);

  const dificuldadeColor = DIFICULDADE_COLORS[estilo.dificuldade as keyof typeof DIFICULDADE_COLORS] || "bg-gray-100 text-gray-800 border-gray-300";

  return (
    <div className="min-h-screen bg-[#F5EBE0]">
      <SiteHeader
        showBackButton
        backTo="/estilos"
        backLabel="Estilos"
        currentPath={currentPath}
        repentes={acervo.repentes as Cantoria[]}
        estilos={estilosList}
      />

      {/* Hero */}
      <section className="py-12 md:py-16 px-5 md:px-12 bg-gradient-to-b from-white to-[#F5EBE0]">
        <div className="max-w-5xl mx-auto">
          {/* Breadcrumb e Edit Button */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="text-sm text-[#2E5266]/60">
              <a href="/" className="hover:text-[#C84B31]">Início</a>
              <span className="mx-2">→</span>
              <a href="/estilos" className="hover:text-[#C84B31]">Estilos</a>
              <span className="mx-2">→</span>
              <span className="text-[#2E5266]">{estilo.nome}</span>
            </div>
            <EditButton 
              filePath={`docs/estilos/${estilo.slug}.md`}
              label="Melhorar Guia"
              size="sm"
            />
          </div>
          
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2E5266] mb-4">
            {estilo.nome}
          </h1>
          
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            <span className={`inline-block text-sm px-4 py-2 rounded-full font-semibold border-2 ${dificuldadeColor}`}>
              {estilo.dificuldade}
            </span>
            <span className="inline-block bg-[#4A7C59]/10 text-[#4A7C59] text-sm px-4 py-2 rounded-full font-semibold border-2 border-[#4A7C59]/30">
              {estilo.estrutura.versos_por_estrofe} versos
            </span>
            <span className="inline-block bg-[#C84B31]/10 text-[#C84B31] text-sm px-4 py-2 rounded-full font-semibold border-2 border-[#C84B31]/30">
              {estilo.estrutura.metrica}
            </span>
          </div>
          
          <p className="text-xl text-[#2E5266]/80 leading-relaxed">
            {estilo.resumo}
          </p>
        </div>
      </section>

      {/* Definição */}
      <section className="py-12 px-5 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#C84B31] mb-6">
            Definição
          </h2>
          <p className="text-lg text-[#2E5266]/85 leading-relaxed">
            {estilo.definicao}
          </p>
        </div>
      </section>

      {/* História */}
      <section className="py-12 px-5 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#C84B31] mb-6">
            História e Origem
          </h2>
          <p className="text-lg text-[#2E5266]/85 leading-relaxed whitespace-pre-line">
            {estilo.historia}
          </p>
        </div>
      </section>

      {/* Estrutura Poética */}
      <section className="py-12 px-5 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-[#C84B31] mb-8">
            Estrutura Poética
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#E8D4B0] border-2 border-[#8B6F47] rounded-lg p-6">
              <h3 className="font-bold text-lg text-[#2E5266] mb-4">Características:</h3>
              <ul className="space-y-2 text-[#2E5266]/80">
                <li>• <strong>Métrica:</strong> {estilo.estrutura.metrica}</li>
                <li>• <strong>Versos por estrofe:</strong> {estilo.estrutura.versos_por_estrofe}</li>
                <li>• <strong>Esquema de rima:</strong> <span className="font-mono font-bold text-[#C84B31]">{estilo.estrutura.esquema_rima}</span></li>
                {estilo.estrutura.tonicas && (
                  <li>• <strong>Tônicas:</strong> {estilo.estrutura.tonicas}</li>
                )}
              </ul>
            </div>
            
            <div className="bg-[#F5EBE0] border-2 border-[#8B6F47] rounded-lg p-6">
              <h3 className="font-bold text-lg text-[#2E5266] mb-4">Regras Especiais:</h3>
              <p className="text-sm text-[#2E5266]/80 leading-relaxed">
                {estilo.estrutura.obrigatoriedade}
              </p>
            </div>
          </div>
          
          {/* Exemplo */}
          <div className="bg-white border-2 border-[#8B6F47] rounded-lg overflow-hidden">
            <div className="p-4 bg-[#C84B31]/5 border-b-2 border-[#8B6F47]">
              <h3 className="font-bold text-lg text-[#2E5266]">Exemplo:</h3>
              {estilo.exemplo_autor && (
                <p className="text-sm text-[#2E5266]/60 mt-1">Por {estilo.exemplo_autor}</p>
              )}
            </div>
            <div className="p-6 md:p-8 bg-[#E8D4B0]">
              <div className="space-y-2">
                {estilo.exemplo.split('\n').map((verso, idx) => (
                  <p key={idx} className="text-base md:text-lg text-[#2E5266] leading-relaxed italic">
                    {verso}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temas Comuns */}
      {estilo.temas_comuns.length > 0 && (
        <section className="py-12 px-5 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-[#C84B31] mb-6">
              Temas Comuns
            </h2>
            <div className="flex flex-wrap gap-3">
              {estilo.temas_comuns.map((tema, idx) => (
                <span key={idx} className="inline-block bg-white border-2 border-[#8B6F47] text-[#2E5266] px-4 py-2 rounded-lg font-semibold">
                  {tema}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Curiosidade */}
      {estilo.curiosidade && (
        <section className="py-12 px-5 md:px-12 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="bg-[#E8D4B0] border-l-4 border-[#4A7C59] p-6 rounded-r-lg">
              <h3 className="font-semibold text-lg text-[#2E5266] mb-3 flex items-center gap-2">
                <span>💡</span>
                <span>Curiosidade</span>
              </h3>
              <p className="text-[#2E5266]/80 leading-relaxed">
                {estilo.curiosidade}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Cantadores que Dominam */}
      {cantadoresDoEstilo.length > 0 && (
        <section className="py-12 px-5 md:px-12">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-[#C84B31] mb-6">
              Cantadores que Dominam Este Estilo
            </h2>
            <div className="flex flex-wrap gap-3">
              {cantadoresDoEstilo.map((cantador, idx) => (
                <a
                  key={idx}
                  href={`/cantadores/${cantador.slug}`}
                  className="inline-flex items-center gap-2 bg-white border-2 border-[#8B6F47] text-[#2E5266] px-4 py-2 rounded-lg hover:bg-[#8B6F47] hover:text-white transition-colors"
                >
                  <span>{cantador.nome}</span>
                  <span className="text-xs bg-[#C84B31]/20 px-2 py-0.5 rounded">
                    {cantador.count}x
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cantorias no Acervo */}
      <section className="py-12 md:py-16 px-5 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2E5266] mb-8 text-center">
            Cantorias no Acervo ({cantoriasDoEstilo.length})
          </h2>
          
          {cantoriasDoEstilo.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {cantoriasDoEstilo.map((cantoria) => {
                const youtubeId = extractYouTubeId(cantoria.links.youtube);
                const thumbnailUrl = youtubeId 
                  ? `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`
                  : null;
                
                return (
                  <a
                    key={cantoria.id}
                    href={`/cantorias/${cantoria.slug}`}
                    className="border-2 border-[#8B6F47] rounded-lg overflow-hidden bg-white hover:shadow-lg transition-all duration-300 group"
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
                            <Music className="w-12 h-12 text-white" />
                          </div>
                        </>
                      ) : (
                        <Music className="w-12 h-12 text-[#8B6F47]/30" />
                      )}
                    </div>
                    
                    {/* Conteúdo */}
                    <div className="p-5">
                      <h3 className="font-serif text-lg font-bold text-[#2E5266] mb-2 group-hover:text-[#C84B31] transition-colors line-clamp-2">
                        {cantoria.titulo}
                      </h3>
                      
                      <div className="text-sm text-[#2E5266]/70 mb-3">
                        {cantoria.cantadores.map(c => c.nome).join(" • ")}
                      </div>
                      
                      {cantoria.estrofes.length > 0 && (
                        <div className="text-xs text-[#2E5266]/60">
                          {cantoria.estrofes.length} estrofes catalogadas
                        </div>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-lg text-[#2E5266]/60">
                Nenhuma cantoria deste estilo catalogada ainda.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-5 md:px-12 bg-gradient-to-b from-[#2E5266] to-[#4A7C59]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Conhece Cantorias Neste Estilo?
          </h2>
          <p className="text-lg text-white/90 mb-6 leading-relaxed">
            Ajude a expandir o acervo contribuindo com gravações e transcrições
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
