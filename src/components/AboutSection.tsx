import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Truck, Handshake, Users } from "lucide-react";

const AboutSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const cards = [
    {
      icon: Truck,
      title: "Motoristas",
      description: "Profissionais experientes e dedicados ao serviço de excelência",
    },
    {
      icon: Handshake,
      title: "Parceiros",
      description: "Frota moderna à disposição das suas necessidades de transporte",
    },
    {
      icon: Users,
      title: "Clientes",
      description: "Obtenha o melhor serviço de transporte da sua região conosco",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Sobre <span className="text-accent">Mascarenhas</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              Conectando Pessoas e Mercadorias Mundo a Fora
            </h3>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {cards.map((card, index) => (
              <Card key={index} className="border-2 hover:border-accent hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-coral-light mx-auto flex items-center justify-center">
                    <card.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h4 className="text-lg font-bold text-primary">{card.title}</h4>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Description */}
          <div className="space-y-6 text-center text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            <p>
              Na Mascarenhas Transportes, estamos comprometidos em fornecer serviços de transporte 
              excepcionais, atendimento em todo o Brasil e Exterior, combinando segurança incomparável com uma 
              entrega ágil e confiável.
            </p>
            
            <p>
              Com uma frota moderna e tecnologia de ponta, estamos preparados para atender às necessidades de 
              transporte de sua empresa, seja localmente, regionalmente ou internacionalmente.
            </p>
            
            <p className="font-semibold text-primary">
              Confie na Mascarenhas Transportes para cuidar das suas entregas com o cuidado e a eficiência que 
              você merece.
            </p>
            
            <div className="pt-8">
              <Button 
                onClick={() => scrollToSection('cotacao')}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white px-12 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
              >
                FAÇA SUA COTAÇÃO
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
