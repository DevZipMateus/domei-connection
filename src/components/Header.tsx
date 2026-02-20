import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
  { label: "Vitrine", href: "/vitrine", isRoute: true },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-primary ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-14 sm:h-16 md:h-20 px-4 sm:px-6">
        <a href={isHome ? "#inicio" : "/"} className="flex items-center gap-2">
          <img src={logo} alt="Logo Domei Comercial" className="h-7 sm:h-8 md:h-10" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.isRoute ? link.href : (isHome ? link.href : `/${link.href}`)}
              className="text-sm font-medium transition-colors text-primary-foreground/80 hover:text-primary-foreground whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5562981642830"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground px-4 xl:px-5 py-2 rounded-md text-sm font-medium hover:bg-primary-foreground/20 transition-colors whitespace-nowrap"
          >
            Fale conosco
          </a>
        </nav>

        {/* Mobile/Tablet toggle */}
        <button
          className="lg:hidden p-2 text-primary-foreground"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile/Tablet menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-primary border-t border-primary-foreground/10" aria-label="Menu mobile">
          <div className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.isRoute ? link.href : (isHome ? link.href : `/${link.href}`)}
                onClick={() => setMenuOpen(false)}
                className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/5 py-3 px-3 rounded-md text-sm font-medium transition-all"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5562981642830"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="bg-primary-foreground/10 border border-primary-foreground/30 text-primary-foreground px-5 py-3 rounded-md text-sm font-medium text-center hover:bg-primary-foreground/20 transition-colors mt-2"
            >
              Fale conosco
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
