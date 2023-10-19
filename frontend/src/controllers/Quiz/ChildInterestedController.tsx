import Container from '@/UI/Wrapper/Container'
import React, { useCallback, useState } from 'react'
import { QuizWithTags, type QuizWithTagsProps } from '@/Common/Quiz'
import useStep from '@/hooks/domain/quiz/useStep'
import { useNavigate } from 'react-router-dom'
import Path from '@/config/path'
import { STEPS_ORDER } from '@/helpers/quiz/step'
import { useQuizGetInterestsQuery, useQuizSaveInterestsMutation } from '@/app/store/redux/services/injects/quiz'

const ChildInterestedController: React.FC = (): JSX.Element => {
  useStep(STEPS_ORDER.CHILD_INTERESTED)
  const navigate = useNavigate()
  const { data } = useQuizGetInterestsQuery()
  const [saveInterests] = useQuizSaveInterestsMutation()

  const [checkedTags, setCheckedTags] = useState<number[]>([])

  const handleClick = useCallback<QuizWithTagsProps['onClick']>((tag, isActive) => {
    setCheckedTags((prevCheckedTags) =>
      isActive ? prevCheckedTags.concat(tag.id as number) : prevCheckedTags.filter((id) => id !== tag.id),
    )
  }, [])

  return (
    <Container>
      <QuizWithTags
        question={{
          title: 'What is your child interested in?',
          description: 'This will help us create a personalized program for your child',
        }}
        tags={data?.interests || []}
        onClick={handleClick}
        button={{
          text: 'Continue',
          disabled: checkedTags.length === 0,
          onClick: () => {
            void saveInterests({ interests: checkedTags })

            navigate(Path.QUIZ_PREPARING_PERSONAL_PLAN)
          },
        }}
      />
    </Container>
  )
}

export default ChildInterestedController
