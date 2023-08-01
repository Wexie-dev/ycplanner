/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        typographyGray: '#36373A',
        typographyPink: '#996058',
        primary: '#C2857D', 
        secondary: '#EFB8Aa9',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)'],
        butler: ['var(--font-butler)'],
        anguilla: ['var(--font-anguilla)'],
      },
      backgroundImage: {
        banner: "url('/images/sections/banner/banner.png')",
        mobileBanner: "url('/images/sections/banner/mobile-banner.png')",
        tabletBanner: "url('/images/sections/banner/tablet-banner.png')",
      },
      screens: {
        '3xl': '1920px', // 1920px and above (e.g., 2k)
        '4xl': '2560px', // 2560px and above (e.g., 4k)
      },
    },
  },
  plugins: [],
};
