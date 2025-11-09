import { createRoute, Link, type RootRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import acervoData from "../lib/acervoCompat";
import { useMemo } from "react";
import { agregarCantadores } from "../lib/cantadores";
import type { Cantoria } from "../lib/types";
import { MetricPill } from "../components/hero/MetricPill";
import { MetricCard } from "../components/dashboard/MetricCard";
import { StyleBar } from "../components/dashboard/StyleBar";
import { ContribCard } from "../components/contribute/ContribCard";

function HomePage() {
  const totalCantadores = useMemo(() => {
    const cantadores = agregarCantadores(acervoData.repentes as Cantoria[]);
    return cantadores.length;
  }, []);
  
  // Calcular estatísticas de estilos
  const estilosStats = useMemo(() => {
    const counts: Record<string, number> = {};
    acervoData.repentes.forEach((cantoria: any) => {
      const estilo = cantoria.estilo?.nome || "Não especificado";
      counts[estilo] = (counts[estilo] || 0) + 1;
    });
    return Object.entries(counts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5); // Top 5 estilos
  }, []);
  
  const maxEstiloCount = estilosStats[0]?.[1] || 1;
  
  return (
    <div className="min-h-screen bg-[#F5EBE0]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F5EBE0] py-12 md:py-20 px-5 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[55%_45%] gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6 order-2 md:order-1">
              <h1 
                className="font-serif text-6xl md:text-7xl font-bold leading-tight inline-block"
                style={{
                  background: 'white',
                  color: '#C84B31',
                  padding: '8px 24px',
                  boxDecorationBreak: 'clone',
                  WebkitBoxDecorationBreak: 'clone',
                  borderRadius: '4px',
                  boxShadow: '4px 4px 0 rgba(139, 111, 71, 0.2)',
                }}
              >
                Vilanova
              </h1>
              
              <h2 className="font-serif text-lg md:text-xl text-[#2E5266]/80 leading-relaxed mb-4">
                Organizando o Repente Nordestino no Mundo Digital
              </h2>
              
              {/* Métricas visuais - DESTAQUE */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
                <MetricPill value={15} label="Cantorias" to="/cantorias" />
                <MetricPill value={totalCantadores} label="Cantadores" to="/cantadores" />
                <MetricPill value={6} label="Estilos" to="/estilos" />
              </div>
              
              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-lg md:text-xl text-[#2E5266]/80 leading-relaxed">
                  <strong>Cantadores de viola</strong> improvisam versos que guardam a memória do Nordeste. 
                  São <strong>"repórteres do sertão"</strong>, professores itinerantes.
                </p>
                
                <p className="text-lg md:text-xl text-[#2E5266]/80 leading-relaxed">
                  <strong>Acervo imenso está espalhado</strong>: gravações antigas, vídeos perdidos no YouTube, 
                  na <strong>memória de mestres</strong> que não estarão aqui para sempre.
                </p>
                
                <p className="text-lg md:text-xl text-[#2E5266] leading-relaxed font-bold">
                  Usamos <strong>Inteligência Artificial</strong> para catalogar e organizar esse patrimônio. 
                  <strong className="text-[#C84B31]"> Somos open source.</strong>
                </p>
                
                {/* CTA para Cantorias */}
                <div className="pt-4">
                  <Link
                    to="/cantorias"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#C84B31] text-white font-bold rounded-lg hover:bg-[#A63D40] transition-all duration-300 shadow-md"
                  >
                    Explorar Acervo de Cantorias
                  </Link>
                </div>
                
                {/* Disclaimer */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg mt-6">
                  <p className="text-sm text-yellow-800">
                    ⚠️ <strong>Projeto em construção:</strong> Algumas informações podem estar incompletas ou imprecisas. 
                    Você pode corrigir ou completar qualquer dado clicando em "Sugerir Melhoria" nas páginas.
                  </p>
                </div>
              </div>
              
            </div>
            
            {/* Right: Image */}
            <div className="order-1 md:order-2">
              <img 
                src="/fotos/lucis2244_dois_violeiros_num_pe_de_parede_cantoria_xilografia.png"
                alt="Dois violeiros em cantoria de pé de parede - xilogravura"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: O Que É Repente */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-gradient-to-b from-[#F5EBE0] to-[#E8D4B0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#C84B31] text-center mb-6">
            O Que É Repente?
          </h2>
          
          <p className="text-xl md:text-2xl text-[#2E5266]/70 text-center max-w-3xl mx-auto mb-8 leading-relaxed">
            Arte brasileira de improviso cantado, alternada por dois poetas 
            ao som da viola, criando versos "de repente" em métrica e rima perfeitas.
          </p>
          
          {/* Vídeo Embed */}
          <div className="aspect-video rounded-xl overflow-hidden shadow-2xl mb-12 border-3 border-[#8B6F47]">
            <iframe 
              src="https://www.youtube.com/embed/ULbBggbGpB8"
              title="Entre Cordas e Poesia - O Que é Repente"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
          
          {/* Características Fundamentais */}
          <div className="bg-white border-3 border-[#8B6F47] rounded-lg p-8 md:p-12 space-y-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="text-3xl mb-2">🎸</div>
                <h3 className="font-semibold text-xl text-[#2E5266]">
                  Dois Cantadores Alternados
                </h3>
                <p className="text-[#2E5266]/80 text-lg leading-relaxed">
                  O repente se dá sempre em <strong>dupla</strong>, cada poeta aguarda sua vez de <strong>improvisar a resposta</strong>.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="text-3xl mb-2">🎵</div>
                <h3 className="font-semibold text-xl text-[#2E5266]">
                  Viola de 10 Cordas
                </h3>
                <p className="text-[#2E5266]/80 text-lg leading-relaxed">
                  Instrumento característico na <strong>afinação nordestina</strong>. Quando é pandeiro, chama-se <strong>coco de embolada</strong>.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="text-3xl mb-2">📏</div>
                <h3 className="font-semibold text-xl text-[#2E5266]">
                  Métrica Rigorosa
                </h3>
                <p className="text-[#2E5266]/80 text-lg leading-relaxed">
                  Predominam versos <strong>heptassílabos (7 sílabas)</strong> e <strong>decassílabos (10 sílabas)</strong>. Contagem precisa obrigatória.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="text-3xl mb-2">🔗</div>
                <h3 className="font-semibold text-xl text-[#2E5266]">
                  Rima Perfeita
                </h3>
                <p className="text-[#2E5266]/80 text-lg leading-relaxed">
                  <strong>Não se aceita rima toante ou aproximada.</strong> O extremo rigor na rima é marca da cantoria.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-xl text-[#2E5266]">
                  Improviso Imediato
                </h3>
                <p className="text-[#2E5266]/80 text-lg leading-relaxed">
                  Versos criados <strong>na hora, sem decorar</strong>. É isso que caracteriza o <strong>"repente"</strong>.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="text-3xl mb-2">🗺️</div>
                <h3 className="font-semibold text-xl text-[#2E5266]">
                  Forte no Nordeste
                </h3>
                <p className="text-[#2E5266]/80 text-lg leading-relaxed">
                  Origem na divisa <strong>Paraíba-Pernambuco</strong> (Teixeira/Rio Pajeú) no <strong>século XIX</strong>. Presente em todo o Nordeste brasileiro.
                </p>
              </div>
            </div>
          </div>
          
          {/* Exemplo de Estrofe Completa */}
          <div className="border-2 border-[#8B6F47] bg-white rounded-lg overflow-hidden mb-12">
            <div className="bg-[#E8D4B0] p-6 md:p-8">
              <p className="text-xs text-[#2E5266]/70 mb-3 font-semibold uppercase tracking-wide">🏛️ História do Nordeste</p>
              <p className="italic text-base md:text-lg text-[#2E5266] leading-relaxed space-y-2">
                <span className="block">Começou namorando a cachoeira.</span>
                <span className="block">Apesar de correr um grande risco,</span>
                <span className="block">levou a água do rio São Francisco,</span>
                <span className="block">fez da pedra uma terra ouriçareira,</span>
                <span className="block">onde a fábrica de linho era a bandeira,</span>
                <span className="block">dando impulso pra civilização.</span>
                <span className="block">Seu produto ganhou aceitação</span>
                <span className="block">no Brasil e depois no estrangeiro.</span>
                <span className="block font-bold">Foi Delmiro Gouveia o pioneiro</span>
                <span className="block font-bold">implantando o progresso no sertão.</span>
              </p>
              <p className="text-xs text-[#2E5266]/60 mt-3 italic">
                * Os últimos 2 versos são o mote fixo da Décima
              </p>
            </div>
            <div className="bg-white p-4 border-t-2 border-[#8B6F47]">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-[#2E5266]">Valdir Teles e Zé Cardoso</span>
                  <span className="text-xs text-[#2E5266]/50">·</span>
                  <span className="text-sm text-[#2E5266]/70">Décima (Mote Fixo)</span>
                </div>
                <Link to="/cantorias/$slug" params={{ slug: "homenagem-delmiro-gouveia" }} className="text-sm text-[#C84B31] font-semibold hover:underline">
                  Ver cantoria completa →
                </Link>
              </div>
          </div>
          </div>
          
          {/* Contexto Histórico */}
          <div className="prose prose-lg max-w-none space-y-6">
            <p className="text-xl text-[#2E5266]/85 leading-relaxed">
              A cantoria de viola tem raízes nos <strong>trovadores de Provença</strong> (França, 
              século XI) e na trova medieval portuguesa. No Brasil, encontrou 
              terreno fértil no sertão nordestino. Historicamente, situa-se a 
              origem do repentista brasileiro na divisa entre <strong>Paraíba e Pernambuco</strong>, 
              região de <strong>Teixeira e Rio Pajeú</strong>, no século XIX.
            </p>
            
            <p className="text-xl text-[#2E5266]/85 leading-relaxed">
              Por volta de <strong>1830</strong>, surgem os primeiros cantadores de que se tem 
              registro: <strong>Urgulino do Sabugi</strong> (considerado o primeiro), seu irmão 
              Nicandro, ambos filhos de <strong>Agostinho da Costa</strong>, "o Pai da Poesia 
              Popular". Seguiram-se Germano da Lagoa, Romano da Mãe D'Água, 
              <strong>Silvino Pirauá Lima</strong> (criador da Sextilha).
            </p>
            
            <p className="text-xl text-[#2E5266]/85 leading-relaxed">
              O termo <strong>"repente"</strong> vem do improviso — criar versos "de repente", 
              na hora. Como observa <strong>Câmara Cascudo</strong>, os cantadores são 
              <strong>"representantes legítimos de todos os bardos menestréis"</strong>.
            </p>
            
            <div className="bg-[#E8D4B0] p-6 rounded-lg border-l-4 border-[#4A7C59] my-6">
              <h4 className="font-semibold text-xl text-[#2E5266] mb-3">Distinções Importantes:</h4>
              <ul className="space-y-3 text-lg text-[#2E5266]/85">
                <li><strong>Repente ≠ Cordel:</strong> Cordel é poesia publicada em folhetos. Repente é poesia oral improvisada.</li>
                <li><strong>Repente ≠ Embolada:</strong> Quando o instrumento é pandeiro (não viola), o gênero se chama coco de embolada, com ritmo mais rápido.</li>
                <li><strong>Cantoria de viola:</strong> Dois cantadores com viola de 10 cordas na afinação nordestina, alternando versos improvisados.</li>
              </ul>
            </div>
            
            <p className="text-xl text-[#2E5266]/85 leading-relaxed italic">
              "No Nordeste, os <strong>jesuítas catequizavam por meio da poesia</strong> por 
              ficar mais fácil de conservar a mensagem na memória, seguindo 
              assim o estilo da Grécia Antiga."
            </p>
            
            <p className="text-xl text-[#2E5266]/85 leading-relaxed">
              A função social do cantador foi ampla: <strong>"repórter do sertão, 
              professor itinerante, guardião da memória oral"</strong>, como relata 
              <strong>Leonardo Mota</strong>. Gerações aprenderam valores, ética, política 
              através da cantoria — em tempos onde livro não chegava ao interior.
            </p>
            
            <p className="text-xl text-[#2E5266]/85 leading-relaxed">
              Hoje, conforme relatam os próprios cantadores em <strong>"Entre Cordas e 
              Poesia"</strong>, a tradição enfrenta: preconceito social persistente, 
              falta de apoio público, <strong>diminuição das cantorias de pé de parede</strong>, 
              e um acervo histórico disperso em risco de se perder.
            </p>
          </div>
          
          <p className="text-xs text-[#2E5266]/50 mt-6 text-center">
            Fontes: Cordel nos Cocais (José Edimar Mendes Barbosa), Câmara Cascudo, Leonardo Mota, Atila de Almeida
          </p>
          
          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-[#4A7C59]/10 to-transparent p-6 border-l-4 border-[#4A7C59] rounded-r-lg">
            <p className="text-lg font-semibold text-[#2E5266] mb-3">
              📚 Quer entender como funcionam esses estilos?
            </p>
            <button className="text-[#C84B31] font-semibold hover:underline flex items-center gap-2">
              Explorar Guia de Estilos
              <span className="text-xs bg-[#D49B54] text-white px-2 py-1 rounded">EM BREVE</span>
            </button>
          </div>
        </div>
      </section>

      {/* Section 2.5: Acervo em Números (Dashboard) */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E5266] text-center mb-4">
            📊 Acervo em Números
          </h2>
          
          <p className="text-lg text-[#2E5266]/70 text-center mb-12">
            Dados atualizados sobre o catálogo de repentes
          </p>
          
          {/* Métricas principais */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <MetricCard value={15} label="Cantorias" icon="🎵" color="#C84B31" />
            <MetricCard value={totalCantadores} label="Cantadores" icon="🎸" color="#2E5266" />
            <MetricCard value={6} label="Estilos" icon="📏" color="#4A7C59" />
            <MetricCard value={84} label="Estrofes" icon="📖" color="#D49B54" />
          </div>
          
          {/* Estilos mais frequentes */}
          <div className="bg-[#F5EBE0] border-2 border-[#8B6F47] rounded-lg p-8">
            <h3 className="font-bold text-xl text-[#2E5266] mb-6 text-center">
              Estilos Mais Frequentes no Acervo
            </h3>
            
            <div className="space-y-4 max-w-2xl mx-auto">
              {estilosStats.map(([estilo, count], index) => (
                <StyleBar 
                  key={estilo}
                  estilo={estilo}
                  count={count as number}
                  maxCount={maxEstiloCount}
                  color={[
                    "#C84B31", // Galope
                    "#4A7C59", // Martelo
                    "#D49B54", // Sextilha
                    "#2E5266", // Décima
                    "#8B6F47"  // Desafio
                  ][index]}
                />
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Link 
                to="/cantorias"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#C84B31] text-white font-semibold rounded-lg hover:bg-[#A63D40] transition-all duration-300"
              >
                Explorar Acervo Completo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2.7: Repente e Música Popular */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-gradient-to-b from-[#4A7C59]/5 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[60%_40%] gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="inline-block bg-[#D49B54] text-white text-xs px-3 py-1 rounded-full font-semibold mb-2">
                🎵 DNA DA MÚSICA NORDESTINA
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#2E5266] leading-tight">
                O Repente é o DNA Original da Música Nordestina
              </h2>
              
              <div className="prose prose-lg max-w-none space-y-6">
                <p className="text-xl text-[#2E5266]/85 leading-relaxed">
                  A cantoria de viola é a <strong>raiz profunda</strong> de onde brotou grande parte 
                  da música popular nordestina. Artistas como <strong>Luiz Gonzaga</strong>, 
                  <strong>Zé Ramalho</strong> e <strong>Alceu Valença</strong> beberam diretamente 
                  dessa fonte, trazendo para seus discos a métrica, a rima, a cadência e os 
                  temas do repente.
                </p>
                
                <p className="text-xl text-[#2E5266]/85 leading-relaxed">
                  Existe uma <strong>relação amistosa e respeitosa</strong> entre cantadores 
                  e músicos populares — <strong>linhas que se confundem</strong>, onde o repentista 
                  homenageia o artista em seus versos e o artista incorpora a cantoria em 
                  suas composições.
                </p>
                
                <div className="bg-[#E8D4B0] border-l-4 border-[#4A7C59] p-6 rounded-r-lg">
                  <p className="text-lg text-[#2E5266] font-semibold mb-3">
                    🎼 O Vilanova explora essa influência
                  </p>
                  <p className="text-base text-[#2E5266]/80 leading-relaxed">
                    Catalogamos não apenas cantorias de improviso, mas também 
                    <strong> músicas autorais</strong> que prestam homenagem à tradição. 
                    Analisamos a métrica, a rima, e mostramos como o repente vive 
                    na MPB, no forró, no baião e na música contemporânea.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link 
                  to="/musicas"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D49B54] text-white font-semibold rounded-lg hover:bg-[#C84B31] transition-all duration-300"
                >
                  🎵 Explorar Músicas Catalogadas
                </Link>
                
                <Link 
                  to="/cantorias"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#4A7C59] text-[#4A7C59] font-semibold rounded-lg hover:bg-[#4A7C59]/10 transition-all duration-300"
                >
                  Ver Cantorias Originais
                </Link>
              </div>
            </div>
            
            {/* Right: Featured Artists */}
            <div className="order-1 md:order-2 space-y-4">
              <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-6 shadow-lg">
                <h3 className="font-bold text-lg text-[#2E5266] mb-4">
                  Artistas Influenciados pelo Repente
                </h3>
                
                <ul className="space-y-3 text-base text-[#2E5266]/80">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🎸</span>
                    <div>
                      <strong className="text-[#2E5266]">Luiz Gonzaga</strong>
                      <p className="text-sm text-[#2E5266]/70">
                        "O Rei do Baião" incorporou a cantoria em clássicos como "Respeita Januário"
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🎵</span>
                    <div>
                      <strong className="text-[#2E5266]">Alceu Valença</strong>
                      <p className="text-sm text-[#2E5266]/70">
                        Homenageou mestres em "Martelo Alagoano" e outros sucessos
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex items-start gap-3">
                    <span className="text-2xl flex-shrink-0">🎤</span>
                    <div>
                      <strong className="text-[#2E5266]">Zé Ramalho</strong>
                      <p className="text-sm text-[#2E5266]/70">
                        Usa métricas e temas do repente em diversas composições
                      </p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6 pt-4 border-t border-[#8B6F47]/30">
                  <p className="text-xs text-[#2E5266]/60 italic">
                    E muitos outros artistas da música nordestina contemporânea
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Os Cantadores */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E5266] text-center mb-6">
            Os Cantadores: Transmissão Oral de Geração em Geração
          </h2>
          
          <div className="prose prose-lg max-w-4xl mx-auto text-center mb-12 space-y-6">
            <p className="text-xl md:text-2xl text-[#2E5266]/80 leading-relaxed">
              O aprendizado da cantoria se dá <strong>tradicionalmente em família</strong>. 
              Pai ensina filho, tio ensina sobrinho, avô passa para neto. 
              É comum cantadores relatarem: "aprendi com meu pai", "meu avô 
              era cantador", "herdei do meu tio".
            </p>
            
            <p className="text-xl md:text-2xl text-[#2E5266]/80 leading-relaxed">
              A profissão historicamente <strong>enfrentou preconceito social</strong>. 
              No início do século XX, cantador era descrito como <strong>"beberrão, 
              valentão, conquistador, jogador, parasita"</strong>. Famílias empatavam 
              namoros com cantadores. Esse estigma persiste em algumas regiões.
            </p>
            
            <p className="text-xl md:text-2xl text-[#2E5266]/80 leading-relaxed">
              <strong>Mulheres enfrentam obstáculos adicionais.</strong> Há registros de 
              violeiras desde o século XIX (<strong>Vovó Pangula, Maria Tebana, 
              Chica Barrosa</strong>), mas o meio sempre foi majoritariamente masculino. 
              Cantadoras contemporâneas como <strong>Fabiane Ribeiro</strong> e <strong>Rafaela Pereira</strong> 
              ainda relatam dificuldades específicas por serem mulheres.
            </p>
            
            <p className="text-xl md:text-2xl text-[#2E5266]/80 leading-relaxed">
              Jovens que seguem a cantoria hoje são frequentemente <strong>chamados 
              de "velhos"</strong> pelos pares, por escolherem uma arte associada a 
              gerações anteriores. Mesmo assim, novos cantadores surgem.
            </p>
          </div>
          
          {/* Grid de Cantadores */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Card 1: Ivanildo Vilanova */}
            <div className="border-2 border-[#8B6F47] rounded-lg p-6 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#C84B31]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🎵</span>
              </div>
              
              <h3 className="font-serif text-xl font-bold text-[#2E5266] mb-1">
                Ivanildo Vilanova
              </h3>
              <p className="text-sm text-[#C84B31] italic mb-3">
                "O Poeta do Improviso"
              </p>
              
              <div className="space-y-1 text-sm text-[#2E5266]/70 mb-4">
                <p>📍 Caruaru, PE</p>
                <p>🎵 Mestre em Sextilha e Mourão Voltado</p>
              </div>
              
              <p className="text-sm text-[#2E5266]/80 italic leading-relaxed">
                "O cantador deve estar apto a cantar o sertão, 
                a praia, a universidade, a linguagem do caboclo."
              </p>
            </div>
            
            {/* Card 2: Fabiane Ribeiro */}
            <div className="border-2 border-[#8B6F47] rounded-lg p-6 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#4A7C59]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🎺</span>
              </div>
              
              <h3 className="font-serif text-xl font-bold text-[#2E5266] mb-1">
                Fabiane Ribeiro
              </h3>
              <p className="text-sm text-[#4A7C59] italic mb-3">
                "Referência para Jovens Cantadoras"
              </p>
              
              <div className="space-y-1 text-sm text-[#2E5266]/70 mb-4">
                <p>📍 Maranhão</p>
                <p>🎺 Pioneira da nova geração</p>
              </div>
              
              <p className="text-sm text-[#2E5266]/80 italic leading-relaxed">
                "Ela me incentivou e foi quem me deu coragem."
                <span className="block text-xs mt-1 not-italic">— Rafaela Pereira, sobre Fabiane</span>
              </p>
            </div>
            
            {/* Card 3: José Jonas */}
            <div className="border-2 border-[#8B6F47] rounded-lg p-6 bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#2E5266]/10 rounded-full flex items-center justify-center mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              
              <h3 className="font-serif text-xl font-bold text-[#2E5266] mb-1">
                José Jonas
              </h3>
              <p className="text-sm text-[#2E5266] italic mb-3">
                "A Nova Semente"
              </p>
              
              <div className="space-y-1 text-sm text-[#2E5266]/70 mb-4">
                <p>📍 Adolescente, iniciando carreira</p>
                <p>🌱 Representa a continuidade da tradição</p>
              </div>
              
              <p className="text-sm text-[#2E5266]/80 italic leading-relaxed">
                "Fui chamado de velho várias vezes por seguir 
                na cantoria. Mas continuo."
              </p>
      </div>
    </div>
          
          {/* CTA */}
          <div className="text-center bg-[#F5EBE0] p-8 rounded-lg">
            <p className="text-lg text-[#2E5266] mb-4">
              Estamos catalogando a história de cada cantador.<br />
              Suas vozes. Seus repentes. Seu legado.
            </p>
            <button className="text-[#C84B31] font-semibold hover:underline inline-flex items-center gap-2">
              Ver Galeria de Cantadores
              <span className="text-xs bg-[#D49B54] text-white px-2 py-1 rounded">EM CONSTRUÇÃO</span>
            </button>
    </div>
          
          {/* Foto Histórica */}
          <div className="mt-12">
            <img 
              src="/fotos/fotopasspretozefranpelejas.jpg"
              alt="Cantadores em peleja histórica"
              className="w-full rounded-lg shadow-lg grayscale hover:grayscale-0 transition-all duration-500"
            />
            <p className="text-center text-sm text-[#2E5266]/60 mt-3 italic">
              Peleja histórica registrada — memória viva da cantoria nordestina
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: O Problema */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-gradient-to-b from-[#A63D40]/5 to-[#C84B31]/3">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#A63D40] text-center mb-12">
            Desafios da Preservação do Repente
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {/* Card 1 */}
            <div className="border-2 border-[#8B6F47] bg-[#F5EBE0] rounded-lg p-6 md:p-8">
              <div className="text-4xl mb-4">📼</div>
              <h3 className="font-bold text-2xl text-[#2E5266] mb-4">
                Acervo Disperso
              </h3>
              <p className="text-lg text-[#2E5266]/80 leading-relaxed">
                Repentes históricos estão espalhados: em <strong>canais 
                de YouTube sem views</strong>, gravações de rádio antiga, 
                <strong>fitas cassete</strong> nas casas dos cantadores.
              </p>
              <p className="text-lg text-[#2E5266]/80 leading-relaxed mt-4 font-semibold">
                Está tudo lá, mas ninguém consegue achar. 
                <strong>Precisamos catalogar antes que se perca.</strong>
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="border-2 border-[#8B6F47] bg-[#F5EBE0] rounded-lg p-6 md:p-8">
              <div className="text-4xl mb-4">👴</div>
              <h3 className="font-bold text-2xl text-[#2E5266] mb-4">
                Memória Oral em Risco
              </h3>
              <p className="text-lg text-[#2E5266]/80 leading-relaxed">
                <strong>Ivanildo Vilanova tem 79 anos</strong> e continua cantando. 
                Mas <strong>Minervina Ferreira</strong>, que acolhia jovens 
                cantadoras, já partiu.
              </p>
              <p className="text-lg text-[#2E5266]/80 leading-relaxed mt-4 font-semibold">
                <strong>Cada mestre que se vai</strong> leva histórias, técnicas, 
                repentes que nunca foram gravados.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="border-2 border-[#8B6F47] bg-[#F5EBE0] rounded-lg p-6 md:p-8">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="font-bold text-2xl text-[#2E5266] mb-4">
                Falta de Valorização
              </h3>
              <p className="text-lg text-[#2E5266]/80 leading-relaxed italic">
                "Se tiver que cortar tempo de um evento, <strong>cortam 
                do cordel e da viola</strong>" — Anita Alves
              </p>
              <p className="text-lg text-[#2E5266]/80 leading-relaxed mt-4 font-semibold">
                Falta apoio público, <strong>falta inserir nas escolas</strong>. 
                Jovens enfrentam preconceito. <strong>Cantorias de pé 
                de parede estão diminuindo.</strong>
              </p>
            </div>
          </div>

          {/* Citação de Mestre */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border-l-4 border-[#C84B31] p-8 rounded-r-lg">
              <p className="text-xl md:text-2xl text-[#2E5266] italic leading-relaxed mb-3">
                "O repente é puro, é santo, é divino. É uma janela para a alma, 
                uma janela para o mundo da sabedoria. A arte mais difícil do mundo."
              </p>
              <p className="text-sm text-[#2E5266]/60 font-medium">
                — Raimundo Lira, cantador
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: A Solução */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-gradient-to-b from-[#2E5266]/3 to-[#4A7C59]/2">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E5266] text-center mb-6">
            Como o Vilanova Organiza Esse Acervo
          </h2>
          
          <div className="text-xl md:text-2xl text-[#2E5266]/70 text-center max-w-3xl mx-auto mb-12 leading-relaxed space-y-4">
            <p>
              Usamos <strong>Inteligência Artificial</strong> para encontrar, catalogar e organizar 
              o repente nordestino espalhado na internet e na memória oral.
            </p>
            
            <p className="text-2xl font-bold text-[#2E5266]">
              Não estamos criando nada novo.<br />
              Estamos organizando o que já existe.
            </p>
          </div>
          
          {/* Timeline */}
          <div className="space-y-8 max-w-3xl mx-auto">
            {/* Item 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D49B54]/20 flex items-center justify-center text-2xl">
                🔍
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl text-[#2E5266] mb-3">
                  Encontramos Repentes na Internet
                </h3>
                <p className="text-lg text-[#2E5266]/80 leading-relaxed mb-2">
                  Vasculhamos <strong>YouTube, Spotify, SoundCloud</strong>, arquivos 
                  públicos. Identificamos <strong>cantorias perdidas em canais 
                  com 50 views</strong>.
                </p>
                <span className="inline-block text-xs bg-[#D49B54] text-white px-3 py-1 rounded-full">
                  🚧 EM CONSTRUÇÃO
                </span>
              </div>
            </div>
            
            {/* Item 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4A7C59]/20 flex items-center justify-center text-2xl">
                🎙️
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl text-[#2E5266] mb-3">
                  Transcrevemos Automaticamente
                </h3>
                <p className="text-lg text-[#2E5266]/80 leading-relaxed mb-2">
                  <strong>MP3/WAV → OpenAI Whisper → Texto estruturado</strong>
                  <br /><br />
                  Mapeamos cada <strong>estrofe</strong>, identificamos versos, contamos <strong>sílabas 
                  poéticas</strong>, analisamos <strong>esquemas de rima</strong> e transformamos tudo 
                  em dados estruturados.
                </p>
                <span className="inline-block text-xs bg-[#4A7C59] text-white px-3 py-1 rounded-full">
                  ✅ JÁ FUNCIONA (15 cantorias · 84 estrofes catalogadas)
                </span>
              </div>
        </div>

            {/* Item 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4A7C59]/20 flex items-center justify-center text-2xl">
                📊
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl text-[#2E5266] mb-3">
                  Analisamos a Estrutura
                </h3>
                <div className="text-[#2E5266]/80 leading-relaxed mb-2">
                  <p className="text-lg mb-3"><strong>IA identifica automaticamente:</strong></p>
                  <ul className="list-disc list-inside space-y-2 text-lg">
                    <li>Qual <strong>estilo</strong> (Galope, Martelo, Sextilha...)</li>
                    <li><strong>Métrica</strong> de cada verso (contagem de sílabas)</li>
                    <li><strong>Esquema de rimas</strong></li>
                    <li>Adaptações fonéticas intencionais</li>
                  </ul>
                </div>
                <span className="inline-block text-xs bg-[#4A7C59] text-white px-3 py-1 rounded-full">
                  ✅ JÁ FUNCIONA
                </span>
              </div>
            </div>
            
            {/* Item 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D49B54]/20 flex items-center justify-center text-2xl">
                👥
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-[#2E5266] mb-2">
                  Catalogamos Cantadores
                </h3>
                <p className="text-[#2E5266]/80 leading-relaxed mb-2">
                  Perfis com biografia, trajetória, estilos favoritos.
                  Homenageamos desde veteranos até jovens de 15 anos.
                  <br /><br />
                  Baseado em "Entre Cordas e Poesia" e contribuições 
                  da comunidade.
                </p>
                <span className="inline-block text-xs bg-[#D49B54] text-white px-3 py-1 rounded-full">
                  🚧 EM CONSTRUÇÃO
                </span>
              </div>
            </div>
            
            {/* Item 5 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D49B54]/20 flex items-center justify-center text-2xl">
                📚
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-[#2E5266] mb-2">
                  Organizamos Tudo em Acervo Pesquisável
                </h3>
                <p className="text-[#2E5266]/80 leading-relaxed mb-2">
                  Busque por cantador, estilo, tema, local, época.
                  API aberta para pesquisadores.
                </p>
                <span className="inline-block text-xs bg-[#D49B54] text-white px-3 py-1 rounded-full">
                  🚧 EM CONSTRUÇÃO
                </span>
              </div>
            </div>
            
            {/* Item 6 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#2E5266]/10 flex items-center justify-center text-2xl">
                ✍️
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-[#2E5266] mb-2">
                  Editor com IA (Futuro)
                </h3>
                <p className="text-[#2E5266]/80 leading-relaxed mb-2">
                  Crie seus próprios repentes com análise em tempo real, 
                  sugestões de rimas e validação de métrica.
                </p>
                <span className="inline-block text-xs bg-[#2E5266]/20 text-[#2E5266] px-3 py-1 rounded-full border border-[#2E5266]/30">
                  📋 PLANEJADO
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: O Que Já Temos */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-[#F5EBE0]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#4A7C59] text-center mb-12">
            O Que Já Conquistamos
          </h2>
          
          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <Link to="/cantorias" className="text-center hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-[#C84B31] mb-2">15</div>
              <div className="text-sm md:text-base text-[#2E5266]/70">Cantorias</div>
            </Link>
            <Link to="/musicas" className="text-center hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-[#C84B31] mb-2">1</div>
              <div className="text-sm md:text-base text-[#2E5266]/70">Músicas</div>
            </Link>
            <Link to="/estilos" className="text-center hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-[#C84B31] mb-2">6</div>
              <div className="text-sm md:text-base text-[#2E5266]/70">Estilos</div>
            </Link>
            <Link to="/cantadores" className="text-center hover:scale-105 transition-transform">
              <div className="text-5xl md:text-6xl font-bold text-[#C84B31] mb-2">{totalCantadores}</div>
              <div className="text-sm md:text-base text-[#2E5266]/70">Cantadores</div>
            </Link>
          </div>
          
          {/* Exemplos Reais do Acervo */}
          <div className="space-y-6">

            {/* NEW SECTION: Destaque de Músicas */}
            <div className="bg-gradient-to-r from-[#D49B54]/20 to-[#C84B31]/20 border-2 border-[#D49B54] rounded-lg overflow-hidden">
              <div className="p-6 md:p-8 bg-gradient-to-r from-[#F5EBE0] to-white">
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-4xl">🎵</div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#C84B31] mb-2">
                      Músicas Inspiradas na Cantoria
                    </h3>
                    <p className="text-lg text-[#2E5266]/80 leading-relaxed">
                      Além de preservar as cantorias de improviso, catalogamos <strong>músicas autorais</strong> que 
                      prestam homenagem à tradição nordestina. São composições que mantêm viva a essência da cantoria 
                      na música popular brasileira.
                    </p>
                  </div>
                </div>
                
                {/* Featured Music Card */}
                <div className="bg-white border-2 border-[#8B6F47] rounded-lg overflow-hidden mt-6 hover:shadow-lg transition-all duration-300">
                  <div className="p-4 bg-[#D49B54]/10">
                    <h4 className="font-bold text-lg text-[#2E5266]">🎼 Martelo Alagoano - Alceu Valença</h4>
                    <p className="text-xs text-[#2E5266]/60 mt-1">Álbum: Coração Bobo · 1980 · 4:23</p>
                  </div>
                  
                  <div className="p-4 bg-[#E8D4B0]">
                    <p className="italic text-sm md:text-base text-[#2E5266] leading-relaxed">
                      Homenagem aos grandes mestres como Dimas Batista, Pinto do Monteiro, Lourival Batista e Mocinha de Passira.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white border-t-2 border-[#8B6F47] flex items-center justify-between">
                    <span className="text-xs text-[#2E5266]/70">Composição autorizada com análise métrica</span>
                    <Link to="/musicas/martelo-alagoano-alceu-valenca" className="text-sm text-[#C84B31] font-semibold hover:underline">
                      Ver detalhes →
                    </Link>
                  </div>
                </div>
                
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <Link 
                    to="/musicas"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D49B54] text-white font-semibold rounded-lg hover:bg-[#C84B31] transition-all duration-300"
                  >
                    🎵 Explorar Coleção de Músicas
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 1: Galope - Ingratidão */}
            <div className="border-2 border-[#8B6F47] bg-white rounded-lg overflow-hidden">
              <div className="p-4 bg-[#C84B31]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">🌊</div>
                <div>
                    <h3 className="font-bold text-lg text-[#2E5266]">Galope à Beira Mar · Ingratidão</h3>
                    <p className="text-xs text-[#2E5266]/60">10 versos decassílabos · AAAAABBCCM</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-[#E8D4B0]">
                <p className="text-xs text-[#2E5266]/70 mb-3 font-semibold uppercase tracking-wide">💔 Mestre e Aprendiz</p>
                <p className="italic text-base md:text-lg text-[#2E5266] leading-relaxed space-y-1">
                  <span className="block">Se não for loucura, você esqueceu</span>
                  <span className="block">que teve por mestre esse professor.</span>
                  <span className="block font-semibold">Você no presente só é cantador</span>
                  <span className="block font-semibold">porque no passado foi aluno meu.</span>
                  <span className="block">Do pão do meu prato você já comeu</span>
                  <span className="block">e na minha sombra já foi repousar.</span>
                  <span className="block">Mas por ser covarde resolveu pagar</span>
                  <span className="block">o que recebeu dessa mão amiga,</span>
                  <span className="block font-bold text-lg">cuspindo no prato que encheu a barriga,</span>
                  <span className="block font-semibold">nos dez de galope da beira do mar.</span>
                </p>
                <p className="text-xs text-[#2E5266]/60 mt-3 italic">
                  * Galope: 4 versos A, 2 B, 2 C + mote final
                </p>
              </div>
              
              <div className="p-4 bg-white border-t-2 border-[#8B6F47]">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#2E5266]">Valdir Teles e Moacir Laurentino</span>
                    <span className="text-[#2E5266]/50">·</span>
                    <span className="text-sm text-[#2E5266]/70">Tema: Traição entre mestre e aluno</span>
                  </div>
                  <Link to="/cantorias/$slug" params={{ slug: "galope-valdir-teles-moacir-laurentino" }} className="text-sm text-[#C84B31] font-semibold hover:underline">
                    Ver cantoria completa →
                  </Link>
                </div>
              </div>
                </div>

            {/* Card 2: Martelo Alagoano - Profissões */}
            <div className="border-2 border-[#8B6F47] bg-white rounded-lg overflow-hidden">
              <div className="p-4 bg-[#D49B54]/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-2xl">🔨</div>
                <div>
                    <h3 className="font-bold text-lg text-[#2E5266]">Martelo Alagoano · Profissões</h3>
                    <p className="text-xs text-[#2E5266]/60">10 versos decassílabos + mote triplo</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-[#E8D4B0]">
                <p className="text-xs text-[#2E5266]/70 mb-2 font-semibold uppercase tracking-wide">🌾 O Homem da Roça</p>
                <p className="italic text-sm md:text-base text-[#2E5266] leading-relaxed space-y-1">
                  <span className="block">Já o homem da roça faz da terra</span>
                  <span className="block">a empresa que gera seu sustento.</span>
                  <span className="block">No inverno, produz o alimento.</span>
                  <span className="block font-semibold">Quando o ano é de seca, ele se ferra.</span>
                  <span className="block">Faz a casa num triste pé de serra.</span>
                  <span className="block">Parecendo morada de cigano.</span>
                  <span className="block font-semibold">Numa festa, só vai de ano em ano.</span>
                  <span className="block">Festejar as lições do padroeiro.</span>
                  <span className="block font-bold">Assim mesmo, ainda vai sem ter dinheiro.</span>
                  <span className="block text-xs opacity-70">Nos dez pés de martelo alagoano. (3x)</span>
                </p>
              </div>
              
              <div className="p-4 bg-white border-t-2 border-[#8B6F47]">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#2E5266]">Valdir Teles e Zé Cardoso</span>
                    <span className="text-[#2E5266]/50">·</span>
                    <span className="text-sm text-[#2E5266]/70">Crítica social</span>
                  </div>
                  <Link to="/cantorias/$slug" params={{ slug: "martelo-alagoano-valdir-teles-ze-cardoso" }} className="text-sm text-[#C84B31] font-semibold hover:underline">
                    Ver cantoria completa →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mais Exemplos de Estrofes */}
          <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-6 md:p-8">
            <h3 className="font-bold text-xl text-[#2E5266] mb-6 text-center">
              Outras Estrofes Memoráveis do Acervo
            </h3>
            
            <div className="space-y-6">
              {/* Estrofe 1 - Pensamento Positivo */}
              <div className="border-l-4 border-[#D49B54] bg-[#E8D4B0] p-4 rounded-r-lg">
                <p className="text-xs text-[#2E5266]/70 mb-2 font-semibold">💪 PENSAMENTO POSITIVO</p>
                <p className="italic text-sm text-[#2E5266] leading-relaxed space-y-1">
                  <span className="block">O destino é ramal que se estende</span>
                  <span className="block">à procura de oásis no deserto,</span>
                  <span className="block">na certeza que a glória está por perto,</span>
                  <span className="block">uma luz de incentivo a fé acende.</span>
                  <span className="block font-semibold">Liberdade que voa ninguém prende.</span>
                  <span className="block font-semibold">Incerteza nem sempre atrai engano,</span>
                  <span className="block font-semibold">e por mais frágil que seja o ser humano</span>
                  <span className="block font-semibold">se tiver pensamento positivo,</span>
                  <span className="block font-bold">não desiste de nada enquanto é vivo</span>
                  <span className="block text-xs opacity-70">nos dez pés de martelo Alagoano. (3x)</span>
                </p>
                <div className="mt-3 pt-3 border-t border-[#8B6F47]/30 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-[#2E5266]">Os Nonatos</span>
                    <span className="text-[#2E5266]/50">·</span>
                    <span className="text-[#2E5266]/70">Martelo Alagoano</span>
                  </div>
                  <Link to="/cantorias/$slug" params={{ slug: "pensamento-positivo-martelo-alagoano-os-nonatos" }} className="text-xs text-[#C84B31] font-semibold hover:underline">
                    Ver cantoria →
                  </Link>
                </div>
              </div>

              {/* Estrofe 2 - Desafio de Autoestima */}
              <div className="border-l-4 border-[#C84B31] bg-[#E8D4B0] p-4 rounded-r-lg">
                <p className="text-xs text-[#2E5266]/70 mb-2 font-semibold uppercase tracking-wide">🦁 Força e Determinação</p>
                <p className="italic text-sm text-[#2E5266] leading-relaxed space-y-1">
                  <span className="block">Pesquisando, cheguei à conclusão</span>
                  <span className="block font-bold">Meu espírito de luta é de uma fera</span>
                  <span className="block font-bold">Corto mais do que unha de pantera</span>
                  <span className="block font-bold">A minha força supera a do leão</span>
                  <span className="block">Contra a vítima que cai na minha mão</span>
                  <span className="block">Eu não sou cascavel, mas sei morder</span>
                  <span className="block">Mike Tyson eu não sou, mas sei bater</span>
                  <span className="block font-semibold">Se você tiver dúvida, me enfrente</span>
                  <span className="block text-xs opacity-70 mt-1">Cantador, pra cantar na minha frente / Deus não faz, nunca fez, nem vai fazer</span>
                </p>
                <div className="mt-3 pt-3 border-t border-[#8B6F47]/30 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-[#2E5266]">Louro Branco</span>
                    <span className="text-[#2E5266]/50">·</span>
                    <span className="text-[#2E5266]/70">Desafio</span>
                  </div>
                  <Link to="/cantorias/$slug" params={{ slug: "desafio-ze-cardoso-louro-branco" }} className="text-xs text-[#C84B31] font-semibold hover:underline">
                    Ver cantoria →
                  </Link>
                </div>
              </div>
              
              {/* Estrofe 3 - Provérbio Nordestino */}
              <div className="border-l-4 border-[#D49B54] bg-[#E8D4B0] p-4 rounded-r-lg">
                <p className="text-xs text-[#2E5266]/70 mb-2 font-semibold uppercase tracking-wide">🎯 Provérbio Nordestino</p>
                <p className="italic text-sm text-[#2E5266] leading-relaxed space-y-1">
                  <span className="block">Precisamos ter tudo que não temos,</span>
                  <span className="block">que o esforço é o teste do sufoco.</span>
                  <span className="block">Quem se assombra com muito, pede pouco</span>
                  <span className="block">e quem fracassa não chega aos extremos.</span>
                  <span className="block">Ir atrás da medalha que perdemos,</span>
                  <span className="block">é provar ao contrário, desengano.</span>
                  <span className="block font-semibold">Quem não move uma palha, entra no cano</span>
                  <span className="block">e quem se omite, não vence nem perdura.</span>
                  <span className="block font-bold text-lg">Só encontra a botija quem procura</span>
                  <span className="block text-xs opacity-70 mt-1">nos dez pés de martelo Alagoano. (3x)</span>
                </p>
                <div className="mt-3 pt-3 border-t border-[#8B6F47]/30 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-[#2E5266]">Os Nonatos</span>
                    <span className="text-[#2E5266]/50">·</span>
                    <span className="text-[#2E5266]/70">Martelo Alagoano</span>
                  </div>
                  <Link to="/cantorias/$slug" params={{ slug: "pensamento-positivo-martelo-alagoano-os-nonatos" }} className="text-xs text-[#C84B31] font-semibold hover:underline">
                    Ver cantoria →
                  </Link>
                </div>
              </div>
              
              {/* Estrofe 4 - Caminhoneiro */}
              <div className="border-l-4 border-[#4A7C59] bg-[#E8D4B0] p-4 rounded-r-lg">
                <p className="text-xs text-[#2E5266]/70 mb-2 font-semibold uppercase tracking-wide">🚛 O Caminhoneiro</p>
                <p className="italic text-sm text-[#2E5266] leading-relaxed space-y-1">
                  <span className="block font-semibold">Admiro o chofer caminhoneiro,</span>
                  <span className="block font-semibold">conduzindo o progresso da nação.</span>
                  <span className="block">Dirigindo o carreta ou caminhão,</span>
                  <span className="block">se pegando com Deus o tempo inteiro.</span>
                  <span className="block font-bold">Tem bandido que mata carreteiro.</span>
                  <span className="block">Só por ter o instinto desumano,</span>
                  <span className="block">se pensasse no Cristo soberano,</span>
                  <span className="block">de fazer mal ao próximo, desistia.</span>
                  <span className="block font-bold">Ao invés de ofender, ajudaria.</span>
                  <span className="block text-xs opacity-70 mt-1">Nos dez pés de martelo alagoano. (3x)</span>
                </p>
                <div className="mt-3 pt-3 border-t border-[#8B6F47]/30 flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-semibold text-[#2E5266]">Valdir Teles e Zé Cardoso</span>
                    <span className="text-[#2E5266]/50">·</span>
                    <span className="text-[#2E5266]/70">Martelo · Profissões</span>
                  </div>
                  <Link to="/cantorias/$slug" params={{ slug: "martelo-alagoano-valdir-teles-ze-cardoso" }} className="text-xs text-[#C84B31] font-semibold hover:underline">
                    Ver cantoria →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link 
              to="/cantorias"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C84B31] text-white font-bold rounded-lg hover:bg-[#A63D40] transition-all duration-300"
            >
              Ver Cantorias
            </Link>
            <Link 
              to="/estilos"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#4A7C59] text-white font-bold rounded-lg hover:bg-[#3a6349] transition-all duration-300"
            >
              Guia de Estilos
            </Link>
            <Link 
              to="/cantadores"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2E5266] text-white font-bold rounded-lg hover:bg-[#1e3a46] transition-all duration-300"
            >
              Ver Cantadores
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7: Por Que "Vilanova"? */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-[#E8D4B0]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[60%_40%] gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-6 order-2 md:order-1">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-[#C84B31]">
                Por Que Vilanova?
              </h2>
              
              <p className="text-xl text-[#2E5266]/85 leading-relaxed">
                Este projeto é uma <strong>homenagem em vida</strong> ao poeta <strong>Ivanildo Vilanova</strong>, 
                cantador de Caruaru (Pernambuco).
              </p>
              
              {/* Citação */}
              <div className="border-l-4 border-[#C84B31] bg-white p-6 rounded-r-lg">
                <p className="italic text-xl text-[#2E5266] leading-relaxed mb-2">
                  "O cantador deve estar apto a cantar o sertão, a praia, a universidade, 
                  a linguagem do caboclo. A cantoria ela tem que viajar em todos os 
                  aspectos."
                </p>
                <p className="text-sm text-[#2E5266]/60 font-medium">
                  — Ivanildo Vilanova
                </p>
              </div>
              
              <p className="text-lg text-[#2E5266]/80 leading-relaxed">
                Ivanildo participa da websérie <strong>"Entre Cordas e Poesia"</strong>, que 
                inspirou a criação deste projeto. Ele também criou o estilo 
                <strong> Remo da Canoa</strong>, uma adaptação recente do coco de embolada 
                para a cantoria de viola.
              </p>
              
              <a 
                href="https://dicionariompb.com.br/artista/ivanildo-vilanova/" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#C84B31] font-semibold hover:underline"
              >
                Saiba mais sobre Ivanildo Vilanova
                <ExternalLink className="w-4 h-4" />
              </a>
                </div>

            {/* Right: Photo */}
            <div className="order-1 md:order-2">
              <img 
                src="/fotos/De_repente,_um_repentista.jpg"
                alt="Violeiro em apresentação de repente"
                className="w-full rounded-lg border-3 border-[#8B6F47] shadow-lg sepia-[0.2]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Como Contribuir */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#C84B31] text-center mb-4">
            🤝 Como Contribuir
          </h2>
          
          <p className="text-xl text-[#2E5266]/70 text-center max-w-3xl mx-auto mb-12">
            Somos open source e precisamos de você. Ajude a preservar o repente nordestino!
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Card 1: Design */}
            <ContribCard
              icon="🎨"
              title="Design"
              subtitle="PRECISAMOS DE AJUDA!"
              items={[
                "Ilustrações em SVG de elementos nordestinos",
                "Ícones para estilos de repente",
                "Padrões visuais que fujam de clichês",
                "Identidade visual moderna e respeitosa"
              ]}
              callout={{
                title: "Desafio Criativo:",
                description: "Representar o repente de forma contemporânea, sem cair em estereótipos ou folclorismo exagerado."
              }}
              linkText="Ver Issues de Design"
              linkUrl="https://github.com/lucis/vilanova/labels/design"
              badgeText="AJUDA NECESSÁRIA"
              badgeColor="#C84B31"
            />
            
            {/* Card 2: Código */}
            <ContribCard
              icon="💻"
              title="Desenvolvimento"
              subtitle="Desenvolva funcionalidades"
              items={[
                "Frontend React + Tailwind CSS",
                "Backend Node.js + Cloudflare Workers",
                "Análise de métricas com IA",
                "Banco de dados e APIs"
              ]}
              linkText="Ver Issues de Código"
              linkUrl="https://github.com/lucis/vilanova/labels/development"
              badgeText="BOAS ISSUES"
              badgeColor="#4A7C59"
            />
            
            {/* Card 3: Conteúdo */}
            <ContribCard
              icon="📝"
              title="Conteúdo"
              subtitle="Adicione cantorias e biografias"
              items={[
                "Transcrever cantorias do YouTube",
                "Adicionar biografias de cantadores",
                "Corrigir informações existentes",
                "Enviar gravações raras"
              ]}
              linkText="Sugerir Cantoria"
              linkUrl="https://github.com/lucis/vilanova/issues/new?title=Nova%20Cantoria&labels=nova-cantoria"
              badgeText="1 CLIQUE"
              badgeColor="#2E5266"
            />
          </div>
          
          <div className="bg-[#E8D4B0] border-2 border-[#8B6F47] rounded-lg p-8 text-center">
            <h3 className="font-bold text-2xl text-[#2E5266] mb-4">
              O Processo é Simples
            </h3>
            <div className="max-w-2xl mx-auto space-y-3 text-left">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#C84B31] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <p className="text-sm text-[#2E5266]/80">
                  <strong>Clique em "Sugerir Melhoria"</strong> em qualquer página
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#C84B31] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <p className="text-sm text-[#2E5266]/80">
                  <strong>GitHub abre o editor</strong> (cria fork automaticamente se necessário)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#C84B31] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <p className="text-sm text-[#2E5266]/80">
                  <strong>Você edita o JSON</strong> (com syntax highlighting e validação)
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-[#C84B31] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <p className="text-sm text-[#2E5266]/80">
                  <strong>Pull Request criado automaticamente</strong> para revisão
                </p>
              </div>
            </div>
            
            <p className="text-sm text-[#2E5266]/60 mt-6 italic">
              Todas as contribuições são reconhecidas no histórico do GitHub! 🏆
            </p>
          </div>
        </div>
      </section>

      {/* Section 9: Entre Cordas e Poesia */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-gradient-to-b from-[#2E5266] to-[#4A7C59]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: YouTube Player */}
            <div className="order-2 md:order-1">
              <div className="relative rounded-lg overflow-hidden border-3 border-[#8B6F47] shadow-xl">
                <div className="aspect-video">
                  <iframe 
                    src="https://www.youtube.com/embed/ULbBggbGpB8"
                    title="Entre Cordas e Poesia - Episódio 1"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            {/* Right: Content */}
            <div className="space-y-6 order-1 md:order-2">
              <div className="inline-block bg-[#4A7C59] text-white text-xs px-3 py-1 rounded-full font-semibold">
                Lei Paulo Gustavo
              </div>
              
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
                "Entre Cordas e Poesia"
              </h2>
              
              <h3 className="text-xl text-white/90 font-serif">
                A Websérie Documental que Conta a História Completa
              </h3>
              
              <div className="prose prose-invert max-w-none space-y-6">
                <p className="text-lg text-white/90 leading-relaxed">
                  Esta websérie, produzida no Rio Grande do Norte, explora diversos 
                  temas do repente e foi feita com bastante zelo.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <p className="text-sm text-white/90 mb-2"><strong>Participantes:</strong></p>
                  <ul className="text-sm text-white/80 space-y-1">
                    <li>→ Ivanildo Vilanova (que dá nome a este projeto)</li>
                    <li>→ Raimundo Lira, Zé Viola, Antônio Silva</li>
                    <li>→ Fabiane Ribeiro, Rafaela Pereira, Minervina Ferreira</li>
                    <li>→ José Jonas, Fátima Dantas, e mais</li>
                  </ul>
                  
                  <p className="text-xs text-white/70 mt-3">
                    <strong>Direção:</strong> Fabrício Vale e Joalisson Diniz ·
                    <strong> Financiamento:</strong> Lei Paulo Gustavo
                  </p>
                </div>
                
                <p className="text-base text-white/90 leading-relaxed">
                  No repositório desse projeto, temos as transcrições dos 11 episódios 
                  (recuperadas pelo YouTube), que foram usadas como base teórica para 
                  o conteúdo dessa página.
                </p>
                
                <div className="bg-[#4A7C59]/20 backdrop-blur-sm p-4 rounded-lg border-l-4 border-[#4A7C59]">
                  <p className="text-base text-white/95 font-medium mb-2">
                    🎮 Precisamos de ajuda!
                  </p>
                  <p className="text-sm text-white/85 leading-relaxed mb-3">
                    Queremos criar páginas específicas para cada episódio, enriquecendo 
                    o alcance desse conteúdo de forma acessível e didática.
                  </p>
                  <p className="text-xs text-white/80">
                    <span className="bg-[#4A7C59] text-white px-2 py-1 rounded text-xs font-semibold mr-2">
                      FÁCIL
                    </span>
                    Essa é uma atividade de nível Fácil de contribuição.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <a 
                  href="https://www.youtube.com/watch?v=ULbBggbGpB8&list=PLngiJpynwciFIwyrG_EiOW-sKm1tRXSGU"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#2E5266] font-semibold rounded-lg hover:bg-white/90 transition-all duration-300"
                >
                  ▶ Assistir Playlist Completa
                </a>
                
                <a 
                  href="http://github.com/lucis/vilanova/issues/2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
                >
                  🎮 Ver detalhes da issue
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E5266] py-12 px-5 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Disclaimer do Projeto */}
          <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-8">
            <p className="text-sm text-[#F5EBE0]/90">
              ⚠️ <strong>Projeto em construção colaborativa:</strong> Este acervo está sendo construído por voluntários. 
              Algumas informações podem estar incompletas ou imprecisas. Toda correção é bem-vinda — 
              basta clicar em "Sugerir Melhoria" nas páginas ou abrir uma issue no GitHub.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl font-bold text-[#F5EBE0] mb-3">Vilanova</h3>
              <p className="text-sm text-[#F5EBE0]/80 leading-relaxed">
                Um projeto aberto de preservação da cantoria nordestina através de IA.
              </p>
              <p className="text-sm text-[#F5EBE0]/60 mt-2">
                De Campina Grande para todo o Nordeste.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#F5EBE0] mb-3">Projeto</h4>
              <ul className="space-y-2 text-sm text-[#F5EBE0]/80">
                <li>
                  <a href="http://github.com/lucis/vilanova" target="_blank" rel="noopener noreferrer" className="hover:text-[#D49B54] transition-colors">
                    → GitHub
                  </a>
                </li>
                <li>
                  <a href="http://github.com/lucis/vilanova#readme" target="_blank" rel="noopener noreferrer" className="hover:text-[#D49B54] transition-colors">
                    → Roadmap
                  </a>
                </li>
                <li>
                  <a href="http://github.com/lucis/vilanova#-como-começar-a-contribuir" target="_blank" rel="noopener noreferrer" className="hover:text-[#D49B54] transition-colors">
                    → Contribuir
                  </a>
                </li>
                <li>→ Sobre</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#F5EBE0] mb-3">Conteúdo</h4>
              <ul className="space-y-2 text-sm text-[#F5EBE0]/80">
                <li>
                  <Link to="/cantorias" className="hover:text-[#D49B54] transition-colors">
                    → Cantorias
                  </Link>
                </li>
                <li>
                  <Link to="/musicas" className="hover:text-[#D49B54] transition-colors">
                    → Músicas
                  </Link>
                </li>
                <li>
                  <Link to="/estilos" className="hover:text-[#D49B54] transition-colors">
                    → Estilos
                  </Link>
                </li>
                <li>
                  <Link to="/cantadores" className="hover:text-[#D49B54] transition-colors">
                    → Cantadores
                  </Link>
                </li>
                <li>→ Entre Cordas e Poesia</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-[#F5EBE0] mb-3">Comunidade</h4>
              <ul className="space-y-2 text-sm text-[#F5EBE0]/80">
                <li>
                  <a href="http://github.com/lucis/vilanova/issues" target="_blank" rel="noopener noreferrer" className="hover:text-[#D49B54] transition-colors">
                    → GitHub Issues
                  </a>
                </li>
                <li>
                  <a href="http://github.com/lucis/vilanova/discussions" target="_blank" rel="noopener noreferrer" className="hover:text-[#D49B54] transition-colors">
                    → Discussões
                  </a>
                </li>
                <li>→ Contato</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-[#8B6F47] pt-6 text-center">
            <p className="text-sm text-[#F5EBE0]/60">
              © 2025 Vilanova · Open Source (MIT) · vilanova.deco.page
            </p>
            <p className="text-sm text-[#F5EBE0]/60 mt-2">
              Feito com ❤️ para o Nordeste brasileiro
            </p>
            
            <div className="flex justify-center gap-3 mt-4 flex-wrap">
              <span className="text-xs bg-[#4A7C59] text-white px-3 py-1 rounded-full">Open Source</span>
              <a 
                href="https://docs.deco.page" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs bg-[#2E5266]/50 text-white px-3 py-1 rounded-full border border-[#F5EBE0]/30 hover:bg-[#2E5266]/70 transition-colors"
              >
                Feito com Deco
              </a>
            </div>
        </div>
      </div>
      </footer>
    </div>
  );
}

export default (parentRoute: RootRoute) =>
  createRoute({
    path: "/",
    component: HomePage,
    getParentRoute: () => parentRoute,
  });