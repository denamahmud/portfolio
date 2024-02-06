/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { 
      boxShadow : {
        shadowNav : '0 2px 5px rgba(255, 255, 255, 0.907)'
      },
      fontFamily: { 
        noto: ['Noto Sans', 'sans-serif'],
        protest: ['Protest Riot', 'sans-serif']
      },
      colors: {  
        textColor: '#bcbaba', 
        bgSecondaryColor: '#0e0e0e',
        textSecondaryColor: '#0e0e0e',
        boederSecondaryColor: '#0e0e0e', 
        linkHoverColor: '#e9c547',
        borderColor: '#e9c547' ,
        textPrimaryColor: '#e9c547',
        bgPrimaryColor: '#e9c547',
        borderPrimaryColor: '#e9c547',
      }, 
    },
  },
  plugins: [],
}
