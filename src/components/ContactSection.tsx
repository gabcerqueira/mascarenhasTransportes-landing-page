import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="cotacao" className="py-20 bg-gradient-to-br from-muted/50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Solicite sua <span className="text-accent">Cotação</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Entre em contato conosco e receba uma proposta personalizada
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="border-2 hover:border-accent/50 transition-all">
              <CardContent className="p-8">
                <form className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Nome Completo
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Seu nome" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      E-mail
                    </label>
                    <Input 
                      type="email" 
                      placeholder="seu@email.com" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Telefone
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="(00) 00000-0000" 
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Mensagem
                    </label>
                    <Textarea 
                      placeholder="Descreva suas necessidades de transporte..." 
                      className="w-full min-h-32"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-white py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all group"
                    size="lg"
                  >
                    Enviar Mensagem
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="border-2 hover:border-accent/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-coral-light flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Telefone</h3>
                      <p className="text-muted-foreground">(31) 99478-0684</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-coral-light flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">E-mail</h3>
                      <p className="text-muted-foreground">contato@mascarenhastransportes.com.br</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent/50 transition-all">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-coral-light flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary mb-1">Endereço</h3>
                      <p className="text-muted-foreground">
                        Avenida Raja Gabáglia, 2000<br />
                        Cidade Jardim - Belo Horizonte/MG
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
