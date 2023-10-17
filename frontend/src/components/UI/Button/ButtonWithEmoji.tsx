import React, { CSSProperties, memo, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './ButtonWithEmoji.module.scss'
import Emoji, { type EmojiProps } from '@/UI/Icon/Emoji'
import Text from '@/UI/Text'

const cx = classNames.bind(styles)

export type ButtonWithEmojiProps = {
  emoji: EmojiProps['type']
  text: string
  className?: string
  onClick: (isActive: boolean) => void
}

const ButtonWithEmoji = memo<ButtonWithEmojiProps>(({ className, text, emoji, onClick }): JSX.Element => {
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
    classes.push('buttonWithEmoji--clicked')
  }

  if (isActive === true) {
    classes.push('buttonWithEmoji--active')
  }

  return (
    <div
      ref={handleWidth}
      onAnimationEnd={handleAnimationEnd}
      className={cx('cursor-pointer', 'buttonWithEmoji', ...classes, className)}
      onClick={handleClick}
    >
      <div className={cx('buttonWithEmoji__container')}>
        {/* Animation elements */}
        <div className={cx('buttonWithEmoji__animation-wave')} style={waveStyle} />
        {/* Animation elements */}

        <div className={cx('buttonWithEmoji__content')}>
          <Emoji type={emoji} />
          <Text className={cx('buttonWithEmoji__text')} size="default">
            {text}
          </Text>
        </div>
      </div>
    </div>
  )
})

ButtonWithEmoji.displayName = 'ButtonWithEmoji'

export default ButtonWithEmoji
