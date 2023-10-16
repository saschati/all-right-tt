import React from 'react'
import styles from './QuizWithCalendar.module.scss'
import classNames from 'classnames/bind'
import Quiz from './Quiz'
import { DayOfWeekList, type DayOfWeekListProps } from '@/Common/Day'
import Select, { type SelectProps } from '@/UI/Form/Select'
import TextSelect, { type TextSelectProps } from '@/UI/Form/Select/TextSelect'
import Button, { type ButtonProps } from '@/UI/Button'

const cx = classNames.bind(styles)

export type QuizWithCalendarProps = {
  title: string
  dayOfWeek: DayOfWeekListProps
  slot: SelectProps
  tz: TextSelectProps
  button: ButtonProps
}

const QuizWithCalendar: React.FC<QuizWithCalendarProps> = ({ title, dayOfWeek, slot, tz, button }): JSX.Element => {
  return (
    <Quiz question={{ title }}>
      <div className={cx('quizWithCalendar')}>
        <DayOfWeekList {...dayOfWeek} />
        <div className={cx('quizWithCalendar__slots-and-tz')}>
          <Select {...slot} />
          <TextSelect {...tz} />
        </div>
      </div>
      <Button {...button} />
    </Quiz>
  )
}

export default QuizWithCalendar
