import { Phone, Mail, MapPin, Clock } from "lucide-react";
import contactBg from "@/assets/contact-bg.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  return (
    <section id="contato" className="relative py-14 sm:py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${contactBg})` }}
          role="img"
          aria-label="Laboratório moderno com equipamentos de análise"
        />
        <div className="absolute inset-0 bg-muted/93" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16 bg-white/70 backdrop-blur-sm rounded-xl px-5 sm:px-8 py-6 sm:py-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-3 sm:mb-4">
              Entre em contato
            </h2>
            <p className="text-foreground text-sm sm:text-base">
              Estamos prontos para atender sua demanda. Fale conosco e solicite um orçamento.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
          {/* Info */}
          <ScrollReveal direction="left">
            <div className="space-y-4 sm:space-y-6">
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
                  className="flex items-start gap-3 sm:gap-4 bg-background/80 backdrop-blur-sm border border-border rounded-lg p-4 sm:p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-md bg-primary text-primary-foreground shrink-0">
                    <item.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-0.5 sm:mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="text-foreground font-medium text-xs sm:text-sm hover:underline break-all sm:break-normal"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium text-xs sm:text-sm">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <a
                href="https://wa.me/5562981642830"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 sm:px-6 py-2.5 sm:py-3 rounded-md font-medium text-xs sm:text-sm hover:bg-accent hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
              >
                Solicitar orçamento via WhatsApp
              </a>
            </div>
          </ScrollReveal>

          {/* Mapa */}
          <ScrollReveal direction="right">
            <div className="rounded-lg overflow-hidden border border-border shadow-md hover:shadow-xl transition-shadow duration-500 h-[280px] sm:h-[350px] md:h-full md:min-h-[400px]">
              <iframe
                title="Localização Domei Comercial"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.8!2d-49.27!3d-16.68!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef6c0e0000001%3A0x1!2sSetor+Ja%C3%B3%2C+Goi%C3%A2nia+-+GO!5e0!3m2!1spt-BR!2sbr!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
