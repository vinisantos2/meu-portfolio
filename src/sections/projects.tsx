import ProjetoCard from '@/src/components/ProjetoCard';
import { projetos } from '@/src/data/projetos';

export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800 dark:text-white">
        Meus Projetos
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projetos.map((projeto) => (
          <ProjetoCard imageUrls={projeto.imagesUrl} key={projeto.title} {...projeto} />
        ))}
      </div>
    </div>
  );
}
