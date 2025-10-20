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
      description: "Profissionais qualificados e comprometidos com a segurança e a pontualidade em cada entrega.",
    },
    {
      icon: Handshake,
      title: "Parceiros",
      description: "Frota moderna e soluções logísticas flexíveis para atender às metas e prazos da sua operação.",
    },
    {
      icon: Users,
      title: "Clientes",
      description: "Empresas que confiam na nossa expertise para garantir entregas seguras, eficientes e sob controle.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
              Sobre <span className="text-accent">Mascarenhas</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              Conectando Negócios e Mercadorias Mundo Afora
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
              Na Mascarenhas Transportes, atuamos como parceiros estratégicos no transporte de cargas, 
              oferecendo soluções completas que unem eficiência operacional, segurança e confiabilidade.
            </p>
            
            <p>
              Com uma frota moderna, monitoramento em tempo real e tecnologia de ponta, garantimos o controle 
              total das operações logísticas, reduzindo custos e otimizando prazos de entrega.
            </p>
            
            <p>
              Nossa equipe é formada por profissionais experientes e comprometidos em oferecer atendimento 
              personalizado, adaptando cada serviço às demandas específicas do seu negócio — seja em âmbito 
              local, nacional ou internacional.
            </p>
            
            <p className="font-semibold text-primary">
              Mascarenhas Transportes: excelência logística para quem busca performance, previsibilidade e resultados.
            </p>
            
            <div className="pt-8">
              <Button 
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=5531995700061&text=Ol%C3%A1%2C+gostaria+de+fazer+uma+cota%C3%A7%C3%A3o&type=phone_number&app_absent=0', '_blank')}
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
