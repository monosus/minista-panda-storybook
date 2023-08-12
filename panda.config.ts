import { defineConfig } from '@pandacss/dev';
import { Recipes } from './src/components/recipe';
export default defineConfig({
  // Whether to use css reset
  preflight: true,
  staticCss: {
    // the css properties you want to generate
    css: [],
    // the recipes you want to generate
    recipes: {},
  },

  // Where to look for your css declarations
  include: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/**/*.stories.ts.{ts}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './stories/**/*.{js,jsx,ts,tsx}',
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      recipes: Recipes,
    },
    tokens: {
      colors: {
        danger: {
          value: '#ff0000',
          description: 'Color for errors',
        },
        tomato: {
          value: 'tomato',
        },
      },
      spacing: {
        '10': {
          value: '10px',
          description: 'small padding',
        },
      },
      fontSizes: {
        '40px': {
          value: '120px',
          description: 'haha',
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',
});
