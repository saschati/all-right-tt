import React from 'react'
import Quiz, { type QuizProps } from '@/Common/Quiz/Quiz'
import Answer, { type AnswerProps } from '@/Common/Quiz/Answer'

export type QuizWithAnswerProps = Omit<QuizProps, 'className'> & Omit<AnswerProps, 'className'>

const QuizWithAnswer: React.FC<QuizWithAnswerProps> = ({ question, answers, onClick }): JSX.Element => {
  return (
    <Quiz question={question}>
      <Answer answers={answers} onClick={onClick} />
    </Quiz>
  )
}

export default QuizWithAnswer
