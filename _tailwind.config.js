/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // replace the default container and breakpoints with a custom one
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      primary: ["var(--font-dmSans)"],
      secondary: ["var(--font-barlow)"],
    },
    // keep Tailwind's default color values but add new ones (extend)
    extend: {
      colors: {
        primary: "#121315",
        secondary: "#666666",
        accent: "#ffca3b",
        border: "#d7d7d7",
      },
      boxShadow: {
        custom: "0px 4px 54px 10px rgba(18, 19, 21, 0.06)",
      },
      backgroundImage: {
        hero: "url('/assets/img/hero/bg.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
