export default function Inicio() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center text-center overflow-hidden
      bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617]"
    >
      {/* Glow azul */}
      <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[140px] rounded-full top-[-200px] left-[-200px]" />

      {/* Glow roxo */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full bottom-[-150px] right-[-150px]" />

      {/* Orbita estilo React */}
      <div className="absolute w-[420px] h-[420px] border border-blue-500/20 rounded-full animate-spin-slow" />
      <div className="absolute w-[320px] h-[320px] border border-blue-400/20 rounded-full rotate-45" />
      <div className="absolute w-[220px] h-[220px] border border-blue-300/20 rounded-full -rotate-45" />

      <div className="relative px-6 max-w-4xl">

        {/* Nome da empresa */}
        <span className="block text-blue-500 font-extrabold tracking-wider mb-6 text-6xl md:text-8xl">
          VS-TECH
        </span>

        {/* Headline */}
        <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white leading-tight">
          Desenvolvimento ágil de sites e aplicativos
          <span className="block text-blue-400">
            focados em performance e resultados
          </span>
        </h1>

        {/* Subtexto */}
        <p className="text-base md:text-lg text-gray-300 mb-10">
          Criamos soluções digitais modernas, rápidas e escaláveis para
          empresas, profissionais e negócios que querem crescer no digital.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contato"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold
            hover:bg-blue-700 transition shadow-lg shadow-blue-600/30"
          >
            Falar com a VS-TECH
          </a>

          <a
            href="#servicos"
            className="px-8 py-4 border border-white/70 text-white rounded-xl
            hover:bg-white/10 transition"
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