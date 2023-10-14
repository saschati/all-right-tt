import React from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

type ButtonColor = 'black' | 'white' | 'transparent' | 'physalis-gradient'

type ButtonType =
  | {
      type: 'submit'
      onClick?: never
    }
  | {
      type?: Exclude<JSX.IntrinsicElements['button']['type'], 'submit'>
      onClick: React.MouseEventHandler<HTMLButtonElement>
    }

export type ButtonProps = Omit<JSX.IntrinsicElements['button'], 'onClick' | 'type'> &
  ButtonType & {
    text: string
    color?: ButtonColor
  }

const Button: React.FC<ButtonProps> = ({
  text,
  color = 'physalis-gradient',
  onClick,
  type = 'button',
  ...rest
}): JSX.Element => {
  return (
    <button type={type} className={cx('btn', `btn_color_${color}`)} onClick={onClick} {...rest}>
      {text}
    </button>
  )
}

export default Button
