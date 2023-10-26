/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['"Rubik"', "sans-serif"],
        sometype: ['"Sometype Mono"', "monospace"],
      },
      colors: {
        "custom-text-dark": "var(--custom-text-dark)",
        "custom-primary-blue-dark": "var(--custom-primary-blue-dark)",
        "custom-secondary-blue-dark": "var(--custom-secondary-blue-dark)",
        "custom-primary-gold-dark": "var(--custom-primary-gold-dark)",
        "custom-secondary-gold-dark": "var(--custom-secondary-gold-dark)",
        "custom-text-light": "var(--custom-text-light)",
        "custom-primary-blue-light": "var(--custom-primary-blue-light)",
        "custom-secondary-blue-light": "var(--custom-secondary-blue-light)",
        "custom-primary-gold-light": "var(--custom-primary-gold-light)",
        "custom-secondary-gold-light": "var(--custom-secondary-gold-light)",
        "custom-light-blue-shadow": "var(--custom-light-blue-shadow)",
        "main-secondary-blue": "var(--main-secondary-blue)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
