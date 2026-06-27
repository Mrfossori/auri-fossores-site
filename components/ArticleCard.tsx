import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ArticleCardProps = {
  title: string;
  category: string;
  summary: string;
  index: number;
  featured?: boolean;
};

export function ArticleCard({
  title,
  category,
  summary,
  index,
  featured = false,
}: ArticleCardProps) {
  return (
    <article className={`article-card ${featured ? "is-featured" : ""}`}>
      <div className="article-meta">
        <span className="display-label">{category}</span>
        <span className="mono-label">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3>{title}</h3>
      <p>{summary}</p>
      <Link className="card-cta" href="/blog">
        Ler em breve
        <ArrowUpRight aria-hidden="true" />
      </Link>
    </article>
  );
}
