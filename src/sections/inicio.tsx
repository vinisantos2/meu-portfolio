export default function Inicio() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center text-center"
    >
      <div className="px-6 max-w-4xl">
        {/* Nome da empresa */}
        <span className="block text-blue-500 font-extrabold tracking-wider mb-6 text-6xl md:text-8xl">
          VS-TECH
        </span>

        {/* Headline principal */}
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white leading-tight">
          Desenvolvimento ágil de sites e aplicativos
          <span className="block text-blue-400">
            focados em performance e resultados
          </span>
        </h1>

        {/* Subtexto */}
        <p className="text-base md:text-lg text-gray-300 mb-10">
          Criamos soluções digitais modernas, rápidas e escaláveis para empresas,
          profissionais e negócios que querem crescer no digital.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contato"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Falar com a VS-TECH
          </a>

          <a
            href="#servicos"
            className="px-8 py-4 border border-white/80 text-white rounded-xl hover:bg-white/10 transition"
          >
            Nossos serviços
          </a>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          Atendimento rápido • Orçamento sem compromisso
        </p>
      </div>
    </section>
  );
}
