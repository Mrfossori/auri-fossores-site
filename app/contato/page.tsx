import type { Metadata } from "next";
import { ArrowRight, Handshake, Instagram, Mail, MessageCircle, PenLine, Workflow } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contato",
  description: "Canais para acompanhar e conversar com a Auri Fossores.",
};

export default function ContatoPage() {
  const conversationTypes = [
    {
      title: "Projetos e sistemas",
      copy: "Automações, sites, ERPs simples e tecnologia aplicada ao negócio.",
      icon: Workflow,
    },
    {
      title: "Produtos e parcerias",
      copy: "Ideias, colaborações, afiliados e oportunidades de construção.",
      icon: Handshake,
    },
    {
      title: "Comunidade e conteúdo",
      copy: "Sugestões, conversas editoriais e conexões com a Auri.",
      icon: PenLine,
    },
  ];

  const nextSteps = [
    "Você envia sua mensagem.",
    "A Auri entende o contexto.",
    "Entramos em contato para uma primeira conversa.",
  ];

  return (
    <div className="contact-page">
      <PageHero
        eyebrow="Contato"
        title="Toda construção começa com uma conversa clara."
        copy="Acompanhe a marca, apresente seu contexto ou entre em contato sobre uma das frentes da Auri."
        index="05"
        aside={
          <div className="contact-hero-panel" aria-label="Frentes abertas para conversa">
            <span className="display-label">Canal aberto</span>
            <strong>Projetos, parcerias e conteúdo.</strong>
            <div>
              <span>Projetos</span>
              <span>Parcerias</span>
              <span>Conteúdo</span>
            </div>
          </div>
        }
      />

      <section className="content-section contact-intent-section">
        <div className="section-shell">
          <div className="contact-section-head">
            <span className="display-label">Contato</span>
            <h2>Para que tipo de conversa?</h2>
            <p>
              A Auri conversa com quem quer transformar ideia, operação e posicionamento em algo
              mais claro, útil e bem construído.
            </p>
          </div>

          <div className="contact-topic-grid">
            {conversationTypes.map(({ title, copy, icon: Icon }, index) => (
              <article className="contact-topic-card" key={title}>
                <div>
                  <Icon aria-hidden="true" />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section contact-form-section section-contrast">
        <div className="section-shell contact-layout">
          <div className="contact-contact-panel">
            <div className="contact-section-head">
              <span className="display-label">Canais</span>
              <h2>Escolha o caminho mais direto.</h2>
              <p>
                Fale sobre uma demanda, acompanhe a marca ou envie uma ideia para a próxima frente
                de construção.
              </p>
            </div>

            <div className="contact-channels">
              <a href="https://instagram.com/aurifossores">
                <Instagram aria-hidden="true" />
                <span>
                  <small>Instagram</small>
                  <strong>@aurifossores</strong>
                </span>
              </a>
              <a href="#">
                <MessageCircle aria-hidden="true" />
                <span>
                  <small>WhatsApp</small>
                  <strong>Canal em definição</strong>
                </span>
              </a>
              <a href="mailto:contato@aurifossores.com">
                <Mail aria-hidden="true" />
                <span>
                  <small>E-mail</small>
                  <strong>contato@aurifossores.com</strong>
                </span>
              </a>
            </div>
          </div>

          <form className="visual-form" aria-label="Formulário visual sem envio">
            <div className="visual-form-head">
              <div>
                <span className="display-label">Começar conversa</span>
                <h2>Conte rapidamente o que você está construindo.</h2>
              </div>
              <span className="mono-label">Canal em preparação</span>
            </div>
            <p className="visual-form-copy">
              A Auri vai analisar sua mensagem e entrar em contato para uma primeira conversa.
            </p>
            <div className="visual-form-fields">
              <label>
                Nome
                <input name="name" autoComplete="name" />
              </label>
              <label>
                E-mail
                <input name="email" type="email" autoComplete="email" />
              </label>
              <label>
                WhatsApp / telefone
                <input name="phone" type="tel" autoComplete="tel" />
              </label>
              <label>
                Assunto
                <input name="subject" />
              </label>
              <label className="is-full">
                Mensagem
                <textarea name="message" />
              </label>
              <button className="primary-button" type="button">
                Enviar mensagem
                <ArrowRight aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="content-section contact-next-section">
        <div className="section-shell contact-next-card">
          <div className="contact-section-head">
            <span className="display-label">Processo</span>
            <h2>O que acontece depois?</h2>
          </div>

          <div className="contact-step-grid">
            {nextSteps.map((step, index) => (
              <div key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{step}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
