import { Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contato"
      className="bg-gradient-to-b from-emerald-50 to-white dark:from-gray-900 dark:to-gray-950 py-20 px-6"
    >
      <div className="max-w-3xl mx-auto">
        {/* TÍTULO */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
          Entre em Contato
        </h2>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Fale comigo para tirar dúvidas, solicitar um orçamento ou discutir sua
          ideia. Respondo o mais rápido possível.
        </p>

        {/* FORM + AÇÕES */}
        <div className="bg-white dark:bg-gray-800 p-8 md:p-10 rounded-3xl shadow-xl dark:shadow-lg">
          {/* AÇÕES RÁPIDAS */}
          <div className="grid gap-4 md:grid-cols-2 mb-8">
            <a
              href="https://instagram.com/vini.santos2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl border border-gray-200 dark:border-gray-700 py-3 font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition"
            >
              <Instagram className="w-5 h-5 text-pink-500" />
              Instagram
            </a>

            <a
              href="https://wa.me/5575999913645"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white py-3 font-medium transition"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          {/* DIVISOR */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              ou envie uma mensagem
            </span>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
          </div>

          {/* FORMULÁRIO */}
          <form
            action="https://formsubmit.co/m.vinicius.s.f.c@gmail.com"
            method="POST"
            className="space-y-6"
          >
            {/* Campos ocultos */}
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
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                Nome
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Seu nome"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-emerald-500 outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                Mensagem
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Conte um pouco sobre o que você precisa..."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-emerald-500 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition shadow-md"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
