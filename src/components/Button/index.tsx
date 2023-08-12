import React from 'react'
import { Button as ButtonRecipe, type ButtonVariant } from '@styled-system/recipes'

type ButtonProps = ButtonVariant & {
    children: React.ReactNode
}
  

const Button = (props: ButtonProps) => {
    const { children, ...otherProps } = props
  return (
    <button type='button'  className={ButtonRecipe({ ...otherProps})}>
      {children}
    </button>
  )
}

export default Button
