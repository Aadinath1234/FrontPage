export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Includes all React files in the src folder
    "./public/index.html",        // Includes the index.html file
  ],
  theme: {
    
      extend: {
        colors: {
          note: '#c46210',
        },
  
         container:{
            center: true,
            padding: {
                DEFAULT: "1rem",
               sm:"2rem", 
            }  
         }
        
  
      },

      screens:{
        'xs': '480px', // Custom breakpoint for small devices
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      }
    },
  
  plugins: [
    daisyui,
  ],
};