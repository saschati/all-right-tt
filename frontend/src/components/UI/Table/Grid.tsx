import React from 'react'
import styles from './Grid.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

export type GridProps = {
  rows: string[][]
}

const Grid: React.FC<GridProps> = ({ rows }): JSX.Element => {
  const [first] = rows

  return (
    <div className={cx('grid')} style={{ ['--grid-col' as string]: first.length }}>
      {rows.map((columns, rindex) => (
        <div key={rindex} className={cx('grid__row')}>
          {columns.map((column, index) => (
            <div key={index} className={cx('grid__column')}>
              {column}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Grid
