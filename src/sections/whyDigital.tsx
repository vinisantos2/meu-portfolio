export default function WhyDigital() {
  return (
    <section
      id="why-digital"
      className="bg-gray-50 dark:bg-gray-900 py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Por que sua empresa precisa estar no digital?
        </h2>

        {/* SUBTÍTULO */}
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          Hoje, quem não tem presença digital perde oportunidades todos os dias.
          Um site ou aplicativo profissional aumenta sua visibilidade,
          credibilidade e vendas.
        </p>

        {/* CARDS */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              🚀 Mais visibilidade
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Seu negócio aparece no Google e transmite profissionalismo desde o
              primeiro contato.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              ⏰ Disponível 24h
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Um site ou app funciona todos os dias, mesmo quando você não está
              online.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              💼 Mais credibilidade
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Empresas com site passam mais confiança do que apenas redes
              sociais ou WhatsApp.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              💰 Mais vendas
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              Transforme visitantes em clientes com formulários, botões de
              contato e estratégias de conversão.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14">
          <a
            href="#contato"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition"
          >
            Quero levar meu negócio para o digital
          </a>
        </div>
      </div>
    </section>
  );
}
