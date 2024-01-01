/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins:['Poppins,sans-serif'],
        montserrat:['Montserrat,sans-serif']
      },
     
      animation:{
        
          bounce2: 'bounce 2s  linear 2.5 both',
        
      }
    },
  },
  plugins: [],
}