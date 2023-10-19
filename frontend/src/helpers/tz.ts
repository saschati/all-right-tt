import timezones from 'timezones-list'

const options = timezones.map((timezone) => ({
  label: timezone.label,
  value: timezone.tzCode,
}))

export const tzFactory = () => {
  return options
}

export const currentTimezone = () => {
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone

  if (tz === 'Europe/Kiev') {
    return 'Europe/Kyiv'
  }

  return
}
