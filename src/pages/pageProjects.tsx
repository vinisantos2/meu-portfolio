'use client';
import ProjetoCard from '@/src/components/ProjetoCard';
import { projetos } from '@/src/data/projetos';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

export default function PageProjects() {

    const router = useRouter();


    return (
        <>
            <div className="bg-gray-900 w-full h-20 flex items-center sticky top-0 z-50">
                <button
                    onClick={() => router.back()}
                    className="ml-4 flex items-center gap-2 text-gray-200 hover:text-white transition-colors duration-150"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="text-sm">Voltar</span>
                </button>
            </div>

            <section className="max-w-7xl mx-auto px-4 py-16">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                        Todos os Projetos
                    </h1>
                    <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
                    <p className="text-gray-500 dark:text-gray-300 mt-4 max-w-xl mx-auto">
                        Explore os projetos que desenvolvi usando diferentes tecnologias e abordagens.
                    </p>
                </div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ staggerChildren: 0.1 }}
                >
                    {projetos.map((projeto) => (
                        <motion.div
                            key={projeto.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <ProjetoCard imageUrls={projeto.imagesUrl} {...projeto} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </>
    );
}
