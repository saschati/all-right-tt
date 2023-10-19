import React, { CSSProperties, memo, useMemo } from 'react'
import styles from './TextSwapper.module.scss'
import classNames from 'classnames/bind'
import Text from '@/UI/Text'

const cx = classNames.bind(styles)

export type TextSwapperProps = {
  className?: string
  items: string[]
  currIndex?: number
}

const ROW_HEIGHT = 29

const TextSwapper: React.FC<TextSwapperProps> = memo<TextSwapperProps>(
  ({ className, items, currIndex = 0 }): JSX.Element => {
    const itemsComp = useMemo(() => {
      return items.map((item, inx) => (
        <div key={inx} className={cx('textSwapper__item')}>
          <Text size="small">{item}</Text>
        </div>
      ))
    }, [items])

    const stageStyle: CSSProperties = {
      transform: `translateY(calc(-${ROW_HEIGHT}px * ${currIndex % items.length}`,
    }

    return (
      <div className={cx('textSwapper', className)}>
        <div className={cx('textSwapper__stages')} style={stageStyle}>
          {itemsComp}
        </div>
      </div>
    )
  },
)

TextSwapper.displayName = 'TextSwapper'

export default TextSwapper
