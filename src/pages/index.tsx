import Contact from "@/src/sections/contact";
import Inicio from "@/src/sections/inicio";
import Profile from "@/src/sections/profile";
import Projects from "@/src/sections/projects";
import Tools from "@/src/sections/tools";
import Header from "../components/Header";
import SecaoServicos from "../sections/servicos";
import ChatBox from "../components/ChatBox";

export default function Home() {
  return (
    <>
      <Header />
      <Inicio />
      <Profile />
      <SecaoServicos />
      <Projects />
      <Tools />
      <Contact />
      {/* <ChatBox /> */}
    </>




  );
}
