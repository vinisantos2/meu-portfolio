export default function Contact() {
  return (
    <section id="contato" className="bg-emerald-50 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Entre em Contato
        </h2>

        <form
          action="https://formsubmit.co/m.vinicius.s.f.c@gmail.com"
          method="POST"
          className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl dark:shadow-lg"
        >
          {/* Campos ocultos opcionais */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Recebemos sua mensagem, obrigado pelo contato!"
          />
          <input
            type="hidden"
            name="_next"
            value="https://meu-portfolio-seven-fawn.vercel.app/agradecimento"
          />

          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Nome
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Digite seu nome completo"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="exemplo@dominio.com"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Escreva sua mensagem aqui..."
              required
              rows={5}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition duration-300 shadow-md"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
