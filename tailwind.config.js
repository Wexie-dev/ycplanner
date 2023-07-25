/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        butler: ['var(--font-butler)'],
        bellina: ['var(--font-bellina)'],
      },
      backgroundImage: {
        banner: "url('/images/sections/banner/banner.png')",
        mobileBanner: "url('/images/sections/banner/mobile-banner.png')",
        tabletBanner: "url('/images/sections/banner/tablet-banner.png')",
      },
    },
  },
  plugins: [],
};
