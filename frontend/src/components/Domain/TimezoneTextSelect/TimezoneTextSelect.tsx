import TextSelect, { type TextSelectProps } from '@/UI/Form/Select/TextSelect'
import { tzFactory } from '@/helpers/tz'
import React, { memo } from 'react'

export type TimezoneTextSelectProps = Omit<TextSelectProps, 'options'>

const options: TextSelectProps['options'] = tzFactory()

const TimezoneTextSelect: React.FC<TimezoneTextSelectProps> = memo<TimezoneTextSelectProps>(
  ({ value, ...rest }): JSX.Element => {
    return <TextSelect options={options} value={value as string} {...rest} />
  },
)

TimezoneTextSelect.displayName = 'TimezoneTextSelect'

export default TimezoneTextSelect
