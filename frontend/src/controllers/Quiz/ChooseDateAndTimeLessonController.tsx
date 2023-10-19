import { QuizWithCalendar } from '@/Domain/Quiz'
import Container from '@/UI/Wrapper/Container'
import { useQuizBookALessonMutation } from '@/app/store/redux/services/injects/quiz'
import { useTypedSelector } from '@/app/store/redux/store'
import Path from '@/config/path'
import { dayOfWeekFactory } from '@/helpers/quiz/dayOfWeek'
import { slotsFactory } from '@/helpers/quiz/slot'
import { STEPS_ORDER } from '@/helpers/quiz/step'
import { currentTimezone, tzFactory } from '@/helpers/tz'
import useStep from '@/hooks/domain/quiz/useStep'
import dayjs from '@/utils/dayjs'
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TIME_PERIOD = 30
const TIME_END_HOUR = 18
const TIME_START_HOUR = 9

const tzOptions = tzFactory()
const currTimezone = currentTimezone()

const ChooseDateAndTimeLessonController: React.FC = (): JSX.Element => {
  const navigate = useNavigate()

  useStep(STEPS_ORDER.CHOOSE_DATE_AND_TIME_LESSON)

  const phone = useTypedSelector(({ quiz }) => quiz.phone)
  const [bookALesson] = useQuizBookALessonMutation()
  const [currTz, setCurrTz] = useState(currTimezone)

  const tz = useMemo(() => {
    return {
      placeholder: 'Timezone',
      value: currTz,
      options: tzOptions,
    }
  }, [currTz])

  const dayOfWeek = useMemo(() => {
    let currTime = dayjs().tz(currTz)

    if (currTime.hour() > TIME_END_HOUR - 1) {
      currTime = currTime.add(24 - currTime.hour())
    }

    const dayOfWeeks = dayOfWeekFactory(currTime, currTime.add(7, 'day'), currTime)
    const active = dayOfWeeks.find((dayOfWeek) => dayOfWeek.isActive)

    return {
      value: active?.id,
      dayOfWeeks,
    }
  }, [currTz])

  const [day, setDay] = useState(dayOfWeek.value as string)

  useEffect(() => {
    setDay(dayOfWeek.value as string)
  }, [currTz, dayOfWeek.value])

  const slot = useMemo(() => {
    const dayTime = dayjs(day, 'DD.MM.YYYY').tz(currTz)
    const currTime = dayjs().tz(currTz)

    const options = slotsFactory(dayTime, currTime, TIME_PERIOD, TIME_END_HOUR, TIME_START_HOUR)

    return {
      placeholder: 'Select time',
      value: options[0]?.value,
      options,
    }
  }, [day, currTz])

  return (
    <Container>
      <QuizWithCalendar
        title="Choose the date and time of your free lesson"
        dayOfWeek={{
          onDayClick: (day) => {
            setDay(day as string)
          },
          ...dayOfWeek,
          value: day,
        }}
        slot={slot}
        tz={{
          onSelect: (value) => {
            setCurrTz(value as string)
          },
          ...tz,
          value: currTz,
        }}
        button={{
          text: 'Book a lesson',
        }}
        onSubmit={(values) => {
          void bookALesson({
            phone,
            date: values.dayOfWeek as string,
            time: values.slot as string,
            timezone: values.tz as string,
          })

          navigate(Path.QUIZ_RESULT)
        }}
      />
    </Container>
  )
}

export default ChooseDateAndTimeLessonController
