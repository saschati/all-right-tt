import React from 'react'
import Quiz, { type QuizProps } from '@/Common/Quiz'
import TagList, { type TagListProps } from '@/Common/Quiz/TagList'
import Button, { ButtonProps } from '@/UI/Button'

export type QuizWithTagsProps = Omit<QuizProps, 'className'> &
  Omit<TagListProps, 'className'> & {
    button: ButtonProps
  }

const QuizWithAnswer: React.FC<QuizWithTagsProps> = ({ question, tags, button }): JSX.Element => {
  return (
    <Quiz question={question}>
      <TagList tags={tags} />
      <Button {...button} />
    </Quiz>
  )
}

export default QuizWithAnswer
