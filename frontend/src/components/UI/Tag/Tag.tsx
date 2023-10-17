import React, { CSSProperties, useState } from 'react'
import styles from './Tag.module.scss'
import classNames from 'classnames/bind'
import Text from '@/UI/Text'

const cx = classNames.bind(styles)

export type TagProps = {
  className?: string
  icon: string
  name: string
  onClick: (isActive: boolean) => void
}

const Tag: React.FC<TagProps> = ({ className, icon, name, onClick }): JSX.Element => {
  const [isClicked, setIsClicked] = useState(false)
  const [isActive, setIsActive] = useState(false)
  const [width, setWidth] = useState(0)

  const handleClick = () => {
    if (isActive) {
      setIsActive(false)
      onClick(false)
    } else {
      setIsClicked(true)
    }
  }

  const handleWidth = (e: HTMLDivElement | null) => e && setWidth(e.offsetWidth)
  const handleAnimationEnd = () => {
    setIsClicked(false)
    setIsActive(true)
    onClick(true)
  }

  const waveStyle: CSSProperties = {
    height: width,
    width,
    top: `calc(50% - ${width / 2}px)`,
  }

  const classes: string[] = []

  if (isClicked === true) {
    classes.push('tag--clicked')
  }

  if (isActive === true) {
    classes.push('tag--active')
  }

  return (
    <div
      ref={handleWidth}
      onAnimationEnd={handleAnimationEnd}
      onClick={handleClick}
      className={cx('cursor-pointer', 'tag', className, ...classes)}
    >
      <div className={cx('tag__container')}>
        {/* Animation elements */}
        <div className={cx('tag__animation-wave')} style={waveStyle} />
        {/* Animation elements */}
        <div className={cx('tag__content')}>
          <img className={cx('tag__icon')} src={icon} alt={name} />
          <Text className={cx('tag__text')}>{name}</Text>
        </div>
      </div>
    </div>
  )
}

export default Tag
