/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "cold-purple": {
          50: "#f2f5fb",
          100: "#e7edf8",
          200: "#d4def1",
          300: "#b9c8e8",
          400: "#92a3d9",
          500: "#8490d0",
          600: "#6b73c0",
          700: "#5a5fa8",
          800: "#4a4f89",
          900: "#41466e",
          950: "#262840",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
