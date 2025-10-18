import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="cotacao" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Faça Sua Cotação</h2>
            <p className="text-muted-foreground mb-8">
              Preencha o formulário abaixo e entraremos em contato em breve.
            </p>
            
            <form className="space-y-4">
              <div>
                <Input 
                  type="text" 
                  placeholder="Nome" 
                  className="w-full"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="E-mail" 
                  className="w-full"
                />
              </div>
              <div>
                <Input 
                  type="tel" 
                  placeholder="Telefone" 
                  className="w-full"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Mensagem" 
                  className="w-full min-h-32"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white"
                size="lg"
              >
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Telefone</p>
                    <p className="text-muted-foreground">(31) 99478-0684</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">E-mail</p>
                    <p className="text-muted-foreground">mascarenhastransportes.com.br</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-muted-foreground">
                      Avenida Raja Gabáglia, 2000, Cidade Jardim<br />
                      Belo Horizonte - MG
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Siga-nos nas Redes Sociais</h3>
              <div className="flex gap-3">
                <a href="#" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <Youtube className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
