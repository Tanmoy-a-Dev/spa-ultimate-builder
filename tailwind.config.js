/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Montserrat', 'Helvetica Neue', 'Arial', 'sans-serif'],
        secondary: ['Raleway', 'Georgia', 'Cambria', 'serif'],
        // ...
      },
      colors: {
        lighter_Color: '#cbd5e1', // lighter gray
        darker_Color: '#001029', // dark blue
        body_Color: '#ccc0b5', // body color
        lighterDarkOrange_Color: '#a76e04', // little dark orange
        // primaryColor: '#F9A826',
        primaryColor: '#2C3E50',
        // secondaryColor: '#f0eded',
        secondaryColor: '#F5F5F5',
        accentColor: '#46B7F9',
        textColor: '#333333',
      },
    },
  },
  plugins: [],
};
