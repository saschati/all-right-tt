import React from 'react'
import emojiMap, { type EmojiName } from './emoji'

export type EmojiType = EmojiName

export type EmojiProps = {
  type: EmojiType
  width?: number
  height?: number
}

const Emoji: React.FC<EmojiProps> = ({ type, width = 32, height = 32 }): JSX.Element => {
  const EmojiComponent = emojiMap[type] as React.FunctionComponent<{ width: number; height: number }>

  return <EmojiComponent width={width} height={height} />
}

export default Emoji
