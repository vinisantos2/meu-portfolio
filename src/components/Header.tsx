"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const menuItems = [
  { title: "Início", url: "#inicio" },
  { title: "Perfil", url: "#perfil" },
  { title: "Por que digital", url: "#why-digital" },
  { title: "Serviços", url: "#servicos" },
  { title: "Projetos", url: "#projetos" },
  { title: "Ferramentas", url: "#ferramentas" },
  { title: "Contato", url: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.querySelector(id) as HTMLElement;
    if (!element) return;

    const headerOffset = 80;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-[100] bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between relative">
        
        {/* LOGO */}
        <button
          onClick={() => handleScroll("#inicio")}
          className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
        >
          VS-Tech
        </button>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8">
          {menuItems.map((item) => (
            <button
              key={item.url}
              onClick={() => handleScroll(item.url)}
              className="relative font-medium text-gray-200 hover:text-yellow-400 transition
                after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 
                after:bg-yellow-400 after:transition-all hover:after:w-full"
            >
              {item.title}
            </button>
          ))}
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-700">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {menuItems.map((item) => (
              <button
                key={item.url}
                onClick={() => handleScroll(item.url)}
                className="text-gray-200 hover:text-yellow-400 transition font-medium text-left"
              >
                {item.title}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
