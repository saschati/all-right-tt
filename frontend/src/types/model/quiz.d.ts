import type { EmojiType } from '@/UI/Icon/Emoji/Emoji'

export interface Answer {
  id: number
  answer: string
  emoji: EmojiType
}

export interface Question {
  id: number
  question: string
  description?: string
  answers: Answer[]
}
