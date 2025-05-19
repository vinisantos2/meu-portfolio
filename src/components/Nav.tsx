'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Vinicius Santos</h1>

        {/* Botão de menu no mobile */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#inicio" className="hover:text-yellow-400">Início</a>
          <a href="#perfil" className="hover:text-yellow-400">Perfil</a>
          <a href="#ferramentas" className="hover:text-yellow-400">Ferramentas</a>
          <a href="#projetos" className="hover:text-yellow-400">Projetos</a>
          <a href="#contato" className="hover:text-yellow-400">Contato</a>
        </nav>
      </div>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 flex flex-col space-y-2">
          <a href="#inicio" onClick={closeMenu} className="hover:text-yellow-400">Início</a>
          <a href="#perfil" onClick={closeMenu} className="hover:text-yellow-400">Perfil</a>
          <a href="#ferramentas" onClick={closeMenu} className="hover:text-yellow-400">Ferramentas</a>
          <a href="#projetos" onClick={closeMenu} className="hover:text-yellow-400">Projetos</a>
          <a href="#contato" onClick={closeMenu} className="hover:text-yellow-400">Contato</a>
        </div>
      )}
    </header>
  );
}
