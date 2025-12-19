export default function Tools() {
  const tools = [
    'React',
    'React Native',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Expo',
    'Git e GitHub',
    'Figma',
  ];

  return (
    <section
      id="ferramentas"
      aria-label="Ferramentas e tecnologias que utilizo no desenvolvimento web e mobile"
      className="bg-white dark:bg-gray-800 py-16 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Tecnologias que utilizo no dia a dia
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-12">
          Trabalho com tecnologias modernas para desenvolvimento de sites, sistemas web
          e aplicativos mobile, focando em performance, SEO e boa experiência do usuário.
        </p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <li
              key={index}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-medium"
            >
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
