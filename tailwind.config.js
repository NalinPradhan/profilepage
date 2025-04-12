module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Hanken Grotesk", "system-ui", "sans-serif"],
        display: ["Hanken Grotesk", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": "0.65rem",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.8 },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
      },
      animation: {
        "slow-spin": "spin 4s linear infinite",
        hover: "float 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        shimmer: "shimmer 8s ease-in-out infinite",
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
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(var(--tw-gradient-stops))",
        "gradient-diagonal":
          "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      },
      colors: {
        moon: {
          mo: "#C0C0C0",
        },
        dark: {
          bg: "#121212",
          card: "#1e1e1e",
          accent: "#2d2d2d",
          text: "#ffffff",
        },
        light: {
          bg: "#f8f9fa",
          card: "#ffffff",
          accent: "#f1f3f5",
          text: "#1a1a1a",
        },
        primarytext: {
          light: "#1a1a1a",
          dark: "#f1f3f5", // lighter text for dark mode
        },
        accent: {
          cyan: {
            light: "#66e0ff",
            DEFAULT: "#33d6ff",
            dark: "#00bcd4",
          },
          rose: {
            light: "#ff99c8",
            DEFAULT: "#ff66aa",
            dark: "#e6005c",
          },
          yellow: {
            light: "#ffdf80",
            DEFAULT: "#ffd24d",
            dark: "#ffbc00",
          },
        },
      },
      boxShadow: {
        card: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        "card-hover":
          "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
        "inner-light": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)",
        "inner-dark": "inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)",
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
