const ClientsSection = () => {
  const clients = [
    "Magalu", "MRV", "Brisa", "Mercado Livre",
    "Direcional", "Yara", "UADE", "Andaimes Triunfo",
    "Fratta", "Pif Paf", "CEMIG", "Copasa"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-center">
            Nossos <span className="text-accent">Clientes</span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Empresas que confiam em nossos serviços
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center p-6 bg-muted/30 rounded-xl hover:bg-accent/10 hover:shadow-md transition-all border border-transparent hover:border-accent/30"
              >
                <span className="text-sm font-semibold text-center text-foreground/70">
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
