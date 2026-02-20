import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-fixed"
          style={{ backgroundImage: `url(${heroBg})` }}
          role="img"
          aria-label="Equipamentos laboratoriais e vidrarias científicas"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/40 md:from-black/80 md:via-black/60 md:to-black/40" />
      </div>

      {/* Animated particles - hidden on small screens */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <div className="max-w-xl sm:max-w-xl md:max-w-2xl">
          <motion.div
            className="w-12 sm:w-16 h-0.5 bg-white/50 mb-6 sm:mb-8"
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Domei Comercial
          </motion.h1>
          <motion.h2
            className="text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-6 sm:mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Soluções em reagentes, equipamentos e serviços laboratoriais para indústrias 
            que exigem qualidade e confiabilidade desde 2001.
          </motion.h2>
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a
              href="https://wa.me/5562981642830"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-foreground px-6 py-3 rounded-md font-medium text-sm text-center hover:bg-white/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Solicitar orçamento
            </a>
            <Link
              to="/vitrine"
              className="bg-highlight text-highlight-foreground px-6 py-3 rounded-md font-medium text-sm text-center hover:opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              Acesse nossa vitrine
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
