"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

const menuItems = [
  { title: "Início", url: "#inicio" },
  { title: "Sobre nós", url: "#empresa" },
  { title: "Por que digital", url: "#why-digital" },
  { title: "Serviços", url: "#servicos" },
  { title: "Projetos", url: "#projetos" },
  { title: "Ferramentas", url: "#ferramentas" },
  { title: "Contato", url: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = (id: string) => {
    if (pathname !== "/") {
      router.push("/" + id);
      return;
    }

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
    <header className="sticky top-0 z-[100] bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        <button
          onClick={() => handleScroll("#inicio")}
          className="text-2xl font-bold"
        >
          VS-Tech
        </button>

        <nav className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
          {menuItems.map((item) => (
            <button
              key={item.url}

              onClick={() => handleScroll(item.url)}
              className="hover:text-yellow-400 cursor-pointer"
            >
              {item.title}
            </button>
          ))}
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </header>
  );
}