export default function Inicio() {
    return (
        <section id="inicio" className="py-24 bg-white dark:bg-gray-900 text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Olá, sou Vinicius Santos</h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                Desenvolvedor Front-end com foco em React e React Native
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a href="#projetos" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Ver Projetos
                </a>
                <a href="#contato" className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition">
                    Contato
                </a>
            </div>

            {/* Avatar opcional */}
            {/* <img src="/meu-avatar.png" alt="Vinícius" className="w-48 h-48 rounded-full mx-auto mt-12 shadow-lg" /> */}
        </section>

    )
}