import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Minus } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "@/components/SectionHeading";
import { values } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Origem, manifesto, valores e visão da Auri Fossores.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre a marca"
        title="Aqueles que escavam ouro."
        copy="Auri Fossores é uma declaração de identidade: construir com intenção, disciplina e verdade em um mundo cheio de ruído."
        index="01"
      />

      <section className="content-section">
        <div className="section-shell split-layout">
          <SectionHeading
            eyebrow="Origem"
            title="O valor não aparece na superfície."
            copy="O nome vem do latim e representa quem trabalha com propósito, garimpa o que é real e constrói riqueza sem depender de atalhos."
          />
          <blockquote className="statement-panel">
            “Tecnologia que constrói, não que distrai. Construindo autenticidade com suor.”
          </blockquote>
        </div>
      </section>

      <section className="content-section section-contrast">
        <div className="section-shell">
          <SectionHeading
            eyebrow="Valores"
            title="Princípios não negociáveis."
            copy="A estética muda. O contexto evolui. A base permanece."
          />
          <div className="value-list">
            {values.map((value, index) => (
              <div key={value}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{value}</strong>
                <Minus aria-hidden="true" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-shell vision-grid">
          <div>
            <span className="display-label">Visão de futuro</span>
            <h2>Conteúdo como porta. Produtos como resultado.</h2>
          </div>
          <div className="vision-copy">
            <p>
              A Auri nasce como marca e cresce como empresa: sistemas, automações, editorial,
              produtos digitais, posicionamento e lifestyle.
            </p>
            <p>
              O posicionamento é direto: ajudar pessoas e negócios a pensarem melhor, operarem
              melhor e construírem com mais método.
            </p>
            <Link className="primary-button" href="/servicos">
              Ver frentes de atuação
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
