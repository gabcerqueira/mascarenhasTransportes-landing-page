import { Card, CardContent } from "@/components/ui/card";
import aereoImg from "@/assets/transport-aereo.jpg";
import rodoviarioImg from "@/assets/transport-rodoviario.jpg";
import ferroviarioImg from "@/assets/transport-ferroviario.jpg";
import maritimoImg from "@/assets/transport-maritimo.jpg";

const TransportTypesSection = () => {
  const transportTypes = [
    {
      title: "Transporte Aéreo",
      image: aereoImg,
    },
    {
      title: "Transporte Rodoviário",
      image: rodoviarioImg,
    },
    {
      title: "Transporte Ferroviário",
      image: ferroviarioImg,
    },
    {
      title: "Transporte Marítimo",
      image: maritimoImg,
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {transportTypes.map((type, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="relative h-64">
                  <img 
                    src={type.image} 
                    alt={type.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-4">
                    <h3 className="text-lg font-semibold text-center">{type.title}</h3>
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
