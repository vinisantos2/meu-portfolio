// components/Layout.tsx
import Navbar from "./Nav";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export default function Layout({ children, title }: LayoutProps) {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Navbar fixa */}
      <Navbar />

      {/* Conteúdo da página com padding para não ficar escondido atrás da navbar */}
      <main className="pt-20">{children}</main>
    </div>
  );
}
