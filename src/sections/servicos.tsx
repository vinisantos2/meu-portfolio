export default function SecaoServicos() {
  return (
    <section id="servicos" className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">
          Serviços
        </h2>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-12">
          Soluções personalizadas para destacar sua presença digital.
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-2">Criação de Sites</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Sites modernos, responsivos e com foco em desempenho e SEO.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-2">Aplicativos Mobile</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Apps Android e iOS usando React Native, ideais para negócios locais e startups.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-2">Landing Pages</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Estratégicas para conversão, campanhas e produtos específicos.
            </p>
          </div>

          <div className="border border-gray-200 dark:border-gray-700 p-6 rounded-xl shadow hover:shadow-lg transition bg-white dark:bg-gray-800">
            <h3 className="text-xl font-semibold mb-2">Painéis Administrativos</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Sistemas personalizados com painel de controle, autenticação e relatórios.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
