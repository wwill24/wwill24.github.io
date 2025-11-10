import Home from "@/components/Home";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Project from "@/components/Project";

export default function RootPage() {
  return (
    <>
      <section id="home" className="section">
        <Home />
      </section>
      <section id="about" className="section">
        <About />
      </section>
      <section id="experience" className="section">
        <Experience />
      </section>
      <section id="projects" className="section">
        <Project />
      </section>
    </>
  );
}
