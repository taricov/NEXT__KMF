module.exports = {
  // important: true,
  // corePlugins: {
  //   preflight: false,
  // },
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        youtube: "#FF0000",
        twitter: "#00acee",
        reddit: "#FF5700",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("prettier-plugin-tailwindcss")
  ],
};
