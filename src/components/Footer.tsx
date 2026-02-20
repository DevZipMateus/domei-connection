import { Phone, Mail, MapPin } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Empresa */}
            <div>
              <h3 className="text-lg font-display font-semibold mb-4">Domei Comercial</h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Desde 2001 fornecendo reagentes químicos, equipamentos laboratoriais e soluções de qualidade para a indústria brasileira.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-display font-semibold mb-4">Navegação</h3>
              <ul className="space-y-2">
                {["Início", "Sobre", "Produtos", "Serviços", "Contato"].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                      className="text-primary-foreground/70 hover:text-primary-foreground hover:translate-x-1 inline-block text-sm transition-all duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-lg font-display font-semibold mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-primary-foreground/70">
                  <MapPin size={16} className="mt-0.5 shrink-0" />
                  <span>Rua J-82 Qd.152A Lt.18 C-1, Setor Jaó, Goiânia - GO</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                  <Phone size={16} className="shrink-0" />
                  <a href="https://wa.me/5562981642830" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                    (62) 98164-2830
                  </a>
                </li>
                <li className="flex items-center gap-3 text-sm text-primary-foreground/70">
                  <Mail size={16} className="shrink-0" />
                  <a href="mailto:vendas@domei.com.br" className="hover:text-primary-foreground transition-colors">
                    vendas@domei.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="border-t border-primary-foreground/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/50 text-xs">
            © {new Date().getFullYear()} Domei Comercial Ltda. CNPJ: 04.606.517/0001-80. Todos os direitos reservados.
          </p>
          <p className="text-primary-foreground/50 text-xs">
            Segunda a sexta das 8h às 18h
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
