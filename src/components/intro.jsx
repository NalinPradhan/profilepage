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
      <div className="ml-16 grid  grid-cols-3 grid-rows-2">
        <div className="border grid rounded-lg border-zinc-700 py-1  m-3 shadow-lg   sm:h-80 items-center p-4 text-slate-300 justify-center floating-container">
          <p className=" leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Exercitationem ipsum quam saepe, at voluptates pariatur debitis
            expedita odit nisi nam laudantium doloribus ea officia illo
            accusamus sequi. Numquam reprehenderit, earum nobis recusandae
            accusamus illum sed. Ad, excepturi.
          </p>
        </div>
        <div className="border row-span-2 col-span-2 mr-16  rounded-lg border-zinc-700 py-1 justify-center m-3  items-center p-4 text-slate-300 ">
          <p className="leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, optio.
          </p>
        </div>
        <div className="border  rounded-lg border-zinc-700 py-1  m-3  items-center p-4 text-slate-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et, option.
        </div>
      </div>
      {/* <img className="z-10 ml-12  w-20 h-20" src="wow.gif" alt="Descriptive Text" /> */}
    </>
  );
}
export default Intro;
