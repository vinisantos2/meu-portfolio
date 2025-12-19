import { Anuncio } from "../types/Anuncio";

type CardAnuncioProps = {
  anuncio: Anuncio;
};

export default function CardAnuncio({ anuncio }: CardAnuncioProps) {
  const {
    titulo,
    descricao,
    preco,
    itens,
    destaque = false,
    ctaTexto = "Entrar em contato",
    observacoes,
    custosRecorrentes,
  } = anuncio;

  return (
    <article
      itemScope
      itemType="https://schema.org/Service"
      className={`
        relative flex flex-col justify-between
        rounded-2xl p-6 shadow-md transition
        bg-white dark:bg-zinc-800
        text-gray-800 dark:text-gray-100
        hover:shadow-xl
        ${
          destaque
            ? "border-2 border-blue-600 scale-[1.02]"
            : "border border-gray-200 dark:border-zinc-700"
        }
      `}
    >
      {/* Badge destaque */}
      {destaque && (
        <span className="absolute -top-3 right-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
          Mais escolhido
        </span>
      )}

      {/* Conteúdo */}
      <div>
        <header>
          <h3
            itemProp="name"
            className="text-xl font-semibold"
          >
            {titulo}
          </h3>

          <p
            itemProp="description"
            className="mt-3 text-sm text-gray-600 dark:text-gray-400"
          >
            {descricao}
          </p>
        </header>

        {/* Itens do serviço */}
        <ul className="mt-5 space-y-2 text-sm">
          {itens.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Observações */}
        {observacoes && (
          <div className="mt-4 text-xs text-gray-500 dark:text-gray-400 space-y-1">
            {observacoes.map((obs, index) => (
              <p key={index}>• {obs}</p>
            ))}
          </div>
        )}

        {/* Custos recorrentes */}
        {custosRecorrentes && (
          <div className="mt-4 rounded-lg bg-gray-50 dark:bg-zinc-700/40 p-3">
            <p className="text-xs font-semibold mb-1">
              Custos recorrentes:
            </p>
            <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
              {custosRecorrentes.hospedagem && (
                <li>• {custosRecorrentes.hospedagem}</li>
              )}
              {custosRecorrentes.dominio && (
                <li>• {custosRecorrentes.dominio}</li>
              )}
            </ul>
          </div>
        )}
      </div>

      {/* Rodapé */}
      <footer className="mt-6">
        <p
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
          className="text-lg font-bold"
        >
          <span itemProp="price">{preco}</span>
        </p>

        <a
          href="#contato"
          aria-label={`Entrar em contato sobre o serviço ${titulo}`}
          className="
            mt-4 block w-full text-center
            rounded-lg py-2
            bg-blue-600 hover:bg-blue-700
            text-white font-medium
            transition
          "
        >
          {ctaTexto}
        </a>
      </footer>
    </article>
  );
}
