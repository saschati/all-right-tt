import React, { useMemo } from 'react'
import styles from './QuizWithCalendar.module.scss'
import classNames from 'classnames/bind'
import Quiz from '@/Common/Quiz/Quiz'
import { DayOfWeekList, type DayOfWeekListProps } from '@/Common/Day'
import TextSelect, { ValueType, type TextSelectProps } from '@/UI/Form/Select/TextSelect'
import {
  FormikForm,
  type FormikButtonProps,
  type FormikFormProps,
  FormikButton,
  FormikSelect,
  type FormikSelectProps,
} from '../Formik'
import Yup from '@/utils/yup'
import { FormikConsumer } from 'formik'

const cx = classNames.bind(styles)

export type DayOfWeekType = Omit<DayOfWeekListProps, 'onDayClick'> & {
  value?: string | number
}

export type QuizWithCalendarProps = {
  title: string
  dayOfWeek: DayOfWeekType
  slot: Omit<FormikSelectProps, 'name'>
  tz: Omit<TextSelectProps, 'onSelect'>
  button: FormikButtonProps
  onSubmit: FormikFormProps<Values, object>['onSubmit']
}

type Values = {
  dayOfWeek?: string | number
  slot?: string | number | null
  tz?: string | number
}

const QuizWithCalendar: React.FC<QuizWithCalendarProps> = ({
  title,
  dayOfWeek,
  slot,
  tz,
  button,
  onSubmit,
}): JSX.Element => {
  const initialValues: Values = useMemo(
    () => ({
      dayOfWeek: dayOfWeek.value,
      slot: slot.value,
      tz: tz.value,
    }),
    [dayOfWeek.value, slot.value, tz.value],
  )

  const validationSchema = Yup.object().shape({
    phone: Yup.string().phone().required(),
  })

  return (
    <FormikForm initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Quiz question={{ title }}>
        <div className={cx('quizWithCalendar')}>
          <FormikConsumer>
            {(context) => (
              <>
                <DayOfWeekList
                  {...dayOfWeek}
                  value={(context.values as Values).dayOfWeek}
                  onDayClick={(value) => {
                    void context.setFieldValue('dayOfWeek', value)
                  }}
                />
                <div className={cx('quizWithCalendar__slots-and-tz')}>
                  <FormikSelect name="slot" {...slot} />
                  <TextSelect
                    {...tz}
                    value={(context.values as Values).tz as ValueType}
                    onSelect={(value) => void context.setFieldValue('tz', value)}
                  />
                </div>
              </>
            )}
          </FormikConsumer>
        </div>
        <FormikButton disableOnInvalid {...button} />
      </Quiz>
    </FormikForm>
  )
}

export default QuizWithCalendar
