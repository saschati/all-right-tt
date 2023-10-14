import React, { memo } from 'react'
import classNames from 'classnames/bind'
import styles from './ButtonWithEmoji.module.scss'
import Emoji, { type EmojiProps } from '@/UI/Icon/Emoji'
import Text from '@/UI/Text'

const cx = classNames.bind(styles)

export type ButtonWithEmojiProps = {
  emoji: EmojiProps['type']
  text: string
  className?: string
}

const ButtonWithEmoji = memo<ButtonWithEmojiProps>(({ className, text, emoji }): JSX.Element => {
  return (
    <div className={cx('cursor-pointer', 'buttonWithEmoji', className)}>
      <Emoji type={emoji} />
      <Text size="default">{text}</Text>
    </div>
  )
})

ButtonWithEmoji.displayName = 'ButtonWithEmoji'

export default ButtonWithEmoji
