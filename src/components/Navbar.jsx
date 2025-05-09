import { Disclosure } from "@headlessui/react";
import { useState, useEffect } from "react";

const navigation = [
  {
    name: "Say Hi!",
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 sm:h-5 sm:w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      </svg>
    ),
    href: "https://linktr.ee/nalin_pradhan",
    current: false,
  },
];

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Disclosure
      as="nav"
      className="bg-light-card/80 backdrop-blur-md dark:bg-dark-card/80 shadow-md border-b border-zinc-200 dark:border-zinc-800 sticky top-0 z-50 py-1"
    >
      <div className="px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative flex h-16 items-center justify-between">
          <div
            onClick={toggleDarkMode}
            className="flex items-center bg-light-accent dark:bg-dark-accent border border-zinc-200 dark:border-zinc-700 rounded-full cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 px-2 py-1 sm:px-3 sm:py-1 group"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center relative">
              {darkMode ? (
                <svg
                  className="w-5 h-5 text-accent-yellow transition-transform duration-300 group-hover:rotate-90"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
                </svg>
              ) : (
                <svg
                  className="w-5 h-5 text-accent-cyan-dark transition-transform duration-300 group-hover:rotate-90"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </div>
            <div className="text-sm sm:text-md pl-1 pr-2 font-medium text-primarytext-light dark:text-primarytext-dark transition duration-200 hover:text-accent-rose dark:hover:text-accent-rose-light">
              __.nalin.__
            </div>
          </div>
          <div>
            <img
              className="h-12 dark:invert"
              src="/signature.png"
              alt=""
              srcset=""
            />
          </div>

          <div className="flex items-center">
            <div className="flex space-x-2 sm:space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-current={item.current ? "page" : undefined}
                  className="flex items-center bg-gradient-to-br from-accent-cyan-light/10 to-accent-rose-light/10 dark:from-accent-cyan-dark/10 dark:to-accent-rose-dark/10 border border-zinc-200 dark:border-zinc-700 rounded-full cursor-pointer hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300 px-2 py-1 sm:px-3 sm:py-1"
                >
                  <span className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-accent-cyan dark:text-accent-cyan-light">
                    {item.logo}
                  </span>
                  <div className="text-sm sm:text-md font-medium text-primarytext-light dark:text-primarytext-dark transition duration-200 hover:text-accent-cyan dark:hover:text-accent-cyan-light pl-1 pr-2 whitespace-nowrap">
                    {item.name}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
}
