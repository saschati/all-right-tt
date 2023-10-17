import React from 'react'
import styles from './Question.module.scss'
import classNames from 'classnames/bind'
import Text from '@/UI/Text'

const cx = classNames.bind(styles)

export type QuestionProps = {
  className?: string
  title: string
  description?: string
}

const Question: React.FC<QuestionProps> = ({ className, title, description }): JSX.Element => {
  return (
    <div className={cx('question', className)}>
      <Text size="medium">{title}</Text>
      {description && <Text className={cx('question__desc')}>{description}</Text>}
    </div>
  )
}

export default Question
