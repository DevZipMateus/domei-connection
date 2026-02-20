import { Eye, Target, Gem } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const About = () => {
  return (
    <section id="sobre" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${aboutBg})` }}
          role="img"
          aria-label="Microscópio em laboratório de pesquisa"
        />
        <div className="absolute inset-0 bg-white/92" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16 bg-white/70 backdrop-blur-sm rounded-xl px-8 py-10">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Sobre a Domei Comercial
            </h2>
            <p className="text-foreground leading-relaxed">
              A Domei Comercial Ltda. iniciou suas operações em 2001, representando empresas que distribuem 
              produtos ou prestam serviços para clientes dos segmentos da indústria química, farmacêutica, 
              de bebidas, de alimentos, de mineração e acadêmicos. Comercializamos produtos químicos, biológicos 
              e equipamentos destinados a controle de qualidade e desenvolvimento de novos produtos, sempre 
              exaltando a eficiência na escolha e dimensionamento das soluções para o cliente, bem como na 
              velocidade de resposta às solicitações.
            </p>
          </div>
        </ScrollReveal>

        {/* Números da empresa */}
        <ScrollReveal delay={0.1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { number: "+20", label: "Anos de experiência" },
              { number: "+500", label: "Clientes atendidos" },
              { number: "+1000", label: "Produtos disponíveis" },
              { number: "100%", label: "Compromisso técnico" },
            ].map((stat) => (
              <div key={stat.label} className="bg-primary text-primary-foreground rounded-lg p-6 text-center">
                <p className="text-3xl md:text-4xl font-display font-bold mb-1">{stat.number}</p>
                <p className="text-primary-foreground/70 text-xs md:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Eye,
              title: "Visão",
              description:
                "Nos tornarmos uma das empresas de referência no mercado, alcançando o maior número possível de clientes.",
            },
            {
              icon: Target,
              title: "Missão",
              description:
                "Suprir o mercado com produtos de relevância técnica e qualidade premium, a fim de aumentar a confiança dos clientes com seus produtos finais.",
            },
            {
              icon: Gem,
              title: "Valores",
              description:
                "Transmitir e confirmar com ações a transparência e os limites técnicos ofertados.",
            },
          ].map((item, index) => (
            <ScrollReveal key={item.title} delay={0.1 * index}>
              <div className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground mb-5 group-hover:scale-110 transition-transform">
                  <item.icon size={24} />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
