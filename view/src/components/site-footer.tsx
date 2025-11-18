import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-[#2E5266] py-8 px-5 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Disclaimer */}
        <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6">
          <p className="text-xs text-[#F5EBE0]/90">
            ⚠️ <strong>Projeto em construção:</strong> Este acervo está sendo construído colaborativamente. 
            Algumas informações podem estar incompletas. Você pode corrigir qualquer dado clicando em 
            "Sugerir Melhoria" nas páginas.
          </p>
        </div>
        
        <div className="text-center border-t border-[#8B6F47]/30 pt-6">
          <p className="text-sm text-[#F5EBE0]/60">
            © 2025 Vilanova · Open Source (MIT) · vilanova.deco.page
          </p>
          <p className="text-sm text-[#F5EBE0]/60 mt-2">
            Feito com ❤️ para o Nordeste brasileiro
          </p>
          
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            <a 
              href="http://github.com/lucis/vilanova" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs bg-[#4A7C59] text-white px-3 py-1 rounded-full hover:bg-[#3a6349] transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://github.com/lucis/vilanova/issues" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs bg-[#2E5266]/50 text-white px-3 py-1 rounded-full border border-[#F5EBE0]/30 hover:bg-[#2E5266]/70 transition-colors"
            >
              Contribuir
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}








