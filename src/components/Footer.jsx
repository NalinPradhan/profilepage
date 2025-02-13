import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black   " id="footer">
      <div className="lg:h-96 md:h-80  gap-7 flex justify-center items-center">
        <div className="container mx-auto flex-col justify-between items-center ml-56 mr-56">
          <div className="m-12 ">
            <h4 className="text-lg  text-blue-400 ">Contact Me</h4>
            <ul>
              <li>
                <p>
                  <a href="mailto:pnalin63@gmail.com" className="text-blue-300">
                    pnalin63@gmail.com
                  </a>
                </p>
              </li>
              <li>
                <p className="text-blue-300">
                  Phone: (975) 77300501 <br></br> (91) 7908618599
                </p>
              </li>
            </ul>
          </div>

          <div className="m-12 ">
            <h4 className="text-lg text-blue-400 ">Follow Me</h4>
            <ul>
              <li>
                <a
                  href="https://github.com/NalinPradhan"
                  className="text-blue-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://in.linkedin.com/in/nalin-pradhan-499738192"
                  className="text-blue-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/__.nalin.___/"
                  className="text-blue-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="bg-yellow-400 animate-slow-spin  dark:text-primarytext-dark text-primarytext-light rounded-full p-2
             absolute 
             sm:top-[150%] sm:left-[7%] sm:w-[80px]
             top-[180%] left-[8%] w-[60px]"
        >
          <img
            src="https://a.storyblok.com/f/171618/x/bde071226b/ornament-type-5-colour-a.svg"
            alt="decorative element"
            className="w-full h-auto "
          />
        </div>
      </div>
      <p className="text-blue-300 text-sm justify-center align items-center">
        &copy; {new Date().getFullYear()} Nalin Pradhan. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
