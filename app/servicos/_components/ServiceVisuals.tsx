import Image from "next/image";
import {
  BellRing,
  Check,
  Globe2,
  Instagram,
  Megaphone,
  MessageCircle,
  PackageCheck,
  ReceiptText,
  Search,
} from "lucide-react";
import styles from "../servicos.module.css";

const automationSteps = [
  { label: "Pedido recebido", icon: ReceiptText },
  { label: "Venda registrada", icon: Check },
  { label: "Estoque atualizado", icon: PackageCheck },
  { label: "Equipe avisada", icon: BellRing },
];

const presenceChannels = [
  { label: "Google", icon: Search },
  { label: "Site", icon: Globe2 },
  { label: "Instagram", icon: Instagram },
  { label: "WhatsApp", icon: MessageCircle },
  { label: "Criativos", icon: Megaphone },
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
      <div className={styles.erpHeading}>
        <span className={styles.visualLabel}>AdegaERP</span>
        <p>Dashboard e financeiro conectados à mesma visão da operação.</p>
      </div>

      <div className={styles.erpGallery}>
        <figure className={`${styles.browserFrame} ${styles.dashboardFrame}`}>
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
          <figcaption>Receita, vendas, produtos, pagamentos e estoque em uma única leitura.</figcaption>
        </figure>

        <figure className={`${styles.browserFrame} ${styles.financeFrame}`}>
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
          <figcaption>Receitas, saídas, contas a pagar, fornecedores e atividade recente.</figcaption>
        </figure>
      </div>
    </div>
  );
}

export function DigitalPresenceMap() {
  return (
    <div className={styles.presenceMap} aria-label="Estrutura de presença digital organizada">
      <span className={styles.visualLabel}>Presença conectada</span>
      <div className={styles.channelGrid}>
        {presenceChannels.map(({ label, icon: Icon }) => (
          <div key={label}>
            <Icon aria-hidden="true" />
            <strong>{label}</strong>
          </div>
        ))}
      </div>
      <div className={styles.presenceComparison}>
        <div>
          <span>Antes</span>
          <p>Canais incompletos e informações desencontradas.</p>
        </div>
        <div>
          <span>Depois</span>
          <p>Presença organizada e contato facilitado.</p>
        </div>
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

