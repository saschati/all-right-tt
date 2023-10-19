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
  onDayClick?: DayOfWeekListProps['onDayClick']
}

export type TextSelectType = Omit<TextSelectProps, 'onSelect'> & {
  value?: string | number
  onSelect?: TextSelectProps['onSelect']
}

export type QuizWithCalendarProps = {
  title: string
  dayOfWeek: DayOfWeekType
  slot: Omit<FormikSelectProps, 'name'>
  tz: TextSelectType
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
  const { value: slotValue, ...slotProps } = slot
  const { value: dayOfWeekValue, onDayClick: onDayClickDOW, ...dayOfWeekProps } = dayOfWeek
  const { value: tzValue, onSelect: onSelectTZ, ...tzProps } = tz

  const initialValues: Values = useMemo(
    () => ({
      dayOfWeek: dayOfWeekValue,
      slot: slotValue,
      tz: tzValue,
    }),
    [dayOfWeekValue, slotValue, tzValue],
  )

  const dayOfWeekIds = useMemo(() => {
    return dayOfWeek.dayOfWeeks.map((dayOfWeek) => dayOfWeek.id)
  }, [dayOfWeek.dayOfWeeks])

  const slotIds = useMemo(() => {
    return slot.options.map((option) => option.value as number)
  }, [slot.options])

  const tzIds = useMemo(() => {
    return tz.options.map((option) => option.value as number)
  }, [tz.options])

  const validationSchema = Yup.object().shape({
    dayOfWeek: Yup.mixed().required().oneOf(dayOfWeekIds),
    slot: Yup.mixed().required().oneOf(slotIds),
    tz: Yup.mixed().required().oneOf(tzIds),
  })

  return (
    <FormikForm
      initialValues={initialValues}
      enableReinitialize={true}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Quiz question={{ title }}>
        <div className={cx('quizWithCalendar')}>
          <FormikConsumer>
            {(context) => (
              <>
                <DayOfWeekList
                  {...dayOfWeekProps}
                  value={(context.values as Values).dayOfWeek}
                  onDayClick={(value, day) => {
                    void context.setFieldValue('dayOfWeek', value)
                    onDayClickDOW && onDayClickDOW(value, day)
                  }}
                />
                <div className={cx('quizWithCalendar__slots-and-tz')}>
                  <FormikSelect name="slot" {...slotProps} />
                  <TextSelect
                    {...tzProps}
                    value={(context.values as Values).tz as ValueType}
                    onSelect={(value, option) => {
                      void context.setFieldValue('tz', value)
                      onSelectTZ && onSelectTZ(value, option)
                    }}
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
