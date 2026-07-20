import Image from "next/image";
import {
  BellRing,
  Check,
  PackageCheck,
  ReceiptText,
} from "lucide-react";
import type { PositioningGroup } from "../content";
import styles from "../servicos.module.css";

const automationSteps = [
  { label: "Pedido recebido", icon: ReceiptText },
  { label: "Venda registrada", icon: Check },
  { label: "Estoque atualizado", icon: PackageCheck },
  { label: "Equipe avisada", icon: BellRing },
];

export function AutomationFlow() {
  return (
    <div className={styles.automationFlow} aria-label="Exemplo de fluxo automatizado">
      <span className={styles.visualLabel}>Fluxo conectado</span>
      <ol>
        {automationSteps.map(({ label, icon: Icon }, index) => (
          <li key={label}>
            <span className={styles.flowIndex}>{String(index + 1).padStart(2, "0")}</span>
            <Icon aria-hidden="true" />
            <strong>{label}</strong>
          </li>
        ))}
      </ol>
    </div>
  );
}

export function ErpShowcase() {
  return (
    <div className={styles.erpShowcase} aria-label="Telas funcionais do AdegaERP">
      <div className={styles.erpIntro}>
        <div className={styles.erpHeading}>
          <span className={styles.visualLabel}>Solução funcional desenvolvida pela Auri</span>
          <h3>AdegaERP</h3>
          <p>
            Vendas, produtos, estoque, pagamentos, relatórios e financeiro reunidos em uma única
            operação.
          </p>
        </div>
        <aside className={styles.secondaryProof}>
          <span>Outro sistema desenvolvido</span>
          <strong>Sistema de agendamento</strong>
          <p>Organiza horários, serviços e a rotina de atendimento.</p>
        </aside>
      </div>

      <div className={styles.erpGallery}>
        <figure
          className={`${styles.browserFrame} ${styles.dashboardFrame}`}
          data-erp-screen="primary"
        >
          <div className={styles.browserBar} aria-hidden="true">
            <span />
            <span />
            <span />
            <small>Visão geral</small>
          </div>
          <div className={`${styles.screenshotViewport} ${styles.dashboardViewport}`}>
            <Image
              src="/images/services/adega-erp-dashboard.png"
              alt="Dashboard do AdegaERP com receita, vendas, produtos mais vendidos, pagamentos e estoque."
              width={1920}
              height={1155}
              sizes="(min-width: 1280px) 52rem, (min-width: 768px) 70vw, 42rem"
            />
          </div>
          <figcaption>Visão geral de vendas, produtos, pagamentos e estoque.</figcaption>
        </figure>

        <figure
          className={`${styles.browserFrame} ${styles.financeFrame}`}
          data-erp-screen="support"
        >
          <div className={styles.browserBar} aria-hidden="true">
            <span />
            <span />
            <span />
            <small>Financeiro</small>
          </div>
          <div className={`${styles.screenshotViewport} ${styles.financeViewport}`}>
            <Image
              src="/images/services/adega-erp-financeiro.png"
              alt="Painel financeiro do AdegaERP com receitas, saídas, despesas, contas a pagar e atividade recente."
              width={1920}
              height={1831}
              sizes="(min-width: 1280px) 34rem, (min-width: 768px) 58vw, 42rem"
            />
          </div>
          <figcaption>Financeiro, despesas, contas a pagar e atividade recente.</figcaption>
        </figure>
      </div>
    </div>
  );
}

export function DigitalPresenceMap({ groups }: { groups: PositioningGroup[] }) {
  return (
    <div className={styles.presenceMap} aria-label="Estrutura de presença digital organizada">
      <span className={styles.visualLabel}>Entregas organizadas</span>
      <div className={styles.positioningGroupGrid}>
        {groups.map(({ title, description, icon: Icon }) => (
          <article key={title}>
            <Icon aria-hidden="true" />
            <strong>{title}</strong>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <ol className={styles.presenceJourney} aria-label="Caminho até uma oportunidade">
        {[
          "Encontrado",
          "Confiança",
          "Contato",
          "Oportunidade",
        ].map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </div>
  );
}
