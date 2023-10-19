import { QuizWithAnswer } from '@/Common/Quiz'
import Container from '@/UI/Wrapper/Container'
import React, { useMemo } from 'react'
import useStep from '@/hooks/domain/quiz/useStep'
import { useNavigate, useParams } from 'react-router-dom'
import Path from '@/config/path'
import { useQuizGetQuestionByIdQuery, useQuizSaveQuestionMutation } from '@/app/store/redux/services/injects/quiz'
import { routeToPath } from '@/config/router'
import { store, useTypedSelector } from '@/app/store/redux/store'
import { addQuestion } from '@/app/store/redux/slices/quiz/quiz'

type RouteParams = {
  id?: string
}

const HomeController: React.FC = (): JSX.Element => {
  const params = useParams<RouteParams>()
  const id = Number(params.id || 1)

  useStep(id)

  const questions = useTypedSelector(({ quiz }) => quiz.questions)
  const navigate = useNavigate()
  const { data } = useQuizGetQuestionByIdQuery({ id })
  const [saveQuestions] = useQuizSaveQuestionMutation()

  const answers = useMemo(() => {
    return (data?.question.answers || []).map((answer) => ({
      id: answer.id,
      title: answer.answer,
      emoji: answer.emoji,
    }))
  }, [data?.question.answers])

  return (
    <Container key={id}>
      <QuizWithAnswer
        question={{
          title: data?.question.question || '',
          description: data?.question.description,
        }}
        answers={answers}
        onClick={(answer) => {
          store.dispatch(
            addQuestion({
              id: data?.question.id as number,
              answerId: answer.id as number,
            }),
          )

          setTimeout(() => {
            if (data?.isLast) {
              void saveQuestions({ questions })

              navigate(Path.QUIZ_ALMOST_DONE)
            } else {
              navigate({ pathname: routeToPath(Path.QUIZ_QUESTION, { id: id + 1 }) })
            }
          }, 100)
        }}
      />
    </Container>
  )
}

export default HomeController
