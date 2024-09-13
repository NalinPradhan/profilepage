import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(useGSAP);
function Herotxt() {
  const web = useRef(null);
  const full = useRef(null);
  const icon = useRef(null);

  const greet = () => {
    const existingTextBox = icon.current.querySelector('div');
    if(existingTextBox){
      existingTextBox.remove();
    }
    const textbox = document.createElement('div');
    const par = document.createElement('p');

    par.innerHTML= "Hey, wasup!";
    textbox.appendChild(par);
    textbox.style.position= "absolute";  
    icon.current.appendChild(textbox);
    
    
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
      <div ref={icon}>

      <img  style={{position: "relative"}} onMouseOver={greet} alt="hero"  width="100" height="100"  className=" rounded-full w-15   " src="/avatar.png" ></img>
      </div>

      <h1 className="text-4xl mt-10  font-semibold text-accentv md:text-6xl lg:text-7xl ">
        <span ref={web} className="text-cyan-300	">
        Front-End Flair,
        </span>
        <span ref={full} className="text-rose-300 ">  Full Stack Power </span>
      </h1>
    </div>
    </>
  );
}
export default Herotxt;
