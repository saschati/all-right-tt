import React, { memo, useMemo } from 'react'
import styles from './DayOfWeekList.module.scss'
import classNames from 'classnames/bind'
import Day, { type DayProps } from './Day'

const cx = classNames.bind(styles)

export interface DayOfWeek extends Omit<DayProps, 'className' | 'isActive'> {
  id: string | number
}

export type DayOfWeekListProps = {
  className?: string
  dayOfWeeks: DayOfWeek[]
  value?: DayOfWeek['id']
  onDayClick: (value: DayOfWeek['id'], day: DayOfWeek) => void
}

const DayOfWeekList: React.FC<DayOfWeekListProps> = memo<DayOfWeekListProps>(
  ({ className, dayOfWeeks, value, onDayClick }): JSX.Element => {
    const dayOfWeeksComp = useMemo(() => {
      return dayOfWeeks.map(({ id, ...dayOfWeek }) => (
        <div key={id} className="cursor-pointer" onClick={() => onDayClick(id, { id, ...dayOfWeek })}>
          <Day {...dayOfWeek} isActive={value === id} />
        </div>
      ))
    }, [dayOfWeeks, value, onDayClick])

    return <div className={cx('dayOfWeeks', className)}>{dayOfWeeksComp}</div>
  },
)

DayOfWeekList.displayName = 'DayOfWeekList'

export default DayOfWeekList
