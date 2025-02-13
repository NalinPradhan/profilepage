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
      <div className="flex sm:w-full flex-col sm:h-80 items-center justify-center dark:bg-dark-bg">
        <div
          ref={icon}
          className="mt-6 motion-enter-active animate-hover"
          onClick={animateIcon}
        >
          <img
            style={{ position: "relative" }}
            alt="hero"
            width="100"
            height="100"
            className="rounded-full w-15"
            src="/avatar.png"
          />
        </div>

        <h1 className="mt-10 font-semibold md:text-5xl lg:text-7xl text-2xl dark:text-primarytext-dark">
          <span ref={web} className="text-cyan-300">
            Front-End Flair,
          </span>
          <span
            ref={full}
            className="text-rose-300 md:text-5xl lg:text-7xl text-2xl"
          >
            {" "}
            Full Stack Power{" "}
          </span>
        </h1>

        <div
          className="bg-yellow-400 animate-slow-spin dark:text-primarytext-dark text-primarytext-light rounded-full p-2
             absolute 
             sm:top-[27%] sm:left-[7%] sm:w-[80px]
             top-[21%] left-[6%] w-[60px]"
        >
          <img
            src="https://a.storyblok.com/f/171618/x/a76779570a/ornament-type-2-colour-f.svg"
            alt="decorative element"
            className="w-full h-auto "
          />
        </div>
      </div>
    </>
  );
}

export default Herotxt;
