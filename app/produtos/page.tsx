import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Futuros drops e produtos digitais da Auri Fossores.",
};

export default function ProdutosPage() {
  return (
    <>
      <PageHero
        eyebrow="Produtos"
        title="Ferramentas para quem quer construir com método."
        copy="Uma vitrine das linhas em desenvolvimento. Cada ativo nasce para resolver um problema claro de organização, operação ou performance."
        index="03"
        action={{ label: "Acompanhar os drops", href: "/contato" }}
      />

      <section className="content-section">
        <div className="section-shell product-showcase">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
      </section>

      <section className="content-section section-contrast">
        <div className="section-shell release-note">
          <span className="display-label">Critério de lançamento</span>
          <h2>Primeiro utilidade. Depois volume.</h2>
          <p>
            Os produtos serão lançados em ciclos curtos, com propósito definido e espaço para
            evolução a partir do uso real.
          </p>
        </div>
      </section>
    </>
  );
}
