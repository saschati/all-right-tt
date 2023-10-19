import dayjs from '@/utils/dayjs'

export const slotsFactory = (
  date: dayjs.Dayjs,
  curr: dayjs.Dayjs,
  period: number,
  endHour: number,
  startHour: number,
) => {
  const options = []
  let hour = startHour
  if (date.format('DD.MM.YYYY') === curr.format('DD.MM.YYYY')) {
    hour = curr.hour() > hour ? curr.hour() : hour
    const minute = curr.minute()

    if (hour >= endHour || (hour + 1 === endHour && minute > period)) {
      return []
    }

    if (minute < period) {
      options.push({
        value: `${hour}:${period}`,
        label: `${hour}:${period}`,
      })
    }

    hour += 1
  }

  for (let i = hour; i < endHour; i++) {
    options.push(
      {
        value: `${i}:00`,
        label: `${i}:00`,
      },
      {
        value: `${i}:${period}`,
        label: `${i}:${period}`,
      },
    )
  }

  return options
}
