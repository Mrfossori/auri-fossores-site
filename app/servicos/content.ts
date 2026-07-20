import {
  Boxes,
  Globe2,
  Megaphone,
  Palette,
  PanelsTopLeft,
  Search,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type ServiceFront = {
  id: "automacoes" | "sistemas" | "posicionamento";
  index: string;
  label: string;
  title: string;
  summary: string;
  icon: LucideIcon;
};

export type PositioningGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const serviceFronts: ServiceFront[] = [
  {
    id: "automacoes",
    index: "01",
    label: "Automações",
    title: "Automações para Negócios",
    summary: "Conecte etapas repetitivas, organize informações e reduza falhas na rotina.",
    icon: Workflow,
  },
  {
    id: "sistemas",
    index: "02",
    label: "Gestão",
    title: "Sistemas e ERPs",
    summary: "Centralize dados e acompanhe o que realmente está acontecendo na operação.",
    icon: Boxes,
  },
  {
    id: "posicionamento",
    index: "03",
    label: "Presença",
    title: "Posicionamento Digital",
    summary: "Organize seus canais, transmita confiança e facilite o contato com clientes.",
    icon: PanelsTopLeft,
  },
];

export const automationApplications = [
  "Estoque, pedidos e vendas atualizados no mesmo fluxo",
  "Alertas operacionais e comunicação entre etapas",
  "Conexão entre formulários, planilhas, sistemas e canais",
  "Informações logísticas organizadas com menos retrabalho",
];

export const automationBenefits = [
  "Menos tarefas repetidas e falhas",
  "Mais velocidade e informações organizadas",
  "Maior controle da operação",
];

export const systemApplications = [
  "Estoque e produtos",
  "Vendas e pedidos",
  "Financeiro",
  "Relatórios",
  "Clientes e agenda",
  "Acompanhamento operacional",
];

export const systemBenefits = [
  "Informações centralizadas",
  "Visão de vendas, estoque e financeiro",
  "Menos dependência de controles espalhados",
];

export const positioningGroups: PositioningGroup[] = [
  {
    title: "Presença e identidade",
    description: "Organização visual e coerência entre os canais do negócio.",
    icon: Palette,
  },
  {
    title: "Sites e páginas",
    description: "Sites institucionais, landing pages e páginas de produtos ou serviços.",
    icon: Globe2,
  },
  {
    title: "Google e canais de contato",
    description: "Perfil no Google, WhatsApp Business e caminhos claros para contato.",
    icon: Search,
  },
  {
    title: "Criativos e comunicação",
    description: "Peças visuais e materiais para apresentar ofertas e campanhas.",
    icon: Megaphone,
  },
];

export const positioningBenefits = [
  "Presença mais profissional",
  "Informações consistentes entre canais",
  "Caminhos claros para apresentar e receber contatos",
];
