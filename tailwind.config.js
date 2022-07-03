/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      fredoka: ["Fredoka", "sans-serif"],
      noto: ["Noto Sans", "sans-serif"],
    },
    colors: {
      graffiti: "#3A3A3A",
    },
    extend: {
      backgroundImage: {
        header: "url('/public/bgheader.png')",
      },
    },
  },
  plugins: [],
};
