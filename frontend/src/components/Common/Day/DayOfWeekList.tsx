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
  activeDayId?: DayOfWeek['id']
  onDayClick: (value: DayOfWeek['id'], day: DayOfWeek) => void
}

const DayOfWeekList = memo<DayOfWeekListProps>(
  ({ className, dateFrom, dateTo, activeDayId, onDayClick, ...rest }): JSX.Element => {
    const dayOfWeeks = useMemo<DayOfWeek[]>(() => {
      if (Array.isArray(rest.dayOfWeeks)) {
        return rest.dayOfWeeks
      }

      const currDate = dayjs().format('DD.MM.YYYY')
      const startDate = dayjs(dateFrom)
      const days = dayjs(dateTo).diff(startDate, 'days')

      const getId = (iDay: dayjs.Dayjs) => {
        return iDay.format('DD.MM.YYYY')
      }

      const isActive = (iDay: dayjs.Dayjs) => {
        if (activeDayId) {
          return activeDayId === getId(iDay)
        }

        return iDay.format('DD.MM.YYYY') === currDate
      }

      const dayOfWeeks = []
      for (let i = 0; i < days; i++) {
        const iDay = startDate.add(i, 'day')

        dayOfWeeks.push({
          id: getId(iDay),
          number: Number(iDay.format('D')),
          weekday: iDay.format('dd').toLocaleLowerCase(),
          isActive: isActive(iDay) === true,
        })
      }

      return dayOfWeeks
    }, [dateFrom, dateTo, activeDayId, rest.dayOfWeeks])

    const dayOfWeeksComp = useMemo(() => {
      return dayOfWeeks.map(({ id, ...dayOfWeek }) => (
        <div key={id} className="cursor-pointer" onClick={() => onDayClick(id, { id, ...dayOfWeek })}>
          <Day {...dayOfWeek} />
        </div>
      ))
    }, [dayOfWeeks, onDayClick])

    return <div className={cx('dayOfWeeks', className)}>{dayOfWeeksComp}</div>
  },
)

DayOfWeekList.displayName = 'DayOfWeekList'

export default DayOfWeekList
