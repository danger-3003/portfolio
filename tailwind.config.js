/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ['bg-[#172956]'],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        nunito: "var(--font-nunito)",
        poppins: "var(--font-poppins)",
        sheppard: "var(--font-sheppards)",
        bitcount: ['"Bitcount Single"', 'sans-serif'],
      },
      colors: {
        background: "var(--color-bg)",
        text: "var(--color-text)",
        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
        },
      },
      boxShadow: {
        customShadow: "0 0 20px 1px rgba(0, 49, 97, 0.15)",
      },
    },
  },
  plugins: [],
}
