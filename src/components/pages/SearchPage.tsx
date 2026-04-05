import { useMemo, useState, useEffect, useRef } from "react";
import { Search, Music, Users, BookOpen, Disc } from "lucide-react";
import type { AcervoData, Cantoria, Estilo } from "@/lib/types";
import { agregarCantadores } from "@/lib/cantadores";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  searchAcervo,
  countSearchResults,
  type MusicaSearchItem,
} from "@/lib/search-acervo";

export function SearchPage({
  acervo,
  estilosCatalogo,
  musicasIndex,
  currentPath,
}: {
  acervo: Pick<AcervoData, "repentes" | "metadata">;
  estilosCatalogo: Estilo[];
  musicasIndex: MusicaSearchItem[];
  currentPath: string;
}) {
  const repentes = acervo.repentes as Cantoria[];
  const cantadores = useMemo(() => agregarCantadores(repentes), [repentes]);

  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const urlSyncTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchTerm(params.get("q") ?? "");
  }, []);

  const handleChange = (value: string) => {
    setSearchTerm(value);
    if (urlSyncTimer.current) clearTimeout(urlSyncTimer.current);
    urlSyncTimer.current = setTimeout(() => {
      const url = new URL(window.location.href);
      const trimmed = value.trim();
      if (trimmed.length >= 2) url.searchParams.set("q", trimmed);
      else url.searchParams.delete("q");
      const next = url.pathname + (url.search || "");
      window.history.replaceState({}, "", next);
    }, 350);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const results = useMemo(
    () =>
      searchAcervo(searchTerm, {
        repentes,
        estilos: estilosCatalogo,
        cantadores,
        musicas: musicasIndex,
      }),
    [searchTerm, repentes, estilosCatalogo, cantadores, musicasIndex],
  );

  const total = countSearchResults(results);

  return (
    <div className="min-h-screen bg-[#F5EBE0]">
      <SiteHeader
        currentPath={currentPath}
        repentes={repentes}
        estilos={estilosCatalogo}
      />

      <section className="py-10 md:py-14 px-5 md:px-12 bg-gradient-to-b from-white to-[#F5EBE0] border-b-2 border-[#8B6F47]/30">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-[#2E5266] mb-2 text-center">
            Busca no acervo
          </h1>
          <p className="text-center text-[#2E5266]/70 mb-8">
            Cantorias, cantadores, estilos, versos catalogados e músicas — tudo no
            teu navegador (sem servidor de busca).
          </p>

          <div className="flex items-center gap-3 p-4 bg-white rounded-lg border-2 border-[#8B6F47] shadow-md">
            <Search className="w-6 h-6 text-[#2E5266]/50 shrink-0" />
            <input
              ref={inputRef}
              type="search"
              value={searchTerm}
              onChange={(e) => handleChange(e.target.value)}
              placeholder="Ex.: Lampião, martelo, Valdir…"
              className="flex-1 min-w-0 outline-none text-lg text-[#2E5266] placeholder:text-[#2E5266]/40"
              autoComplete="off"
              aria-label="Termo de busca"
            />
          </div>
          <p className="text-xs text-[#2E5266]/50 mt-3 text-center">
            Mínimo 2 caracteres. Podes partilhar o link com{" "}
            <code className="bg-[#F5EBE0] px-1 rounded">?q=...</code> na URL.
          </p>
        </div>
      </section>

      <section className="py-10 px-5 md:px-12">
        <div className="max-w-3xl mx-auto">
          {searchTerm.trim().length < 2 ? (
            <p className="text-center text-[#2E5266]/60 py-12">
              Começa a escrever para ver resultados.
            </p>
          ) : total === 0 ? (
            <p className="text-center text-[#2E5266]/60 py-12">
              Nenhum resultado para &quot;{searchTerm.trim()}&quot;.
            </p>
          ) : (
            <div className="space-y-10">
              <p className="text-sm text-[#2E5266]/70 text-center">
                {total}{" "}
                {total === 1
                  ? "resultado encontrado"
                  : "resultados encontrados"}
              </p>

              {results.cantorias.length > 0 && (
                <div>
                  <h2 className="text-sm font-bold text-[#2E5266]/60 mb-3 flex items-center gap-2">
                    <Music className="w-4 h-4" />
                    Cantorias ({results.cantorias.length})
                  </h2>
                  <ul className="space-y-2">
                    {results.cantorias.map((cantoria) => (
                      <li key={cantoria.id}>
                        <a
                          href={`/cantorias/${cantoria.slug}`}
                          className="block p-4 rounded-lg bg-white border-2 border-[#8B6F47]/40 hover:border-[#C84B31] hover:bg-[#F5EBE0]/50 transition-colors"
                        >
                          <div className="font-semibold text-[#2E5266]">
                            {cantoria.titulo}
                          </div>
                          <div className="text-xs text-[#2E5266]/60 mt-1">
                            {cantoria.estilo.nome} •{" "}
                            {cantoria.cantadores.map((c) => c.nome).join(", ")}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {results.cantadores.length > 0 && (
                <div>
                  <h2 className="text-sm font-bold text-[#2E5266]/60 mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    Cantadores ({results.cantadores.length})
                  </h2>
                  <ul className="space-y-2">
                    {results.cantadores.map((cantador) => (
                      <li key={cantador.slug}>
                        <a
                          href={`/cantadores/${cantador.slug}`}
                          className="block p-4 rounded-lg bg-white border-2 border-[#8B6F47]/40 hover:border-[#C84B31] transition-colors"
                        >
                          <div className="font-semibold text-[#2E5266]">
                            {cantador.nome}
                          </div>
                          {cantador.apelido && (
                            <div className="text-xs text-[#C84B31] italic mt-0.5">
                              &quot;{cantador.apelido}&quot;
                            </div>
                          )}
                          <div className="text-xs text-[#2E5266]/60 mt-1">
                            {cantador.stats.totalCantorias} cantorias no acervo
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {results.estilos.length > 0 && (
                <div>
                  <h2 className="text-sm font-bold text-[#2E5266]/60 mb-3 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    Estilos ({results.estilos.length})
                  </h2>
                  <ul className="space-y-2">
                    {results.estilos.map((estilo) => (
                      <li key={estilo.slug}>
                        <a
                          href={`/estilos/${estilo.slug}`}
                          className="block p-4 rounded-lg bg-white border-2 border-[#8B6F47]/40 hover:border-[#C84B31] transition-colors"
                        >
                          <div className="font-semibold text-[#2E5266]">
                            {estilo.nome}
                          </div>
                          <div className="text-xs text-[#2E5266]/60 mt-1">
                            {estilo.estrutura.metrica} • {estilo.dificuldade}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {results.musicas.length > 0 && (
                <div>
                  <h2 className="text-sm font-bold text-[#2E5266]/60 mb-3 flex items-center gap-2">
                    <Disc className="w-4 h-4" />
                    Músicas ({results.musicas.length})
                  </h2>
                  <ul className="space-y-2">
                    {results.musicas.map((m) => (
                      <li key={m.slug}>
                        <a
                          href={`/musicas/${m.slug}`}
                          className="block p-4 rounded-lg bg-white border-2 border-[#8B6F47]/40 hover:border-[#C84B31] transition-colors"
                        >
                          <div className="font-semibold text-[#2E5266]">
                            {m.titulo}
                          </div>
                          <div className="text-xs text-[#2E5266]/60 mt-1">
                            {m.artista} • {m.estilo_referencia}
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {results.versos.length > 0 && (
                <div>
                  <h2 className="text-sm font-bold text-[#2E5266]/60 mb-3">
                    Versos ({results.versos.length})
                  </h2>
                  <ul className="space-y-2">
                    {results.versos.map((item, idx) => (
                      <li key={`${item.slug}-${idx}`}>
                        <a
                          href={`/cantorias/${item.slug}`}
                          className="block p-4 rounded-lg bg-white border-2 border-[#8B6F47]/40 hover:border-[#C84B31] transition-colors"
                        >
                          <p className="text-sm italic text-[#2E5266] line-clamp-3">
                            &quot;{item.verso}&quot;
                          </p>
                          <p className="text-xs text-[#2E5266]/60 mt-2">
                            de {item.cantoriaTitulo}
                          </p>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
