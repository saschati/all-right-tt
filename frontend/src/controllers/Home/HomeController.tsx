import QuizWithAnswer from '@/Domain/Quiz/QuizWithAnswer'
import React from 'react'

const HomeController: React.FC = (): JSX.Element => {
  return (
    <div>
      <QuizWithAnswer
        question={{
          title: 'How fast do you want to progress?',
          description: 'Some parents prefer a high pace of learning, others — a smooth learning of English',
        }}
        answers={[
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
        ]}
      />
    </div>
  )
}

export default HomeController
