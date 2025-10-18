import { Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-8 h-12 bg-primary clip-triangle"></div>
                <div className="w-8 h-12 bg-white clip-triangle-road"></div>
              </div>
            </div>
            <p className="text-xl font-bold">MASCARENHAS</p>
            <p className="text-xs tracking-widest text-white/60">TRANSPORTES</p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <p className="text-sm text-white/80 mb-2">(31) 99478-0684</p>
            <p className="text-sm text-white/80 mb-4">mascarenhastransportes.com.br</p>
            <p className="text-sm text-white/80">
              Avenida Raja Gabáglia, 2000, Cidade Jardim<br />
              Belo Horizonte - MG
            </p>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm text-white/60">
            © 2024 por Mascarenhas Transportes
          </p>
        </div>
      </div>
      
      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/5531994780684" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50 group"
      >
        <MessageCircle className="w-8 h-8 text-white" />
        <span className="absolute right-20 bg-green-500 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Vamos conversar?
        </span>
      </a>
      
      <style>{`
        .clip-triangle {
          clip-path: polygon(0 0, 100% 0, 100% 100%);
        }
        .clip-triangle-road {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 45% 100%, 45% 30%, 55% 30%, 55% 100%, 0 100%);
        }
      `}</style>
    </footer>
  );
};

export default Footer;
