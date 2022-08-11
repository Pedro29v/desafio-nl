/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        low: "#9C27B0",
        mediun: "#43A047",
        high: "#FF3D00",
        secondary: "#00337A",
        button: "#64DD17",
        back: "#010F21",
      },
    },
  },
  plugins: [],
};
