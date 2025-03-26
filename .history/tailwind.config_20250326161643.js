/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-solid-strong': 'var(--brand-solid-strong)',
        'brand-solid-weak': 'var(--brand-solid-weak)',
      },
    },
  },
  plugins: [],
}; 