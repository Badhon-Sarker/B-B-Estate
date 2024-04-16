/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-1": "url('https://i.ibb.co/LhC43bY/pexels-pixabay-210617.jpg')",
        "banner-2": "url('https://i.ibb.co/HBr55Wb/pexels-pixabay-276724.jpg')",
        "banner-3": "url('https://i.ibb.co/ss2ZhZZ/pexels-photomix-company-565324.jpg')"

      },
      fontFamily: {
        "poppins" :  '"Poppins", sans-serif'
      }

    },
  },
  plugins: [require("daisyui")],
}

