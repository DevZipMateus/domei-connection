import ScrollReveal from "@/components/ScrollReveal";
import alpaxLogo from "@/assets/partner-alpax.png";
import labmassLogo from "@/assets/partner-labmass.png";

const partners = [
  { name: "Alpax", logo: alpaxLogo, url: "https://alpax.com.br", alt: "Alpax - Qualidade, Inovação e Transparência" },
  { name: "Labmass", logo: labmassLogo, url: "https://labmass.com.br", alt: "Labmass - A QIMA Life Sciences Company" },
];

const Partners = () => {
  return (
    <section className="py-14 sm:py-20 bg-muted/40">
      <div className="container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
              Nossos Parceiros
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
              Trabalhamos com as melhores empresas do setor para garantir qualidade e confiabilidade.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16">
          {partners.map((partner, index) => (
            <ScrollReveal key={partner.name} delay={0.1 * index}>
              <a
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-500 hover:scale-105"
              >
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="h-14 sm:h-20 w-auto object-contain"
                />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
