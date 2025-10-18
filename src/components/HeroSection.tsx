import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-transport.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <div className="inline-block mb-6">
          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg"></div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6">BEM VINDOS</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
          Segurança em cada entrega, agilidade em cada trajeto.
        </p>
        <Button 
          onClick={() => scrollToSection('cotacao')}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg font-semibold border-2 border-white/50"
        >
          COTAÇÃO
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
