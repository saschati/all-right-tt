import Grid from '@/UI/Table/Grid'
import Text from '@/UI/Text'
import Container from '@/UI/Wrapper/Container'
import { STEPS_ORDER } from '@/helpers/quiz/step'
import useStep from '@/hooks/domain/quiz/useStep'
import React, { useMemo } from 'react'
import { questions as questionsMock } from '@/mocks/quiz/question'
import { interests as interestsMock } from '@/mocks/quiz/interests'
import useStorage from '@/hooks/useStorage'
import {
  PostBookALessonQuery,
  PostSaveInterestsQuery,
  PostSaveQuestionQuery,
} from '@/app/store/redux/services/injects/quiz'
import { Interest, Question } from '@/types/model/quiz'

const QuizResultController: React.FC = (): JSX.Element => {
  useStep(STEPS_ORDER.CHOOSE_DATE_AND_TIME_LESSON)

  const storage = useStorage('local')

  const rows = useMemo(() => {
    const rows: string[][] = []

    const storedQuestions = storage.get<PostSaveQuestionQuery['questions'], []>(
      'questions',
      [],
    ) as PostSaveQuestionQuery['questions']

    storedQuestions.forEach((item) => {
      const questionMock = questionsMock.find((questionMock) => questionMock.id === item.id) as Question

      rows.push([
        questionMock.question,
        questionMock.answers.find((answer) => answer.id === item.answerId)?.answer as string,
      ])
    })

    const storedInterests = storage.get<PostSaveInterestsQuery['interests'], []>(
      'interests',
      [],
    ) as PostSaveInterestsQuery['interests']

    const interests = storedInterests.map((id) => {
      const interestMock = interestsMock.find((questionMock) => questionMock.id === id) as Interest

      return interestMock.name
    })

    rows.push(['What is your child interested in?', interests.join(', ')])

    const storedLesson = storage.get<PostBookALessonQuery, []>('lesson', []) as PostBookALessonQuery

    const bookALesson = `${storedLesson.date} date, ${storedLesson.time} time, ${storedLesson.timezone} TZ`

    rows.push(['Enter your phone number', storedLesson.phone])
    rows.push(['Choose the date and time of your free lesson', bookALesson])

    return rows
  }, [storage])

  return (
    <Container>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexFlow: 'column nowrap',
        }}
      >
        <Text size="medium">Quiz Result</Text>
        <div
          style={{
            marginTop: '24px',
          }}
        >
          <Grid rows={rows} />
        </div>
      </div>
    </Container>
  )
}

export default QuizResultController
