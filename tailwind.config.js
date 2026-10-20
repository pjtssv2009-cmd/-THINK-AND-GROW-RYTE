/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFF8EE', // Warm neo-brutalist paper background
        canvas: '#F8FAFC',
        surface: '#FFFFFF',
        textPrimary: '#171717',
        textSecondary: '#525252',
        borderBase: '#171717',
        primary: {
          DEFAULT: '#F28C28', // Official DigiRyte brand orange
          hover: '#DF7A1B',
          dark: '#C86408',
          light: '#FFF4E5',
          subtle: '#FFFBF5',
        },
        accent: {
          DEFAULT: '#F28C28',
          hover: '#DF7A1B',
          light: '#FFF4E5',
        },
        success: {
          DEFAULT: '#15803D',
          light: '#DCFCE7',
          surface: '#F0FDF4',
        },
        warning: {
          DEFAULT: '#D97706',
          light: '#FEF3C7',
          surface: '#FFFBEB',
        },
        error: {
          DEFAULT: '#B91C1C',
          light: '#FEE2E2',
          surface: '#FEF2F2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'neo-sm': '2px 2px 0px #171717',
        'neo': '4px 4px 0px #171717',
        'neo-lg': '6px 6px 0px #171717',
        'neo-xl': '8px 8px 0px #171717',
        'neo-orange': '4px 4px 0px #F28C28',
        'neo-orange-sm': '2px 2px 0px #F28C28',
      }
    },
  },
  plugins: [],
}

