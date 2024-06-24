/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'primary': '#FF8D75',
        'tertiary': '#FF8066',
        'secondary': '#FFD3CD',
      },
      backgroundColor: {
        'primary': '#FF8D75',
        'tertiary': '#FF8066',
        'secondary': '#FFD3CD',
      },
      borderColor: {
        'primary': '#FF8D75',
        'tertiary': '#FF8066',
        'secondary': '#FFD3CD',
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [daisyui],
}

