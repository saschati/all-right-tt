import React from 'react'
import styles from './Fraction.module.scss'
import classNames from 'classnames/bind'
import Text from '@/UI/Text'

const cx = classNames.bind(styles)

export type FractionProps = {
  className?: string
  divisible: string | number
  divisor: string | number
}

const Fraction: React.FC<FractionProps> = ({ className, divisible, divisor }): JSX.Element => {
  return (
    <Text className={cx('fraction', className)} size="small-large">
      <span className={cx('fraction__divisible', className)}>{divisible}</span> / {divisor}
    </Text>
  )
}

export default Fraction
