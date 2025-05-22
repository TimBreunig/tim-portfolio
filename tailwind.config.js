/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
    },
    screens: {
        "sm": "640px",
        "md": "768px",
        "lg": "1024px",
        "xl": "1280px",
        "2xl": "1440px",
    },
    fontFamily: {
        primary: "var(--font-montserrat)",
        secondary: "var(--font-inconsolata)",
    },
    extend: {
      colors: {
        primary: {
          900: "#F5F5FC",
          800: "#D0D0DB",
          700: "#A8A8BA",
          600: "#89899C",
          500: "#68687A",
          400: "#4A4A5C",
          300: "#2F2F3B",
          200: "#1C1C22",
          100: "#141417",
          0: "#0F0F12",
        },
        accent: {
          900: "#FAFDFF",
          800: "#BAE2FF",
          700: "#85CEFF",
          600: "#57B8FF",
          500: "#24A7FF",
          400: "#0099ff",
          300: "#0085DE",
          200: "#0060A1",
          100: "#08436E",
          0: "#072133",
        },
      },
      flex: {
        '2': '0 0 32%'
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(ellipse at 95% 0, #2F2F3B 0%, #1C1C22 50%, #141417 70%)",
        "black-gradient": "radial-gradient(#0F0F12 70%, #141417 100%)",
        "blue-gradient": "radial-gradient(ellipse at 25% 95%, #24A7FF 0%, #D936CB 100%)",
      },
      boxShadow: {
        "solid": "16px 16px rgba(28, 28, 34, 1.0)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.25s ease-out",
        "accordion-up": "accordion-up 0.25s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}