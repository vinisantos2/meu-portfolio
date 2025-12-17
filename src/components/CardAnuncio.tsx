type CardAnuncioProps = {
  anuncio: Anuncio;
  onClick?: () => void;
};

export default function CardAnuncio({ anuncio, onClick }: CardAnuncioProps) {
  const {
    titulo,
    descricao,
    preco,
    itens,
    destaque = false,
    ctaTexto = "Entrar em contato",
  } = anuncio;

  return (
    <div
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
        <h3 className="text-xl font-semibold">{titulo}</h3>

        <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
          {descricao}
        </p>

        <ul className="mt-5 space-y-2 text-sm">
          {itens.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Rodapé */}
      <div className="mt-6">
        <p className="text-lg font-bold">{preco}</p>

        <button
          onClick={() => {
            window.location.hash = "#contato";
          }}
          className="
    mt-4 w-full rounded-lg py-2
    bg-blue-600 hover:bg-blue-700
    text-white font-medium
    transition
  "
        >
          {ctaTexto}
        </button>
      </div>
    </div>
  );
}
