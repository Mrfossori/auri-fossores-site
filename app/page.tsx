import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CircleDot,
  Cpu,
  Dumbbell,
  Landmark,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";

const homePillars = [
  {
    title: "Tecnologia",
    copy: "Ferramenta para construir.",
    icon: Cpu,
  },
  {
    title: "Conquista",
    copy: "Resultado que pode ser provado.",
    icon: Trophy,
  },
  {
    title: "Verdade",
    copy: "Direto, real e sem máscara.",
    icon: CircleDot,
  },
  {
    title: "Esporte",
    copy: "Disciplina aplicada ao corpo.",
    icon: Dumbbell,
  },
  {
    title: "Dinheiro",
    copy: "Consequência de valor construído.",
    icon: Landmark,
  },
  {
    title: "Juventude",
    copy: "Uma geração que executa.",
    icon: Users,
  },
];

const gateways = [
  {
    index: "01",
    label: "Serviços",
    title: "Tecnologia aplicada ao negócio.",
    copy: "Automações, IA e sistemas simples para sair do improviso.",
    cta: "Ver serviços",
    href: "/servicos",
  },
  {
    index: "02",
    label: "Produtos",
    title: "Drops digitais em construção.",
    copy: "Guias, templates, planilhas e ferramentas para quem quer executar melhor.",
    cta: "Ver produtos",
    href: "/produtos",
  },
  {
    index: "03",
    label: "Editorial",
    title: "Ideias para quem constrói.",
    copy: "Artigos sobre tecnologia, disciplina, negócios, performance e método.",
    cta: "Ler editorial",
    href: "/blog",
  },
];

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-media">
          <Image
            src="/auri-hero.png"
            alt="Composição escura com ouro mineral e elementos de tecnologia."
            fill
            priority
          />
        </div>

        <div className="section-shell home-hero-grid">
          <div className="home-hero-copy">
            <span className="eyebrow">
              <Sparkles aria-hidden="true" />
              Tecnologia, método e construção
            </span>
            <h1>Não vim buscar atalho. Vim garimpar o que é real.</h1>
            <p>
              Auri Fossores une tecnologia, disciplina e propósito para quem quer sair do
              improviso e construir com método.
            </p>
            <div className="button-row">
              <Link className="primary-button" href="/sobre">
                Conhecer a Auri
                <ArrowRight aria-hidden="true" />
              </Link>
              <Link className="secondary-button" href="/servicos">
                Explorar serviços
              </Link>
            </div>
          </div>

          <aside className="hero-signal">
            <span className="mono-label">Work. Build. Own.</span>
            <strong>Sistema que substitui improviso por processo.</strong>
            <div className="signal-line">
              <span>Fé</span>
              <span>Tecnologia</span>
              <span>Performance</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="home-section home-manifesto">
        <div className="section-shell manifesto-band">
          <span className="display-label">Manifesto</span>
          <blockquote>
            Tecnologia que constrói, não que distrai. Não é sobre parecer. É sobre construir.
          </blockquote>
        </div>
      </section>

      <section className="home-section">
        <div className="section-shell">
          <div className="home-section-heading">
            <span className="display-label">Pilares da marca</span>
            <h2>Base forte. Direção clara.</h2>
          </div>

          <div className="home-pillars">
            {homePillars.map((pillar) => (
              <article className="home-pillar" key={pillar.title}>
                <pillar.icon aria-hidden="true" />
                <div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section section-contrast">
        <div className="section-shell">
          <div className="home-section-heading">
            <span className="display-label">Dentro da Auri</span>
            <h2>Três frentes para quem quer construir com método.</h2>
          </div>

          <div className="gateway-grid">
            {gateways.map((gateway) => (
              <article className="gateway-card" key={gateway.href}>
                <div className="gateway-meta">
                  <span>{gateway.label}</span>
                  <span>{gateway.index}</span>
                </div>
                <h3>{gateway.title}</h3>
                <p>{gateway.copy}</p>
                <Link className="card-cta" href={gateway.href}>
                  {gateway.cta}
                  <ArrowRight aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-shell home-final-cta">
          <div>
            <span className="display-label">Próximo movimento</span>
            <h2>Acompanhe a construção.</h2>
            <p>
              Auri Fossores ainda está em construção. O próximo passo é público. O trabalho já
              começou.
            </p>
          </div>
          <div className="button-row">
            <Link className="dark-button" href="/contato">
              Entrar em contato
              <ArrowRight aria-hidden="true" />
            </Link>
            <a className="secondary-dark-button" href="https://instagram.com/aurifossores">
              Ver Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
