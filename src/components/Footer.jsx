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
      className="bg-gradient-to-b from-light-card via-light-accent to-light-bg dark:from-dark-card dark:via-dark-accent dark:to-dark-bg relative z-0 mt-20 transform"
      id="footer"
      style={{
        backgroundSize: "100% 200%",
        boxShadow: "0 -10px 30px rgba(0, 0, 0, 0.05)",
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent-cyan-light/0 via-accent-cyan/30 to-accent-cyan-light/0"></div>

      <div
        ref={contentRef}
        className="lg:h-96 md:h-80 gap-7 flex justify-center items-center pt-12"
      >
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6 lg:px-16">
          <div className="space-y-6">
            <h4 className="text-xl font-display font-bold gradient-text">
              Contact Me
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-accent-cyan/10 text-accent-cyan">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <a
                  href="mailto:pnalin63@gmail.com"
                  className="text-blue-600 dark:text-blue-400 hover:text-accent-cyan dark:hover:text-accent-cyan-light transition-colors duration-300"
                >
                  pnalin63@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <div className="p-2 rounded-full bg-accent-rose/10 text-accent-rose mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div className="text-blue-600 dark:text-blue-400">
                  <div>(975) 77300501</div>
                  <div>(91) 7908618599</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-xl font-display font-bold gradient-text">
              Follow Me
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-zinc-800/10 text-zinc-700 dark:bg-zinc-700/20 dark:text-zinc-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </div>
                <a
                  href="https://github.com/NalinPradhan"
                  className="text-blue-600 dark:text-blue-400 hover:text-zinc-800 dark:hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-700/20 dark:text-blue-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                  </svg>
                </div>
                <a
                  href="https://in.linkedin.com/in/nalin-pradhan-499738192"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <div className="p-2 rounded-full bg-pink-600/10 text-pink-600 dark:bg-pink-700/20 dark:text-pink-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <a
                  href="https://www.instagram.com/__.nalin.___/"
                  className="text-blue-600 dark:text-blue-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors duration-300"
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

      <div className="relative w-full pb-12 pt-6">
        <div
          className="bg-yellow-400 animate-slow-spin dark:text-primarytext-dark text-primarytext-light rounded-full p-2
            absolute right-[8%] -top-16
            w-[90px] z-0 shadow-lg"
        >
          <img
            src="https://a.storyblok.com/f/171618/x/bde071226b/ornament-type-5-colour-a.svg"
            alt="decorative element"
            className="w-full h-auto"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-16 h-1 bg-gradient-to-r from-accent-cyan to-accent-rose rounded-full mb-4"></div>
          <p className="text-blue-600 dark:text-blue-400 text-sm text-center">
            &copy; {new Date().getFullYear()} Nalin Pradhan. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
