import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    // Parallax effect for the footer
    gsap.fromTo(
      footerRef.current,
      {
        backgroundPosition: "0% 0%",
      },
      {
        backgroundPosition: "0% 100%",
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Float effect for the content
    gsap.fromTo(
      contentRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-gray-800 relative z-0 mt-20 transform"
      id="footer"
      style={{
        backgroundSize: "100% 200%",
        boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.1)",
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
      }}
    >
      <div
        ref={contentRef}
        className="lg:h-96 md:h-80 gap-7 flex justify-center items-center"
      >
        <div className="container mx-auto flex-col justify-between items-center ml-56 mr-56">
          <div className="m-12">
            <h4 className="text-lg text-blue-700 dark:text-blue-500 font-semibold">
              Contact Me
            </h4>
            <ul>
              <li>
                <p>
                  <a
                    href="mailto:pnalin63@gmail.com"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                  >
                    pnalin63@gmail.com
                  </a>
                </p>
              </li>
              <li>
                <p className="text-blue-600 dark:text-blue-400">
                  Phone: (975) 77300501 <br></br> (91) 7908618599
                </p>
              </li>
            </ul>
          </div>

          <div className="m-12">
            <h4 className="text-lg text-blue-700 dark:text-blue-500 font-semibold">
              Follow Me
            </h4>
            <ul>
              <li>
                <a
                  href="https://github.com/NalinPradhan"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://in.linkedin.com/in/nalin-pradhan-499738192"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/__.nalin.___/"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative w-full pb-16">
        <div
          className="bg-yellow-400 animate-slow-spin dark:text-primarytext-dark text-primarytext-light rounded-full p-2
            absolute right-[8%] -top-16
            w-[90px] z-0"
        >
          <img
            src="https://a.storyblok.com/f/171618/x/bde071226b/ornament-type-5-colour-a.svg"
            alt="decorative element"
            className="w-full h-auto"
          />
        </div>
        <p className="text-blue-600 dark:text-blue-400 text-sm text-center">
          &copy; {new Date().getFullYear()} Nalin Pradhan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
