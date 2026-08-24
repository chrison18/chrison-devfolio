/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#faf8f5',
          soft: '#f5f2ed',
          card: '#ffffff',
          border: '#e8e4df',
        },
        ink: {
          DEFAULT: '#1c1c1e',
          soft: '#3d3d3d',
          muted: '#9e9e9e',
        },
        accent: {
          DEFAULT: '#6b5344',
          light: '#a0896c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'monospace'],
        serif: ['"Noto Serif SC"', 'Georgia', 'serif'],
      },
      maxWidth: {
        content: '1100px',
      },
      letterSpacing: {
        wider2: '0.15em',
      },
    },
  },
  plugins: [],
}
