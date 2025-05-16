import React from "react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Vinicius</h1>
        <ul className="flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          <li><a href="#inicio" className="hover:text-blue-600">Início</a></li>
          <li><a href="#perfil" className="hover:text-blue-600">Perfil</a></li>
          <li><a href="#projetos" className="hover:text-blue-600">Projetos</a></li>
          <li><a href="#ferramentas" className="hover:text-blue-600">Ferramentas</a></li>
          <li><a href="#contato" className="hover:text-blue-600">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}