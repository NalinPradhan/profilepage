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
      <div
        id="here"
        className="m-10 p-5 grid grid-cols-1  lg:grid-cols-3 gap-4"
      >
        <div className="border grid rounded-lg border-zinc-700 m-3 shadow-lg h-80  p-4 text-slate-600 justify-center">
          <div className="text-xl text-slate-700 dark:text-primarytext-dark flex sm:justify-center font-semibold">
            About Me
          </div>
          <p className="leading-relaxed overflow-hidden text-ellipsis">
            Hi, I'm{" "}
            <em className="bg-lime-300 dark:bg-lime-400 dark:text-black">
              {" "}
              Nalin{" "}
            </em>
            . The thing that got me in this was the typical cool tech guys in
            movies. But then, the thing that hooked me, was the blissful feeling
            of{" "}
            <em className="bg-pink-200 dark:text-black dark:bg-pink-400">
              solving a problem
            </em>
            . At first, it was finally getting the pyramid of asterisk pattern
            right. Then the problems kept getting complex, but that feeling of
            bliss after solving them never changed. I still think that is the
            best part of what I do.
          </p>
        </div>

        <div className="border grid rounded-lg border-zinc-700 py-1 m-3 shadow-lg h-80 items-center p-4 text-slate-600 justify-center">
          <div className="text-xl dark:text-primarytext-dark  text-slate-700 flex sm:justify-center h-11 font-semibold">
            Skills
          </div>
          <p className="leading-relaxed overflow-hidden text-ellipsis">
            <ul className="list-disc pl-3">
              <li>
                Front-End Technologies: HTML5, CSS3, JavaScript (ES6+), React.js
              </li>
              <li>
                <em className="bg-pink-200 dark:text-black dark:bg-pink-400">
                  {" "}
                  MERN stack{" "}
                </em>{" "}
                (MongoDB, Express, React, Node.js)
              </li>
              <li>Databases: MongoDB, MySQL</li>
              <li>Version Control: Git, GitHub</li>
              <li>Responsive Design: Bootstrap, Material-UI, CSS frameworks</li>
              <li>APIs: RESTful API development and integration</li>
              <li>Other Tools: Webpack, Docker</li>
            </ul>
          </p>
        </div>

        <div className="border flex flex-col rounded-lg border-zinc-700 py-1 shadow-lg m-3 items-center p-4 text-slate-600">
          <div className=" dark:text-primarytext-dark  text-xl text-slate-700 flex sm:justify-center font-semibold">
            Contact Me
          </div>
          <p className="leading-relaxed  overflow-hidden text-ellipsis mb-2">
            I’m always looking to collaborate on exciting projects or to tackle
            new challenges in web development. Feel free to reach out through
            <em className="bg-lime-300 dark:text-black dark:bg-lime-300">
              {" "}
              pnalin63@gmail.com{" "}
            </em>
            .
            <div
              className="bg-yellow-400 animate-slow-spin  dark:text-primarytext-dark text-primarytext-light rounded-full p-2
             absolute 
             sm:top-[87%] sm:left-[88%] sm:w-[80px]
             top-[83%] left-[76%] w-[60px]"
            >
              <img
                src="https://a.storyblok.com/f/171618/x/ae066edc10/ornament-type-3-colour-b.svg"
                alt="decorative element"
                className="w-full h-auto "
              />
            </div>
          </p>
        </div>
      </div>
    </>
  );
}
export default Intro;
