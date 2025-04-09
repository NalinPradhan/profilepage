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
      <div className="m-10 p-5 relative z-0">
        {/* First Project - Birdie */}
        <div className="border rounded-lg border-zinc-700 p-6 shadow-lg bg-white dark:bg-zinc-900 mb-10">
          <h2 className="text-2xl font-semibold text-slate-700 dark:text-primarytext-dark mb-8 text-center">
            My Works
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Project Description */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-700 dark:text-primarytext-dark">
                Birdie - Service Provider App
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                A modern mobile application designed to connect users with
                professional movers and maids. Built with a focus on user
                experience and clean design,
                <em className="bg-lime-300 dark:bg-lime-400 dark:text-black">
                  {" "}
                  Birdie makes finding and booking service providers effortless.
                </em>
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-slate-700 dark:text-primarytext-dark">
                  Key Features:
                </h4>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1">
                  <li>Intuitive service provider search</li>
                  <li>Clean and modern UI design</li>
                  <li>User profile management</li>
                  <li>Service rating system</li>
                </ul>
              </div>
              <div className="pt-4">
                <span className="inline-block bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  Figma
                </span>
                <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  UI/UX Design
                </span>
                <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  Hi-Fi Prototype
                </span>
              </div>
            </div>

            {/* Project Image */}
            <div className="flex justify-center items-center">
              <div
                className="w-1/2 animate-hover cursor-pointer"
                onClick={() => openModal("/birdie-mockup.png")}
              >
                <img
                  src="/birdie-mockup.png"
                  alt="Birdie App Mockup"
                  className="rounded-lg w-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Second Project - Prod by Nalin */}

          <div className="grid grid-cols-1 mt-14 lg:grid-cols-2 gap-8 items-center">
            {/* Project Image (Left side) */}
            <div className="flex justify-center items-center order-2 lg:order-1">
              <div
                className=" animate-hover cursor-pointer"
                onClick={() => openModal("/prodbynalinmovkup.png")}
              >
                <img
                  src="/bigger.png"
                  alt="Prod by Nalin Portfolio"
                  className="rounded-lg w-full object-contain"
                />
              </div>
            </div>

            {/* Project Description (Right side) */}
            <div className="space-y-4 order-1 lg:order-2">
              <h3 className="text-xl font-semibold text-slate-700 dark:text-primarytext-dark">
                prodbynalin
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                A music player built using{" "}
                <em className="bg-pink-200 dark:text-black dark:bg-pink-400">
                  MERN
                </em>{" "}
                stack and <em>Cloudinary</em> for media file storage plus{" "}
                <em>webhooks</em>. It is a personal project which I built to
                post the beats I make. The UI is inspired by one of my favourite
                cartoon character{" "}
                <em className="bg-lime-300 dark:bg-lime-400 dark:text-black">
                  Stitch.
                </em>
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-slate-700 dark:text-primarytext-dark">
                  Key Features:
                </h4>
                <ul className="list-disc list-inside text-slate-600 dark:text-slate-300 space-y-1">
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
              <div className="m-4 ">
                <a
                  className="font-mono dark:text-lime-400 text-purple-600 font-bold"
                  href="https://prodbynalin.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  👉 View Live 👈
                </a>
              </div>
              <div className="pt-4">
                <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  MERN
                </span>
                <span className="inline-block bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-100 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  Webhooks
                </span>
                <span className="inline-block bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-100 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                  Framer motion
                </span>
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
              <img
                src={selectedImage}
                alt="Project Mockup"
                className="w-full object-contain rounded-lg"
              />
              <button
                className="absolute top-2 right-2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
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
