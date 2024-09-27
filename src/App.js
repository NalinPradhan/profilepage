import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Herotxt from "./components/Herotxt";
import Intro from "./components/intro";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [shownav, setShowNav] = useState(false);

  setTimeout(() => {
    setShowNav(true);
  }, 3300);
  return (
    <>
      <Hero />
      {shownav ? <Navbar /> : null}
      {shownav ? <Herotxt /> : null}
      {shownav ? <Intro /> : null}
      {shownav ? <Footer /> : null}
      
    </>
  );
}

export default App;
