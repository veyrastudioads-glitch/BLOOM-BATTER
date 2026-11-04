/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bakery: {
          bg: '#FFF8F8',
          blush: '#F8E5E8',
          pink: '#E8B7C1',
          dusty: '#C98291',
          rose: '#A64D65',
          burgundy: '#542638',
          ivory: '#FFFDF8',
          beige: '#EDE0D8',
          text: '#57434A',
          subtle: '#8C7079',
          border: 'rgba(201, 130, 145, 0.22)',
          'card-bg': '#FFFFFF',
          'burgundy-dark': '#3D1B28',
          'rose-light': '#FDF2F4',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Manrope"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.28em',
      },
      boxShadow: {
        'soft-rose': '0 20px 40px -15px rgba(166, 77, 101, 0.08)',
        'lifted': '0 25px 50px -12px rgba(84, 38, 56, 0.12)',
        'float': '0 30px 60px -15px rgba(84, 38, 56, 0.15)',
        'subtle': '0 8px 30px rgba(166, 77, 101, 0.05)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}

