import { Wrench, FlaskRound, Settings } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    icon: Wrench,
    title: "Manutenção preventiva e corretiva",
    description:
      "Serviços especializados de manutenção para garantir o funcionamento contínuo dos seus equipamentos laboratoriais.",
  },
  {
    icon: Settings,
    title: "Calibração",
    description:
      "Calibração de equipamentos seguindo normas técnicas para assegurar a precisão e confiabilidade das suas medições.",
  },
  {
    icon: FlaskRound,
    title: "Análise e caracterização",
    description:
      "Serviços de análises e caracterização de substâncias químicas com laudos técnicos completos.",
  },
];

const Services = () => {
  return (
    <section id="servicos" className="relative py-14 sm:py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${servicesBg})` }}
          role="img"
          aria-label="Técnica realizando manutenção em equipamento laboratorial"
        />
        <div className="absolute inset-0 bg-white/92" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16 bg-white/70 backdrop-blur-sm rounded-xl px-5 sm:px-8 py-6 sm:py-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-3 sm:mb-4">
              Nossos serviços
            </h2>
            <p className="text-foreground text-sm sm:text-base">
              Soluções técnicas especializadas para manter seus equipamentos e processos em pleno funcionamento.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={0.12 * index}>
              <div className="relative bg-primary text-primary-foreground rounded-lg p-6 sm:p-8 overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 h-full">
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2 transition-transform duration-700 group-hover:scale-150" />
                <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-24 sm:h-24 bg-primary-foreground/3 rounded-full translate-y-1/2 -translate-x-1/2 transition-transform duration-700 group-hover:scale-150" />
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-primary-foreground/10 text-primary-foreground mb-4 sm:mb-5 transition-all duration-300 group-hover:bg-primary-foreground/20 group-hover:scale-110">
                    <service.icon size={20} className="sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-semibold mb-2 sm:mb-3">
                    {service.title}
                  </h3>
                  <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
