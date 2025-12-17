// pages/_app.tsx
import Layout from '../components/Layout';
import MetaHead from '../components/MetaHead';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout title="Home | Meu Portfólio">
      <MetaHead />
      <Component {...pageProps} />
    </Layout>

  );
}