/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login_bgimage: "url('/src/assets/images/login_bgimage.jpg')",
      },
    },
  },
  plugins: [],
};
