import React from 'react';
import { css } from '@styled-system/css';
import { center, circle } from '@styled-system/patterns';
import { match } from 'ts-pattern';

type AllowedTags = Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3'>;

interface Props {
  children: React.ReactNode;
  as?: keyof AllowedTags;
}
const Heading = ({ children, as = 'h2' }: Props): JSX.Element => {
  const Tag = as; // タグ名を動的に決定するための変数
  return (
    <>
      <span>
        {match(as)
          .with('h3', () => 'h3だよ')
          .with('h1', () => 'h1だよ')
          .with('h2', () => 'h2だよ')
          .exhaustive()}
      </span>
      <div
        className={match(as)
          .with('h1', () => center({ bg: 'tomato', aspectRatio: 1, flexWrap: 'wrap', gap: '0 300px' }))
          .with('h2', () => circle({ bg: 'navy' }))
          .with('h3', () => circle({ bg: 'banana' }))
          .exhaustive()}
      >
        <Tag
          className={css({
            color: 'danger',
            fontWeight: 'bold',
            sm: { fontSize: '40px' },
          })}
        >
          {children}
        </Tag>
        <Tag
          className={css({
            color: 'danger',
            fontWeight: 'bold',
            sm: { fontSize: '40px' },
          })}
        >
          {children}
        </Tag>
      </div>
    </>
  );
};

export default Heading;
