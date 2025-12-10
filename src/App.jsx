import "./App.css";
import Header from "./components/header";
import Start from "./components/start";
import About from "./components/about";
import Experience from "./components/experience";
import Education from "./components/education";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Start />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
