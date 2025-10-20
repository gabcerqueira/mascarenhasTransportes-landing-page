import { Clock, TrendingUp, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesSection = () => {
  const features = [
    {
      icon: Clock,
      title: "Tempo de Trânsito Reduzido",
      description: "Otimizamos rotas e processos com tecnologia inteligente, garantindo entregas mais rápidas, previsíveis e de alto desempenho para o seu negócio.",
    },
    {
      icon: TrendingUp,
      title: "Maior Eficiência Operacional",
      description: "Maximizamos o uso de ativos e recursos por meio de análises de dados e gestão integrada, aumentando a produtividade e reduzindo custos logísticos.",
    },
    {
      icon: ShieldCheck,
      title: "Confiabilidade Comprovada",
      description: "Atuamos com total transparência e controle em cada etapa da operação. Nossa equipe especializada assegura segurança, integridade e pontualidade nas entregas.",
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
