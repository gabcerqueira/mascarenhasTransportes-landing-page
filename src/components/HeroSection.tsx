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
              Impulsione o Crescimento da Sua Empresa com Logística de <span className="text-accent">Alto Desempenho</span>
            </h1>
            <div className="space-y-4">
              <p className="text-xl text-white/90 leading-relaxed">
                Na Mascarenhas Transportes, conectamos negócios e mercados com eficiência, segurança e previsibilidade.
                Com tecnologia avançada, frota moderna e equipe especializada, garantimos entregas ágeis, rastreáveis e sob total controle.
              </p>
              <p className="text-lg text-white font-semibold">
                Mais eficiência. Menos riscos. Resultados reais.
              </p>
            </div>
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
                className="bg-white/10 text-white border-2 border-white/20 hover:bg-white hover:text-primary px-8 py-6 text-lg rounded-full backdrop-blur-sm"
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
