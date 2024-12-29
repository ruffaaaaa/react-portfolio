import { useState } from "react";
import "./App.css";
import Navbar from "./section/navbar";
import Header from "./section/header";
import SidePanel from "./section/sidepanel";
import Project from "./section/project";
import About from "./section/about-me";
import GetInTouch from "./section/get-in-touch";
import Footer from "./section/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="scrollbar-none">
        <Navbar />
        <Header />
        <SidePanel />
        <Project />
        <About />
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
}

export default App;
