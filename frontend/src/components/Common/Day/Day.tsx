import React from 'react'
import styles from './Day.module.scss'
import classNames from 'classnames/bind'
import Text from '@/UI/Text'

const cx = classNames.bind(styles)

export type DayProps = {
  className?: string
  number: number
  weekday: string
  isActive?: boolean
}

const Day: React.FC<DayProps> = ({ className, number, weekday, isActive = false }): JSX.Element => {
  const active = isActive ? 'day--active' : undefined

  return (
    <div className={cx('day', className, active)}>
      <Text className={cx('day__number')}>{number}</Text>
      <Text className={cx('day__weekday')} size="very-small" position="center">
        {weekday}
      </Text>
    </div>
  )
}

export default Day
