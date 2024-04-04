/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line toplevel/no-toplevel-side-effect, import/no-commonjs
module.exports = {
  content: ['./src/**/*.{astro,html,md,mdx,svelte,ts,tsx}'],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      screens: {
        'tall': { 'raw': '(min-height: 768px)' }
      }
    },
    fontFamily: {
      amina: ['amina-reska'],
      roboto: ['Roboto']
    }
  }
}
