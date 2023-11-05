/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-primary": "rgba(174,122,255)",
        "green-primary": "rgba(152, 233, 171)",
        "yellow-primary": "rgba(250, 232, 164)",
        "red-primary": "rgba(233, 152, 152)",
        "gray-primary": "rgba(95, 100, 109)",
        "cream-primary": "rgba(250, 244, 240)",
        "poor-black": "rgba(22, 22, 22)",
      },
      fontFamily: {
        sans: ["Roboto Flex", "sans-serif"],
      },

      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
