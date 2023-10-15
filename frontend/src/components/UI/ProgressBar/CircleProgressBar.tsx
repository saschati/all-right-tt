import React from 'react'
import { CircularProgressBar, CircularProgressBarProps } from 'react-percentage-bar'

export type CircleProgressBarProps = CircularProgressBarProps

const textStyle = {
  color: '#6D5C70',

  fontFamily: 'Inter',
  fontSize: '18px',
  fontStyle: 'normal',
  fontWeight: '600',
  lineHeight: '22px',
}

const CircleProgressBar: React.FC<CircleProgressBarProps> = ({ percentage, ...rest }): JSX.Element => {
  return (
    <CircularProgressBar
      percentage={percentage}
      color={'#FE9A3E'}
      trackColor={'#FFE5CC'}
      size={'9px'}
      radius={'44px'}
      percentageStyle={textStyle}
      {...rest}
    />
  )
}

export default CircleProgressBar
