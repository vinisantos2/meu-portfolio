export default function Inicio() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-[url('/images/perfil/react.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center text-center"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Conteúdo */}
      <div className="relative z-10 px-6 max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Criação de sites profissionais para atrair mais clientes para o seu negócio
        </h1>

        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Desenvolvo sites e aplicativos modernos, rápidos e responsivos, focados em conversão,
          para empresas, autônomos e profissionais liberais.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contato"
            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Falar no WhatsApp
          </a>

          <a
            href="#servicos"
            className="px-8 py-4 border border-white text-white rounded-xl hover:bg-white/10 transition"
          >
            Ver serviços
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-300">
          Resposta rápida • Orçamento sem compromisso
        </p>
      </div>
    </section>
  );
}
