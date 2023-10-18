import dayjs from '@/utils/dayjs'

export const dayOfWeekFactory = (
  dateFrom: dayjs.ConfigType,
  dateTo: dayjs.ConfigType,
  dateActiveDay?: dayjs.Dayjs,
  idFormat: string = 'DD.MM.YYYY',
) => {
  const currDate = dayjs().format(idFormat)
  const startDate = dayjs(dateFrom)
  const days = dayjs(dateTo).diff(startDate, 'days')

  const getId = (iDay: dayjs.Dayjs) => {
    return iDay.format(idFormat)
  }

  const isActive = (iDay: dayjs.Dayjs) => {
    if (dateActiveDay) {
      return dateActiveDay.format(idFormat) === getId(iDay)
    }

    return iDay.format(idFormat) === currDate
  }

  const dayOfWeeks = []
  for (let i = 0; i < days; i++) {
    const iDay = startDate.add(i, 'day')
    const active = isActive(iDay) === true

    dayOfWeeks.push({
      id: getId(iDay),
      number: Number(iDay.format('D')),
      weekday: iDay.format('dd').toLocaleLowerCase(),
      isActive: active,
    })
  }

  return dayOfWeeks
}
