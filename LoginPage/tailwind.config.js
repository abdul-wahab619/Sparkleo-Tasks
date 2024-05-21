/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        "3xl": "22px",
      },
      backgroundColor: {
        "custom-red": "rgba(233, 41, 40, 1)",
      },
    },
  },
  plugins: [],
};
