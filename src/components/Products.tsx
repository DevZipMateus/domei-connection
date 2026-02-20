import { FlaskConical, Droplets, Microscope, Filter, TestTubes, Beaker, ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import productsBg from "@/assets/products-bg.jpg";
import imgReagentes from "@/assets/product-reagentes.jpg";
import imgFiltracao from "@/assets/product-filtracao.jpg";
import imgPurificador from "@/assets/product-purificador.jpg";
import imgAnalise from "@/assets/product-analise.jpg";
import imgCromatografia from "@/assets/product-cromatografia.jpg";
import imgVidrarias from "@/assets/product-vidrarias.jpg";
import ScrollReveal from "@/components/ScrollReveal";

const products = [
  {
    icon: FlaskConical,
    title: "Reagentes químicos e biológicos",
    description: "Reagentes de alta pureza para análises laboratoriais e controle de qualidade.",
    image: imgReagentes,
    alt: "Frascos de reagentes químicos em prateleira de laboratório",
  },
  {
    icon: Filter,
    title: "Sistemas de filtração",
    description: "Soluções completas em filtração para processos industriais e laboratoriais.",
    image: imgFiltracao,
    alt: "Sistema de filtração laboratorial com funil e bomba a vácuo",
  },
  {
    icon: Droplets,
    title: "Purificadores de água ultrapura",
    description: "Equipamentos para produção de água ultrapura conforme normas técnicas.",
    image: imgPurificador,
    alt: "Purificador de água ultrapura em laboratório moderno",
  },
  {
    icon: Microscope,
    title: "Equipamentos para análise",
    description: "Instrumentos de precisão para análise e caracterização de amostras.",
    image: imgAnalise,
    alt: "Microscópios e equipamentos analíticos em bancada de laboratório",
  },
  {
    icon: TestTubes,
    title: "Colunas cromatográficas",
    description: "Colunas e acessórios para cromatografia líquida e gasosa.",
    image: imgCromatografia,
    alt: "Colunas cromatográficas HPLC em laboratório",
  },
  {
    icon: Beaker,
    title: "Vidrarias e consumíveis",
    description: "Vidrarias de laboratório e consumíveis em geral para uso diário.",
    image: imgVidrarias,
    alt: "Conjunto de vidrarias de laboratório como béqueres e erlenmeyers",
  },
];

const Products = () => {
  return (
    <section id="produtos" className="relative py-14 sm:py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${productsBg})` }}
          role="img"
          aria-label="Reagentes químicos coloridos em frascos de laboratório"
        />
        <div className="absolute inset-0 bg-muted/93" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-16 bg-white/70 backdrop-blur-sm rounded-xl px-5 sm:px-8 py-6 sm:py-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-3 sm:mb-4">
              Nossos produtos
            </h2>
            <p className="text-foreground text-sm sm:text-base">
              Linha completa de produtos para laboratórios e indústrias com qualidade e procedência garantidas.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <ScrollReveal key={product.title} delay={0.08 * index}>
              <div className="relative rounded-lg overflow-hidden group hover:shadow-2xl transition-all duration-500 min-h-[220px] sm:min-h-[260px] flex flex-col justify-end cursor-pointer">
                {/* Card background image */}
                <img
                  src={product.image}
                  alt={product.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/5 transition-all duration-500 group-hover:from-black/90 group-hover:via-black/50" />

                {/* Content */}
                <div className="relative z-10 p-5 sm:p-7 transition-transform duration-500 group-hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-md bg-white/15 backdrop-blur-sm text-white mb-3 sm:mb-4 border border-white/20 transition-all duration-300 group-hover:bg-white/25 group-hover:scale-110">
                    <product.icon size={20} className="sm:w-[22px] sm:h-[22px]" />
                  </div>
                  <h3 className="text-sm sm:text-base font-display font-semibold text-white mb-1 sm:mb-2">
                    {product.title}
                  </h3>
                  <p className="text-white/75 text-xs sm:text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Vitrine CTA */}
        <ScrollReveal delay={0.2}>
          <div className="mt-10 sm:mt-16 bg-primary rounded-xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-highlight/20 text-highlight shrink-0">
                <ShoppingBag size={28} className="sm:w-8 sm:h-8" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-primary-foreground mb-1">
                  Vitrine de Produtos
                </h3>
                <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed max-w-lg">
                  Explore nosso catálogo completo com preços, detalhes e disponibilidade em tempo real.
                </p>
              </div>
            </div>
            <Link
              to="/vitrine"
              className="bg-highlight text-highlight-foreground px-6 sm:px-8 py-3 rounded-md font-medium text-sm hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              Acessar vitrine
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Products;
