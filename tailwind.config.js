/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // "custom-text-dark": "#FFFFFF",
        // "custom-primary-blue-dark": "#0D121C",
        // "custom-secondary-blu-dark": "#192234",
        // "custom-primary-gold-dark": "#947947",
        // "custom-secondary-gold-dark": "#B49864",
        // "custom-text-light": "#000000",
        // "custom-primary-blue-light": "#E3E8F2",
        // "custom-secondary-blu-light": "#B89D6B",
        // "custom-primary-gold-light": "#CBD4E6",
        // "custom-secondary-gold-light": "##9B7F4B",
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
      },
    },
  },
  plugins: [],
};
