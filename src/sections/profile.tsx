import ButtonPadrao from "../components/ButtonPadrão";

export default function Profile() {
  return (
    <section
      id="empresa"
      className="relative overflow-hidden py-24 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Formas decorativas */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-14">
          Sobre a VS Web & Apps
        </h2>

        {/* Card */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-10 md:p-14">

          <div className="space-y-6 text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
              A <span className="font-semibold text-blue-600 dark:text-blue-400">
                VS Web & Apps
              </span>{" "}
              é especializada no desenvolvimento de soluções digitais para
              empresas que desejam crescer na internet.
            </p>

            <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              Criamos <strong>sites profissionais</strong>,{" "}
              <strong>sistemas web</strong> e{" "}
              <strong>aplicativos personalizados</strong> utilizando tecnologias
              modernas que garantem performance, segurança e escalabilidade.
            </p>

            <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              Nosso foco é ajudar empresas a fortalecer sua presença digital,
              melhorar a experiência de seus clientes e automatizar processos
              através da tecnologia.
            </p>
          </div>

          {/* Diferenciais */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left">
              Nossos diferenciais
            </h3>

            <ul className="space-y-3 text-gray-700 dark:text-gray-200 text-base">
              <li>✔ Desenvolvimento moderno com tecnologias atualizadas</li>
              <li>✔ Sites rápidos, responsivos e otimizados para SEO</li>
              <li>✔ Sistemas personalizados para cada tipo de negócio</li>
              <li>✔ Suporte e acompanhamento após a entrega</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center md:justify-start">
            <ButtonPadrao href="#contato">
              Solicitar orçamento
            </ButtonPadrao>
          </div>

        </div>
      </div>
    </section>
  );
}