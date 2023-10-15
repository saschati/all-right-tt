import React from 'react'
import styles from './Hr.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export type HrProps = {
  className?: string
}

const Hr: React.FC<HrProps> = ({ className }): JSX.Element => {
  return <div className={cx('hr', className)} />
}

export default Hr
