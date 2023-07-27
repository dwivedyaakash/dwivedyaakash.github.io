/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        DEFAULT: 'rgba(149, 157, 165, 0.2) 0px 8px 24px;',
      },
    },
  },
  plugins: [],
};
