import { QuizWithPhone } from '@/Domain/Quiz'
import Container from '@/UI/Wrapper/Container'
import Path from '@/config/path'
import { STEPS_ORDER } from '@/helpers/quiz/step'
import useStep from '@/hooks/domain/quiz/useStep'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const EnterPhoneNumberController: React.FC = (): JSX.Element => {
  useStep(STEPS_ORDER.ENTER_PHONE_NUMBER)
  const navigate = useNavigate()

  return (
    <Container>
      <QuizWithPhone
        question={{
          title: 'Enter your phone number',
          description: 'This is necessary to receive notifications',
        }}
        button={{
          text: 'Continue',
        }}
        privacy={{
          text: 'We respect your privacy and are committed to protecting your personal data.',
        }}
        onSubmit={(values) => {
          console.log('Phone', values)

          navigate(Path.QUIZ_CHOOSE_DATE_AND_TIME_LESSON)
        }}
      />
    </Container>
  )
}

export default EnterPhoneNumberController
