import { Search } from "lucide-react";

/**
 * Liga ao painel de busca em `/search` (ilha React com dados do acervo).
 * Link estático: funciona em qualquer página, com ou sem hidratação.
 */
export function GlobalSearch() {
  return (
    <a
      href="/search"
      className="p-2 text-[#2E5266] hover:text-[#C84B31] transition-colors inline-flex rounded-md hover:bg-[#F5EBE0]/80"
      aria-label="Buscar no acervo"
    >
      <Search className="w-5 h-5" />
    </a>
  );
}
