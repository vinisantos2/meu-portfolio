export default function Profile() {
  return (
    <section id="perfil" className="bg-emerald-50 dark:bg-gray-800 py-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* FOTO */}
        <div className="flex-shrink-0">
          <img
            src="/images/perfil/vinicius.jpg"
            alt="Vinicius Santos - Desenvolvedor Web"
            loading="lazy"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg ring-4 ring-blue-500"
          />
        </div>

        {/* TEXTO */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-8">
            Quem vai desenvolver seu projeto
          </h2>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
              Meu nome é{" "}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Vinicius Santos
              </span>
              . Sou desenvolvedor web e trabalho criando sites e sistemas modernos,
              rápidos e responsivos, focados em entregar resultado real para negócios.
            </p>

            <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              Tenho experiência com <strong>React</strong>, <strong>Next.js</strong> e{" "}
              <strong>TypeScript</strong>, desenvolvendo interfaces limpas,
              acessíveis e fáceis de usar, sempre pensando na experiência do usuário
              e na conversão.
            </p>

            <p className="text-base md:text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
              Já desenvolvi projetos próprios e sistemas completos, incluindo
              sites institucionais, landing pages, dashboards e aplicações web
              com autenticação e painel administrativo.
            </p>
          </div>

          {/* FORMAÇÃO (autoridade, sem exagerar) */}
          <div className="mt-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Formação Acadêmica
            </h3>

            <ul className="space-y-4 text-gray-700 dark:text-gray-200 text-base">
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

          {/* CTA SUAVE */}
          <div className="mt-10">
            <a
              href="#contato"
              className="inline-block px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Falar sobre meu projeto
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
