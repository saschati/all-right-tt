import React, { memo, useMemo } from 'react'
import styles from './DayOfWeekList.module.scss'
import classNames from 'classnames/bind'
import dayjs from '@/utils/dayjs'
import Day, { type DayProps } from './Day'

const cx = classNames.bind(styles)

export interface DayOfWeek extends Omit<DayProps, 'className'> {
  id: string | number
}

export type DayOfWeekListProps = {
  className?: string
  dateFrom: dayjs.ConfigType
  dateTo: dayjs.ConfigType
  dayOfWeeks?: DayOfWeek[]
}

const DayOfWeekList = memo<DayOfWeekListProps>(({ className, dateFrom, dateTo, ...rest }): JSX.Element => {
  const dayOfWeeks = useMemo<DayOfWeek[]>(() => {
    if (Array.isArray(rest.dayOfWeeks)) {
      return rest.dayOfWeeks
    }

    const currDate = dayjs().format('DD.MM.YYYY')
    const startDate = dayjs(dateFrom)
    const days = dayjs(dateTo).diff(startDate, 'days')

    const dayOfWeeks = []
    for (let i = 0; i < days; i++) {
      const iDay = startDate.add(i, 'day')

      dayOfWeeks.push({
        id: iDay.format('DD.MM.YYYY'),
        number: Number(iDay.format('D')),
        weekday: iDay.format('dd').toLocaleLowerCase(),
        isActive: iDay.format('DD.MM.YYYY') === currDate,
      })
    }

    return dayOfWeeks
  }, [dateFrom, dateTo, rest.dayOfWeeks])

  const dayOfWeeksComp = useMemo(() => {
    return dayOfWeeks.map(({ id, ...dayOfWeek }) => <Day key={id} {...dayOfWeek} />)
  }, [dayOfWeeks])

  return <div className={cx('dayOfWeeks', className)}>{dayOfWeeksComp}</div>
})

DayOfWeekList.displayName = 'DayOfWeekList'

export default DayOfWeekList
