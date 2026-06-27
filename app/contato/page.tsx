import type { Metadata } from "next";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contato",
  description: "Canais para acompanhar e conversar com a Auri Fossores.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Toda construção começa com uma conversa clara."
        copy="Acompanhe a marca, apresente seu contexto ou entre em contato sobre uma das frentes da Auri."
        index="05"
      />

      <section className="content-section">
        <div className="section-shell contact-layout">
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

          <form className="visual-form" aria-label="Formulário visual sem envio">
            <div className="visual-form-head">
              <span className="display-label">Começar conversa</span>
              <span className="mono-label">Canal em preparação</span>
            </div>
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
                O que você quer construir?
                <textarea name="message" />
              </label>
              <button className="primary-button" type="button">
                Acompanhar a marca
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
