export default function Profile() {
  return (
    <section id="perfil" className="bg-emerald-50 py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* FOTO */}
        <div className="flex-shrink-0">
          <img
            src="/images/perfil/vinicius.jpg"
            alt="Vinicius Santos, desenvolvedor front-end"
            loading="lazy"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg ring-4 ring-blue-500"
          />
        </div>

        {/* TEXTO */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 mb-8">
            Sobre Mim
          </h2>

          <div className="space-y-6">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Olá! Meu nome é <span className="font-semibold text-blue-600 dark:text-blue-400">Vinicius Santos</span>, um desenvolvedor front-end apaixonado por criar experiências digitais intuitivas e funcionais.
              Tenho experiência com <strong>React Native</strong> e <strong>React</strong>, e atualmente estou me especializando em <strong>Next.js</strong> com <strong>TypeScript</strong>.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Gosto de criar interfaces limpas, acessíveis e com foco no usuário. Um dos meus projetos mais recentes é o <span className="font-semibold text-green-600 dark:text-green-400">Pongada</span>, um jogo de tabuleiro desenvolvido em React Native que mistura lógica e diversão.
            </p>

            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              Estou em busca da minha <span className="font-semibold text-indigo-600 dark:text-indigo-400">primeira oportunidade profissional</span> na área de desenvolvimento. Este portfólio é uma vitrine das minhas habilidades, aprendizados e projetos.
            </p>
          </div>

          {/* FORMAÇÃO */}
          <div className="mt-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Formação Acadêmica</h3>

            <ul className="space-y-6 text-gray-700 text-base">
              <li>
                <strong>Pós-graduação (Completo)</strong><br />
                Estácio - Desenvolvimento Mobile<br />
                <span className="text-sm text-gray-500">Jan/2024 - Dez/2024</span>
              </li>
              <li>
                <strong>Graduação (Completo)</strong><br />
                Faculdade de Ciências Humanas e Sociais - Sistemas de Informação<br />
                <span className="text-sm text-gray-500 ">Fev/2019 - Dez/2022</span>
              </li>
              <li>
                <strong>Curso Técnico (Completo)</strong><br />
                SENAI - Análise de Sistemas & Tecnologia da Informação<br />
                <span className="text-sm text-gray-500 ">Jan/2017 - Dez/2018</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
