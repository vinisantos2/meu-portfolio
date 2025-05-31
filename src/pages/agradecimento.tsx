import HeaderBack from "../components/HeaderBack";

export default function Agradecimento() {
  return (
    <>
      <HeaderBack />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-center px-4">

        <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-4">
          Obrigado pelo contato!
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl">
          Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.
        </p>
      </div>

    </>

  );
}
