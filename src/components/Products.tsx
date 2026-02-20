import { FlaskConical, Droplets, Microscope, Filter, TestTubes, Beaker } from "lucide-react";
import productsBg from "@/assets/products-bg.jpg";

const products = [
  {
    icon: FlaskConical,
    title: "Reagentes químicos e biológicos",
    description: "Reagentes de alta pureza para análises laboratoriais e controle de qualidade.",
  },
  {
    icon: Filter,
    title: "Sistemas de filtração",
    description: "Soluções completas em filtração para processos industriais e laboratoriais.",
  },
  {
    icon: Droplets,
    title: "Purificadores de água ultrapura",
    description: "Equipamentos para produção de água ultrapura conforme normas técnicas.",
  },
  {
    icon: Microscope,
    title: "Equipamentos para análise",
    description: "Instrumentos de precisão para análise e caracterização de amostras.",
  },
  {
    icon: TestTubes,
    title: "Colunas cromatográficas",
    description: "Colunas e acessórios para cromatografia líquida e gasosa.",
  },
  {
    icon: Beaker,
    title: "Vidrarias e consumíveis",
    description: "Vidrarias de laboratório e consumíveis em geral para uso diário.",
  },
];

const Products = () => {
  return (
    <section id="produtos" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={productsBg} alt="Reagentes químicos coloridos em frascos de laboratório" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-muted/93" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 bg-white/70 backdrop-blur-sm rounded-xl px-8 py-8">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Nossos produtos
          </h2>
          <p className="text-muted-foreground">
            Linha completa de produtos para laboratórios e indústrias com qualidade e procedência garantidas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-7 group hover:border-foreground/20 hover:shadow-md transition-all"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-md bg-primary/5 text-foreground mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <product.icon size={22} />
              </div>
              <h3 className="text-base font-display font-semibold text-foreground mb-2">
                {product.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
