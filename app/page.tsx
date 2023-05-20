import { getProjects } from "@/sanity/sanity-utils";
import Contact from "./components/Contact";
import MainContent from "./components/MainContent";
import MainPageContent from "./components/MainPageContent";
import Header from "./components/Header";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

export default async function Home() {
  const projects = await getProjects();
  return (
    <div>
      <Header />
      <header className="bg-primary-dark shadow">
        <MainContent />
      </header>
      <main>
        <MainPageContent />
        <Projects projects={projects} />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
