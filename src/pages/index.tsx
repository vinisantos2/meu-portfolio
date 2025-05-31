import Footer from "@/src/components/Footer";
import Layout from "@/src/components/Layout";
import Contact from "@/src/sections/contact";
import Inicio from "@/src/sections/inicio";
import Profile from "@/src/sections/profile";
import Projects from "@/src/sections/projects";
import Tools from "@/src/sections/tools";
import Head from "next/head";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Inicio />
      <Profile />
      <Tools />
      <Projects />

      <Contact />
    </>




  );
}
