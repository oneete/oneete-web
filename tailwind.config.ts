import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#dc2663',
        secondary: '#00beb2',
        tertiary: '#fdf04c',
        muted: '#ddd',
        light: '#f9f5f6',
        dark: '#272829',
        'dark-grey': '#979797',
      },
    },
  },

  plugins: [require('daisyui'), require('@tailwindcss/typography')],

  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    themes: [
      {
        light: {
          ...require('daisyui/src/theming/themes')['[data-theme=light]'],
          primary: '#dc2663',
          'primary-content': '#fff',
          secondary: '#00beb2',
          tertiary: '#fdf04c',
          muted: '#ddd',
          light: '#f9f5f6',
          dark: '#272829',
          'dark-grey': '#979797',
        },
      },
    ],
  },
};
export default config;
