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
      <div className="flex sm:w-full flex-col sm:h-80 items-center justify-center bg-light-bg dark:bg-dark-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-accent-cyan-light/10 via-transparent to-transparent dark:from-accent-cyan-dark/5 dark:via-transparent dark:to-transparent"></div>

        <div
          ref={icon}
          className="mt-6 motion-enter-active animate-hover relative z-10"
          onClick={animateIcon}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-cyan to-accent-rose rounded-full blur opacity-75 animate-pulse-slow"></div>
          <img
            style={{ position: "relative" }}
            alt="hero"
            width="100"
            height="100"
            className="rounded-full w-15 border-2 border-white dark:border-gray-800 object-cover z-10 relative"
            src="/avatar.png"
          />
        </div>

        <h1 className="mt-10 font-semibold md:text-5xl lg:text-7xl text-2xl space-grotesk-font tracking-tight relative z-10">
          <span
            ref={web}
            className="bg-gradient-to-r from-accent-cyan-light to-accent-cyan bg-clip-text text-transparent"
          >
            Front-End Flair,
          </span>
          <span
            ref={full}
            className="bg-gradient-to-r from-accent-rose to-accent-rose-light bg-clip-text text-transparent md:text-5xl lg:text-7xl text-2xl"
          >
            {" "}
            Full Stack Power{" "}
          </span>
        </h1>

        <div
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
        </div>
      </div>
    </>
  );
}

export default Herotxt;
