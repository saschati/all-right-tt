import { QuizWithCalendar } from '@/Domain/Quiz'
import Container from '@/UI/Wrapper/Container'
import { dayOfWeekFactory } from '@/helpers/quiz/dayOfWeek'
import React, { useMemo } from 'react'

const WEEK_TIME = 7 * 24 * 60 * 60 * 1000

const ChooseDataAndTimeLessonController: React.FC = (): JSX.Element => {
  const dayOfWeek = useMemo(() => {
    const dayOfWeeks = dayOfWeekFactory(new Date(), new Date(Date.now() + WEEK_TIME))
    const active = dayOfWeeks.find((dayOfWeek) => dayOfWeek.isActive)

    return {
      value: active?.id,
      dayOfWeeks,
    }
  }, [])

  const tz = useMemo(() => {
    return {
      placeholder: 'Timezone',
      value: 1,
      options: [
        {
          value: 1,
          label: 'Kyiv UTC +3',
        },
      ],
    }
  }, [])

  const slot = useMemo(() => {
    return {
      placeholder: 'Select time',
      value: 1,
      options: [
        {
          value: 1,
          label: '13:00',
        },
      ],
    }
  }, [])

  return (
    <Container>
      <QuizWithCalendar
        title="Choose the date and time of your free lesson"
        dayOfWeek={dayOfWeek}
        slot={slot}
        tz={tz}
        button={{
          text: 'Book a lesson',
        }}
        onSubmit={(values) => {
          console.log('onSubmit', values)
        }}
      />
    </Container>
  )
}

export default ChooseDataAndTimeLessonController
