import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check, CircleDot } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import {
  automationApplications,
  automationBenefits,
  positioningBenefits,
  positioningDeliverables,
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
                Estoque atualizado à mão, pedidos espalhados e tarefas repetitivas consomem tempo e
                deixam a operação vulnerável a falhas de comunicação e retrabalho.
              </p>
            </div>
            <div className={styles.solutionBlock}>
              <span className={styles.copyLabel}>O que a Auri organiza</span>
              <p>
                A Auri conecta etapas, organiza informações e cria fluxos que tiram tarefas
                repetitivas do caminho sem adicionar complexidade desnecessária.
              </p>
              <BulletList items={automationApplications} />
            </div>
          </div>

          <AutomationFlow />

          <div className={styles.resultRow}>
            <div>
              <span className={styles.copyLabel}>Benefício prático</span>
              <h3>Menos retrabalho e erro. Mais velocidade, organização e controle.</h3>
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
                Sem uma visão central, acompanhar vendas, estoque, financeiro e tarefas depende de
                conferências constantes e memória.
              </p>
            </div>
            <div className={styles.solutionBlock}>
              <span className={styles.copyLabel}>O que a Auri desenvolve</span>
              <p>
                Sistemas e ERPs adaptados à operação para centralizar informações, organizar
                rotinas e dar visibilidade ao que precisa de decisão.
              </p>
              <div className={styles.applicationTags}>
                {systemApplications.map((application) => (
                  <span key={application}>{application}</span>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.proofSection}>
            <div className={styles.proofHeading}>
              <span className="display-label">Soluções desenvolvidas pela Auri</span>
              <h3>Software funcional para rotinas reais.</h3>
            </div>
            <div className={styles.proofList}>
              <article>
                <span>01</span>
                <div>
                  <h4>AdegaERP</h4>
                  <p>Gestão de vendas, produtos, estoque, pagamentos, relatórios e financeiro.</p>
                </div>
              </article>
              <article>
                <span>02</span>
                <div>
                  <h4>Sistema de agendamento</h4>
                  <p>Organização de horários, serviços e acompanhamento da rotina de atendimento.</p>
                </div>
              </article>
            </div>
          </div>

          <ErpShowcase />

          <div className={styles.resultRow}>
            <div>
              <span className={styles.copyLabel}>Benefício prático</span>
              <h3>Visão clara da operação para acompanhar, organizar e decidir melhor.</h3>
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
                Quando site, Google, Instagram e WhatsApp apresentam informações diferentes, a
                confiança se perde antes da conversa começar.
              </h3>
              <p>
                Canais incompletos dificultam encontrar o negócio, entender a oferta e saber qual é
                o próximo passo para entrar em contato.
              </p>
            </div>
            <div className={styles.solutionBlock}>
              <span className={styles.copyLabel}>O que a Auri organiza</span>
              <p>
                Uma presença digital coerente, capaz de apresentar produtos e serviços com clareza
                e conduzir o cliente até um ponto de contato real.
              </p>
              <BulletList items={positioningDeliverables} />
            </div>
          </div>

          <DigitalPresenceMap />

          <div className={styles.resultRow}>
            <div>
              <span className={styles.copyLabel}>Benefício prático</span>
              <h3>Presença profissional, informação consistente e caminhos de contato claros.</h3>
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
            Conte como sua operação funciona hoje, onde o trabalho trava e o que você precisa
            organizar. A primeira conversa começa pelo contexto.
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
