import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { PageHero } from "@/components/PageHero";
import { services } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Serviços de tecnologia, automação, IA e posicionamento da Auri Fossores.",
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Tecnologia aplicada ao trabalho real."
        copy="Frentes para pequenos negócios e marcas que precisam trocar improviso por processo sem adicionar complexidade desnecessária."
        index="02"
        action={{ label: "Iniciar conversa", href: "/contato" }}
      />

      <section className="content-section">
        <div className="section-shell service-list">
          {services.map((service, index) => (
            <Card
              key={service.title}
              {...service}
              cta="Conversar sobre esta frente"
              href="/contato"
              variant={index === 0 || index === 2 ? "accent" : index === 4 ? "quiet" : "standard"}
            />
          ))}
        </div>
      </section>

      <section className="content-section section-contrast">
        <div className="section-shell process-strip">
          <span className="display-label">Método de trabalho</span>
          <div>
            <strong>01. Entender</strong>
            <p>Mapear rotina, gargalos e resultado esperado.</p>
          </div>
          <div>
            <strong>02. Construir</strong>
            <p>Desenhar uma solução simples, clara e sustentável.</p>
          </div>
          <div>
            <strong>03. Operar</strong>
            <p>Colocar método no lugar da dependência de memória.</p>
          </div>
        </div>
      </section>
    </>
  );
}
