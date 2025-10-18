import servicesBg from "@/assets/services-bg.jpg";

const ServicesSection = () => {
  return (
    <section 
      id="servicos" 
      className="py-20 relative bg-cover bg-center"
      style={{ backgroundImage: `url(${servicesBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Serviços</h2>
          
          <div className="space-y-8">
            {/* Service 1 */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 underline">
                Serviços de Transporte Confiáveis para Todas as Suas Necessidades
              </h3>
              <p className="text-white/90 leading-relaxed text-lg">
                Seja para transporte de carga ou passageiros, nossa empresa está aqui para fornecer soluções confiáveis e eficientes. Com uma 
                frota moderna e uma equipe dedicada, estamos prontos para atender às suas demandas de transporte de forma segura e pontual.
              </p>
            </div>
            
            {/* Service 2 */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 underline">
                Transporte de Carga
              </h3>
              <p className="text-white/90 leading-relaxed text-lg">
                Nossa equipe especializada em transporte de carga garante que seus produtos cheguem ao destino final com rapidez e integridade. 
                Oferecemos uma variedade de opções de transporte, desde cargas pequenas até remessas de grande porte. Com rastreamento em tempo 
                real e procedimentos rigorosos de segurança, você pode confiar em nós para cuidar dos seus bens.
              </p>
            </div>
            
            {/* Service 3 */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 underline">
                Logística Integrada
              </h3>
              <p className="text-white/90 leading-relaxed text-lg">
                Além dos serviços de transporte, também oferecemos soluções de logística integrada para otimizar sua cadeia de suprimentos. 
                Estamos aqui para simplificar o processo e garantir uma operação eficiente.
              </p>
            </div>
            
            {/* Why Choose Us */}
            <div className="pt-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-6 underline">
                Por que Escolher Nossa Empresa
              </h3>
              <ul className="space-y-3 text-white/90 text-lg">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Compromisso com a segurança e a integridade das cargas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Frota moderna e bem-mantida</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Equipe dedicada e experiente</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Atendimento personalizado para atender às suas necessidades específicas</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Preços competitivos e transparência em todas as transações</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
