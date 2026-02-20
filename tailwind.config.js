const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: false,
  optimizeFonts: false,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: '#5c6ac4',
      secondary: '#ecc94b',
      // ...
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-archivo)", "sans-serif"], 
      },
    },

    display: ["responsive", "group-hover", "focus-within", "hover", "focus"],

    // screens: {
    //   // 'sm': '500px',
    //   // 'md': [
    //   //   // Sidebar appears at 768px, so revert to `sm:` styles between 768px
    //   //   // and 868px, after which the main content area is wide enough again to
    //   //   // apply the `md:` styles.
    //   //   // {'min': '668px', 'max': '767px'},
    //   //   // {'min': '868px'}

    //   // ],
    //   'lg': '1024px',
    //   'xl': '1400px',
    //   '2xl': '1536px',
    // },
  },
  plugins: [],
};
