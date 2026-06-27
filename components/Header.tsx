"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site-content";
import { Logo } from "./Logo";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="section-shell header-inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              className={pathname === item.href ? "is-active" : undefined}
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link className="header-action" href="/contato">
          Falar com a Auri
        </Link>

        <button
          className="mobile-menu-button"
          onClick={() => setOpen((value) => !value)}
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      <div className={`mobile-menu-panel ${open ? "is-open" : ""}`} id="mobile-navigation">
        <nav className="section-shell mobile-nav" aria-label="Navegação mobile">
          {navItems.map((item) => (
            <Link
              className={pathname === item.href ? "is-active" : undefined}
              key={item.href}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link className="primary-button" href="/contato">
            Falar com a Auri
          </Link>
        </nav>
      </div>

      {open && (
        <button
          className="navigation-backdrop"
          type="button"
          aria-label="Fechar navegação"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
