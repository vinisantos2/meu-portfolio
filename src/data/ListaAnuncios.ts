// data/listaAnuncios.ts

export const LISTA_ANUNCIOS: Anuncio[] = [
  {
    id: "site",
    titulo: "Criação de Sites",
    descricao:
      "Sites modernos, rápidos e responsivos, com foco em desempenho e SEO.",
    preco: "A partir de R$ 800",
    itens: [
      "Site institucional ou landing page",
      "Design responsivo",
      "SEO básico",
      "Contato via WhatsApp",
    ],
    ctaTexto: "Quero um site",
  },
  {
    id: "landing",
    titulo: "Landing Pages",
    descricao:
      "Páginas estratégicas focadas em conversão para campanhas e anúncios.",
    preco: "A partir de R$ 600",
    itens: [
      "Layout focado em conversão",
      "Alta performance",
      "Ideal para anúncios",
      "Integração com WhatsApp",
    ],
    ctaTexto: "Criar landing page",
  },
  {
    id: "sistema",
    titulo: "Sistema Web Sob Medida",
    descricao:
      "Sistemas personalizados com painel administrativo e autenticação.",
    preco: "A partir de R$ 3.500",
    itens: [
      "Login e painel admin",
      "Next.js + TypeScript",
      "Firebase",
      "Escalável e seguro",
    ],
    destaque: true,
    ctaTexto: "Falar sobre sistema",
  },
  {
    id: "app",
    titulo: "Aplicativos Mobile",
    descricao:
      "Aplicativos Android e iOS desenvolvidos com React Native.",
    preco: "Sob orçamento",
    itens: [
      "Android e iOS",
      "Autenticação",
      "Integração com backend",
      "Ideal para startups",
    ],
    ctaTexto: "Tenho uma ideia",
  },
];
