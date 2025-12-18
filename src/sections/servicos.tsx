import CardAnuncio from "../components/CardAnuncio";
import { LISTA_ANUNCIOS } from "../data/ListaAnuncios";

export default function SecaoServicos() {
  return (
    <section
      id="servicos"
      className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* TÍTULO */}
        <h2 className="text-3xl font-bold text-center mb-4">
          Planos e Serviços
        </h2>

        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Soluções digitais sob medida para fortalecer sua presença online e
          transformar ideias em produtos reais.
        </p>

        {/* CARDS */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {LISTA_ANUNCIOS.map((anuncio) => (
            <CardAnuncio key={anuncio.id} anuncio={anuncio} />
          ))}
        </div>
      </div>
    </section>
  );
}
