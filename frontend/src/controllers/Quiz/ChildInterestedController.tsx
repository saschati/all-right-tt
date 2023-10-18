import Container from '@/UI/Wrapper/Container'
import React, { useMemo } from 'react'
import { QuizWithTags } from '@/Common/Quiz'
import { TagItem } from '@/Common/Quiz/TagList'
import minecraft from '@/assets/img/icons/interest/minecraft.png'
import useStep from '@/hooks/domain/quiz/useStep'
import { useNavigate } from 'react-router-dom'
import Path from '@/config/path'
import { STEPS_ORDER } from '@/helpers/quiz/step'

const ChildInterestedController: React.FC = (): JSX.Element => {
  useStep(STEPS_ORDER.CHILD_INTERESTED)
  const navigate = useNavigate()

  const tags: TagItem[] = useMemo(() => {
    return [
      {
        id: 1,
        name: 'Minecraft',
        icon: minecraft,
      },
      {
        id: 2,
        name: 'Roblox',
        icon: minecraft,
      },
      {
        id: 3,
        name: 'Animals',
        icon: minecraft,
      },
      {
        id: 4,
        name: 'Traveling',
        icon: minecraft,
      },
      {
        id: 5,
        name: 'Disney princesses',
        icon: minecraft,
      },
      {
        id: 6,
        name: 'Lego',
        icon: minecraft,
      },
      {
        id: 7,
        name: 'Painting',
        icon: minecraft,
      },
    ]
  }, [])

  return (
    <Container>
      <QuizWithTags
        question={{
          title: 'What is your child interested in?',
          description: 'This will help us create a personalized program for your child',
        }}
        tags={tags}
        onClick={() => {}}
        button={{
          text: 'Continue',
          onClick: () => navigate(Path.QUIZ_PREPARING_PERSONAL_PLAN),
        }}
      />
    </Container>
  )
}

export default ChildInterestedController
