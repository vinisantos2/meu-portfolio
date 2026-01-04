"use client";

import ProjetoCard from "@/src/components/ProjetoCard";
import { projetos } from "@/src/data/projetos";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ButtonPadrao from "../components/ButtonPadrão";

export default function Projects() {
  return (
    <section
      id="projetos"
      className="bg-emerald-50 dark:bg-gray-900 py-16 px-6"
    >
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
          Meus Projetos
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        <p className="text-gray-600 dark:text-gray-300 mt-4 text-lg">
          Veja alguns dos trabalhos que desenvolvi com dedicação.
        </p>
      </div>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {projetos.slice(0, 6).map((projeto) => (
          <motion.div
            key={projeto.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ProjetoCard {...projeto} />
          </motion.div>
        ))}
      </motion.div>

      {projetos.length > 6 && (
        <div className="flex justify-center mt-14">
          <ButtonPadrao icon={<ArrowRight size={18} />} href="/pageProjects">
            Ver mais projetos
          </ButtonPadrao>
        </div>
      )}
    </section>
  );
}
