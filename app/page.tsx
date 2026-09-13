import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Publication } from "@/components/Publication";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Publication />
      <Contact />
      <Footer />
    </main>
  );
}
