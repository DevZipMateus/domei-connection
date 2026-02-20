import { Eye, Target, Gem } from "lucide-react";

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Sobre a Domei Comercial
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            A Domei Comercial Ltda. iniciou suas operações em 2001, representando empresas que distribuem 
            produtos ou prestam serviços para clientes dos segmentos da indústria química, farmacêutica, 
            de bebidas, de alimentos, de mineração e acadêmicos. Comercializamos produtos químicos, biológicos 
            e equipamentos destinados a controle de qualidade e desenvolvimento de novos produtos, sempre 
            exaltando a eficiência na escolha e dimensionamento das soluções para o cliente, bem como na 
            velocidade de resposta às solicitações.
          </p>
        </div>

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
          ].map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary text-primary-foreground mb-5">
                <item.icon size={24} />
              </div>
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
