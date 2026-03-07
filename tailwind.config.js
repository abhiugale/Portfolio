/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6c63ff',
          50: '#f0effe',
          100: '#dddcfd',
          200: '#bfbdfb',
          300: '#a09cf8',
          400: '#847bf5',
          500: '#6c63ff',
          600: '#5a50e8',
          700: '#463ecb',
          800: '#3730a3',
          900: '#2c278a',
        },
        accent: {
          DEFAULT: '#ff6584',
          light: '#ff8ba0',
          dark: '#e0405f',
        },
        cyan: {
          neon: '#00f5ff',
        },
        dark: {
          DEFAULT: '#0a0a0f',
          100: '#0d0d14',
          200: '#111119',
          300: '#16161f',
          400: '#1a1a26',
          500: '#212133',
        },
        surface: {
          DEFAULT: 'rgba(255,255,255,0.04)',
          hover: 'rgba(255,255,255,0.08)',
          border: 'rgba(255,255,255,0.08)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0a0a0f 0%, #0d0d1f 50%, #0a0a0f 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(108,99,255,0.1) 0%, rgba(255,101,132,0.05) 100%)',
        'glow-gradient': 'linear-gradient(-225deg, #ffffff 0%, #6c63ff 40%, #ff6584 100%)',
      },
      boxShadow: {
        'glow-primary': '0 0 40px rgba(108,99,255,0.25)',
        'glow-accent': '0 0 40px rgba(255,101,132,0.25)',
        'card': '0 25px 50px rgba(0,0,0,0.5)',
        'card-hover': '0 35px 70px rgba(108,99,255,0.2)',
      },
      animation: {
        'gradient-x': 'gradient-x 4s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 8s linear infinite',
        'slide-in': 'slideIn 0.5s ease forwards',
        'fade-up': 'fadeUp 0.6s ease forwards',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideIn: {
          from: { transform: 'translateX(-100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        fadeUp: {
          from: { transform: 'translateY(30px)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
