const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    // Example content paths...
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
    },
  },
 
  plugins: [],
}
