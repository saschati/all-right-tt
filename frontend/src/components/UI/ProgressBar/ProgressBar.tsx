import React, { CSSProperties, useState } from 'react'
import styles from './ProgressBar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export type ProgressBarProps = {
  className?: string
  percentage: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ className, percentage }): JSX.Element => {
  const [width, setWidth] = useState(0)

  const handleWidth = (e: HTMLDivElement | null) => e && setWidth(e.offsetWidth)

  const progressStyles: CSSProperties = {
    width: `${(percentage / 100) * width}px`,
  }

  return (
    <div ref={handleWidth} className={cx('progressBar', className)}>
      <div style={progressStyles} className={cx('progressBar__progress', className)} />
    </div>
  )
}

export default ProgressBar
