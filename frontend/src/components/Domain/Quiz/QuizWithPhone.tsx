import React from 'react'
import styles from './QuizWithPhone.module.scss'
import classNames from 'classnames/bind'
import Quiz, { type QuizProps } from '@/Common/Quiz'
import { PhoneInput, PhoneInputProps } from '@/UI/Form/Input'
import Button, { ButtonProps } from '@/UI/Button'
import Privacy, { PrivacyProps } from '@/Common/Privacy'

const cx = classNames.bind(styles)

export type QuizWithPhoneProps = Omit<QuizProps, 'className'> & {
  className?: string
  phone: PhoneInputProps
  button: ButtonProps
  privacy: PrivacyProps
}

const QuizWithPhone: React.FC<QuizWithPhoneProps> = ({ className, question, phone, button, privacy }): JSX.Element => {
  return (
    <Quiz question={question}>
      <div className={cx('quizWithPhone', className)}>
        <PhoneInput {...phone} />
        <Button {...button} />
        <Privacy {...privacy} />
      </div>
    </Quiz>
  )
}

export default QuizWithPhone
