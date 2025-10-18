import { Clock, TrendingUp, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Tempo de Trânsito Reduzido",
      description: "Nosso sistema online permite redução no tempo de trânsito. Rotas mais rápidas garantem entregas pontuais e eficientes.",
    },
    {
      icon: TrendingUp,
      title: "Maior Utilização de Ativos",
      description: "Já entregamos centenas de cargas e podemos ajudar na análise e alocação de recursos. Isso é alcançado por meio de análise de dados de alto nível.",
    },
    {
      icon: ShieldCheck,
      title: "Confiável",
      description: "Compromisso com a segurança e integridade das cargas. Equipe dedicada e experiente trabalhando para garantir entregas seguras.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Por que <span className="text-accent">Escolher</span> Nossa Empresa
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A Plataforma de Solução de Rastreamento com Tecnologia Mais Eficiente
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-accent hover:shadow-xl transition-all duration-300 group">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-coral-light mx-auto flex items-center justify-center group-hover:scale-110 transition-transform">
                  <feature.icon className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
