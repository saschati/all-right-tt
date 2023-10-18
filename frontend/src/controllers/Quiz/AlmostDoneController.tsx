import Container from '@/UI/Wrapper/Container'
import React from 'react'
import AlmostDone from '@/Common/Quiz/AlmostDone'
import useStep from '@/hooks/domain/quiz/useStep'
import { useNavigate } from 'react-router-dom'
import Path from '@/config/path'
import { STEPS_ORDER } from '@/helpers/quiz/step'

const AlmostDoneController: React.FC = (): JSX.Element => {
  useStep(STEPS_ORDER.ALMOST_DONE)

  const navigate = useNavigate()

  return (
    <Container>
      <AlmostDone
        title="Almost done"
        description="Answer a few questions so we can find the best offer for you"
        button={{
          text: "Let's go!",
          onClick: () => navigate(Path.QUIZ_CHILD_INTERESTED),
        }}
      />
    </Container>
  )
}

export default AlmostDoneController
