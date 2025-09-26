/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { min: "320px", max: "480px" },

        md: { min: "481px", max: "768px" },

        mdl: { min: "769px", max: "1023px" },

        lg: { min: "1024px", max: "1280px" },

        xl: { min: "1281px", max: "1535px" },
        // => @media (min-width: 1280px and max-width: 1535px) { ... }
        
        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
      },

      fontFamily :{
        font1: ['"Kaushan Script"','serif']
       
      }
      
    },
  },
  plugins: [],
}

