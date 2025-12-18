import { Anuncio } from "../types/Anuncio";

export const LISTA_ANUNCIOS: Anuncio[] = [
  {
    id: "site",
    titulo: "Criação de Sites",
    descricao:
      "Sites modernos, rápidos e responsivos, com foco em desempenho, SEO e conversão.",
    preco: "Projeto sob orçamento (a partir de R$ 800)",
    itens: [
      "Site institucional ou landing page",
      "Design responsivo",
      "SEO básico",
      "Contato via WhatsApp",
    ],
    observacoes: [
      "O valor do site varia conforme o tamanho e complexidade do projeto",
      "Todo projeto é desenvolvido sob medida",
    ],
    custosRecorrentes: {
      hospedagem: "Hospedagem na Vercel: R$ 50/mês",
      dominio: "Domínio personalizado: ~R$ 50/ano",
    },
    ctaTexto: "Quero um site",
  },

  {
    id: "landing",
    titulo: "Landing Pages",
    descricao:
      "Páginas estratégicas focadas em conversão para campanhas e anúncios.",
    preco: "Projeto sob orçamento (a partir de R$ 600)",
    itens: [
      "Layout focado em conversão",
      "Alta performance",
      "Ideal para anúncios",
      "Integração com WhatsApp",
    ],
    observacoes: [
      "Ideal para anúncios pagos e captação de leads",
    ],
    custosRecorrentes: {
      hospedagem: "Hospedagem na Vercel: R$ 50/mês",
      dominio: "Domínio personalizado: ~R$ 50/ano",
    },
    ctaTexto: "Criar landing page",
  },

  {
    id: "sistema",
    titulo: "Sistema Web Sob Medida",
    descricao:
      "Sistemas personalizados com painel administrativo e autenticação.",
    preco: "Projeto sob orçamento (a partir de R$ 3.500)",
    itens: [
      "Login e painel admin",
      "Next.js + TypeScript",
      "Firebase",
      "Escalável e seguro",
    ],
    observacoes: [
      "Projetos maiores podem envolver custos adicionais conforme funcionalidades",
    ],
    custosRecorrentes: {
      hospedagem: "Hospedagem na Vercel: R$ 50/mês",
      dominio: "Domínio personalizado: ~R$ 50/ano",
    },
    destaque: true,
    ctaTexto: "Falar sobre sistema",
  },

  {
    id: "app",
    titulo: "Aplicativos Mobile",
    descricao:
      "Aplicativos Android e iOS desenvolvidos com React Native.",
    preco: "Valor definido após análise do projeto",
    itens: [
      "Android e iOS",
      "Autenticação",
      "Integração com backend",
      "Ideal para startups",
    ],
    observacoes: [
      "Projetos mobile possuem escopo e valores específicos",
    ],
    ctaTexto: "Tenho uma ideia",
  },
];
