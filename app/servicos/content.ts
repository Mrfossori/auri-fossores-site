import { Boxes, PanelsTopLeft, Workflow, type LucideIcon } from "lucide-react";

export type ServiceFront = {
  id: "automacoes" | "sistemas" | "posicionamento";
  index: string;
  label: string;
  title: string;
  summary: string;
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
  "Atualização automática ou assistida de estoque",
  "Organização de pedidos e registro de vendas",
  "Alertas operacionais e comunicação entre etapas",
  "Organização de informações logísticas",
  "Conexão entre formulários, planilhas, sistemas e canais",
  "Redução de tarefas manuais e retrabalho",
];

export const automationBenefits = [
  "Menos retrabalho",
  "Menos erros",
  "Mais velocidade",
  "Informações organizadas",
  "Maior controle operacional",
];

export const systemApplications = [
  "Estoque",
  "Produtos",
  "Vendas",
  "Financeiro",
  "Relatórios",
  "Clientes",
  "Agenda",
  "Serviços",
  "Pedidos",
  "Acompanhamento operacional",
];

export const systemBenefits = [
  "Visão mais clara do negócio",
  "Informações centralizadas",
  "Controle operacional",
  "Acompanhamento de vendas, estoque e financeiro",
  "Menos dependência de cadernos e planilhas espalhadas",
];

export const positioningDeliverables = [
  "Criação de sites e páginas institucionais",
  "Landing pages para produtos, serviços ou captação",
  "Organização do perfil no Google",
  "Configuração e melhoria do WhatsApp Business",
  "Organização do Instagram",
  "Identidade e coerência entre canais",
  "Criativos para comunicação e campanhas",
  "Revisão dos pontos de contato digitais",
];

export const positioningBenefits = [
  "Presença digital mais profissional",
  "Maior percepção de confiança",
  "Informações consistentes",
  "Caminhos de contato claros",
  "Mais capacidade de apresentar e vender o negócio",
];

