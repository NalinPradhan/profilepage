module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "slow-spin": "spin 4s linear infinite",
      },
      motion: {
        DEFAULT: {
          enter: {
            duration: "2000ms",
          },
          spin: {
            duration: "3000ms", // Increased duration for spin animation
            repeat: "infinite", // Makes the spin continuous
          },
        },
      },
      colors: {
        moon: {
          mo: "#C0C0C0",
        },
        dark: {
          bg: "#1a1a1a",
          text: "#ffffff",
        },
        light: {
          bg: "#ffffff",
          text: "#1a1a1a",
        },
        primarytext: {
          light: "#1a1a1a",
          dark: "#e5e5e5", // lighter text for dark mode
        },
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
