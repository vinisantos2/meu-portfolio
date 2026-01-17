// components/Layout.tsx
import Footer from "./Footer";
type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
