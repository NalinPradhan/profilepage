import {
  Disclosure
} from "@headlessui/react";

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
  return (
    <Disclosure as="nav" className="border border-zinc-700 py-1">
      <div className="px-2 sm:ml-2 sm:px-6 lg:px-0">
        <div className="relative mr-2 flex h-16 items-center justify-between">
          <div className="flex  items-center border border-zinc-700 sm:ml-1 sm:inset-1 rounded-full">
            <div className="w-3 h-2 rounded-3xl bg-primarytext sm:w-0 sm:h-2"></div>
            <svg
              height="17"
              width="17"
              id="eFaK2wlWNvV1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              shape-rendering="geometricPrecision"
              text-rendering="geometricPrecision"
              project-id="9dd9cf849c7f4e2d951697394f677d29"
              export-id="838399e4b64a44a4a55ee0b582c83a79"
              cached="false"
              className="text-teal-400 fill-current ml-2.5"
            >
              <ellipse
                rx="10.307692"
                ry="10.307692"
                transform="matrix(1.455224 0 0 1.455224 15 15)"
                stroke-width="0"
              />
            </svg>
            <a
              href="#here"
              className="text-md py-2 pr-4 pl-1 mx-0 text-primarytext transition duration-200 hover:text-rose-300 sm:text-1xl"
            >
              __.nalin.__
            </a>
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
