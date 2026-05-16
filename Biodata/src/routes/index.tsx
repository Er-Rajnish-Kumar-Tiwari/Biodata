import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { Background } from "@/components/portfolio/Background";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Loader } from "@/components/portfolio/Loader";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Services } from "@/components/portfolio/Services";
import { Education } from "@/components/portfolio/Education";
import { Skills } from "@/components/portfolio/Skills";
import { Experiences } from "@/components/portfolio/Experiences";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Rajnish Kumar Tiwari — Full Stack & AI/ML Developer" },
      { name: "description", content: "Premium developer portfolio of Rajnish Kumar Tiwari — Full Stack Web, App, Software & AI/ML Developer building modern MERN applications." },
    ],
  }),
});

function Index() {
  useReveal();
  return (
    <main className="relative min-h-screen">
      <Loader />
      <Background />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Education />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
