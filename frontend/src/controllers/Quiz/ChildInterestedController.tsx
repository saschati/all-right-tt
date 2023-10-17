import Container from '@/UI/Wrapper/Container'
import React, { useMemo } from 'react'
import { QuizWithTags } from '@/Common/Quiz'
import { TagItem } from '@/Common/Quiz/TagList'
import minecraft from '@/assets/img/icons/interest/minecraft.png'

const ChildInterestedController: React.FC = (): JSX.Element => {
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
          onClick: () => {},
        }}
      />
    </Container>
  )
}

export default ChildInterestedController
