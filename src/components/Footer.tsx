import { Phone, Mail, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 md:py-16">
        <ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Empresa */}
            <div>
              <h3 className="text-base sm:text-lg font-display font-semibold mb-3 sm:mb-4">Domei Comercial</h3>
              <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed">
                Desde 2001 fornecendo reagentes químicos, equipamentos laboratoriais e soluções de qualidade para a indústria brasileira.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-base sm:text-lg font-display font-semibold mb-3 sm:mb-4">Navegação</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {["Início", "Sobre", "Produtos", "Serviços", "Contato"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                      className="text-primary-foreground/70 hover:text-primary-foreground hover:translate-x-1 inline-block text-xs sm:text-sm transition-all duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-base sm:text-lg font-display font-semibold mb-3 sm:mb-4">Contato</h3>
              <ul className="space-y-2.5 sm:space-y-3">
                <li className="flex items-start gap-2.5 sm:gap-3 text-xs sm:text-sm text-primary-foreground/70">
                  <MapPin size={14} className="mt-0.5 shrink-0 sm:w-4 sm:h-4" />
                  <span>Rua J-82 Qd.152A Lt.18 C-1, Setor Jaó, Goiânia - GO</span>
                </li>
                <li className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-primary-foreground/70">
                  <Phone size={14} className="shrink-0 sm:w-4 sm:h-4" />
                  <a href="https://wa.me/5562981642830" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                    (62) 98164-2830
                  </a>
                </li>
                <li className="flex items-center gap-2.5 sm:gap-3 text-xs sm:text-sm text-primary-foreground/70">
                  <Mail size={14} className="shrink-0 sm:w-4 sm:h-4" />
                  <a href="mailto:vendas@domei.com.br" className="hover:text-primary-foreground transition-colors break-all sm:break-normal">
                    vendas@domei.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="border-t border-primary-foreground/10 mt-8 sm:mt-10 pt-4 sm:pt-6 flex flex-col md:flex-row justify-between items-center gap-2 sm:gap-4">
          <p className="text-primary-foreground/50 text-[10px] sm:text-xs text-center md:text-left">
            © {new Date().getFullYear()} Domei Comercial Ltda. CNPJ: 04.606.517/0001-80. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/50 text-[10px] sm:text-xs">
            Segunda a sexta das 8h às 18h
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
