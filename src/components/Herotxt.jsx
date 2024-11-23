import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
// import bubble from "../../public/thinkbox.svg";

gsap.registerPlugin(useGSAP);
function Herotxt() {
  const web = useRef(null);
  const full = useRef(null);
  const icon = useRef(null);

  
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
    tl.fromTo(
      icon.current,
      {
        opacity: 0,
        y: 25,
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
    {/* <img className="h-52" src="./moon.png" alt="" /> */}
    <div className="flex sm:w-full flex-col sm:h-80 items-center justify-center">
      <div ref={icon} className="mt-6">
      <img  style={{position: "relative"}}  alt="hero"  width="100" height="100"  className=" rounded-full w-15   " src="/avatar.png" ></img>
      </div>

      <h1 className=" mt-10  font-semibold  md:text-5xl lg:text-7xl text-2xl  ">
        <span ref={web} className="text-cyan-300	">

        Front-End Flair,
        </span>
        <span ref={full} className="text-rose-300 md:text-5xl lg:text-7xl text-2xl">  Full Stack Power </span>
      </h1>
      <svg className="h-28 -z-10" style={{position:"absolute",top:"33%",left:'10%',opacity:'20%'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 480" fill="pink"><circle cx="240" cy="240" r="240"></circle></svg>
    </div>
    </>
  );
}
export default Herotxt;
