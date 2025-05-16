
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
 
      <section className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Ferramentas e Tecnologias</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white text-gray-800 font-medium"
            >
              {tool}
            </div>
          ))}
        </div>
      </section>
  
  );
}
