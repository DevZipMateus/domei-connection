import { Phone, Mail, MapPin, Clock } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";

const Contact = () => {
  return (
    <section id="contato" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={contactBg} alt="Laboratório moderno com equipamentos de análise" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-muted/93" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 bg-white/70 backdrop-blur-sm rounded-xl px-8 py-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Entre em contato
          </h2>
          <p className="text-muted-foreground">
            Estamos prontos para atender sua demanda. Fale conosco e solicite um orçamento.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className="space-y-6">
            {[
              {
                icon: Phone,
                label: "Telefone / WhatsApp",
                value: "(62) 98164-2830",
                href: "https://wa.me/5562981642830",
                external: true,
              },
              {
                icon: Mail,
                label: "E-mail",
                value: "vendas@domei.com.br",
                href: "mailto:vendas@domei.com.br",
                external: false,
              },
              {
                icon: MapPin,
                label: "Endereço",
                value: "Rua J-82 Qd.152A Lt.18 C-1, Setor Jaó, Goiânia - GO",
                href: null,
                external: false,
              },
              {
                icon: Clock,
                label: "Horário de funcionamento",
                value: "Segunda a sexta das 8h às 18h",
                href: null,
                external: false,
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 bg-background/80 backdrop-blur-sm border border-border rounded-lg p-5"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-md bg-primary text-primary-foreground shrink-0">
                  <item.icon size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="text-foreground font-medium text-sm hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/5562981642830"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-accent transition-colors"
            >
              Solicitar orçamento via WhatsApp
            </a>
          </div>

          {/* Mapa */}
          <div className="rounded-lg overflow-hidden border border-border h-[400px] lg:h-auto shadow-md">
            <iframe
              title="Localização Domei Comercial"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8!2d-49.27!3d-16.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef6c0e0000001%3A0x1!2sSetor+Ja%C3%B3%2C+Goi%C3%A2nia+-+GO!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 400 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
