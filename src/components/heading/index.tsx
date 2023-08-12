import React from 'react'
import { css } from '@styled-system/css'
import { center } from '@styled-system/patterns'

type AllowedTags = Pick<JSX.IntrinsicElements, 'h1' | 'h2' | 'h3'>

interface Props {
  children: React.ReactNode
  as?: keyof AllowedTags
}
const Heading = ({ children, as = 'h2' }: Props) => {
  const Tag = as // タグ名を動的に決定するための変数
  return (

    <div className={[
      // stack({ direction: 'row', paddingY: '10' }),
      center({ bg: 'tomato', aspectRatio: 1, flexWrap: 'wrap', gap: '0 300px' })
    ].join('')}>
      <Tag className={
        css({
          color: 'danger',
          fontWeight: 'bold',
          sm: { fontSize: '40px' }
        })}>{children}</Tag>
      <Tag className={
        css({
          color: 'danger',
          fontWeight: 'bold',
          sm: { fontSize: '40px' }
        })}>{children}</Tag>
    </div>

  )
}

export default Heading
