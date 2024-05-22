/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background_1: "url('./subtle-prism.svg')",
      },
      backgroundSize: {
        cover: "cover",
        contain: "contain",
        auto: "auto",
      },
    },
  },
  plugins: [],
};
