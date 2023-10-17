import React, { CSSProperties } from 'react'
import styles from './ProgressBar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export type ProgressBarProps = {
  className?: string
  percentage: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ className, percentage }): JSX.Element => {
  const progressStyles: CSSProperties = {
    transform: `scaleX(${percentage / 100})`,
  }

  return (
    <div className={cx('progressBar', className)}>
      <div style={progressStyles} className={cx('progressBar__progress', className)} />
    </div>
  )
}

export default ProgressBar
