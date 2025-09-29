import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'steem-blue': 'var(--steem-blue)',
        'steem-lightblue': 'var(--steem-lightblue)',
        'steem-purple': 'var(--steem-purple)',
        'steem-grey': 'var(--steem-grey)',
        'steem-offwhite': 'var(--steem-offwhite)',
        'steem-offblack': 'var(--steem-offblack)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1400px',
      },
    },
  },
  plugins: [],
}

export default config
