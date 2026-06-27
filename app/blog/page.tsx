import type { Metadata } from "next";
import { ArticleCard } from "@/components/ArticleCard";
import { PageHero } from "@/components/PageHero";
import { articles } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Editorial",
  description: "Editorial Auri Fossores sobre tecnologia, método, disciplina e performance.",
};

const categories = ["Tecnologia", "IA", "Produtividade", "Disciplina", "Performance", "Dinheiro", "Esporte"];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="Editorial"
        title="Ideias para construir sem viver no automático."
        copy="Tecnologia, trabalho, disciplina e performance tratados com substância, contexto e aplicação."
        index="04"
      />

      <section className="category-band" aria-label="Categorias editoriais">
        <div className="section-shell category-list">
          {categories.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-shell editorial-list">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.title}
              {...article}
              index={index}
              featured={index === 0}
            />
          ))}
        </div>
      </section>
    </>
  );
}
