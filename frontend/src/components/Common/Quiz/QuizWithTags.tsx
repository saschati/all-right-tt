import React from 'react'
import Quiz, { type QuizProps } from '@/Common/Quiz'
import TagList, { type TagListProps } from '@/Common/Quiz/TagList'
import Button, { ButtonProps } from '@/UI/Button'

export type QuizWithTagsProps = Omit<QuizProps, 'className'> &
  Omit<TagListProps, 'className'> & {
    button: ButtonProps
  }

const QuizWithTags: React.FC<QuizWithTagsProps> = ({ question, tags, button, onClick }): JSX.Element => {
  return (
    <Quiz question={question}>
      <TagList tags={tags} onClick={onClick} />
      <Button {...button} />
    </Quiz>
  )
}

export default QuizWithTags
