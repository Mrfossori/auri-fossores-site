import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, CircleDot } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import {
  automationApplications,
  automationBenefits,
  positioningBenefits,
  positioningGroups,
  serviceFronts,
  systemApplications,
  systemBenefits,
} from "./content";
import { AutomationFlow, DigitalPresenceMap, ErpShowcase } from "./_components/ServiceVisuals";
import styles from "./servicos.module.css";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Automações, sistemas, ERPs e posicionamento digital para organizar operações e fortalecer pequenos negócios.",
};

type BulletListProps = {
  items: string[];
  className?: string;
};

function BulletList({ items, className }: BulletListProps) {
  return (
    <ul className={className ?? styles.bulletList}>
      {items.map((item) => (
        <li key={item}>
          <Check aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
export default function ServicosPage() {
  return (
    <div className={styles.servicesPage}>
      <PageHero
        eyebrow="Serviços"
        title="Menos improviso. Mais controle sobre o negócio."
        copy="A Auri desenvolve automações, sistemas e estruturas digitais para organizar operações, reduzir trabalho manual e fortalecer a presença de pequenos negócios."
        index="02"
        action={{ label: "Falar sobre meu negócio", href: "/contato" }}
        aside={
          <div className={styles.heroPanel} aria-label="Resultados das frentes de serviço">
            <span className="display-label">Trabalho aplicado</span>
            <strong>Organizar. Centralizar. Apresentar.</strong>
            <div>
              <span>Operação</span>
              <span>Controle</span>
              <span>Presença</span>
            </div>
          </div>
        }
      />

      <section className={styles.overviewSection} aria-labelledby="service-overview-title">
        <div className="section-shell">
          <div className={styles.sectionHeading}>
            <span className="display-label">Dentro dos serviços</span>
            <h2 id="service-overview-title">Três frentes para problemas que já custam tempo.</h2>
            <p>
              Tecnologia só importa quando melhora a rotina, amplia o controle ou ajuda o negócio a
              se apresentar com mais clareza.
            </p>
          </div>

          <nav className={styles.serviceIndex} aria-label="Frentes de serviço">
            {serviceFronts.map(({ id, index, label, title, summary, icon: Icon }) => (
              <a href={`#${id}`} key={id} data-service-link>
                <div>
                  <Icon aria-hidden="true" />
                  <span>{index}</span>
                </div>
                <small>{label}</small>
                <h3>{title}</h3>
                <p>{summary}</p>
                <span className={styles.anchorAction}>
                  Ver frente
                  <ArrowDown aria-hidden="true" />
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className={styles.serviceSection} id="automacoes" data-service-section>
        <div className="section-shell">
          <div className={styles.serviceTitleRow}>
            <div>
              <span className="display-label">01 / Automações para Negócios</span>
              <h2>Rotinas conectadas. Menos trabalho repetido.</h2>
            </div>
            <span className={styles.sectionNumber} aria-hidden="true">01</span>
          </div>

          <div className={styles.splitContent}>
            <div className={styles.problemBlock}>
              <span className={styles.copyLabel}>O problema</span>
              <h3>
                Quando a rotina depende de copiar, conferir e avisar manualmente, o erro vira parte
                do processo.
              </h3>
              <p>
                Estoque atualizado à mão, pedidos espalhados e tarefas repetitivas consomem tempo,
                aumentam o retrabalho e deixam a operação vulnerável a falhas.
              </p>
            </div>
            <div className={styles.solutionBlock}>
              <span className={styles.copyLabel}>O que a Auri organiza</span>
              <p>
                A Auri conecta etapas, organiza informações e automatiza rotinas sem adicionar
                complexidade desnecessária.
              </p>
              <BulletList items={automationApplications} />
            </div>
          </div>

          <AutomationFlow />

          <div className={styles.resultRow}>
            <div>
              <span className={styles.copyLabel}>Benefício prático</span>
              <h3>Menos retrabalho e falhas. Mais velocidade e controle.</h3>
            </div>
            <BulletList items={automationBenefits} className={styles.benefitList} />
            <Link className="primary-button" href="/contato">
              Quero organizar uma rotina
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.serviceSection} ${styles.systemsSection}`} id="sistemas" data-service-section>
        <div className="section-shell">
          <div className={styles.serviceTitleRow}>
            <div>
              <span className="display-label">02 / Sistemas e ERPs</span>
              <h2>O que importa, reunido em um único lugar.</h2>
            </div>
            <span className={styles.sectionNumber} aria-hidden="true">02</span>
          </div>

          <div className={styles.splitContent}>
            <div className={styles.problemBlock}>
              <span className={styles.copyLabel}>O problema</span>
              <h3>
                Cadernos, planilhas e mensagens espalhadas escondem o que está acontecendo no
                negócio.
              </h3>
              <p>
                Sem uma visão central, acompanhar vendas, estoque e financeiro exige conferências
                constantes e depende da memória.
              </p>
            </div>
            <div className={styles.solutionBlock}>
              <span className={styles.copyLabel}>O que a Auri desenvolve</span>
              <p>
                A Auri desenvolve sistemas e ERPs adaptados à operação, reunindo informações e
                rotinas em um só lugar.
              </p>
              <div className={styles.applicationTags}>
                {systemApplications.map((application) => (
                  <span key={application}>{application}</span>
                ))}
              </div>
            </div>
          </div>

          <ErpShowcase />

          <div className={styles.resultRow}>
            <div>
              <span className={styles.copyLabel}>Benefício prático</span>
              <h3>Uma visão clara da operação para acompanhar e decidir melhor.</h3>
            </div>
            <BulletList items={systemBenefits} className={styles.benefitList} />
            <Link className="primary-button" href="/contato">
              Quero um sistema para meu negócio
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.serviceSection} id="posicionamento" data-service-section>
        <div className="section-shell">
          <div className={styles.serviceTitleRow}>
            <div>
              <span className="display-label">03 / Posicionamento Digital</span>
              <h2>Ser encontrado é só o começo. O negócio precisa transmitir confiança.</h2>
            </div>
            <span className={styles.sectionNumber} aria-hidden="true">03</span>
          </div>

          <div className={styles.splitContent}>
            <div className={styles.problemBlock}>
              <span className={styles.copyLabel}>O problema</span>
              <h3>
                Quando o site, o perfil no Google, o Instagram e o WhatsApp apresentam informações
                diferentes, a confiança se perde antes mesmo da conversa começar.
              </h3>
              <p>
                Canais incompletos dificultam encontrar o negócio, entender a oferta e saber como
                entrar em contato.
              </p>
            </div>
            <div className={styles.solutionBlock}>
              <span className={styles.copyLabel}>O que a Auri organiza</span>
              <p>
                A Auri organiza uma presença coerente para apresentar produtos e serviços com
                clareza e conduzir o cliente até um canal de contato.
              </p>
            </div>
          </div>

          <DigitalPresenceMap groups={positioningGroups} />

          <div className={styles.resultRow}>
            <div>
              <span className={styles.copyLabel}>Benefício prático</span>
              <h3>Presença profissional, informações consistentes e contato facilitado.</h3>
            </div>
            <BulletList items={positioningBenefits} className={styles.benefitList} />
            <Link className="primary-button" href="/contato">
              Quero fortalecer minha presença digital
              <ArrowRight aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className="section-shell">
          <CircleDot aria-hidden="true" />
          <span className="display-label">Próxima conversa</span>
          <h2>
            Seu negócio não precisa de mais complexidade. Precisa da solução certa para o problema
            real.
          </h2>
          <p>
            Conte como sua operação funciona, onde o trabalho trava e o que precisa ser organizado.
            A primeira conversa começa pelo contexto.
          </p>
          <Link className="dark-button" href="/contato">
            Falar sobre meu negócio
            <ArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
