import React from 'react'
import styles from './Text.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

type TextSize = 'default' | 'medium' | 'small' | 'very-small' | 'small-large'
type TextPosition = 'start' | 'center'

export type TextProps = React.PropsWithChildren & {
  className?: string
  size?: TextSize
  position?: TextPosition
  as?: keyof JSX.IntrinsicElements | React.FC
}

const Text: React.FC<TextProps> = ({
  children,
  className,
  size = 'default',
  position = 'default',
  as = 'p',
}): JSX.Element => {
  const CustomTag = as

  return (
    <CustomTag
      data-testid="text-text"
      className={cx('text', `text_size_${size}`, `text_position_${position}`, className)}
    >
      {children}
    </CustomTag>
  )
}

export default Text
