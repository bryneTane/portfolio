import Header from "../src/components/header";
import Start from "../src/components/start";
import About from "../src/components/about";
import Experience from "../src/components/experience";
import Education from "../src/components/education";
import Skills from "../src/components/skills";
import Projects from "../src/components/projects";
import Contact from "../src/components/contact";
import { getAllArticles } from "../src/lib/articles";

export default function HomePage() {
  const latestArticles = getAllArticles()
    .slice(0, 3)
    .map(({ slug, title, date }) => ({ slug, title, date }));

  return (
    <div className="App">
      <Header />
      <Start latestArticles={latestArticles} />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
