/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#8B5E3C",
        secondary: "#D2B48C",
        accent: "#F5DEB3",
      },
      fontFamily: {
        prata: ["Prata", "serif"],
        sans: ["Prata", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in",
        moveRight: "moveRight 1s infinite ease-in-out",
        float: 'float 5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(45deg)' },
        },
        moveRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(5px)" },
        },
      },
    },
  },
  plugins: [],
};
