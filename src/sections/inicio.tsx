export default function Inicio() {
    return (
        <section
            id="inicio"
            className="relative min-h-screen bg-[url('/images/perfil/react.jpg')] bg-cover bg-center bg-no-repeat text-center flex items-center justify-center"
        >
            {/* Overlay escuro para contraste */}
            <div className="absolute inset-0 font bg-black bg-opacity-50"></div>

            {/* Conteúdo centralizado sobre o overlay */}
            <div className="relative z-10 px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400 transform transition-transform duration-500 hover:scale-110">
                    Olá, sou Vinicius Santos
                </h1>
                <p className="text-xl md:text-2xl text-blue-200 dark:text-gray-300">
                    Desenvolvedor Front-end com foco em React e React Native
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="#projetos"
                        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Ver Projetos
                    </a>
                    <a
                        href="#contato"
                        className="px-6 py-3 border bg-white border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-cyan-100 dark:hover:bg-gray-800 transition"
                    >
                        Contato
                    </a>
                </div>
            </div>
        </section>
    );
}
