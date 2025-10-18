const ClientsSection = () => {
  // Placeholder for client logos - in production, these would be actual logo images
  const clients = [
    "Magalu", "MRV", "Brisa", "Mercado Livre",
    "Direcional", "Yara", "UADE", "Andaimes Triunfo",
    "Fratta", "Pif Paf", "CEMIG", "Copasa"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Alguns de<br />
            Nossos<br />
            Clientes
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-6 bg-muted/50 rounded-lg hover:bg-muted transition-colors"
              >
                <span className="text-sm md:text-base font-semibold text-center text-muted-foreground">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
