import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type CardProps = {
  title: string;
  description: string;
  eyebrow?: string;
  icon: LucideIcon;
  cta?: string;
  href?: string;
  variant?: "standard" | "accent" | "quiet";
};

export function Card({
  title,
  description,
  eyebrow,
  icon: Icon,
  cta = "Explorar",
  href = "/contato",
  variant = "standard",
}: CardProps) {
  return (
    <article className={`brand-card is-${variant}`}>
      <div className="card-head">
        <div className="icon-box">
          <Icon aria-hidden="true" />
        </div>
        {eyebrow && <span className="mono-label">{eyebrow}</span>}
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link className="card-cta" href={href}>
        {cta}
        <ArrowUpRight aria-hidden="true" />
      </Link>
    </article>
  );
}
