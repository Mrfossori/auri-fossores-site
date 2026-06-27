import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { navItems } from "@/data/site-content";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-grid">
        <div>
          <Logo />
          <p>Tecnologia que constrói, não que distrai. Construindo autenticidade com suor.</p>
        </div>

        <nav className="footer-nav" aria-label="Navegação do rodapé">
          {navItems.map((item) => (
            <Link href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="social-links">
          <a href="https://instagram.com/aurifossores" aria-label="Instagram">
            <Instagram aria-hidden="true" />
          </a>
          <a href="#" aria-label="WhatsApp em definição">
            <MessageCircle aria-hidden="true" />
          </a>
          <a href="mailto:contato@aurifossores.com" aria-label="E-mail">
            <Mail aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="section-shell footer-bottom">
        <span>Auri Fossores</span>
        <span>Work. Build. Own.</span>
      </div>
    </footer>
  );
}
