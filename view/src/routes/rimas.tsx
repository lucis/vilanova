import { createRoute, Link, type RootRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import { Music, Search, Filter, ArrowUpDown } from "lucide-react";
import acervoData from "../lib/acervoCompat";
import type { Cantoria } from "../lib/types";
import {
  extractAllRhymes,
  groupRhymesByEnding,
  getRhymeStats,
  sortByFrequency,
  sortAlphabetically,
} from "../lib/rhymes";

function RimasPage() {
  const cantorias = acervoData.repentes as Cantoria[];
  
  // Estados de filtro e ordenação
  const [selectedLetter, setSelectedLetter] = useState<string>("todas");
  const [selectedEstilo, setSelectedEstilo] = useState<string>("todos");
  const [sortBy, setSortBy] = useState<"alfabetica" | "frequencia">("frequencia");
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedRhyme, setExpandedRhyme] = useState<string | null>(null);

  // Extrair todas as rimas
  const allRhymes = useMemo(() => {
    return extractAllRhymes(cantorias);
  }, [cantorias]);

  // Agrupar por terminação
  const rhymeGroups = useMemo(() => {
    let rhymes = allRhymes;

    // Filtrar por estilo
    if (selectedEstilo !== "todos") {
      rhymes = rhymes.filter((r) => r.estilo === selectedEstilo);
    }

    return groupRhymesByEnding(rhymes);
  }, [allRhymes, selectedEstilo]);

  // Filtrar e ordenar grupos
  const filteredAndSortedGroups = useMemo(() => {
    let groups = rhymeGroups;

    // Filtrar por letra
    if (selectedLetter !== "todas") {
      const filtered = new Map();
      groups.forEach((group, key) => {
        if (key.startsWith(selectedLetter.toLowerCase())) {
          filtered.set(key, group);
        }
      });
      groups = filtered;
    }

    // Filtrar por busca
    if (searchTerm) {
      const filtered = new Map();
      const search = searchTerm.toLowerCase();
      groups.forEach((group, key) => {
        // Buscar na terminação ou nas palavras
        if (
          key.includes(search) ||
          Array.from(group.words.keys()).some((word) => word.includes(search))
        ) {
          filtered.set(key, group);
        }
      });
      groups = filtered;
    }

    // Ordenar
    const sorted =
      sortBy === "alfabetica"
        ? sortAlphabetically(groups)
        : sortByFrequency(groups);

    return sorted;
  }, [rhymeGroups, selectedLetter, sortBy, searchTerm]);

  // Estatísticas
  const stats = useMemo(() => getRhymeStats(rhymeGroups), [rhymeGroups]);

  // Estilos únicos
  const estilos = useMemo(() => {
    const unique = new Set(cantorias.map((c) => c.estilo.nome));
    return Array.from(unique).sort();
  }, [cantorias]);

  // Alfabeto
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  return (
    <div className="min-h-screen bg-[#F5EBE0]">
      <SiteHeader />

      {/* Hero */}
      <section className="py-12 md:py-16 px-5 md:px-12 bg-gradient-to-b from-white to-[#F5EBE0]">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#2E5266] mb-4 text-center">
            Dicionário de Rimas
          </h1>

          <p className="text-xl text-[#2E5266]/70 text-center max-w-3xl mx-auto mb-8">
            Navegue pelas rimas do repente nordestino. Descubra versos agrupados por suas terminações poéticas.
          </p>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-1">
                {stats.totalRhymeGroups}
              </div>
              <div className="text-sm text-[#2E5266]/70">Terminações de Rimas</div>
            </div>
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-1">
                {stats.totalUniqueWords}
              </div>
              <div className="text-sm text-[#2E5266]/70">Palavras Únicas</div>
            </div>
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-1">
                {stats.totalRhymes}
              </div>
              <div className="text-sm text-[#2E5266]/70">Versos Catalogados</div>
            </div>
            <div className="bg-white border-2 border-[#8B6F47] rounded-lg p-4 text-center">
              <div className="text-3xl font-bold text-[#C84B31] mb-1">
                {cantorias.filter((c) => c.estrofes.length > 0).length}
              </div>
              <div className="text-sm text-[#2E5266]/70">Cantorias Analisadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 px-5 md:px-12 bg-white border-y-2 border-[#8B6F47]">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Busca */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2E5266]/50 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar rima ou palavra..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border-2 border-[#8B6F47] rounded-lg focus:outline-none focus:border-[#C84B31] bg-[#F5EBE0]"
            />
          </div>

          {/* Filtros principais */}
          <div className="flex flex-wrap gap-4 items-center">
            {/* Filtro por estilo */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-[#2E5266]/70" />
              <select
                value={selectedEstilo}
                onChange={(e) => setSelectedEstilo(e.target.value)}
                className="px-4 py-2 border-2 border-[#8B6F47] rounded-lg bg-white focus:outline-none focus:border-[#C84B31]"
              >
                <option value="todos">Todos os estilos</option>
                {estilos.map((estilo) => (
                  <option key={estilo} value={estilo}>
                    {estilo}
                  </option>
                ))}
              </select>
            </div>

            {/* Ordenação */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-4 h-4 text-[#2E5266]/70" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as "alfabetica" | "frequencia")}
                className="px-4 py-2 border-2 border-[#8B6F47] rounded-lg bg-white focus:outline-none focus:border-[#C84B31]"
              >
                <option value="frequencia">Mais frequentes</option>
                <option value="alfabetica">Ordem alfabética</option>
              </select>
            </div>

            {/* Contador de resultados */}
            <div className="ml-auto text-sm text-[#2E5266]/70">
              {filteredAndSortedGroups.length} terminaç{filteredAndSortedGroups.length === 1 ? "ão" : "ões"}
            </div>
          </div>

          {/* Alfabeto */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedLetter("todas")}
              className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                selectedLetter === "todas"
                  ? "bg-[#C84B31] text-white"
                  : "bg-white border-2 border-[#8B6F47] text-[#2E5266] hover:bg-[#F5EBE0]"
              }`}
            >
              Todas
            </button>
            {alphabet.map((letter) => (
              <button
                key={letter}
                onClick={() => setSelectedLetter(letter)}
                className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                  selectedLetter === letter
                    ? "bg-[#C84B31] text-white"
                    : "bg-white border-2 border-[#8B6F47] text-[#2E5266] hover:bg-[#F5EBE0]"
                }`}
              >
                {letter.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de rimas */}
      <section className="py-12 px-5 md:px-12">
        <div className="max-w-7xl mx-auto">
          {filteredAndSortedGroups.length === 0 ? (
            <div className="text-center py-12 text-[#2E5266]/70">
              <Music className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p className="text-lg">Nenhuma rima encontrada com esses filtros</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredAndSortedGroups.map(([rhymeKey, group]) => {
                const isExpanded = expandedRhyme === rhymeKey;
                const wordEntries = Array.from(group.words.entries()).sort(
                  (a, b) => b[1].length - a[1].length
                );

                return (
                  <div
                    key={rhymeKey}
                    className="border-2 border-[#8B6F47] rounded-lg bg-white overflow-hidden"
                  >
                    {/* Header */}
                    <button
                      onClick={() =>
                        setExpandedRhyme(isExpanded ? null : rhymeKey)
                      }
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#F5EBE0] transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="text-2xl font-serif font-bold text-[#C84B31]">
                          -{rhymeKey}
                        </div>
                        <div className="text-sm text-[#2E5266]/70">
                          {group.words.size} palavra{group.words.size !== 1 ? "s" : ""} • {group.count} verso{group.count !== 1 ? "s" : ""}
                        </div>
                      </div>
                      <div className="text-[#2E5266]/50">
                        {isExpanded ? "▼" : "▶"}
                      </div>
                    </button>

                    {/* Palavras e versos */}
                    {isExpanded && (
                      <div className="px-6 py-4 border-t-2 border-[#8B6F47] bg-[#F5EBE0]/30 space-y-6">
                        {wordEntries.map(([word, rhymeWords]) => (
                          <div key={word} className="space-y-2">
                            {/* Palavra */}
                            <div className="flex items-baseline gap-2">
                              <span className="font-serif text-lg font-semibold text-[#2E5266]">
                                {rhymeWords[0].original}
                              </span>
                              <span className="text-sm text-[#2E5266]/50">
                                ({rhymeWords.length} vez{rhymeWords.length !== 1 ? "es" : ""})
                              </span>
                            </div>

                            {/* Versos */}
                            <div className="space-y-3 pl-4">
                              {rhymeWords.map((rhyme, idx) => (
                                <div
                                  key={`${rhyme.cantoriaId}-${rhyme.estrofeNumero}-${rhyme.versoNumero}`}
                                  className="border-l-2 border-[#8B6F47] pl-4 space-y-1"
                                >
                                  <p className="text-[#2E5266] italic">
                                    "{rhyme.verse}"
                                  </p>
                                  <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-[#2E5266]/60">
                                    <Link
                                      to="/cantorias/$slug"
                                      params={{ slug: cantorias.find(c => c.id === rhyme.cantoriaId)?.slug || "" }}
                                      className="hover:text-[#C84B31] hover:underline"
                                    >
                                      {rhyme.cantoriaTitle}
                                    </Link>
                                    <span>•</span>
                                    <span>{rhyme.cantadorName}</span>
                                    <span>•</span>
                                    <span className="font-medium">{rhyme.estilo}</span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

export default function RimasRoute(rootRoute: RootRoute) {
  return createRoute({
    getParentRoute: () => rootRoute,
    path: "/rimas",
    component: RimasPage,
  });
}
