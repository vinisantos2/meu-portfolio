export default function Tools() {
  const tools = [
    'React',
    'React Native',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'HTML',
    'CSS',
    'Tailwind CSS',
    'Expo',
    'Git & GitHub',
    'Figma',
  ];

  return (
    <section
      id="ferramentas"
      className="bg-white dark:bg-gray-800 py-16 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12">
          Ferramentas e Tecnologias
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 font-medium"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
