//Responsivble for the grids
import React, { useRef } from "react";
import gsap from "gsap";
// import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

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
      <div id="here" className="m-10 p-5 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card overflow-hidden h-auto lg:h-80 p-6 flex flex-col">
          <div className="section-heading text-xl mb-3">About Me</div>
          <p className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-accent-yellow to-accent-yellow-light bg-clip-text text-transparent font-medium">
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
          <div className="section-heading text-xl mb-3">Skills</div>
          <div className="leading-relaxed text-zinc-700 dark:text-zinc-300">
            <ul className="list-disc pl-3 space-y-2">
              <li>
                <span className="font-medium">Front-End:</span> HTML5, CSS3,
                JavaScript (ES6+), React.js
              </li>
              <li>
                <span className="bg-gradient-to-r from-accent-rose-light to-accent-rose bg-clip-text text-transparent font-medium">
                  MERN stack
                </span>{" "}
                (MongoDB, Express, React, Node.js)
              </li>
              <li>
                <span className="font-medium">Databases:</span> MongoDB, MySQL
              </li>
              <li>
                <span className="font-medium">Version Control:</span> Git,
                GitHub
              </li>
              <li>
                <span className="font-medium">Design:</span> Responsive Design,
                UI/UX, CSS frameworks
              </li>
              <li>
                <span className="font-medium">APIs:</span> RESTful development
                and integration
              </li>
              <li>
                <span className="font-medium">Tools:</span> Webpack, Docker
              </li>
            </ul>
          </div>
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
            <div
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
            </div>
          </p>
          <div className="mt-auto">
            <a
              href="#footer"
              className="button-primary inline-flex items-center space-x-2"
            >
              <span>Get in Touch</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Intro;
