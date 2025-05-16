import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Vinicius Santos</h1>
        <nav className="space-x-4">
          <a href="#inicio" className="hover:text-yellow-400 transition-colors">Início</a>
          <a href="#perfil" className="hover:text-yellow-400 transition-colors">Perfil</a>
          <a href="#ferramentas" className="hover:text-yellow-400 transition-colors">Ferramentas</a>
          <a href="#projetos" className="hover:text-yellow-400 transition-colors">Projetos</a>
          <a href="#contato" className="hover:text-yellow-400 transition-colors">Contato</a>
        </nav>
      </div>
    </header>
  );
}
