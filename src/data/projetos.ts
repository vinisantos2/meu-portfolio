import { Projeto } from "../types/Projeto";


export const projetos: Projeto[] = [

  {
    title: "Site Institucional para Construtora de Engenharia Civil",
    description: "Website moderno e responsivo desenvolvido com Next.js para apresentar os serviços, projetos realizados e informações de contato de uma construtora de engenharia civil. Inclui seções como sobre a empresa, serviços, portfólio de obras, formulário de contato e rodapé com redes sociais. Projeto criado com foco em performance, SEO e boa experiência do usuário.",
    imagesUrl: [
      "/images/web-site-engenharia/home.png",
      "/images/web-site-engenharia/projetos.png",
    ],
    projectUrl: "https://github.com/vinisantos2/web-site-engenharia"
  },
  {

    title: "Pongada",
    description: "Jogo de tabuleiro 3x3 feito com React Native e TypeScript. Possui animações e modo multijogador.",
    imagesUrl: ["/images/pongada/tela-home.png", "/images/pongada/tela-jogo-2-pessoas.png", "/images/pongada/tela-jogo-ia.png"],
    projectUrl: "https://github.com/vinisantos2/pongada"
  },

  {
    title: "Loteria resultados",
    description: "Aplicativo para consultar resultados de loterias e para comparar um jogo com os ja sorteados",
    imagesUrl: ["/images/loteria-resultados/resultados.png", "/images/loteria-resultados/comparar.png", "/images/loteria-resultados/estatisticas.png"],
    projectUrl: "https://github.com/vinisantos2/loteria-react-native"
  },


  {
    title: "Calculador IOS clone",
    description: "App de calculadora inspirado no visual do iOS. Desenvolvido com React Native e Expo, possui interface limpa e funcional para realizar operações básicas com uma experiência fluida.",
    imagesUrl: ["/images/calculadora/calculadora.png"],
    projectUrl: "https://github.com/vinisantos2/calculadoraIOS"
  },
  {
    title: "Loja Virtual com Next.js e Firebase",
    description: "Projeto de e-commerce com autenticação, listagem de produtos em tempo real via Firebase, carrinho de compras com Context API e checkout. Desenvolvido com Next.js (App Router), Firestore e Tailwind CSS, utilizando TypeScript e estrutura modular.",
    imagesUrl: [
      "/images/loja-virtual/home.png",
      "/images/loja-virtual/produtos.png",
      "/images/loja-virtual/detalhes.png",
      "/images/loja-virtual/admin.png"
    ],
    projectUrl: "https://github.com/vinisantos2/loja-virtual"
  },

  {
    title: "Serviço-On com React Native e Firebase",
    description: "Aplicativo mobile para conexão entre prestadores de serviço e clientes. Possui autenticação com Firebase, cadastro e listagem de parceiros, avaliações com estrelas, e armazenamento de dados no Firestore. Desenvolvido com React Native (Expo), Firebase Authentication e Firestore, utilizando TypeScript e uma estrutura modular.",
    imagesUrl: [
      "/images/servico-on/login.png",
      "/images/servico-on/lista-servicos.png",
      "/images/servico-on/perfil-parceiro.png",
      "/images/servico-on/servico-parceiro.png"
    ],
    projectUrl: "https://github.com/vinisantos2/servico-on"
  },


  {
    title: "Magalu clone",
    description: "Aplicativo de vitrine de produtos inspirado no Magazine Luiza. Desenvolvido com React Native e Expo, exibe imagem, nome, preço e botão de compra com layout limpo e responsivo.",
    imagesUrl: [
      "/images/magalu-clone/home.png",
      "/images/magalu-clone/produto.png"
    ],
    projectUrl: "https://github.com/vinisantos2/magaluClone"
  },


];