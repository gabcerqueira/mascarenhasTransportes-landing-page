import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              <div className="w-10 h-12 bg-primary rounded-sm"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary tracking-tight">MASCARENHAS</span>
              <span className="text-xs tracking-wider text-muted-foreground font-medium">TRANSPORTES</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Serviços
            </button>
            <Button 
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=5531995700061&text=Ol%C3%A1%2C+gostaria+de+fazer+uma+cota%C3%A7%C3%A3o&type=phone_number&app_absent=0', '_blank')}
              className="bg-accent hover:bg-accent/90 text-white px-6 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
            >
              Solicitar Cotação
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t pt-4">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Sobre Nós
            </button>
            <button 
              onClick={() => scrollToSection('servicos')}
              className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Serviços
            </button>
            <Button 
              onClick={() => window.open('https://api.whatsapp.com/send/?phone=5531995700061&text=Ol%C3%A1%2C+gostaria+de+fazer+uma+cota%C3%A7%C3%A3o&type=phone_number&app_absent=0', '_blank')}
              className="w-full bg-accent hover:bg-accent/90 text-white rounded-full"
            >
              Solicitar Cotação
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
