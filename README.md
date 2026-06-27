# Auri Fossores Site V0

Protótipo visual navegável do site oficial da Auri Fossores.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.

Também é possível escolher porta e host:

```bash
npm run dev -- -H 127.0.0.1 -p 8080
```

## Scripts

```bash
npm run build
npm run lint
```

## O que esta V0 contém

- Header com símbolo AF, navegação entre páginas e CTA.
- Home resumida com hero, manifesto, pilares e previews das áreas principais.
- Páginas separadas para Sobre, Serviços, Produtos, Blog e Contato.
- Componentes reutilizáveis para logo, header, cards, headings, produtos, artigos e footer.
- Conteúdo editável em `data/site-content.ts`.
- Asset visual próprio em `public/auri-hero.png`.
- CSS mobile-first com breakpoints em 375px, 768px e 1280px.

## Placeholders intencionais

- Formulário de contato é apenas visual.
- WhatsApp, e-mail e domínio ainda precisam de definição final.
- Cards de blog são fictícios.
- Produtos aparecem como futuros drops, sem checkout.
- Não há banco, CMS, analytics, login, pagamento ou integrações externas.

## Próximos passos para V1

- Definir domínio, e-mail e CTA principal.
- Trocar placeholders por copy final.
- Criar primeiras páginas reais de artigo ou blog estático.
- Definir primeiro produto pago e fluxo externo de checkout.
- Refinar tipografia com fontes reais da marca.
- Testar visual com screenshots desktop/mobile e ajustar microinterações.
