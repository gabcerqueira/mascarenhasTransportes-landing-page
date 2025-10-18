import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="flex items-center gap-1">
              <div className="w-12 h-16 bg-primary clip-triangle"></div>
              <div className="w-12 h-16 bg-foreground clip-triangle-road"></div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">MASCARENHAS</h2>
            <p className="text-sm tracking-widest text-muted-foreground mb-6">TRANSPORTES</p>
            
            <h3 className="text-2xl md:text-3xl font-semibold mb-8">
              Conectando Pessoas e Mercadorias Mundo a Fora
            </h3>
            
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                Na Mascarenhas Transportes, estamos comprometidos em fornecer serviços de transporte 
                excepcionais, atendimento em todo o Brasil e Exterior, combinando segurança incomparável com uma 
                entrega ágil e confiável. Nossa equipe dedicada e experiente trabalha incansavelmente para garantir 
                que sua carga chegue ao destino final de forma segura e dentro do prazo.
              </p>
              
              <p>
                Com uma frota moderna e tecnologia de ponta, estamos preparados para atender às necessidades de 
                transporte de sua empresa, seja localmente, regionalmente ou internacionalmente.
              </p>
              
              <p>
                Na Mascarenhas Transportes, a satisfação do cliente está sempre em primeiro lugar.
              </p>
              
              <p>
                Junte-se a nós e experimente o transporte com excelência.
              </p>
              
              <p className="font-semibold">
                Confie na Mascarenhas Transportes para cuidar das suas entregas com o cuidado e a eficiência que 
                você merece.
              </p>
            </div>
            
            <div className="pt-8">
              <Button 
                onClick={() => scrollToSection('cotacao')}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg rounded-full"
              >
                FAÇA SUA COTAÇÃO
              </Button>
            </div>
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
    </section>
  );
};

export default AboutSection;
