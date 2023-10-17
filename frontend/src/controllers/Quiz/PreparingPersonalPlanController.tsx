import PersonalPlan from '@/Domain/Quiz/PersonalPlan'
import { CommentType } from '@/Domain/Trustpilot/TrustpilotComments'
import Container from '@/UI/Wrapper/Container'
import React, { useEffect, useMemo, useState } from 'react'
import avatar from '@/assets/img/comment/avatar.png'

const PreparingPersonalPlanController: React.FC = (): JSX.Element => {
  const [currProgression, setCurrProgression] = useState(0)
  const progressStages = useMemo(() => {
    return [
      "Analysis of the child's interests",
      'Evaluation of interesting topics',
      'Personalization of the program',
      'Teacher selection',
      'Planning the class schedule',
    ]
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrProgression((prevCurrProgression) => {
        const currProgression = prevCurrProgression + 1
        if (currProgression === progressStages.length - 1) {
          clearInterval(timer)
        }

        return currProgression
      })
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [progressStages.length])

  const comments: CommentType[] = useMemo(() => {
    return [
      {
        id: 1,
        title: 'The child really likes it!',
        comment:
          'We attend both individual lessons and group conversation clubs (3-6 children at a time). Lessons in a fun way. Highly recommend.',
        user: {
          avatar: avatar,
          name: 'Raluca and Sara',
        },
      },
      {
        id: 2,
        title: 'The child really likes it!',
        comment:
          'We attend both individual lessons and group conversation clubs (3-6 children at a time). Lessons in a fun way. Highly recommend.',
        user: {
          avatar: avatar,
          name: 'Raluca and Sara',
        },
      },
      {
        id: 3,
        title: 'The child really likes it!',
        comment:
          'We attend both individual lessons and group conversation clubs (3-6 children at a time). Lessons in a fun way. Highly recommend.',
        user: {
          avatar: avatar,
          name: 'Raluca and Sara',
        },
      },
    ]
  }, [])

  return (
    <Container>
      <PersonalPlan
        title="We are preparing a personal plan for you"
        progressStages={progressStages}
        currProgression={currProgression}
        trustpilot={{
          title: 'Parents rate AllRight “Excellent” on Trustpilot',
          comments,
        }}
      />
    </Container>
  )
}

export default PreparingPersonalPlanController
