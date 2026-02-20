import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
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

      {/* Animated particles/dots decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              top: `${20 + i * 12}%`,
              left: `${10 + i * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.4,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          <motion.div
            className="w-16 h-0.5 bg-white/50 mb-8"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Domei Comercial
          </motion.h1>
          <motion.h2
            className="text-lg md:text-xl text-white/80 leading-relaxed mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Soluções em reagentes, equipamentos e serviços laboratoriais para indústrias 
            que exigem qualidade e confiabilidade desde 2001.
          </motion.h2>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href="https://wa.me/5562981642830"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-foreground px-6 py-3 rounded-md font-medium text-sm hover:bg-white/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Solicitar orçamento
            </a>
            <a
              href="#produtos"
              className="bg-white/10 text-white border border-white/30 px-6 py-3 rounded-md font-medium text-sm hover:bg-white/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Conheça nossos produtos
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
