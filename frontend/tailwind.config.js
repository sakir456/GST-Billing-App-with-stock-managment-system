/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
                customGreen: "#308760  ",
                customLightGreen: "#39916F",
                custom3shadeslight: "#4CB98E",
                sageGreen: "#4A9D7A"
                
            },
          },
        },
  plugins: [],
}

