import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-6" />
        <About />
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-6" />
        <Experience />
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-6" />
        <Education />
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-6" />
        <Projects />
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-6" />
        <Skills />
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-6" />
        <Awards />
        <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent mx-6" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
