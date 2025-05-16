export default function Profile() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        
        {/* FOTO */}
        <div className="flex-shrink-0">
          <img
            src="/images/perfil/vinicius.jpg"
            alt="Vinicius Santos, desenvolvedor front-end"
            loading="lazy"
            className="w-48 h-48 rounded-full object-cover shadow-lg ring-2 ring-blue-500"
          />
        </div>

        {/* TEXTO */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            Sobre Mim
          </h2>

          <p className="text-xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Olá! Meu nome é <span className="font-semibold text-blue-600 dark:text-blue-400">Vinicius Santos</span>, um desenvolvedor front-end apaixonado por criar experiências digitais intuitivas e funcionais. 
            Tenho experiência com <strong>React Native</strong> e <strong>React</strong>, e atualmente estou me especializando em <strong>Next.js</strong> com <strong>TypeScript</strong>.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Gosto de criar interfaces limpas, acessíveis e com foco no usuário. Um dos meus projetos mais recentes é o <span className="font-semibold text-green-600 dark:text-green-400">Pongada</span>, um jogo de tabuleiro desenvolvido em React Native que mistura lógica e diversão.
          </p>

          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
            Estou em busca da minha <span className="font-semibold text-indigo-600 dark:text-indigo-400">primeira oportunidade profissional</span> na área de desenvolvimento. Este portfólio é uma vitrine das minhas habilidades, aprendizados e projetos.
          </p>

          {/* FORMAÇÃO */}
          <div className="text-left">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Formação Acadêmica</h3>

            <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-base">
              <li>
                <strong>Pós-graduação (Completo)</strong><br />
                Estácio - Desenvolvimento Mobile<br />
                <span className="text-sm text-gray-500 dark:text-gray-400">Jan/2024 - Dez/2024</span>
              </li>
              <li>
                <strong>Graduação (Completo)</strong><br />
                Faculdade de Ciências Humanas e Sociais - Sistemas de Informação<br />
                <span className="text-sm text-gray-500 dark:text-gray-400">Fev/2019 - Dez/2022</span>
              </li>
              <li>
                <strong>Curso Técnico (Completo)</strong><br />
                SENAI - Análise de Sistemas & Tecnologia da Informação<br />
                <span className="text-sm text-gray-500 dark:text-gray-400">Jan/2017 - Dez/2018</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
