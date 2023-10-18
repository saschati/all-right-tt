import React, { useMemo } from 'react'
import styles from './QuizWithPhone.module.scss'
import classNames from 'classnames/bind'
import Quiz, { type QuizProps } from '@/Common/Quiz'
import Privacy, { PrivacyProps } from '@/Common/Privacy'
import { FormikButton, type FormikButtonProps, FormikForm, type FormikFormProps, FormikPhoneInput } from '../Formik'
import Yup from '@/utils/yup'

const cx = classNames.bind(styles)

export type QuizWithPhoneProps = Omit<QuizProps, 'className'> & {
  className?: string
  phone?: string
  button: FormikButtonProps
  privacy: PrivacyProps
  onSubmit: FormikFormProps<Values, object>['onSubmit']
}

type Values = {
  phone?: string
}

const validationSchema = Yup.object().shape({
  phone: Yup.string().phone().required(),
})

const QuizWithPhone: React.FC<QuizWithPhoneProps> = ({
  className,
  question,
  phone,
  button,
  privacy,
  onSubmit,
}): JSX.Element => {
  const initialValues: Values = useMemo(() => ({ phone: phone || '' }), [phone])

  return (
    <FormikForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Quiz question={question}>
        <div className={cx('quizWithPhone', className)}>
          <FormikPhoneInput name="phone" />
          <FormikButton disableOnInvalid {...button} />
          <Privacy {...privacy} />
        </div>
      </Quiz>
    </FormikForm>
  )
}

export default QuizWithPhone
