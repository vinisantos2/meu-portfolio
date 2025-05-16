import { Projeto } from "../types/Projeto";


export const projetos: Projeto[] = [
  {
    title: "Pongada",
    description: "Jogo de tabuleiro 3x3 feito com React Native e TypeScript. Possui animações e modo multijogador.",
    imagesUrl:[ "/images/pongada/tela-home.png", "/images/pongada/tela-jogo-2-pessoas.png", "/images/pongada/tela-jogo-ia.png"],
    projectUrl: "https://github.com/vinisantos2/pongada"
  },
  
  {
    title: "Loteria resultados",
    description: "Aplicativo para consultar resultados de loterias e para comparar um jogo com os ja sorteados",
    imagesUrl: ["/images/loteria-resultados/resultados.png","/images/loteria-resultados/comparar.png", "/images/loteria-resultados/estatisticas.png"],
    projectUrl: "https://github.com/vinisantos2/loteria-react-native"
  },
  
  {
    title: "Magalu clone",
    description: "Aplicativo de vitrine de produtos inspirado no Magazine Luiza. Desenvolvido com React Native e Expo, exibe imagem, nome, preço e botão de compra com layout limpo e responsivo.",
    imagesUrl: ["/images/magalu-clone/home.png","/images/magalu-clone/produto.png"],
    projectUrl: "https://github.com/vinisantos2/magaluClone"
  },
  {
    title: "Calculador IOS clone",
    description: "App de calculadora inspirado no visual do iOS. Desenvolvido com React Native e Expo, possui interface limpa e funcional para realizar operações básicas com uma experiência fluida.",
    imagesUrl: ["/images/calculadora/calculadora.png"],
    projectUrl: "https://github.com/vinisantos2/calculadoraIOS"
  },
  
];