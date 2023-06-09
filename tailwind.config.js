/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./descriptions/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(75px, 1fr))",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        robotoMono: ["var(--font-robotoMono)"],
      },
    },
  },
  plugins: [require("daisyui")],
};
