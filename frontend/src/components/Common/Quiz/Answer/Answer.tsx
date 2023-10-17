import React, { useMemo } from 'react'
import styles from './Answer.module.scss'
import classNames from 'classnames/bind'
import { ButtonWithEmoji, type ButtonWithEmojiProps } from '@/UI/Button'

const cx = classNames.bind(styles)

export interface AnswerItem {
  id: string | number
  title: string
  emoji: ButtonWithEmojiProps['emoji']
}

export type AnswerProps = {
  className?: string
  answers: AnswerItem[]
  onClick: (answer: AnswerItem, isActive: boolean) => void
}

const Answer: React.FC<AnswerProps> = ({ className, answers, onClick }): JSX.Element => {
  const answersComp = useMemo(() => {
    return answers.map((answer) => (
      <ButtonWithEmoji
        key={answer.id}
        emoji={answer.emoji}
        text={answer.title}
        onClick={(isActive) => onClick(answer, isActive)}
      />
    ))
  }, [answers, onClick])

  return <div className={cx('answer', className)}>{answersComp}</div>
}

export default Answer
