export default function Contact() {
  return (
    <section id="contato" className="bg-white dark:bg-gray-900 py-16 px-6 mt-20">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Entre em Contato
        </h2>

        <form
          action="https://formsubmit.co/m.vinicius.s.f.c@gmail.com"
          method="POST"
          className="space-y-6"
        >
          {/* Campos ocultos opcionais */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="box" />
          <input type="hidden" name="_autoresponse" value="Recebemos sua mensagem, obrigado pelo contato!" />
          <input type="hidden" name="_next" value="https://meu-portfolio-seven-fawn.vercel.app/agradecimento" />

          <div>
            <label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Nome
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Seu nome"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              placeholder="Seu e-mail"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
              Mensagem
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Sua mensagem"
              required
              className="w-full p-3 border border-gray-300 dark:border-gray-600 dark:bg-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
