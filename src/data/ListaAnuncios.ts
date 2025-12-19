import { Anuncio } from "../types/Anuncio";

export const LISTA_ANUNCIOS: Anuncio[] = [
  {
    id: "site",
    titulo: "Criação de Sites",
    descricao:
      "Sites modernos, rápidos e responsivos, com foco em desempenho, SEO e conversão.",
    preco: "Projeto sob orçamento (a partir de R$ 600)",
    itens: [
      "Site institucional ou landing page",
      "Design responsivo",
      "SEO básico",
      "Contato via WhatsApp",
    ],
    observacoes: [
      "Acompanhe visitas, origem dos acessos e páginas mais visitadas com Google Analytics",
      "Site preparado para aparecer no Google (SEO técnico básico)",
      "Código próprio, sem uso de plataformas prontas como Wix ou WordPress",
      "Alta performance e carregamento rápido",
    ],
    custosRecorrentes: {
      hospedagem:
        "Hospedagem gratuita inclusa (podendo haver custo apenas em casos de alto tráfego)",
      dominio: "Domínio personalizado com custo anual médio de R$ 40 a R$ 60",
    },

    ctaTexto: "Quero um site",
  },

  {
    id: "landing",
    destaque: true,
    titulo: "Landing Pages",
    descricao:
      "Páginas estratégicas focadas em conversão para campanhas e anúncios.",
    preco: "Projeto sob orçamento (a partir de R$ 400)",
    itens: [
      "Layout focado em conversão",
      "Alta performance",
      "Ideal para anúncios",
      "Integração com WhatsApp",
    ],
    observacoes: [
      "Ideal para anúncios pagos e captação de leads",
      "Página otimizada para conversão e carregamento rápido",
    ],
    custosRecorrentes: {
      hospedagem:
        "Hospedagem gratuita inclusa (podendo haver custo apenas em casos de alto tráfego)",
      dominio: "Domínio personalizado com custo anual médio de R$ 40 a R$ 60",
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
      hospedagem:
        "Hospedagem gratuita inclusa (podendo haver custo apenas em casos de alto tráfego)",
      dominio: "Domínio personalizado com custo anual médio de R$ 40 a R$ 60",
    },

    ctaTexto: "Falar sobre sistema",
  },

  {
    id: "app",
    titulo: "Aplicativos Mobile",
    descricao: "Aplicativos Android e iOS desenvolvidos com React Native.",
    preco: "Valor definido após análise do projeto",
    itens: [
      "Android e iOS",
      "Autenticação",
      "Integração com backend",
      "Ideal para startups",
    ],
    observacoes: ["Projetos mobile possuem escopo e valores específicos"],
    custosRecorrentes: {
      hospedagem: "Custos variáveis conforme backend e número de usuários",
      dominio: "Taxas das lojas (Google Play e App Store, quando aplicável)",
    },

    ctaTexto: "Tenho uma ideia",
  },
  {
    id: "manutencao-site",
    titulo: "Manutenção e Ajustes em Sites",
    descricao:
      "Correções, ajustes e pequenas melhorias em sites já existentes.",
    preco: "Serviço pontual (a partir de R$ 150)",
    itens: [
      "Correções de layout",
      "Atualização de textos e imagens",
      "Ajustes de responsividade",
      "Pequenas melhorias técnicas",
    ],
    observacoes: [
      "Ideal para melhorias rápidas",
      "Não inclui criação de novas páginas completas",
    ],
    ctaTexto: "Solicitar ajuste",
  },

  {
    id: "seo-basico",
    titulo: "Otimização SEO Básica",
    descricao: "Ajustes técnicos para melhorar a indexação do site no Google.",
    preco: "Serviço pontual (a partir de R$ 300)",
    itens: [
      "Títulos e descrições otimizados",
      "SEO técnico básico",
      "Estrutura correta de headings",
      "Indexação no Google",
    ],
    observacoes: [
      "Ideal para sites que já estão no ar",
      "Resultados dependem da concorrência e do conteúdo",
    ],
    ctaTexto: "Otimizar meu site",
  },

  {
    id: "whatsapp-form",
    titulo: "Integração de WhatsApp e Formulários",
    descricao:
      "Facilite o contato dos clientes com botões e formulários funcionais.",
    preco: "Serviço pontual (a partir de R$ 150)",
    itens: [
      "Botão WhatsApp flutuante",
      "Formulário funcional",
      "Envio para e-mail ou WhatsApp",
    ],
    observacoes: ["Pode ser integrado em sites existentes"],
    ctaTexto: "Adicionar contato",
  },

  {
    id: "analytics",
    titulo: "Google Analytics",
    descricao:
      "Configuração do Google Analytics para acompanhar visitas e acessos.",
    preco: "Serviço pontual (a partir de R$ 200)",
    itens: [
      "Configuração do GA4",
      "Integração com o site",
      "Relatório inicial simplificado",
      "Orientação de leitura dos dados",
    ],
    observacoes: ["Ajuda a entender o comportamento dos visitantes"],
    ctaTexto: "Ativar Analytics",
  },

  {
    id: "deploy-dominio",
    titulo: "Deploy e Configuração de Domínio",
    descricao: "Publicação do site com domínio próprio e HTTPS ativo.",
    preco: "Serviço pontual (a partir de R$ 150)",
    itens: ["Deploy na Vercel", "Configuração de domínio", "HTTPS ativo"],
    observacoes: ["Não inclui desenvolvimento do site"],
    ctaTexto: "Publicar meu site",
  },
];
