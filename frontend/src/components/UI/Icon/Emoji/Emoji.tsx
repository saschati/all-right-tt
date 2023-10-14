import React from 'react'
import Default from '@/assets/img/icons/emoji/emoji-smiling-face-with-heart-eyes.svg?react'

export type EmojiType = string

export type EmojiProps = {
  type: EmojiType
}

const Emoji: React.FC<EmojiProps> = ({ type }): JSX.Element => {
  if (type) {
    // TODO: WIP
  }

  return <Default width={32} height={32} />
}

export default Emoji
