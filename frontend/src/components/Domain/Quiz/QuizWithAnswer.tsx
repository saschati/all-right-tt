import React from 'react'
import Quiz, { type QuizProps } from './Quiz'
import Answer, { type AnswerProps } from './Answer'

export type QuizWithAnswerProps = Omit<QuizProps, 'className'> & Omit<AnswerProps, 'className'>

const QuizWithAnswer: React.FC<QuizWithAnswerProps> = ({ question, answers }): JSX.Element => {
  return (
    <Quiz question={question}>
      <Answer answers={answers} />
    </Quiz>
  )
}

export default QuizWithAnswer
