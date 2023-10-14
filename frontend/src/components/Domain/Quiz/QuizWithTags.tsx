import React from 'react'
import Quiz, { type QuizProps } from './Quiz'
import TagList, { type TagListProps } from './TagList'

export type QuizWithTagsProps = Omit<QuizProps, 'className'> & Omit<TagListProps, 'className'>

const QuizWithAnswer: React.FC<QuizWithTagsProps> = ({ question, tags }): JSX.Element => {
  return (
    <Quiz question={question}>
      <TagList tags={tags} />
    </Quiz>
  )
}

export default QuizWithAnswer
