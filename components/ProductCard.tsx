import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type ProductCardProps = {
  title: string;
  type: string;
  description: string;
  icon: LucideIcon;
};

export function ProductCard({ title, type, description, icon: Icon }: ProductCardProps) {
  return (
    <article className="product-card">
      <div className="card-head">
        <div className="icon-box">
          <Icon aria-hidden="true" />
        </div>
        <span className="product-badge">{type}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className="card-cta" href="/contato">
        Acompanhar lançamento
        <ArrowUpRight aria-hidden="true" />
      </Link>
    </article>
  );
}
