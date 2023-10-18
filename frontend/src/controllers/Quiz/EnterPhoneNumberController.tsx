import { QuizWithPhone } from '@/Domain/Quiz'
import Container from '@/UI/Wrapper/Container'
import React from 'react'

const EnterPhoneNumberController: React.FC = (): JSX.Element => {
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
        onSubmit={(values, helper) => {
          console.log('Phone', values)

          helper.setSubmitting(false)
        }}
      />
    </Container>
  )
}

export default EnterPhoneNumberController
