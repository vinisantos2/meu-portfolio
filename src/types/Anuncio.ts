export type Anuncio = {
  id: string;
  titulo: string;
  descricao: string;
  preco: string;
  itens: string[];
  destaque?: boolean;
  ctaTexto?: string;

  // 👇 novos campos
  observacoes?: string[];
  custosRecorrentes?: {
    hospedagem?: string;
    dominio?: string;
  };
};
