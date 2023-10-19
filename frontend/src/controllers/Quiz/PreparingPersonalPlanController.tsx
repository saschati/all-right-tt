import PersonalPlan from '@/Domain/Quiz/PersonalPlan'
import Container from '@/UI/Wrapper/Container'
import React, { useEffect, useMemo, useState } from 'react'
import useStep from '@/hooks/domain/quiz/useStep'
import { STEPS_ORDER } from '@/helpers/quiz/step'
import { useNavigate } from 'react-router-dom'
import Path from '@/config/path'
import { useTrustpilotGetCommentsQuery } from '@/app/store/redux/services/injects/trustpilot'

const PreparingPersonalPlanController: React.FC = (): JSX.Element => {
  useStep(STEPS_ORDER.PREPARING_PERSONAL_PLAN)
  const navigate = useNavigate()

  const { data } = useTrustpilotGetCommentsQuery()

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

          setTimeout(() => {
            navigate(Path.QUIZ_ENTER_PHONE_NUMBER)
          }, 2000)
        }

        return currProgression
      })
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [progressStages.length, navigate])

  return (
    <Container>
      <PersonalPlan
        title="We are preparing a personal plan for you"
        progressStages={progressStages}
        currProgression={currProgression}
        trustpilot={{
          title: 'Parents rate AllRight “Excellent” on Trustpilot',
          comments: data?.comments || [],
        }}
      />
    </Container>
  )
}

export default PreparingPersonalPlanController
