// pages/_app.tsx
import { Analytics } from "@vercel/analytics/next";
import type { AppProps } from "next/app";
import MetaHead from "../components/MetaHead";
import Layout from "../components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* Head global (Google enxerga com certeza) */}
      <MetaHead />

      <Layout>
        <Component {...pageProps} />
      </Layout>

      <Analytics />
    </>
  );
}
