import React, { useState, useEffect } from "react";

const projects = [
  {
    title: "Bhutan Incense",
    description: (
      <>
        <span>🫧 </span>A product showcase for Bhutan Incense. The company
        creates{" "}
        <span className="bg-gradient-to-r from-accent-rose to-accent-rose-light dark:from-accent-yellow dark:to-accent-yellow-light bg-clip-text text-transparent font-medium">
          <em>handcrafted incense </em>
        </span>
        using traditional Bhutanese methods.
      </>
    ),
    features: ["Modern Design", "Smooth Animations"],
    tags: ["Figma", "UI/UX", "GSAP Animations", "Product Showcase"],
    imageType: "video",
    imageSrc:
      "https://res.cloudinary.com/dlyxpzd0s/video/upload/v1752055585/rr2_wbgaet.mp4",
    link: {
      url: "https://www.figma.com/proto/e0FShubHzZjWdgBhtVDpAm/Untitled?page-id=0%3A1&node-id=47-92&m=draw&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=47%3A92&t=3zdgTGtK5JUrhFpe-1",
      label: "View prototype",
      icon: (
        <img
          width="18"
          height="18"
          src="https://img.icons8.com/ios-filled/50/figma--v1.png"
          alt="figma--v1"
        />
      ),
    },
  },
  {
    title: "Food Judge",
    description: (
      <>
        <span>🌟 </span>A fun app which uses food prefernces to guess which part
        of India the player is from.{" "}
        <span className="bg-gradient-to-r from-accent-yellow to-accent-yellow-light bg-clip-text text-transparent font-medium">
          <em>Central,Northern, Eastern, Western and Southern </em>
        </span>
        regions of India have different food preferences and this app uses that
        to guess the region.
      </>
    ),
    features: ["Playful Design"],
    tags: ["Modern UI", "React", "Game"],
    imageType: "image",
    imageSrc: "/fd.png",
    link: {
      url: "https://food-judge.bytexl.live/",
      label: "View Live",
      icon: (
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
      ),
    },
  },
  {
    title: "Birdie - Service Provider App",
    description: (
      <>
        <span className="">🫧 </span>A modern mobile application designed to
        connect users with professional movers and maids. Built with a focus on
        user experience and clean design,{" "}
        <span className="bg-gradient-to-r from-accent-rose to-accent-rose-light dark:from-accent-yellow dark:to-accent-yellow-light bg-clip-text text-transparent font-medium">
          <em>
            Birdie makes finding and booking service providers effortless.
          </em>
        </span>
      </>
    ),
    features: [
      "Intuitive service provider search",
      "Clean and modern UI design",
      "User profile management",
      "Service rating system",
    ],
    tags: ["Figma", "UI/UX Design", "Hi-Fi Prototype"],
    imageType: "image",
    imageSrc: "/birdie-mockup.png",
    link: {
      url: "https://www.figma.com/proto/y4fAGYuBpbOfxeuGY6emAk/Birdie?page-id=81%3A807&node-id=81-808&p=f&viewport=993%2C-1113%2C1.43&t=4j5vpuwI2TI910y5-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=81%3A808",
      label: "View prototype",
      icon: (
        <img
          width="18"
          height="18"
          src="https://img.icons8.com/ios-filled/50/figma--v1.png"
          alt="figma--v1"
        />
      ),
    },
  },
  {
    title: "prodbynalin",
    description: (
      <>
        <span className="text-sm">🎙️</span>A personal project which I built to
        post the beats I make. The UI is inspired by one of my favourite cartoon
        character{" "}
        <span className="bg-gradient-to-r from-accent-rose to-accent-rose-light dark:from-accent-yellow dark:to-accent-yellow-light bg-clip-text text-transparent font-medium">
          <em>Stitch. </em>
        </span>
      </>
    ),
    features: [
      "Intuitive service provider search",
      "Clean and modern UI design",
      "User profile management",
      "Service rating system",
    ],
    tags: ["MERN", "UI/UX Design", "Muisc Player"],
    imageType: "image",
    imageSrc: "/prodbynalinmovkup.png",
    link: {
      url: "https://prodbynalin.netlify.app/",
      label: "View Live",
      icon: (
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
      ),
    },
  },
];

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
      <div
        id="works"
        className="m-4 sm:m-20 p-5 relative z-0 border-t dark:border-hidden leading-snug "
      >
        <h2 className="section-heading text-center mb-10">My Works</h2>
        <div className="space-y-16">
          <div className="card overflow-hidden p-0">
            {projects.map((proj, idx) => (
              <div
                key={proj.title}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-zinc-200 dark:border-zinc-800"
              >
                {/* Alternate order for image/description */}
                <div
                  className={`flex justify-center items-center p-8 ${
                    idx % 2 === 1 ? "lg:order-2 " : " lg:order-2"
                  }`}
                >
                  <div
                    className={`w-4/5 animate-hover cursor-pointer relative`}
                    onClick={() => openModal(proj.imageSrc)}
                  >
                    {proj.imageType === "video" ? (
                      <video
                        src={proj.imageSrc}
                        autoPlay
                        loop
                        muted
                        className="rounded-lg w-full object-contain relative"
                      />
                    ) : (
                      <img
                        src={proj.imageSrc}
                        alt={proj.title}
                        className="rounded-lg w-full object-contain relative"
                      />
                    )}
                  </div>
                </div>
                <div
                  className={`p-8 space-y-5 ${
                    idx % 2 === 1 ? "order-1 lg:order-2" : "order-2 lg:order-1"
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-slate-700 dark:text-primarytext-dark">
                    {proj.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium text-slate-700 dark:text-primarytext-dark">
                      Key Features:
                    </h4>
                    <ul className="list-disc ml-5 text-zinc-600 dark:text-zinc-300 space-y-1">
                      {proj.features.map((f) => (
                        <li key={f}>{f}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 pb-2">
                    <a
                      className="button-primary inline-flex items-center space-x-2"
                      href={proj.link.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{proj.link.label}</span>
                      {proj.link.icon}
                    </a>
                  </div>
                  <div className="pt-4 flex flex-wrap gap-2">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-accent-yellow-light/20 to-accent-yellow/30 text-accent-yellow-dark dark:text-accent-yellow-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
            {/* ...other projects if any... */}
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
              className="w-[90vw] max-w-[700px] p-4 relative pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-cyan to-accent-rose rounded-lg blur opacity-30"></div>
              {selectedImage.endsWith(".mp4") ? (
                <video
                  src={selectedImage}
                  controls
                  autoPlay
                  loop
                  className="w-full max-h-[80vh] object-contain rounded-lg relative z-10"
                />
              ) : (
                <img
                  src={selectedImage}
                  alt="Project Mockup"
                  className="w-full max-h-[80vh] object-contain rounded-lg relative z-10"
                />
              )}
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
