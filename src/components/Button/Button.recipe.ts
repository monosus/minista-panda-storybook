import { defineRecipe } from '@pandacss/dev';

export const ButtonRecipe = defineRecipe({
  className: 'a-button',
  description: 'The styles for the Button component',
  base: {
    display: 'flex',
    cursor: 'pointer',
    _hover: { opacity: 0.5 },
  },
  variants: {
    visual: {
      solid: { bg: 'navy', color: 'white' },
      outline: { borderWidth: '1px', borderColor: 'green' },
    },
    size: {
      sm: { padding: '4', fontSize: '12rem' },
      lg: { padding: '8', fontSize: { all: '20px' } },
    },
  },
  // defaultVariants: {
  //   size: 'lg',
  //   visual: 'outline',
  // },
});
