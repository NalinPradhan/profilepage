import { Disclosure } from "@headlessui/react";
import { useState, useEffect } from "react";

const navigation = [
  {
    name: "Contact Me",
    logo: (
      <img
        width="25"
        height="25"
        src="https://img.icons8.com/doodle/48/phone--v1.png"
        alt="phone--v1"
      />
    ),
    href: "#footer",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
      className="border border-zinc-700 py-1 dark:bg-dark-bg"
    >
      <div className="px-2 sm:ml-2 sm:px-6 lg:px-0">
        <div className="relative mr-2 flex h-16 items-center justify-between">
          <div
            onClick={toggleDarkMode}
            className="flex items-center border border-zinc-700 sm:ml-1 sm:inset-1 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <div className="w-3 h-2 rounded-3xl bg-primarytext sm:w-0 sm:h-2"></div>
            <svg
              height="17"
              width="17"
              className="ml-2.5 
               fill-current text-yellow-400"
              viewBox="0 0 30 30"
            >
              <ellipse
                rx="10.307692"
                ry="10.307692"
                transform="matrix(1.455224 0 0 1.455224 15 15)"
                strokeWidth="0"
              />
            </svg>
            <div className="text-md py-2 pr-4 pl-1 mx-0 text-primarytext-light dark:text-primarytext-dark transition duration-200 hover:text-rose-300 sm:text-1xl">
              __.nalin.__
            </div>
          </div>

          <div className="border absolute border-zinc-700 rounded-full sm:justify-end right-0">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "text-white"
                      : "text-gray-700 hover:text-teal-500",
                    "rounded-md px-3 m-3 text-base font-medium"
                  )}
                >
                  <div className="flex gap-2 group transition duration-200 hover:text-teal-500">
                    {item.logo}
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
