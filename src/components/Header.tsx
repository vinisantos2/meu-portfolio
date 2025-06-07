'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import img from '@/public/images/perfil/logo.png';

const menuItems = [
  { title: 'Início', url: '#inicio' },
  { title: 'Perfil', url: '#perfil' },
  { title: 'Ferramentas', url: '#ferramentas' },
  { title: 'Projetos', url: '#projetos' },
  { title: 'Serviços', url: '#servicos' },
  { title: 'Contato', url: '#contato' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-white text-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <Image
            src={img}
            alt="Logo VS Web & Apps"
            width={50}
            height={50}
            priority
            className="w-auto h-10"
          />
          <span className="text-xl font-bold hidden sm:inline">Web & Apps</span>
        </a>

        <button
          onClick={toggleMenu}
          className="md:hidden"
          aria-label="Abrir ou fechar menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <a key={item.url} href={item.url} className="hover:text-yellow-400">
              {item.title}
            </a>
          ))}
        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 flex flex-col space-y-2">
          {menuItems.map((item) => (
            <a
              key={item.url}
              href={item.url}
              onClick={closeMenu}
              className="hover:text-yellow-400 text-white"
            >
              {item.title}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
