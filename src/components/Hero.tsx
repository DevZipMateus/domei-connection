import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroBg})` }}
          role="img"
          aria-label="Equipamentos laboratoriais e vidrarias científicas"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 animate-fade-in-up">
            Domei Comercial
          </h1>
          <h2 className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Soluções em reagentes, equipamentos e serviços laboratoriais para indústrias 
            que exigem qualidade e confiabilidade desde 2001.
          </h2>
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a
              href="https://wa.me/5562981642830"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-white/90 transition-colors"
            >
              Solicitar orçamento
            </a>
            <a
              href="#produtos"
              className="bg-white/10 text-white border border-white/30 px-6 py-3 rounded-md font-medium text-sm hover:bg-white/20 transition-colors"
            >
              Conheça nossos produtos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
