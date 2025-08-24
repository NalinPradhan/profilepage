//Responsivble for the grids
import React, { useRef } from "react";
import gsap from "gsap";
// import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Skills from "./Skills";

gsap.registerPlugin(useGSAP);
function Intro() {
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
  }, []);

  return (
    <>
      <div
        id="here"
        className="m-4 sm:m-20 p-5 grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <div className="card overflow-hidden h-auto lg:h-80 p-6 flex flex-col">
          <div className="section-heading text-xl mb-3">About Me</div>
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            Hi, I'm{" "}
            <span className="bg-yellow-400  bg-clip-text text-transparent font-medium relative">
              {/* Hand-drawn umbrella-like line */}
              <svg
                className="absolute w-full top-0 left-0 transform -translate-y-2"
                height="16"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0,10 C15,0 35,0 50,10 C65,20 85,0 100,10"
                  stroke="#F9CB28"
                  strokeWidth="4"
                  fill="none"
                  strokeLinecap="round"
                  className="animate-pulse-slow"
                />
              </svg>
              Nalin
            </span>
            . The thing that got me in this was the typical cool tech guys in
            movies. But then, the thing that hooked me, was the blissful feeling
            of{" "}
            <span className="bg-gradient-to-r from-accent-rose-light to-accent-rose bg-clip-text text-transparent font-medium">
              solving a problem
            </span>
            . At first, it was finally getting the pyramid of asterisk pattern
            right. Then the problems kept getting complex, but that feeling of
            bliss after solving them never changed. I still think that is the
            best part of what I do.
          </p>
        </div>

        <div className="card overflow-hidden h-auto lg:h-80 p-6 flex flex-col">
          <div className="section-heading text-xl mb-3">Contact Me</div>
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300 mb-2">
            I'm always looking to collaborate on exciting projects or to tackle
            new challenges in web development. Feel free to reach out through{" "}
            <a
              href="mailto:pnalin63@gmail.com"
              className="bg-gradient-to-r from-accent-yellow to-accent-yellow-light bg-clip-text text-transparent font-medium hover:text-accent-yellow-dark transition-all"
            >
              pnalin63@gmail.com
            </a>
            .
            {/* <div
              className="bg-yellow-400 animate-slow-spin dark:text-primarytext-dark text-primarytext-light rounded-full p-2
             absolute 
             sm:top-[87%] sm:left-[88%] sm:w-[80px]
             top-[83%] left-[76%] w-[60px]"
            >
              <img
                src="https://a.storyblok.com/f/171618/x/ae066edc10/ornament-type-3-colour-b.svg"
                alt="decorative element"
                className="w-full h-auto"
              />
            </div> */}
          </p>
        </div>

        {/* Skills section takes full width */}
        <div className="lg:col-span-2 card overflow-hidden h-auto p-6 flex flex-col relative">
          <div className="section-heading text-xl mb-3">Skills & Technologies</div>
          <div className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            <Skills />
          </div>
        </div>
      </div>
    </>
  );
}
export default Intro;
