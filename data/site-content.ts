import {
  Bot,
  BookOpen,
  Boxes,
  Dumbbell,
  Gem,
  Goal,
  Landmark,
  Layers3,
  NotebookTabs,
  ScrollText,
  ShieldCheck,
  Workflow,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Produtos", href: "/produtos" },
  { label: "Blog", href: "/blog" },
  { label: "Contato", href: "/contato" },
];

export const pillars = [
  {
    title: "Tecnologia",
    copy: "Ferramenta para construir processo, não distração para fingir movimento.",
    icon: Bot,
  },
  {
    title: "Disciplina",
    copy: "Método antes de motivação. Rotina antes de discurso.",
    icon: Goal,
  },
  {
    title: "Fé",
    copy: "Deus na frente. Propósito no meio. Resultado no fim.",
    icon: ShieldCheck,
  },
  {
    title: "Dinheiro",
    copy: "Riqueza como consequência de construção, prova e responsabilidade.",
    icon: Landmark,
  },
  {
    title: "Performance",
    copy: "Mentalidade atlética aplicada ao trabalho, ao corpo e ao negócio.",
    icon: Dumbbell,
  },
  {
    title: "Autenticidade",
    copy: "O que é dito é o que é vivido. Sem máscara. Sem promessa vazia.",
    icon: Gem,
  },
];

export const products = [
  {
    title: "PDF Guides",
    type: "Futuro drop",
    description: "Guias diretos sobre tecnologia, produtividade, negócios e método.",
    icon: ScrollText,
  },
  {
    title: "Notion Templates",
    type: "Em construção",
    description: "Sistemas pessoais e empresariais para trocar bagunça por operação.",
    icon: NotebookTabs,
  },
  {
    title: "Planilhas",
    type: "Primeira edição",
    description: "Controle financeiro, rotina, vendas e gestão para quem precisa começar limpo.",
    icon: Layers3,
  },
  {
    title: "Automações",
    type: "Próximo ativo",
    description: "Fluxos prontos e adaptáveis para pequenos negócios com rotina repetitiva.",
    icon: Workflow,
  },
  {
    title: "E-books",
    type: "Biblioteca futura",
    description: "Conteúdo longo, sem pressa, para construir repertório de verdade.",
    icon: BookOpen,
  },
  {
    title: "Planos de treino",
    type: "Linha performance",
    description: "Produto que conecta corpo, disciplina e construção pessoal.",
    icon: Dumbbell,
  },
  {
    title: "Sistemas simples",
    type: "Linha futura",
    description: "Ferramentas acessíveis para negócios que precisam sair do improviso.",
    icon: Boxes,
  },
  {
    title: "Livros recomendados",
    type: "Curadoria futura",
    description: "Leituras alinhadas à construção, fé, tecnologia, dinheiro e performance.",
    icon: BookOpen,
  },
];

export const articles = [
  {
    title: "Tecnologia que constrói, não que distrai.",
    category: "Tecnologia",
    summary: "Ferramenta boa diminui ruído e aumenta capacidade de execução.",
  },
  {
    title: "Disciplina sem sistema vira força de vontade desperdiçada.",
    category: "Método",
    summary: "Rotina precisa de estrutura para sobreviver ao dia difícil.",
  },
  {
    title: "IA não substitui quem trabalha. Substitui quem vive no automático.",
    category: "IA prática",
    summary: "O jogo não é pedir prompts. É redesenhar o modo como você opera.",
  },
  {
    title: "O futuro pertence a quem constrói com método.",
    category: "Construção",
    summary: "Menos pressa por palco. Mais prova, processo e fundamento.",
  },
  {
    title: "Sistema que substitui improviso por processo.",
    category: "Operação",
    summary: "Negócio pequeno também precisa de processo claro.",
  },
];

export const values = [
  "Fé",
  "Propósito",
  "Garimpo",
  "Autenticidade",
  "Resultado real",
  "Tecnologia como ferramenta",
];

export const stats = [
  { value: "V0", label: "Protótipo visual navegável" },
  { value: "6", label: "Pilares aplicados na marca" },
  { value: "0", label: "Integrações reais nesta fase" },
  { value: "100%", label: "Foco em layout e sensação" },
];
