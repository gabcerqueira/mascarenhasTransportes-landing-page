import { Card, CardContent } from "@/components/ui/card";
import { Plane, Truck, Train, Ship } from "lucide-react";
import aereoImg from "@/assets/transport-aereo.jpg";
import rodoviarioImg from "@/assets/transport-rodoviario.jpg";
import ferroviarioImg from "@/assets/transport-ferroviario.jpg";
import maritimoImg from "@/assets/transport-maritimo.jpg";

const TransportTypesSection = () => {
  const transportTypes = [
    {
      title: "Transporte Aéreo",
      image: aereoImg,
      icon: Plane,
    },
    {
      title: "Transporte Rodoviário",
      image: rodoviarioImg,
      icon: Truck,
    },
    {
      title: "Transporte Ferroviário",
      image: ferroviarioImg,
      icon: Train,
    },
    {
      title: "Transporte Marítimo",
      image: maritimoImg,
      icon: Ship,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nossos <span className="text-accent">Serviços</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Soluções completas de transporte para todas as suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transportTypes.map((type, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 group border-2 hover:border-accent">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex flex-col items-center justify-end p-6">
                    <div className="w-14 h-14 rounded-full bg-accent mb-3 flex items-center justify-center">
                      <type.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white text-center">{type.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransportTypesSection;
