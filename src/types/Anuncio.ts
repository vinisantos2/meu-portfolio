type Anuncio = {
  id: string;
  titulo: string;
  descricao: string;
  preco: string;
  itens: string[];
  destaque?: boolean;
  ctaTexto?: string;
  onClick?: () => void;
};
