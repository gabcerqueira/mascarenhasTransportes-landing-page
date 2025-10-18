import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="w-8 h-12 bg-primary clip-triangle"></div>
              <div className="w-8 h-12 bg-foreground clip-triangle-road"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight">MASCARENHAS</span>
              <span className="text-xs tracking-widest text-muted-foreground">TRANSPORTES</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-sm font-medium hover:text-primary transition-colors border-b-2 border-primary pb-1"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Serviços
            </button>
            <Button 
              onClick={() => scrollToSection('cotacao')}
              className="bg-primary hover:bg-primary/90 text-white px-8"
            >
              Cotação
            </Button>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center hover:bg-primary transition-colors">
              <Instagram className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center hover:bg-primary transition-colors">
              <Linkedin className="w-4 h-4 text-white" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-foreground flex items-center justify-center hover:bg-primary transition-colors">
              <Youtube className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>
      </div>
      
      <style>{`
        .clip-triangle {
          clip-path: polygon(0 0, 100% 0, 100% 100%);
        }
        .clip-triangle-road {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 45% 100%, 45% 30%, 55% 30%, 55% 100%, 0 100%);
        }
      `}</style>
    </header>
  );
};

export default Header;
