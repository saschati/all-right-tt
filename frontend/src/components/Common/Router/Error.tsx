import React from 'react'
import Text from '@/UI/Text'
import styles from './Error.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export type ErrorProps = {
  code: number
  message: string
}

const Error: React.FC<ErrorProps> = ({ code, message }): JSX.Element => {
  return (
    <div data-testid="error" className={cx('error')}>
      <Text position="center">Error: {code}</Text>
      <p className={cx('error__message')}>{message}</p>
    </div>
  )
}

export default Error
