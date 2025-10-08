import React, { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Herotxt from "./components/Herotxt";
import Intro from "./components/intro";
import Works from "./components/Works";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";

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
      {shownav ? <Works /> : null}
      {shownav ? <Works /> : null}
      {shownav ? <Footer /> : null}
      {shownav ? <Chatbot /> : null}
    </>
  );
}

export default App;
