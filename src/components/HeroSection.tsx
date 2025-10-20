import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-transport.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-[700px] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary to-navy-dark">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
        <div 
          className="absolute inset-0 bg-cover bg-center mix-blend-overlay"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Você pode <span className="text-accent">Confiar</span> em nós para aumentar seu <span className="text-accent">negócio</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Segurança em cada entrega, agilidade em cada trajeto. Conectando pessoas e mercadorias mundo a fora.
            </p>
            <div className="flex gap-4 pt-4">
              <Button 
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=5531995700061&text=Ol%C3%A1%2C+gostaria+de+fazer+uma+cota%C3%A7%C3%A3o&type=phone_number&app_absent=0', '_blank')}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all group"
              >
                Solicitar Cotação
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={() => scrollToSection('sobre')}
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg rounded-full"
              >
                Saiba Mais
              </Button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden md:block">
            <img 
              src={heroImage} 
              alt="Transporte e Logística" 
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
