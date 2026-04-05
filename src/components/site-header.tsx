import { GlobalSearch } from "./global-search";
import type { Cantoria, Estilo } from "@/lib/types";

function navClass(href: string, currentPath: string) {
  const base =
    "text-sm font-semibold text-[#2E5266] hover:text-[#C84B31] transition-colors";
  const isActive = currentPath === href || currentPath.startsWith(href + "/");
  return isActive ? `${base} text-[#C84B31]` : base;
}

interface SiteHeaderProps {
  showBackButton?: boolean;
  backTo?: string;
  backLabel?: string;
  currentPath: string;
  repentes: Cantoria[];
  estilos: Estilo[];
}

export function SiteHeader({
  showBackButton,
  backTo = "/",
  backLabel = "Voltar",
  currentPath,
  repentes: _repentes,
  estilos: _estilos,
}: SiteHeaderProps) {
  return (
    <header className="bg-white border-b-2 border-[#8B6F47] py-4 px-5 md:px-12 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4 md:mb-0">
          <a
            href="/"
            className="font-serif text-2xl font-bold text-[#C84B31] hover:text-[#A63D40] transition-colors"
          >
            Vilanova
          </a>

          <div className="md:hidden flex items-center gap-2">
            {showBackButton && (
              <a
                href={backTo}
                className="text-sm text-[#2E5266] hover:text-[#C84B31] transition-colors font-semibold"
              >
                ← {backLabel}
              </a>
            )}
            <GlobalSearch />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <a href="/cantorias" className={navClass("/cantorias", currentPath)}>
              Cantorias
            </a>
            <a href="/musicas" className={navClass("/musicas", currentPath)}>
              Músicas
            </a>
            <a href="/estilos" className={navClass("/estilos", currentPath)}>
              Estilos
            </a>
            <a href="/cantadores" className={navClass("/cantadores", currentPath)}>
              Cantadores
            </a>
            <GlobalSearch />
          </nav>
        </div>

        <nav className="md:hidden flex items-center gap-4 justify-center pt-3 border-t border-[#8B6F47]/30">
          <a href="/cantorias" className="text-xs font-semibold text-[#2E5266] hover:text-[#C84B31] transition-colors">
            Cantorias
          </a>
          <a href="/musicas" className="text-xs font-semibold text-[#2E5266] hover:text-[#C84B31] transition-colors">
            Músicas
          </a>
          <a href="/estilos" className="text-xs font-semibold text-[#2E5266] hover:text-[#C84B31] transition-colors">
            Estilos
          </a>
          <a href="/cantadores" className="text-xs font-semibold text-[#2E5266] hover:text-[#C84B31] transition-colors">
            Cantadores
          </a>
        </nav>
      </div>
    </header>
  );
}
