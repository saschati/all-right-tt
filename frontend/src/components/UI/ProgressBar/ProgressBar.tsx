import React, { CSSProperties, useEffect, useRef, useState } from 'react'
import styles from './ProgressBar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export type ProgressBarProps = {
  className?: string
  percentage: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ className, percentage }): JSX.Element => {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const listener = () => {
      ref.current && setWidth(ref.current?.offsetWidth)
    }

    listener()

    window.addEventListener('resize', listener)

    return () => window.removeEventListener('resize', listener)
  }, [])

  const progressStyles: CSSProperties = {
    width: `${(percentage / 100) * width}px`,
  }

  return (
    <div ref={ref} className={cx('progressBar', className)}>
      <div style={progressStyles} className={cx('progressBar__progress', className)} />
    </div>
  )
}

export default ProgressBar
