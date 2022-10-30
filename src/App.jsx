import "./App.css";
import Education from "./components/education";
import Experience from "./components/experience";
import Header from "./components/header";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Start from "./components/start";

function App() {
  return (
    <div className="App ft-bg-black white relative">
      <Header />
      <Start />
      <Experience />
      <Education />
      <Skills />
      <Projects />
      <div
        className="shadow-1 flex items-center justify-start pl7-l pl2"
        style={{ height: 80 }}
      >
        © 2022 Friedrich Tane
      </div>
    </div>
  );
}

export default App;
