import React, { useId } from 'react';
import { Button as ButtonRecipe, type ButtonVariant } from '@styled-system/recipes';
import { match } from 'ts-pattern';
import HtmlAppendedLink from '~/components/util/HtmlAppendedLink';

type BaseProps = ButtonVariant & {
  children: React.ReactNode;
};

type AProps = BaseProps & {
  tag: 'a';
  href: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ButtonProps = BaseProps & {
  tag?: 'button';
  type?: 'button' | 'submit' | 'reset';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type CombinedProps = AProps | ButtonProps;

const Button = (props: CombinedProps) => {
  const id = useId();
  const { children, tag = 'button', ...otherProps } = props;

  return match(tag)
    .with('a', () => {
      const { href } = props as AProps;
      return (
        <HtmlAppendedLink id={id} href={href} className={ButtonRecipe({ ...otherProps })}>
          {children}
        </HtmlAppendedLink>
      );
    })
    .with('button', () => (
      <button id={id} type="button" className={ButtonRecipe({ ...otherProps })}>
        {children}
      </button>
    ))
    .exhaustive();
};

export default Button;
