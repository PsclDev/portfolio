import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default <Partial<Config>>{
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        concrete: {
          '50': '#f8f8f8',
          '100': '#f3f3f3',
          '200': '#e4e4e4',
          '300': '#d1d1d1',
          '400': '#b4b4b4',
          '500': '#9a9a9a',
          '600': '#818181',
          '700': '#6a6a6a',
          '800': '#5a5a5a',
          '900': '#4e4e4e',
          '950': '#282828',
        },
        christalle: {
          '50': '#f9f4ff',
          '100': '#f0e6ff',
          '200': '#e4d2ff',
          '300': '#ceaeff',
          '400': '#b07bff',
          '500': '#9249ff',
          '600': '#7b25f8',
          '700': '#6715db',
          '800': '#5917b2',
          '900': '#4a148f',
          '950': '#330074',
        },
      },
    },
  },
};
