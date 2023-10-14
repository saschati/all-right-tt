import React, { useMemo } from 'react'
import styles from './ProgressBar.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export type ProgressBarProps = {
  className?: string
  curr: number
  total: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({ className, curr, total }): JSX.Element => {
  const progressItems = useMemo(() => {
    // TODO Change to calculate normal progress bar
    return new Array(total).fill(null).map((_, inx) => {
      const classes = [inx < curr ? 'progressBar__item--active' : undefined]
      if (inx === curr - 1) {
        classes.push('progressBar__item--last')
      }

      return <div key={inx} className={cx('progressBar__item', ...classes)} />
    })
  }, [curr, total])

  return <div className={cx('progressBar', className)}>{progressItems}</div>
}

export default ProgressBar
