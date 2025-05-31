// components/Layout.tsx
import Footer from "./Footer";
type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
