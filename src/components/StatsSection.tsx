import { TrendingUp, Users, MapPin } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Clientes Satisfeitos",
    },
    {
      icon: TrendingUp,
      number: "75+",
      label: "Motoristas Confiáveis",
    },
    {
      icon: MapPin,
      number: "25+",
      label: "Áreas Cobertas",
    },
  ];

  return (
    <section className="py-16 bg-white border-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-6 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground font-medium mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
