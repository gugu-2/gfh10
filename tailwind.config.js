/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          base: "#FDFCF7",
          subtle: "#FAF9F5",
          elevated: "#F4F1EA",
        },
        brand: {
          primary: "#017752",
          hover: "#015E41",
          tint: "#E6F2ED",
          dark: "#08281D",
        },
        border: {
          hairline: "#E1DACD",
          subtle: "#ECE7DC",
        },
        slate: {
          primary: "#141413",
          secondary: "#4A4944",
          muted: "#7D7A71",
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'elevated': '0 12px 32px rgba(20, 20, 19, 0.06)',
        'pill': '0 1px 3px rgba(0,0,0,0.05)',
      }
    },
  },
  plugins: [],
}
