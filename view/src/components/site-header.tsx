import { Link } from "@tanstack/react-router";
import { GlobalSearch } from "./global-search";

interface SiteHeaderProps {
  showBackButton?: boolean;
  backTo?: string;
  backLabel?: string;
}

export function SiteHeader({ showBackButton, backTo = "/", backLabel = "Voltar" }: SiteHeaderProps) {
  return (
    <header className="bg-white border-b-2 border-[#8B6F47] py-4 px-5 md:px-12 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4 md:mb-0">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl font-bold text-[#C84B31] hover:text-[#A63D40] transition-colors">
            Vilanova
          </Link>
          
          {/* Mobile: Back button ou Search */}
          <div className="md:hidden flex items-center gap-2">
            {showBackButton && (
              <Link 
                to={backTo} 
                className="text-sm text-[#2E5266] hover:text-[#C84B31] transition-colors font-semibold"
              >
                ← {backLabel}
              </Link>
            )}
            <GlobalSearch />
          </div>
          
          {/* Desktop: Full navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/cantorias"
              className="text-sm font-semibold text-[#2E5266] hover:text-[#C84B31] transition-colors"
              activeProps={{ className: "text-[#C84B31]" }}
            >
              Cantorias
            </Link>
            <Link 
              to="/musicas"
              className="text-sm font-semibold text-[#2E5266] hover:text-[#C84B31] transition-colors"
              activeProps={{ className: "text-[#C84B31]" }}
            >
              Músicas
            </Link>
            <Link 
              to="/estilos"
              className="text-sm font-semibold text-[#2E5266] hover:text-[#C84B31] transition-colors"
              activeProps={{ className: "text-[#C84B31]" }}
            >
              Estilos
            </Link>
            <Link 
              to="/cantadores"
              className="text-sm font-semibold text-[#2E5266] hover:text-[#C84B31] transition-colors"
              activeProps={{ className: "text-[#C84B31]" }}
            >
              Cantadores
            </Link>
            <GlobalSearch />
          </nav>
        </div>
        
        {/* Mobile Navigation Menu */}
        <nav className="md:hidden flex items-center gap-4 justify-center pt-3 border-t border-[#8B6F47]/30">
          <Link 
            to="/cantorias"
            className="text-xs font-semibold text-[#2E5266] hover:text-[#C84B31] transition-colors"
            activeProps={{ className: "text-[#C84B31]" }}
          >
            Cantorias
          </Link>
          <Link 
            to="/musicas"
            className="text-xs font-semibold text-[#2E5266] hover:text-[#C84B31] transition-colors"
            activeProps={{ className: "text-[#C84B31]" }}
          >
            Músicas
          </Link>
          <Link 
            to="/estilos"
            className="text-xs font-semibold text-[#2E5266] hover:text-[#C84B31] transition-colors"
            activeProps={{ className: "text-[#C84B31]" }}
          >
            Estilos
          </Link>
          <Link 
            to="/cantadores"
            className="text-xs font-semibold text-[#2E5266] hover:text-[#C84B31] transition-colors"
            activeProps={{ className: "text-[#C84B31]" }}
          >
            Cantadores
          </Link>
        </nav>
      </div>
    </header>
  );
}

