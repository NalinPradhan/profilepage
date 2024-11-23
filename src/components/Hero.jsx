import React, { forwardRef, useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroComponent = forwardRef((props, ref) => {
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current.innerText;
    const words = text.split(/\s+/);
    textRef.current.innerHTML = words
      .map((word) => {
        return `<span ref={textRe} class="word">${word}</span>`;
      })
      .join(" ");

    const spans = textRef.current.querySelectorAll("span");
    const tl = gsap.timeline({ repeat: 2});

    spans.forEach((span) => {
      tl.fromTo(
        span,
        {
          opacity: 0,
        },
        {
          duration: 0.01,
          opacity: 1,
          ease: "none",
        }
      ).to(span, {
        duration: 0.01,
        opacity: 0,
        ease: "power1.inOut",
        delay: 0.1,
      });
    });
    const translateTl = gsap.timeline({ delay: 2.5});
    translateTl.to(textRef.current, {
      opacity: 1,
      y: "-500",
      ease: "power3.inOut",
      duration: 1,
    });
  }, []);

  return (
    <h1 ref={textRef} className="position">.སྐུ་གཟུགས། I am Nalin ནལིན། this is my portfolio སྒོའི་སྒོ།</h1>
  );
});

const Hero = () => {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowComponent(false);
    }, 3500); // or any other condition to hide the component
  }, []);

  return (
    <div>
      {showComponent && <HeroComponent />}
    </div>
  );
};

export default Hero;