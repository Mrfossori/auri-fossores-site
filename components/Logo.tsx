import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link className="brand-link" href="/" aria-label="Auri Fossores, página inicial">
      <span className="af-mark" aria-hidden="true">
        <span>AF</span>
      </span>
      {!compact && (
        <span className="brand-wordmark">
          <strong>Auri</strong>
          <strong>Fossores</strong>
          <small>Work. Build. Own.</small>
        </span>
      )}
    </Link>
  );
}
