import { createRoute, Link, type RootRoute } from "@tanstack/react-router";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

function HomePage() {
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
              
              <h2 className="font-serif text-xl md:text-2xl text-[#2E5266]/85 leading-relaxed">
                Organizando o Repente Nordestino no Mundo Digital
              </h2>
              
              {/* CTA do GitHub - aparece aqui no mobile */}
              <div className="block md:hidden">
                <a 
                  href="http://github.com/lucis/vilanova" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-8 py-4 bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold rounded-lg hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 shadow-md"
                >
                  <Github className="w-5 h-5" />
                  Contribuir no GitHub
                </a>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-lg md:text-xl text-[#2E5266]/80 leading-relaxed">
                  Há gerações, cantadores de viola improvisam versos que guardam 
                  a memória e a sabedoria do Nordeste. São os "repórteres do sertão", 
                  professores que levaram conhecimento onde livro não chegava.
                </p>
                
                <p className="text-lg md:text-xl text-[#2E5266]/80 leading-relaxed">
                  Mas esse acervo imenso está espalhado: em gravações de rádio antigas, 
                  fitas cassete esquecidas, vídeos perdidos no YouTube, na memória 
                  de mestres que não estarão aqui para sempre.
                </p>
                
                <p className="text-lg md:text-xl text-[#2E5266]/80 leading-relaxed font-medium">
                  O Vilanova usa Inteligência Artificial para catalogar, transcrever 
                  e organizar esse patrimônio cultural disperso. <strong>Somos open source 
                  e precisamos de contribuidores.</strong>
                </p>
              </div>
              
              {/* CTAs Desktop */}
              <div className="hidden md:flex gap-4 pt-4">
                <a 
                  href="http://github.com/lucis/vilanova" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-[#1a1a1a] text-[#1a1a1a] font-bold rounded-lg hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 shadow-md"
                >
                  <Github className="w-5 h-5" />
                  Contribuir no GitHub
                </a>
                
                <button className="px-8 py-4 border-2 border-[#2E5266] text-[#2E5266] font-semibold rounded-lg hover:bg-[#2E5266]/5 transition-all duration-300">
                  Ver Acervo
                </button>
              </div>
              
              {/* CTA Ver Acervo - mobile only (GitHub já aparece acima) */}
              <div className="block md:hidden">
                <button className="w-full px-8 py-4 border-2 border-[#2E5266] text-[#2E5266] font-semibold rounded-lg hover:bg-[#2E5266]/5 transition-all duration-300">
                  Ver Acervo
                </button>
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
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#8B6F47] rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-[#8B6F47] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Section 2: O Que É Repente */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-gradient-to-b from-[#F5EBE0] to-[#E8D4B0]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#C84B31] text-center mb-6">
            O Que É Repente?
          </h2>
          
          <p className="text-xl md:text-2xl text-[#2E5266]/70 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Arte brasileira de improviso cantado, alternada por dois poetas 
            ao som da viola, criando versos "de repente" em métrica e rima perfeitas.
          </p>
          
          {/* Características Fundamentais */}
          <div className="bg-white border-3 border-[#8B6F47] rounded-lg p-8 md:p-12 space-y-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <div className="text-3xl mb-2">🎸</div>
                <h3 className="font-semibold text-lg text-[#2E5266]">
                  Dois Cantadores Alternados
                </h3>
                <p className="text-[#2E5266]/80 text-sm leading-relaxed">
                  O repente se dá sempre em dupla, cada poeta aguarda sua vez de improvisar a resposta.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="text-3xl mb-2">🎵</div>
                <h3 className="font-semibold text-lg text-[#2E5266]">
                  Viola de 10 Cordas
                </h3>
                <p className="text-[#2E5266]/80 text-sm leading-relaxed">
                  Instrumento característico na afinação nordestina. Quando é pandeiro, chama-se coco de embolada.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="text-3xl mb-2">📏</div>
                <h3 className="font-semibold text-lg text-[#2E5266]">
                  Métrica Rigorosa
                </h3>
                <p className="text-[#2E5266]/80 text-sm leading-relaxed">
                  Predominam versos heptassílabos (7 sílabas) e decassílabos (10 sílabas). Contagem precisa obrigatória.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="text-3xl mb-2">🔗</div>
                <h3 className="font-semibold text-lg text-[#2E5266]">
                  Rima Perfeita
                </h3>
                <p className="text-[#2E5266]/80 text-sm leading-relaxed">
                  Não se aceita rima toante ou aproximada. O extremo rigor na rima é marca da cantoria.
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="font-semibold text-lg text-[#2E5266]">
                  Improviso Imediato
                </h3>
                <p className="text-[#2E5266]/80 text-sm leading-relaxed">
                  Versos criados na hora, sem decorar. É isso que caracteriza o "repente".
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="text-3xl mb-2">🗺️</div>
                <h3 className="font-semibold text-lg text-[#2E5266]">
                  Forte no Nordeste
                </h3>
                <p className="text-[#2E5266]/80 text-sm leading-relaxed">
                  Origem na divisa Paraíba-Pernambuco (Teixeira/Rio Pajeú) no século XIX. Presente em todo o Nordeste brasileiro.
                </p>
              </div>
            </div>
          </div>
          
          {/* Citação em Destaque */}
          <div className="border-l-4 border-[#C84B31] bg-[#E8D4B0] p-6 md:p-8 rounded-r-lg mb-12">
            <p className="italic text-lg md:text-xl text-[#2E5266] leading-relaxed mb-2">
              "Quem não calça as sandálias da humildade<br />
              torce o pé se correr desalta"
            </p>
            <p className="text-sm text-[#2E5266]/60 font-medium">
              — Os Nonatos, em Oitava (São Lourenço da Mata, PE)
            </p>
            <p className="text-xs text-[#2E5266]/50 mt-2 not-italic">
              Verso sobre humildade na competição poética
            </p>
          </div>
          
          {/* Contexto Histórico */}
          <div className="prose prose-lg max-w-none space-y-4">
            <p className="text-base text-[#2E5266]/85 leading-relaxed">
              A cantoria de viola tem raízes nos trovadores de Provença (França, 
              século XI) e na trova medieval portuguesa. No Brasil, encontrou 
              terreno fértil no sertão nordestino. Historicamente, situa-se a 
              origem do repentista brasileiro na divisa entre Paraíba e Pernambuco, 
              região de Teixeira e Rio Pajeú, no século XIX.
            </p>
            
            <p className="text-base text-[#2E5266]/85 leading-relaxed">
              Por volta de 1830, surgem os primeiros cantadores de que se tem 
              registro: <strong>Urgulino do Sabugi</strong> (considerado o primeiro), seu irmão 
              Nicandro, ambos filhos de Agostinho da Costa, "o Pai da Poesia 
              Popular". Seguiram-se Germano da Lagoa, Romano da Mãe D'Água, 
              Silvino Pirauá Lima (criador da Sextilha).
            </p>
            
            <p className="text-base text-[#2E5266]/85 leading-relaxed">
              O termo "repente" vem do improviso — criar versos "de repente", 
              na hora. Como observa Câmara Cascudo, os cantadores são 
              "representantes legítimos de todos os bardos menestréis".
            </p>
            
            <div className="bg-[#E8D4B0] p-6 rounded-lg border-l-4 border-[#4A7C59] my-6">
              <h4 className="font-semibold text-[#2E5266] mb-3">Distinções Importantes:</h4>
              <ul className="space-y-2 text-sm text-[#2E5266]/85">
                <li><strong>Repente ≠ Cordel:</strong> Cordel é poesia publicada em folhetos. Repente é poesia oral improvisada.</li>
                <li><strong>Repente ≠ Embolada:</strong> Quando o instrumento é pandeiro (não viola), o gênero se chama coco de embolada, com ritmo mais rápido.</li>
                <li><strong>Cantoria de viola:</strong> Dois cantadores com viola de 10 cordas na afinação nordestina, alternando versos improvisados.</li>
              </ul>
            </div>
            
            <p className="text-base text-[#2E5266]/85 leading-relaxed italic">
              "No Nordeste, os jesuítas catequizavam por meio da poesia por 
              ficar mais fácil de conservar a mensagem na memória, seguindo 
              assim o estilo da Grécia Antiga."
            </p>
            
            <p className="text-base text-[#2E5266]/85 leading-relaxed">
              A função social do cantador foi ampla: "repórter do sertão, 
              professor itinerante, guardião da memória oral", como relata 
              Leonardo Mota. Gerações aprenderam valores, ética, política 
              através da cantoria — em tempos onde livro não chegava ao interior.
            </p>
            
            <p className="text-base text-[#2E5266]/85 leading-relaxed">
              Hoje, conforme relatam os próprios cantadores em "Entre Cordas e 
              Poesia", a tradição enfrenta: preconceito social persistente, 
              falta de apoio público, diminuição das cantorias de pé de parede, 
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

      {/* Section 3: Os Cantadores */}
      <section className="py-16 md:py-24 px-5 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2E5266] text-center mb-6">
            Os Cantadores: Transmissão Oral de Geração em Geração
          </h2>
          
          <div className="prose prose-lg max-w-4xl mx-auto text-center mb-12 space-y-4">
            <p className="text-base md:text-lg text-[#2E5266]/80 leading-relaxed">
              O aprendizado da cantoria se dá tradicionalmente em família. 
              Pai ensina filho, tio ensina sobrinho, avô passa para neto. 
              É comum cantadores relatarem: "aprendi com meu pai", "meu avô 
              era cantador", "herdei do meu tio".
            </p>
            
            <p className="text-base md:text-lg text-[#2E5266]/80 leading-relaxed">
              A profissão historicamente enfrentou preconceito social. 
              No início do século XX, cantador era descrito como "beberrão, 
              valentão, conquistador, jogador, parasita". Famílias empatavam 
              namoros com cantadores. Esse estigma persiste em algumas regiões.
            </p>
            
            <p className="text-base md:text-lg text-[#2E5266]/80 leading-relaxed">
              Mulheres enfrentam obstáculos adicionais. Há registros de 
              violeiras desde o século XIX (Vovó Pangula, Maria Tebana, 
              Chica Barrosa), mas o meio sempre foi majoritariamente masculino. 
              Cantadoras contemporâneas como Fabiane Ribeiro e Rafaela Pereira 
              ainda relatam dificuldades específicas por serem mulheres.
            </p>
            
            <p className="text-base md:text-lg text-[#2E5266]/80 leading-relaxed">
              Jovens que seguem a cantoria hoje são frequentemente chamados 
              de "velhos" pelos pares, por escolherem uma arte associada a 
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
              <h3 className="font-bold text-xl text-[#2E5266] mb-3">
                Acervo Disperso
              </h3>
              <p className="text-[#2E5266]/80 leading-relaxed">
                Repentes históricos estão espalhados: em canais 
                de YouTube sem views, gravações de rádio antiga, 
                fitas cassete nas casas dos cantadores.
              </p>
              <p className="text-[#2E5266]/80 leading-relaxed mt-3 font-medium">
                Está tudo lá, mas ninguém consegue achar. 
                Precisamos catalogar antes que se perca.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="border-2 border-[#8B6F47] bg-[#F5EBE0] rounded-lg p-6 md:p-8">
              <div className="text-4xl mb-4">👴</div>
              <h3 className="font-bold text-xl text-[#2E5266] mb-3">
                Memória Oral em Risco
              </h3>
              <p className="text-[#2E5266]/80 leading-relaxed">
                Ivanildo Vilanova tem 79 anos e continua cantando. 
                Mas Minervina Ferreira, que acolhia jovens 
                cantadoras, já partiu.
              </p>
              <p className="text-[#2E5266]/80 leading-relaxed mt-3 font-medium">
                Cada mestre que se vai leva histórias, técnicas, 
                repentes que nunca foram gravados.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="border-2 border-[#8B6F47] bg-[#F5EBE0] rounded-lg p-6 md:p-8">
              <div className="text-4xl mb-4">📉</div>
              <h3 className="font-bold text-xl text-[#2E5266] mb-3">
                Falta de Valorização
              </h3>
              <p className="text-[#2E5266]/80 leading-relaxed">
                "Se tiver que cortar tempo de um evento, cortam 
                do cordel e da viola" — Anita Alves
              </p>
              <p className="text-[#2E5266]/80 leading-relaxed mt-3 font-medium">
                Falta apoio público, falta inserir nas escolas. 
                Jovens enfrentam preconceito. Cantorias de pé 
                de parede estão diminuindo.
              </p>
            </div>
          </div>
          
          {/* Citações de Mestres */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <div className="bg-white border-l-4 border-[#C84B31] p-8 rounded-r-lg">
              <p className="text-xl md:text-2xl text-[#2E5266] italic leading-relaxed mb-3">
                "O repente é puro, é santo, é divino. É uma janela para a alma, 
                uma janela para o mundo da sabedoria. A arte mais difícil do mundo."
              </p>
              <p className="text-sm text-[#2E5266]/60 font-medium">
                — Raimundo Lira, cantador
              </p>
            </div>
            
            <div className="bg-white border-l-4 border-[#4A7C59] p-6 rounded-r-lg">
              <p className="text-base text-[#2E5266] italic leading-relaxed mb-2">
                "Chega a hora da onça beber água<br />
                e quem sofrer da pressão tome remédio"
              </p>
              <p className="text-xs text-[#2E5266]/60 font-medium">
                — Os Nonatos, em Oitava
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
          
          <p className="text-lg text-[#2E5266]/70 text-center max-w-3xl mx-auto mb-12">
            Usamos Inteligência Artificial para encontrar, catalogar e organizar 
            o repente nordestino espalhado na internet e na memória oral.
            <br /><br />
            <strong>Não estamos criando nada novo. Estamos organizando o que já existe.</strong>
          </p>
          
          {/* Timeline */}
          <div className="space-y-8 max-w-3xl mx-auto">
            {/* Item 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#D49B54]/20 flex items-center justify-center text-2xl">
                🔍
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-[#2E5266] mb-2">
                  Encontramos Repentes na Internet
                </h3>
                <p className="text-[#2E5266]/80 leading-relaxed mb-2">
                  Vasculhamos YouTube, Spotify, SoundCloud, arquivos 
                  públicos. Identificamos cantorias perdidas em canais 
                  com 50 views.
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
                <h3 className="font-bold text-xl text-[#2E5266] mb-2">
                  Transcrevemos Automaticamente
                </h3>
                <p className="text-[#2E5266]/80 leading-relaxed mb-2">
                  MP3/WAV → OpenAI Whisper → Texto estruturado
                  <br /><br />
                  Respeitamos que "o certo é o que o poeta pronuncia". 
                  Se canta "história" (e não "história"), mantemos.
                </p>
                <span className="inline-block text-xs bg-[#4A7C59] text-white px-3 py-1 rounded-full">
                  ✅ JÁ FUNCIONA (4 repentes transcritos)
                </span>
              </div>
            </div>
            
            {/* Item 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#4A7C59]/20 flex items-center justify-center text-2xl">
                📊
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-xl text-[#2E5266] mb-2">
                  Analisamos a Estrutura
                </h3>
                <div className="text-[#2E5266]/80 leading-relaxed mb-2">
                  <p className="mb-2">IA identifica automaticamente:</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Qual estilo (Galope, Martelo, Sextilha...)</li>
                    <li>Métrica de cada verso (contagem de sílabas)</li>
                    <li>Esquema de rimas</li>
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
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#C84B31] mb-2">4+</div>
              <div className="text-sm md:text-base text-[#2E5266]/70">Repentes Transcritos</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#C84B31] mb-2">3</div>
              <div className="text-sm md:text-base text-[#2E5266]/70">Estilos Catalogados</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#C84B31] mb-2">11</div>
              <div className="text-sm md:text-base text-[#2E5266]/70">Episódios de Websérie</div>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-bold text-[#C84B31] mb-2">100%</div>
              <div className="text-sm md:text-base text-[#2E5266]/70">Open Source</div>
            </div>
          </div>
          
          {/* Exemplos Reais */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="border-3 border-[#8B6F47] bg-white rounded-lg p-6">
              <div className="text-3xl mb-3">🌊</div>
              <h3 className="font-bold text-lg text-[#2E5266] mb-2">Galope à Beira Mar</h3>
              <p className="text-sm text-[#2E5266]/70 mb-3">
                Os Nonatos em Serra Talhada<br />
                10 versos decassílabos, rimas AAAAABBCCM
              </p>
              <div className="bg-[#E8D4B0] p-4 rounded mb-4">
                <p className="italic text-sm text-[#2E5266] leading-relaxed">
                  "Quem não calça as sandálias da humildade<br />
                  torce o pé se correr desalta"
                </p>
              </div>
              <p className="text-xs text-[#2E5266]/60 mb-4">
                Verso sobre humildade na disputa. Mesmo estando em primeiro lugar, 
                o poeta ressalta o respeito aos adversários.
              </p>
              <button className="text-sm text-[#C84B31] font-semibold hover:underline">
                Ver Transcrição Completa
              </button>
            </div>
            
            <div className="border-3 border-[#8B6F47] bg-white rounded-lg p-6">
              <div className="text-3xl mb-3">🔨</div>
              <h3 className="font-bold text-lg text-[#2E5266] mb-2">Martelo Alagoano</h3>
              <p className="text-sm text-[#2E5266]/70 mb-3">
                Artista a identificar<br />
                10 versos decassílabos + mote triplo
              </p>
              <div className="bg-[#E8D4B0] p-4 rounded mb-4">
                <p className="italic text-sm text-[#2E5266] leading-relaxed">
                  "Nos dez pés de martelo alagoano<br />
                  Nos dez pés de martelo alagoano<br />
                  Nos dez pés de martelo alagoano"
                </p>
              </div>
              <p className="text-xs text-[#2E5266]/60 mb-4">
                Característica do Martelo Alagoano: repetição tripla do mote 
                ao final da estrofe.
              </p>
              <button className="text-sm text-[#C84B31] font-semibold hover:underline">
                Ver Transcrição Completa
              </button>
            </div>
          </div>
          
          {/* Mais Exemplos */}
          <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-6 md:p-8">
            <h3 className="font-bold text-xl text-[#2E5266] mb-6 text-center">
              Outros Versos Memoráveis do Acervo
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-3 border-[#C84B31] pl-4">
                <p className="italic text-[#2E5266] leading-relaxed mb-2">
                  "Chega a hora da onça beber água<br />
                  e quem sofrer da pressão tome remédio"
                </p>
                <p className="text-xs text-[#2E5266]/60">
                  — Os Nonatos · Oitava
                </p>
              </div>
              
              <div className="border-l-3 border-[#C84B31] pl-4">
                <p className="italic text-[#2E5266] leading-relaxed mb-2">
                  "Na fornalha não diminui a frágua,<br />
                  não pretendo levar nem deixar mágoa"
                </p>
                <p className="text-xs text-[#2E5266]/60">
                  — Os Nonatos · Oitava
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <button className="text-[#C84B31] font-semibold hover:underline inline-flex items-center gap-2">
              Ver Todo o Acervo
              <span className="text-xs bg-[#D49B54] text-white px-2 py-1 rounded">EM BREVE</span>
            </button>
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
              
              <p className="text-lg text-[#2E5266]/85 leading-relaxed">
                Este projeto é uma homenagem em vida ao poeta <strong>Ivanildo Vilanova</strong>, 
                cantador de Caruaru (Pernambuco) que dedicou sua vida ao repente.
              </p>
              
              {/* Citação */}
              <div className="border-l-4 border-[#C84B31] bg-white p-6 rounded-r-lg">
                <p className="italic text-lg text-[#2E5266] leading-relaxed mb-2">
                  "O cantador deve estar apto a cantar o sertão, a praia, a universidade, 
                  a linguagem do caboclo. A cantoria ela tem que viajar em todos os 
                  aspectos."
                </p>
                <p className="text-sm text-[#2E5266]/60 font-medium">
                  — Ivanildo Vilanova
                </p>
              </div>
              
              <p className="text-base text-[#2E5266]/80 leading-relaxed">
                Ivanildo representa a essência do que queremos preservar: um cantador 
                que domina múltiplos estilos (Sextilha, Mourão Voltado), que se adaptou 
                aos tempos modernos sem perder a tradição, e que sempre apoiou novas 
                gerações.
              </p>
              
              <p className="text-base text-[#2E5266]/80 leading-relaxed">
                Ele participa da websérie "Entre Cordas e Poesia", que inspirou a 
                criação deste projeto. Além disso, Ivanildo criou o estilo 
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

      {/* Section 8: Entre Cordas e Poesia */}
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
              
              <div className="prose prose-invert max-w-none">
                <p className="text-base text-white/90 leading-relaxed">
                  11 episódios documentando a cantoria de viola através da voz 
                  dos próprios mestres.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg my-4">
                  <p className="text-sm text-white/90 mb-2"><strong>Participantes:</strong></p>
                  <ul className="text-sm text-white/80 space-y-1">
                    <li>→ Ivanildo Vilanova (que dá nome a este projeto)</li>
                    <li>→ Raimundo Lira, Zé Viola, Antônio Silva</li>
                    <li>→ Fabiane Ribeiro, Rafaela Pereira, Minervina Ferreira</li>
                    <li>→ José Jonas, Fátima Dantas, e mais</li>
                  </ul>
                </div>
                
                <p className="text-sm text-white/80 leading-relaxed">
                  <strong>Direção:</strong> Fabrício Vale e Joalisson Diniz<br />
                  <strong>Financiamento:</strong> Lei Paulo Gustavo
                </p>
                
                <p className="text-base text-white/90 leading-relaxed mt-4">
                  Esta websérie foi o combustível que inspirou o Vilanova. 
                  Ela mostra o problema da preservação — e nós criamos a solução.
                </p>
                
                <p className="text-base text-white/90 leading-relaxed">
                  Transcrevemos todos os 11 episódios usando IA para tornar 
                  o conteúdo pesquisável e acessível.
                </p>
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
                
                <button className="px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
                  📄 Ver Transcrições dos 11 Episódios
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer simples por enquanto */}
      <footer className="bg-[#2E5266] py-12 px-5 md:px-12">
        <div className="max-w-7xl mx-auto">
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
                <li>→ Acervo <span className="text-xs">(em breve)</span></li>
                <li>→ Estilos</li>
                <li>→ Cantadores <span className="text-xs">(em breve)</span></li>
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
                href="https://docs.deco.cx" 
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