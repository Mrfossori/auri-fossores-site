import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  copy: string;
  index: string;
  action?: {
    label: string;
    href: string;
  };
};

export function PageHero({ eyebrow, title, copy, index, action }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="section-shell page-hero-grid">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p>{copy}</p>
          {action && (
            <Link className="primary-button" href={action.href}>
              {action.label}
              <ArrowRight aria-hidden="true" />
            </Link>
          )}
        </div>
        <div className="page-hero-mark" aria-hidden="true">
          <span>{index}</span>
          <strong>AF</strong>
        </div>
      </div>
    </section>
  );
}
