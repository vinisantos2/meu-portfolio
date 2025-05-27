'use client';
import ProjetoCard from '@/src/components/ProjetoCard';
import { projetos } from '@/src/data/projetos';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
          Meus Projetos
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded"></div>
        <p className="text-gray-500 dark:text-gray-300 mt-4">
          Veja alguns dos trabalhos que desenvolvi com dedicação.
        </p>
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.2}}
        transition={{ staggerChildren: 0.15 }}
      >
        {projetos.slice(0, 6).map((projeto) => (
          <motion.div
            key={projeto.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjetoCard imageUrls={projeto.imagesUrl} {...projeto} />
          </motion.div>
        ))}
      </motion.div>

      {projetos.length > 6 && (
        <div className="flex justify-center mt-12">
          <a
            href="/pageProjects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Ver mais projetos
            <ArrowRight size={18} />
          </a>
        </div>
      )}
    </section>
  );
}
