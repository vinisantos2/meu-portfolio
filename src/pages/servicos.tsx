
import Link from "next/link";
import { LISTA_ANUNCIOS } from "../data/ListaAnuncios";
import CardAnuncio from "../components/CardAnuncio";
import HeaderBack from "../components/HeaderBack";

export const metadata = {
  title: "Serviços de Desenvolvimento Web e Aplicativos | VS Web & Apps",
  description:
    "Criação de sites, landing pages, sistemas web e aplicativos mobile sob medida, com foco em desempenho, SEO e conversão.",
};

export default function Servicos() {
  return (
    <main className="bg-white dark:bg-zinc-900">
      <HeaderBack />
      {/* HERO / INTRO */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-zinc-800">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
            Serviços de Desenvolvimento
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            Desenvolvimento de sites, landing pages, sistemas web e aplicativos
            mobile sob medida. Soluções modernas, rápidas e preparadas para o
            Google.
          </p>

          <Link
            href="#lista-servicos"
            className="
              inline-block mt-8
              rounded-xl px-6 py-3
              bg-blue-600 hover:bg-blue-700
              text-white font-semibold
              transition
            "
          >
            Ver serviços
          </Link>
        </div>
      </section>

      {/* LISTA DE SERVIÇOS */}
      <section
        id="lista-servicos"
        className="py-20 px-6"
        aria-label="Lista completa de serviços"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Todos os serviços disponíveis
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {LISTA_ANUNCIOS.map((anuncio) => (
              <CardAnuncio key={anuncio.id} anuncio={anuncio} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 px-6 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold">
            Não sabe qual serviço escolher?
          </h2>

          <p className="mt-4 text-blue-100">
            Me conte sua ideia e eu te ajudo a definir a melhor solução para o
            seu projeto.
          </p>

          <Link
            href="#contato"
            className="
              inline-block mt-8
              rounded-xl px-8 py-3
              bg-white text-blue-600
              font-semibold
              hover:opacity-90
              transition
            "
          >
            Falar comigo
          </Link>
        </div>
      </section>
    </main>
  );
}
