/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "blog-grey-300":"#616161",
        "blog-aqua-300":"#02A28F",
      },
      padding:{
        "22":"22px",
        "blog-12":"12px", 

      }
    },
  },
  plugins: [],
}

