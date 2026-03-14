"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";
import { useRouter, usePathname } from "next/navigation";

const menuItems = [
  { title: "Início", url: "inicio" },
  { title: "Sobre nós", url: "empresa" },
  { title: "Por que digital", url: "why-digital" },
  { title: "Serviços", url: "servicos" },
  { title: "Projetos", url: "projetos" },
  { title: "Ferramentas", url: "ferramentas" },
  { title: "Contato", url: "contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const goToSection = (id: string) => {
    if (pathname !== "/") {
      router.push("/#" + id);
      return;
    }
  };

  return (
    <header className="sticky top-0 z-[100] bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* LOGO */}
        <button
          onClick={() => goToSection("inicio")}
          className="text-2xl font-bold cursor-pointer"
        >
          VS-Tech
        </button>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-8 absolute left-1/2 -translate-x-1/2">
          {menuItems.map((item) =>
            pathname === "/" ? (
              <Link
                key={item.url}
                to={item.url}
                smooth={true}
                duration={600}
                offset={-80}
                spy={true}
                className="hover:text-yellow-400 cursor-pointer"
              >
                {item.title}
              </Link>
            ) : (
              <button
                key={item.url}
                onClick={() => router.push("/#" + item.url)}
                className="hover:text-yellow-400 cursor-pointer"
              >
                {item.title}
              </button>
            ),
          )}
        </nav>

        {/* BOTÃO MOBILE */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 text-white px-4 pb-4">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) =>
              pathname === "/" ? (
                <Link
                  key={item.url}
                  to={item.url}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="text-left hover:text-yellow-400 cursor-pointer"
                >
                  {item.title}
                </Link>
              ) : (
                <button
                  key={item.url}
                  onClick={() => {
                    router.push("/#" + item.url);
                    setMenuOpen(false);
                  }}
                  className="text-left hover:text-yellow-400"
                >
                  {item.title}
                </button>
              ),
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
