/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
module.exports = {
  darkMode: "class",
  content: [
    // Or if using `src` directory:
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        default: ["var(--font-inter)", "system-ui", "sans-serif"],
        bsmnt: ["var(--font-bsmnt)", "system-ui", "sans-serif"],
      },
      colors: {
        gray: colors.zinc,
        "gray-1000": "rgb(17,17,19)",
        "gray-1100": "rgb(10,10,11)",
        vercel: {
          pink: "#FF0080",
          blue: "#0070F3",
          cyan: "#50E3C2",
          orange: "#F5A623",
          violet: "#7928CA",
        },
        "spotify-green": "#1DB954",
        "apple-black": "#333333",
        "amazon-orange": "#FF9900",
        "tia-maria": {
          50: "#fff8ed",
          100: "#ffefd5",
          200: "#fedcaa",
          300: "#fdc274",
          400: "#fb9d3c",
          500: "#f98016",
          600: "#ea650c",
          700: "#c14b0c",
          800: "#9a3c12",
          900: "#7c3312",
        },
      },
      boxShadow: {
        neu1: "-5px -5px 15px 2px rgb(0 0 0 / 0.1)",
        neu2: "-5px -5px 10px 2px rgb(0.9 0.9 0.9 / 0.1)",
        innerneu1: "inset -5px -5px 10px 2px rgb(0.9 0.9 0.9 / 1)",
        innerneu2: "inset -5px -5px 15px 2px rgb(0 0 0 / 0.1)",
      },
      backgroundImage: ({ theme }) => ({
        ryan: "url('/bg-ryan-1.png')",
        "vc-border-gradient": `radial-gradient(at left top, ${theme(
          "colors.gray.500"
        )}, 50px, ${theme("colors.gray.800")} 50%)`,
      }),
      keyframes: ({ theme }) => ({
        rerender: {
          "0%": {
            ["border-color"]: theme("colors.vercel.pink"),
          },
          "40%": {
            ["border-color"]: theme("colors.vercel.pink"),
          },
        },
        highlight: {
          "0%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
          "40%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
        },
        loading: {
          "0%": {
            opacity: ".2",
          },
          "20%": {
            opacity: "1",
            transform: "translateX(1px)",
          },
          to: {
            opacity: ".2",
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        translateXReset: {
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeToTransparent: {
          "0%": {
            opacity: 1,
          },
          "40%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      }),
      animation: {
        // Tooltip
        "slide-up-fade": "slide-up-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        "slide-down-fade": "slide-down-fade 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        // Tooltip
        "slide-up-fade": {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "slide-down-fade": {
          "0%": { opacity: 0, transform: "translateY(-6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms"),
      require("@tailwindcss/typography"),
      require("@tailwindcss/line-clamp"),
      plugin(({ addVariant }) => {
        addVariant("radix-side-top", '&[data-side="top"]');
        addVariant("radix-side-bottom", '&[data-side="bottom"]');
      }),
    ],
  },
};
