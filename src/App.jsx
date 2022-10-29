import "./App.css";
import Experience from "./components/experience";
import Header from "./components/header";
import Start from "./components/start";

function App() {
  return (
    <div className="App ft-bg-black white relative">
      <Header />
      <Start />
      <Experience />
      <div
        className="shadow-1 flex items-center justify-start pl7"
        style={{ height: 80 }}
      >
        © 2022 Friedrich Tane
      </div>
    </div>
  );
}

export default App;
