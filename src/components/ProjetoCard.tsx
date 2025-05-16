import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

type ProjetoCardProps = {
  title: string;
  description: string;
  imageUrls: string[]; // <-- agora é array
  projectUrl: string;
  className?: string;
};

export default function ProjetoCard({
  title,
  description,
  imageUrls,
  projectUrl,
  className,
}: ProjetoCardProps) {
  return (
    <a
      href={projectUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`block rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition duration-300 bg-amber-100 dark:bg-gray-800 ${className} w-full max-w-sm sm:max-w-md`}
    >
      {/* Carrossel de Imagens */}
      <div className="relative w-full h-72 bg-blue-100">
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop
          autoPlay
          interval={4000}
          showArrows
          className="h-full"
        >
          {imageUrls.map((url, index) => (
            <div key={index} className="relative h-72">
              <Image
                src={url}
                alt={`Imagem ${index + 1} do projeto ${title}`}
                fill
                className="object-contain p-4 drop-shadow-md"
              />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Conteúdo */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </a>
  );
}
