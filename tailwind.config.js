/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://www.theemon.com/c/charity/LivePreview/assets/img/slide-banner-01.jpg')",
        hero1: "url('https://www.theemon.com/c/charity/LivePreview/assets/img/breadcrumb-bg.jpg')",
      },
    },
  },
  plugins: [],
};
