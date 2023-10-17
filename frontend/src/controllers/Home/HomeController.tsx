import { AnswerItem } from '@/Common/Quiz/Answer'
import { QuizWithAnswer } from '@/Common/Quiz'
import Container from '@/UI/Wrapper/Container'
import React, { useMemo } from 'react'

const HomeController: React.FC = (): JSX.Element => {
  const answers: AnswerItem[] = useMemo(() => {
    return [
      {
        id: 1,
        title: 'Already started studying',
        emoji: 'test',
      },
      {
        id: 2,
        title: 'Never studied',
        emoji: 'test',
      },
    ]
  }, [])

  return (
    <Container>
      <QuizWithAnswer
        question={{
          title: 'Has your child studied English before?',
        }}
        answers={answers}
        onClick={(answer) => {
          console.log(answer)
        }}
      />
    </Container>
  )
}

export default HomeController
