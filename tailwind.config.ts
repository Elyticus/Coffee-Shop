import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        coffee: {
          50:  '#fdf8f0',
          100: '#faecd8',
          200: '#f5d5ae',
          300: '#eebb7c',
          400: '#e8a960',
          500: '#c8935f',
          600: '#a0703a',
          700: '#7a5228',
          800: '#5c3a1b',
          900: '#3d2410',
        },
        dark: {
          900: '#050510',
          800: '#0a0a1a',
          700: '#0f0f24',
          600: '#1a1a35',
        },
      },
      fontFamily: {
        forum:      ['Forum', 'serif'],
        cormorant:  ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'fade-in':    'fadeIn 0.8s ease-out forwards',
        'slide-up':   'slideUp 0.6s ease-out forwards',
        'shimmer':    'shimmer 2.5s infinite',
        'spin-slow':  'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition:  '200% 0' },
        },
      },
    },
  },
  plugins: [],
}

export default config
