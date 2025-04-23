import React, { useState, useEffect } from "react";

function Works() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Control body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="m-10 p-5 relative z-0 border-t dark:border-hidden">
        <h2 className="section-heading text-center mb-10">My Works</h2>

        <div className="space-y-16">
          {/* Combined Projects Card */}
          <div className="card overflow-hidden p-0">
            {/* First Project - Birdie */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-zinc-200 dark:border-zinc-800">
              {/* Project Description */}
              <div className="p-8 space-y-5">
                <h3 className="text-xl font-semibold text-slate-700 dark:text-primarytext-dark">
                  Birdie - Service Provider App
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  A modern mobile application designed to connect users with
                  professional movers and maids. Built with a focus on user
                  experience and clean design,{" "}
                  <span className="bg-gradient-to-r from-accent-rose to-accent-rose-light dark:from-accent-yellow dark:to-accent-yellow-light bg-clip-text text-transparent font-medium">
                    <em>
                      Birdie makes finding and booking service providers
                      effortless.
                    </em>
                  </span>
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-slate-700 dark:text-primarytext-dark">
                    Key Features:
                  </h4>
                  <ul className="list-disc ml-5 text-zinc-600 dark:text-zinc-300 space-y-1">
                    <li>Intuitive service provider search</li>
                    <li>Clean and modern UI design</li>
                    <li>User profile management</li>
                    <li>Service rating system</li>
                  </ul>
                </div>
                <div className="pt-3 pb-2">
                  <a
                    className="button-primary inline-flex items-center space-x-2"
                    href="https://www.figma.com/proto/y4fAGYuBpbOfxeuGY6emAk/Birdie?page-id=81%3A807&node-id=81-808&p=f&viewport=993%2C-1113%2C1.43&t=4j5vpuwI2TI910y5-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=81%3A808"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>View in Figma </span>
                    <img
                      width="18"
                      height="18"
                      src="https://img.icons8.com/ios-filled/50/figma--v1.png"
                      alt="figma--v1"
                    />
                  </a>
                </div>
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-accent-yellow-light/20 to-accent-yellow/30 text-accent-yellow-dark dark:text-accent-yellow-light">
                    Figma
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-accent-cyan-light/20 to-accent-cyan/30 text-accent-cyan-dark dark:text-accent-cyan-light">
                    UI/UX Design
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-accent-rose-light/20 to-accent-rose/30 text-accent-rose-dark dark:text-accent-rose-light">
                    Hi-Fi Prototype
                  </span>
                </div>
              </div>

              {/* Project Image */}
              <div className="flex justify-center items-center p-8">
                <div
                  className="w-1/2 animate-hover cursor-pointer relative"
                  onClick={() => openModal("/birdie-mockup.png")}
                >
                  <img
                    src="/birdie-mockup.png"
                    alt="Birdie App Mockup"
                    className="rounded-lg w-full object-contain relative"
                  />
                </div>
              </div>
            </div>

            {/* Second Project - Prod by Nalin */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Project Image (Left side) */}
              <div className="flex justify-center items-center order-2 lg:order-1 p-8">
                <div
                  className="w-3/4 animate-hover cursor-pointer relative"
                  onClick={() => openModal("/prodbynalinmovkup.png")}
                >
                  <img
                    src="/bigger.png"
                    alt="Prod by Nalin Portfolio"
                    className="rounded-lg w-full object-contain relative"
                  />
                </div>
              </div>

              {/* Project Description (Right side) */}
              <div className="p-8 space-y-5 order-1 lg:order-2">
                <h3 className="text-xl font-semibold text-slate-700 dark:text-primarytext-dark">
                  prodbynalin
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  A music player built using{" "}
                  <span className="bg-gradient-to-r from-accent-rose-light to-accent-rose bg-clip-text text-transparent font-medium">
                    MERN
                  </span>{" "}
                  stack and Cloudinary for media file storage plus webhooks. It
                  is a personal project which I built to post the beats I make.
                  The UI is inspired by one of my favourite cartoon character{" "}
                  <span className="bg-gradient-to-r from-accent-yellow to-accent-yellow-light bg-clip-text text-transparent font-medium">
                    Stitch.
                  </span>
                </p>
                <div className="space-y-2">
                  <h4 className="font-medium text-slate-700 dark:text-primarytext-dark">
                    Key Features:
                  </h4>
                  <ul className="list-disc ml-5 text-zinc-600 dark:text-zinc-300 space-y-1">
                    <li>
                      Dark sky background makes Stitch comfortable as he is an
                      alien.👽
                    </li>
                    <li>
                      Music to listen to by a hobbyist producer/web developer.
                    </li>
                    <li>
                      Shooting stars for him to make wishes to destroy Earth.🌍
                    </li>
                    <li>
                      Responsive design fits mobile as well as desktop screens.
                    </li>
                  </ul>
                </div>
                <div className="pt-3 pb-2">
                  <a
                    className="button-primary inline-flex items-center space-x-2"
                    href="https://prodbynalin.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>View Live</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
                <div className="pt-4 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-purple-400/20 to-purple-500/30 text-purple-800 dark:text-purple-300">
                    MERN
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-pink-400/20 to-pink-500/30 text-pink-800 dark:text-pink-300">
                    Webhooks
                  </span>
                  <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-indigo-400/20 to-indigo-500/30 text-indigo-800 dark:text-indigo-300">
                    Framer Motion
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Portal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[99999]">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-[500px] p-4 relative pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-rose rounded-lg blur opacity-30"></div>
              <img
                src={selectedImage}
                alt="Project Mockup"
                className="w-full object-contain rounded-lg relative z-10"
              />
              <button
                className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-colors duration-300 z-20"
                onClick={() => setIsModalOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Works;
