import Container from '@/UI/Wrapper/Container'
import React from 'react'
import AlmostDone from '@/Common/Quiz/AlmostDone'

const AlmostDoneController: React.FC = (): JSX.Element => {
  return (
    <Container>
      <AlmostDone
        title="Almost done"
        description="Answer a few questions so we can find the best offer for you"
        button={{
          text: "Let's go!",
          onClick: () => {},
        }}
      />
    </Container>
  )
}

export default AlmostDoneController
