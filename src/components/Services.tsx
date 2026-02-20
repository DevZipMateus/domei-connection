import { Wrench, FlaskRound, Settings } from "lucide-react";
import servicesBg from "@/assets/services-bg.jpg";

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
    <section id="servicos" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${servicesBg})` }}
          role="img"
          aria-label="Técnica realizando manutenção em equipamento laboratorial"
        />
        <div className="absolute inset-0 bg-white/92" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 bg-white/70 backdrop-blur-sm rounded-xl px-8 py-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Nossos serviços
          </h2>
          <p className="text-muted-foreground">
            Soluções técnicas especializadas para manter seus equipamentos e processos em pleno funcionamento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="relative bg-primary text-primary-foreground rounded-lg p-8 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary-foreground/10 text-primary-foreground mb-5">
                  <service.icon size={22} />
                </div>
                <h3 className="text-lg font-display font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
