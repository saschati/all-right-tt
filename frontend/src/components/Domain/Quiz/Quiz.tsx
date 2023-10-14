import React from 'react'
import styles from './Quiz.module.scss'
import classNames from 'classnames/bind'
import Question, { type QuestionProps } from './Question'

const cx = classNames.bind(styles)

export type QuizProps = React.PropsWithChildren & {
  className?: string
  question: Omit<QuestionProps, 'className'>
}

const Quiz: React.FC<QuizProps> = ({ className, children, question }): JSX.Element => {
  return (
    <div className={cx('quiz', className)}>
      <Question title={question.title} description={question.description} />
      {children}
    </div>
  )
}

export default Quiz
