import ButtonPadrao from "../components/ButtonPadrão";

export default function Profile() {
  return (
    <section
      id="perfil"
      className="relative overflow-hidden py-24 px-6 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      {/* Formas decorativas */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-500 opacity-20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-500 opacity-20 blur-3xl rounded-full"></div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Título */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 dark:text-white mb-14">
          Quem vai desenvolver seu projeto
        </h2>

        {/* Card */}
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-10 md:p-14">

          <div className="space-y-6 text-center md:text-left">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
              Meu nome é{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Vinicius Santos
              </span>
              . Sou desenvolvedor web e trabalho criando sites e sistemas
              modernos, rápidos e responsivos, focados em entregar resultado
              real para negócios.
            </p>

            <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              Tenho experiência com <strong>React</strong>,{" "}
              <strong>Next.js</strong> e <strong>TypeScript</strong>,
              desenvolvendo interfaces limpas, acessíveis e fáceis de usar,
              sempre pensando na experiência do usuário e na conversão.
            </p>

            <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              Já desenvolvi projetos próprios e sistemas completos, incluindo
              sites institucionais, landing pages, dashboards e aplicações web
              com autenticação e painel administrativo.
            </p>
          </div>

          {/* Formação */}
          <div className="mt-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center md:text-left">
              Formação Acadêmica
            </h3>

            <ul className="space-y-3 text-gray-700 dark:text-gray-200 text-base">
              <li>
                <strong>Pós-graduação</strong> — Desenvolvimento Mobile (Estácio)
              </li>

              <li>
                <strong>Graduação</strong> — Sistemas de Informação
              </li>

              <li>
                <strong>Curso Técnico</strong> — Análise de Sistemas (SENAI)
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center md:justify-start">
            <ButtonPadrao href="#contato">
              Falar sobre meu projeto
            </ButtonPadrao>
          </div>

        </div>
      </div>
    </section>
  );
}