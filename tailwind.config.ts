import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#F5F5F7',
          100: '#E8E8ED',
          200: '#D2D2D7',
          700: '#2B2B30',
          800: '#1E1E22',
          900: '#000000', // Swapped Navy Blue with Black
          950: '#050505',
        },
        gold: {
          400: '#E2B857',
          500: '#D4A843', // Accent Gold
          600: '#B88B2A',
        },
        cream: {
          50: '#F5F5F7',  // Whitish Gray Page Background
          100: '#F5F5F7', // Whitish Gray Page Background
          200: '#E8E8ED',
        }
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        'pill': '25px',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 8px 30px rgba(0, 0, 0, 0.06)',
        'floating': '0 12px 40px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
export default config;
