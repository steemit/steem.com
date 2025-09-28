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
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false, // 禁用默认主题，使用自定义样式
    base: false, // 禁用基础样式
    styled: true, // 启用组件样式
    utils: true, // 启用工具类
  },
}

export default config
