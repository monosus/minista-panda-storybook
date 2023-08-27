import React, { useId } from 'react';
import { Button as ButtonRecipe, type ButtonVariant } from '@styled-system/recipes';

type ButtonProps = ButtonVariant & {
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  const id = useId();
  const { children, ...otherProps } = props;
  return (
    <button id={id} type="button" className={ButtonRecipe({ ...otherProps })}>
      {children}
    </button>
  );
};

export default Button;
