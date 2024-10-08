/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'Sans-serif'],
      },
      colors: {
        primary: "#082f49",
        hover: "#38bdf8",
        dark: {
          default: "#020617",
          400: "#94a3b8",
          300: "#cbd5e1",
        },
        success: "#22c55e",
        warning: "#fbbf24",
        error: "#dc2626",
      }
    },
  },
  plugins: [],
}
