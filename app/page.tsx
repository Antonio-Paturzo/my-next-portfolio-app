import { getProjects } from "@/sanity/sanity-utils";
import Contact from "./components/Contact/Contact";
import MainContent from "./components/Header/MainContent";
import MainPageContent from "./components/MainPage/MainPageContent";
import Header from "./components/Nav/Header";
import Features from "./components/MainPage/Features";
import Footer from "./components/Footer/Footer";
import Projects from "./components/MainPage/Projects";

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
