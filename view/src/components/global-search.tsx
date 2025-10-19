import { useState, useMemo, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { Search, X, Music, Users, BookOpen } from "lucide-react";
import acervoData from "../lib/acervoCompat";
import estilosData from "../../../public/data/estilos.json";
import { agregarCantadores } from "../lib/cantadores";
import type { Cantoria, Estilo } from "../lib/types";

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const cantadores = useMemo(() => {
    return agregarCantadores(acervoData.repentes as Cantoria[]);
  }, []);

  const searchResults = useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) {
      return { cantorias: [], cantadores: [], estilos: [], versos: [] };
    }

    const query = searchTerm.toLowerCase();

    const cantorias = (acervoData.repentes as Cantoria[]).filter(r =>
      r.titulo.toLowerCase().includes(query) ||
      r.contexto.toLowerCase().includes(query) ||
      r.cantadores.some(c => c.nome.toLowerCase().includes(query))
    ).slice(0, 5);

    const cantadoresFiltrados = cantadores.filter(c =>
      c.nome.toLowerCase().includes(query) ||
      (c.apelido && c.apelido.toLowerCase().includes(query))
    ).slice(0, 5);

    const estilos = (estilosData.estilos as Estilo[]).filter(e =>
      e.nome.toLowerCase().includes(query) ||
      e.resumo.toLowerCase().includes(query)
    ).slice(0, 3);

    // Busca em versos (limitada)
    const versos: Array<{ verso: string; cantoria: string; slug: string }> = [];
    (acervoData.repentes as Cantoria[]).forEach(cantoria => {
      cantoria.estrofes.forEach(estrofe => {
        estrofe.versos.forEach(verso => {
          if (verso.toLowerCase().includes(query) && versos.length < 5) {
            versos.push({
              verso,
              cantoria: cantoria.titulo,
              slug: cantoria.slug
            });
          }
        });
      });
    });

    return { cantorias, cantadores: cantadoresFiltrados, estilos, versos };
  }, [searchTerm, cantadores]);

  const totalResults = 
    searchResults.cantorias.length +
    searchResults.cantadores.length +
    searchResults.estilos.length +
    searchResults.versos.length;

  // Focus input quando abre
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Fechar com ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      {/* Search Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-[#2E5266] hover:text-[#C84B31] transition-colors"
        aria-label="Buscar"
      >
        <Search className="w-5 h-5" />
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />

          {/* Search Box */}
          <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-2xl border-2 border-[#8B6F47]">
            {/* Input */}
            <div className="flex items-center gap-3 p-4 border-b-2 border-[#8B6F47]">
              <Search className="w-5 h-5 text-[#2E5266]/60" />
              <input
                ref={inputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar cantorias, cantadores, estilos, versos..."
                className="flex-1 outline-none text-[#2E5266] placeholder:text-[#2E5266]/40"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-[#2E5266]/60 hover:text-[#C84B31] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto p-4">
              {searchTerm.length < 2 ? (
                <p className="text-sm text-[#2E5266]/60 text-center py-8">
                  Digite pelo menos 2 caracteres para buscar...
                </p>
              ) : totalResults === 0 ? (
                <p className="text-sm text-[#2E5266]/60 text-center py-8">
                  Nenhum resultado encontrado para "{searchTerm}"
                </p>
              ) : (
                <div className="space-y-6">
                  {/* Cantorias */}
                  {searchResults.cantorias.length > 0 && (
                    <div>
                      <h3 className="text-sm font-bold text-[#2E5266]/60 mb-3 flex items-center gap-2">
                        <Music className="w-4 h-4" />
                        Cantorias ({searchResults.cantorias.length})
                      </h3>
                      <div className="space-y-2">
                        {searchResults.cantorias.map(cantoria => (
                          <Link
                            key={cantoria.id}
                            to="/cantorias/$slug"
                            params={{ slug: cantoria.slug }}
                            onClick={() => setIsOpen(false)}
                            className="block p-3 rounded-lg hover:bg-[#F5EBE0] transition-colors border border-transparent hover:border-[#8B6F47]"
                          >
                            <div className="font-semibold text-[#2E5266]">{cantoria.titulo}</div>
                            <div className="text-xs text-[#2E5266]/60 mt-1">
                              {cantoria.estilo.nome} • {cantoria.cantadores.map(c => c.nome).join(", ")}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Cantadores */}
                  {searchResults.cantadores.length > 0 && (
                    <div>
                      <h3 className="text-sm font-bold text-[#2E5266]/60 mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        Cantadores ({searchResults.cantadores.length})
                      </h3>
                      <div className="space-y-2">
                        {searchResults.cantadores.map(cantador => (
                          <Link
                            key={cantador.slug}
                            to="/cantadores/$slug"
                            params={{ slug: cantador.slug }}
                            onClick={() => setIsOpen(false)}
                            className="block p-3 rounded-lg hover:bg-[#F5EBE0] transition-colors border border-transparent hover:border-[#8B6F47]"
                          >
                            <div className="font-semibold text-[#2E5266]">{cantador.nome}</div>
                            {cantador.apelido && (
                              <div className="text-xs text-[#C84B31] italic mt-0.5">"{cantador.apelido}"</div>
                            )}
                            <div className="text-xs text-[#2E5266]/60 mt-1">
                              {cantador.stats.totalCantorias} {cantador.stats.totalCantorias === 1 ? 'cantoria' : 'cantorias'}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Estilos */}
                  {searchResults.estilos.length > 0 && (
                    <div>
                      <h3 className="text-sm font-bold text-[#2E5266]/60 mb-3 flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Estilos ({searchResults.estilos.length})
                      </h3>
                      <div className="space-y-2">
                        {searchResults.estilos.map(estilo => (
                          <Link
                            key={estilo.slug}
                            to="/estilos/$slug"
                            params={{ slug: estilo.slug }}
                            onClick={() => setIsOpen(false)}
                            className="block p-3 rounded-lg hover:bg-[#F5EBE0] transition-colors border border-transparent hover:border-[#8B6F47]"
                          >
                            <div className="font-semibold text-[#2E5266]">{estilo.nome}</div>
                            <div className="text-xs text-[#2E5266]/60 mt-1">
                              {estilo.estrutura.metrica} • {estilo.dificuldade}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Versos */}
                  {searchResults.versos.length > 0 && (
                    <div>
                      <h3 className="text-sm font-bold text-[#2E5266]/60 mb-3">
                        Versos ({searchResults.versos.length})
                      </h3>
                      <div className="space-y-2">
                        {searchResults.versos.map((item, idx) => (
                          <Link
                            key={idx}
                            to="/cantorias/$slug"
                            params={{ slug: item.slug }}
                            onClick={() => setIsOpen(false)}
                            className="block p-3 rounded-lg hover:bg-[#F5EBE0] transition-colors border border-transparent hover:border-[#8B6F47]"
                          >
                            <div className="text-sm italic text-[#2E5266] line-clamp-2">
                              "{item.verso}"
                            </div>
                            <div className="text-xs text-[#2E5266]/60 mt-1">
                              de {item.cantoria}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer com dica */}
            {totalResults > 0 && (
              <div className="p-3 border-t border-[#8B6F47]/30 bg-[#F5EBE0]">
                <p className="text-xs text-[#2E5266]/60 text-center">
                  {totalResults} {totalResults === 1 ? 'resultado encontrado' : 'resultados encontrados'}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

