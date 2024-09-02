import React, { useRef } from "react";
import gsap from "gsap";
// import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
function Herotxt() {
  const web = useRef(null);
  const full = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      web.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: '-100',
        duration: 0.5,
        ease: "power3.inOut",
      }
    );
    tl.fromTo(
      full.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.inOut",
      },
      "-=0.5"
    );
  }, []);
  return (
    <div className="flex sm:w-full sm:h-80 items-center justify-center">
      <h1 className="text-4xl mt-10  font-semibold text-accentv md:text-6xl lg:text-7xl ">
        <span ref={web} className="text-cyan-100	">
        Front-End Flair,
        </span>
        <span ref={full} className="text-rose-100 ">  Full Stack Power</span>
      </h1>
    </div>
  );
}
export default Herotxt;
