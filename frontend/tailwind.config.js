/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
                customGreen: "#41B06E  ",
                customLightGreen: "#8DECB4"
            },
          },
        },
  plugins: [],
}

