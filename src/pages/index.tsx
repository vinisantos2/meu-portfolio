import Footer from "@/src/components/Footer";
import Layout from "@/src/components/Layout";
import Contact from "@/src/sections/contact";
import Inicio from "@/src/sections/inicio";
import Profile from "@/src/sections/profile";
import Projects from "@/src/sections/projects";
import Tools from "@/src/sections/tools";
import Head from "next/head";

export default function Home() {
  return (
    <Layout title="Home | Meu Portfólio">
      <Head>
        <title>Meu portifolio</title>
        <meta
          name="description"
          content="Protifólio dos meus projetos."
        />
      </Head>
      <Inicio />

      <section id="perfil" className="scroll-mt-20 py-24 bg-gray-100 dark:bg-gray-800">
        <Profile />
      </section>

      <section id="projetos" className="scroll-mt-20 py-24 bg-indigo-100 dark:bg-indigo-900">
        <Projects />
      </section>

      <section id="ferramentas" className="scroll-mt-20 py-24 bg-green-100 dark:bg-green-900">
        <Tools />
      </section>

      <section id="contato" className="scroll-mt-20 py-24 bg-sky-100 dark:bg-sky-900">
        <Contact />
      </section>

      <Footer />

    </Layout>
  );
}
