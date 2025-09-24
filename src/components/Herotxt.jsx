import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import bubble from "../../public/thinkbox.svg";

gsap.registerPlugin(useGSAP);

function Herotxt() {
  const web = useRef(null);
  const full = useRef(null);
  const icon = useRef(null);

  const animateIcon = () => {
    const element = icon.current;
    element.classList.remove("motion-enter", "motion-preset-confetti");
    // Force a reflow
    void element.offsetWidth;
    element.classList.add("motion-enter", "motion-preset-confetti");
  };

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
        y: "-100",
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
    animateIcon();
  }, []);

  return (
    <>
      <div className="flex sm:w-full flex-col dark:border-hidden da border sm:h-80 items-center justify-center bg-light-card/80 dark:bg-dark-card/80 relative overflow-hidden">
        <div
          ref={icon}
          className="mt-6 motion-enter-active animate-hover relative z-10"
          onClick={animateIcon}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r  rounded-full w-56 blur opacity-75 animate-pulse-slow"></div>
          <img
            style={{ position: "relative" }}
            alt="hero"
            width="100"
            height="100"
            className="rounded-full w-15    object-cover z-10 relative"
            src="/69.jpg"
          />
        </div>

        <h1 className="mt-10 font-semibold md:text-5xl lg:text-7xl text-2xl space-grotesk-font tracking-tight relative z-10">
          <span
            ref={web}
            className="bg-gradient-to-r from-accent-yellow-light to-accent-cyan bg-clip-text text-transparent"
          >
            Full Stack{" "}
          </span>
          <span
            ref={full}
            className="bg-gradient-to-r to-accent-yellow-dark from-accent-cyan  bg-clip-text text-transparent md:text-5xl lg:text-7xl text-2xl"
          >
            {" "}
            Developer
          </span>
        </h1>

        {/* <div
          className="bg-yellow-400 animate-slow-spin dark:text-primarytext-dark text-primarytext-light rounded-full p-2
             absolute 
             sm:top-[35%] sm:right-[12%] sm:w-[70px]
             top-[25%] right-[10%] w-[50px] z-10"
        >
          <img
            src="https://a.storyblok.com/f/171618/x/a76779570a/ornament-type-2-colour-f.svg"
            alt="decorative element"
            className="w-full h-auto"
          />
        </div> */}
      </div>
    </>
  );
}

export default Herotxt;
