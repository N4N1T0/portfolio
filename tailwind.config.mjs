/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem'
      },
      borderRadius: {
        '4xl': '2rem'
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        prata: ['Prata', 'serif']
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
