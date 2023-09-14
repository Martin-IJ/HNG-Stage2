/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: 'DM Sans',
      poppins: 'Poppins',
    },
    extend: {
      backgroundImage: {
        'poster': "url('./assets/Poster.png')",
      }
    },
  },
  plugins: [],
}

