import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../index.css";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Del() {
  const textRef = useRef(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (textRef.current) {
        const tl = gsap.timeline({ repeat: -1 });
  
        const text = textRef.current.innerText;
        const words = text.split(/\s+/);
        textRef.current.innerHTML = words
          .map((word) => {
            return `<span class="word">${word}</span>`;
          })
          .join(" ");
  
        const spans = textRef.current.querySelectorAll("span");
  
        tl.fromTo(
          textRef.current, // animate the parent element
          {
            y: 0, // start at current position
          },
          {
            y: '-=200', // move up by 200 pixels
            duration: 3,
            ease: "power2.inOut",
          }
        );
  
        spans.forEach((span) => {
          tl.fromTo(
            span,
            {
              opacity: 0,
            },
            {
              duration: 0.01,
              opacity: 1,
              ease: "none",
            }
          ).to(span, {
            duration: 0.1,
            opacity: 0,
            ease: "none",
            delay: 0.1,
          });
        });
      }
    }, 3000);
  
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  

  return (
    <>
      <div  className="text-white py-14">
      <div className=""  ref={textRef}>
        <h1 >
          .སྐུ་གཟུགས། I am Nalin ནལིན། this is my portfolio སྒོའི་སྒོ།
        </h1>
      </div>
    </div>
    </>
  );
}
export default Del;
