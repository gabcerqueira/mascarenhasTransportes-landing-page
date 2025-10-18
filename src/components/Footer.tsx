import { Instagram, Linkedin, Youtube, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-12 bg-accent rounded-sm"></div>
              <div>
                <p className="text-xl font-bold">MASCARENHAS</p>
                <p className="text-xs tracking-widest text-white/70">TRANSPORTES</p>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed">
              Conectando pessoas e mercadorias mundo a fora com segurança e eficiência. 
              Seu parceiro de confiança em logística e transporte.
            </p>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contato</h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>(31) 99478-0684</p>
              <p>contato@mascarenhas<wbr/>transportes.com.br</p>
            </div>
          </div>
          
          {/* Social Media */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Redes Sociais</h4>
            <div className="flex gap-3">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-accent flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-6">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <p className="text-sm text-white/60 text-center md:text-left">
              © 2024 Mascarenhas Transportes. Todos os direitos reservados.
            </p>
            <p className="text-sm text-white/60 text-center md:text-right">
              Avenida Raja Gabáglia, 2000 - Belo Horizonte/MG
            </p>
          </div>
        </div>
      </div>
      
      {/* WhatsApp Float Button */}
      <a 
        href="https://wa.me/5531994780684" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all z-50 group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-8 h-8 text-white" />
        <span className="absolute right-20 bg-green-600 text-white px-4 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Vamos conversar?
        </span>
      </a>
    </footer>
  );
};

export default Footer;
