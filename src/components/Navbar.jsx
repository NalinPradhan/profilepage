import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFileCode } from '@fortawesome/free-solid-svg-icons';

const navigation = [
  {
    name: "Home",
    logo: (
      <svg
        fill="#FFFFFF"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="20px"
        height="20px"
        viewBox="0 0 48 48"
        style={{ enableBackground: "new 0 0 48 48" }}
        xmlSpace="preserve"
      >
        <path
          style={{
            fill: "none",
            strokeWidth: 4.5,
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
          }}
          className="stroke-gray-600 group-hover:stroke-teal-500 transition duration-200"
          d="M8.5,41.5h10c0.552,0,1-0.448,1-1v-10c0-1.105,0.895-2,2-2h5c1.105,0,2,0.895,2,2v10c0,0.552,0.448,1,1,1h10c0.552,0,1-0.448,1-1V21.411c0-1.838-0.843-3.575-2.287-4.713L24,5.5L9.787,16.698C8.343,17.836,7.5,19.573,7.5,21.411V40.5C7.5,41.052,7.948,41.5,8.5,41.5z"
        />
      </svg>
    ),
    href: "#",
    current: false,
  },
  {
    name: "My Projects",
    logo: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="20px"
        width="20px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z"></path>
      </svg>
    ),
    href: "#",
    current: false,
  },
  {
    name: "About me",
    logo: (
      <svg
        className="mt-0.5"
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="20px"
        width="20px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.715 12c1.151 0 2-.849 2-2s-.849-2-2-2-2 .849-2 2 .848 2 2 2z"></path>
        <path d="M20 4H4c-1.103 0-2 .841-2 1.875v12.25C2 19.159 2.897 20 4 20h16c1.103 0 2-.841 2-1.875V5.875C22 4.841 21.103 4 20 4zm0 14-16-.011V6l16 .011V18z"></path>
        <path d="M14 9h4v2h-4zm1 4h3v2h-3zm-1.57 2.536c0-1.374-1.676-2.786-3.715-2.786S6 14.162 6 15.536V16h7.43v-.464z"></path>
      </svg>
    ),
    href: "#",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
} 

export default function Navbar() {
  return (
    <Disclosure as="nav" className="border border-zinc-700 py-1">
      <div className="mx-auto max-w-7xl px-2 sm:ml-2 sm:px-6 lg:px-0">
        <div className="relative flex h-16 items-center justify-end">
          <div className="flex  ml items-center border border-zinc-700   sm:ml-1 sm:inset-1  rounded-full">
            <div class="w-3  h-2 rounded-3xl bg-primarytext sm:w-0  sm:h-2"></div>
            <svg
              height= '17' 
              width= '17' 
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
              // className="text-teal-500"
                rx="10.307692"
                ry="10.307692"
                transform="matrix(1.455224 0 0 1.455224 15 15)"
                // fill="#161718"
                stroke-width="0"
              />
            </svg>
            <a
              href
              className="text-md py-2 pr-4  pl-1 mx-0  text-primarytext transition duration-200 hover:text-rose-300 sm:text-1xl"
            >
              __.nalin.__
            </a>
          </div>
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative text-base inline-flex items-center justify-center rounded-md p-2 focus:ring-inset ">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex  flex-1   items-center justify-center sm:items-stretch sm:justify-start text-9xl nav">
            <div className="border border-zinc-700 rounded-full hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? " text-white"
                        : "text-gray-700 hover:text-teal-500 ",
                      "rounded-md  px-3 m-3 text-base font-medium"
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
      </div>

      <DisclosurePanel className="sm:hidden ">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-700 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
