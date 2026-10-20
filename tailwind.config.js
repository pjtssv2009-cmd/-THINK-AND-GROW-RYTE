/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F8FC',
        surface: '#FFFFFF',
        textPrimary: '#172033',
        textSecondary: '#667085',
        accent: {
          DEFAULT: '#5B5CE2',
          hover: '#4C4DD0',
          light: '#EEF0FD',
          secondary: '#3B82F6',
        },
        blueAccent: '#3B82F6',
        success: {
          DEFAULT: '#16A34A',
          light: '#DCFCE7',
          surface: '#F0FDF4',
        },
        warning: {
          DEFAULT: '#D97706',
          light: '#FEF3C7',
          surface: '#FFFBEB',
        },
        error: {
          DEFAULT: '#DC2626',
          light: '#FEE2E2',
          surface: '#FEF2F2',
        },
        borderBase: '#E4E7EC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(16, 24, 40, 0.05)',
        card: '0 4px 6px -1px rgba(16, 24, 40, 0.06), 0 2px 4px -2px rgba(16, 24, 40, 0.04)',
        float: '0 12px 24px -4px rgba(16, 24, 40, 0.08), 0 4px 8px -2px rgba(16, 24, 40, 0.03)',
        panel: '0 20px 32px -8px rgba(16, 24, 40, 0.1), 0 8px 16px -4px rgba(16, 24, 40, 0.04)',
      }
    },
  },
  plugins: [],
}
