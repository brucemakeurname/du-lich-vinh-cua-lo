import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#0ea5e9', dark: '#0284c7', light: '#38bdf8' },
        secondary: { DEFAULT: '#f97316', dark: '#ea580c' },
        accent: { DEFAULT: '#10b981', dark: '#059669' },
        danger: { DEFAULT: '#ef4444' },
        warning: { DEFAULT: '#f59e0b' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
export default config
