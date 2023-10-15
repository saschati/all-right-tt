import AlmostDone from '@/Domain/Quiz/AlmostDone/AlmostDone'
import QuizWithAnswer from '@/Domain/Quiz/QuizWithAnswer'
import Tag from '@/UI/Tag'
import React from 'react'
import minecraft from '@/assets/img/icons/interest/minecraft.png'
import avatar from '@/assets/img/comment/avatar.png'
import { QuizWithTags } from '@/Domain/Quiz'
import ProgressBar from '@/UI/ProgressBar/ProgressBar'
import CircleProgressBar from '@/UI/ProgressBar/CircleProgressBar'
import TextSwapper from '@/Domain/Quiz/TextSwapper'
import Comment from '@/Common/Comment'
import { TrustpilotComments } from '@/Domain/Trustpilot'
import PersonalPlan from '@/Domain/Quiz/PersonalPlan'

const HomeController: React.FC = (): JSX.Element => {
  return (
    <div>
      <PersonalPlan
        title="We are preparing a personal plan for you"
        progressStages={[
          "Analysis of the child's interests",
          'Evaluation of interesting topics',
          'Personalization of the program',
          'Teacher selection',
          'Planning the class schedule',
        ]}
        currProgression={4}
        trustpilot={{
          title: 'Parents rate AllRight “Excellent” on Trustpilot',
          comments: [
            {
              id: 1,
              title: 'The child really likes it!',
              comment:
                'We attend both individual lessons and group conversation clubs (3-6 children at a time). Lessons in a fun way. Highly recommend.',
              user: {
                avatar,
                name: 'Raluca and Sara',
              },
            },
            {
              id: 2,
              title: 'The child really likes it!',
              comment:
                'We attend both individual lessons and group conversation clubs (3-6 children at a time). Lessons in a fun way. Highly recommend.',
              user: {
                avatar,
                name: 'Raluca and Sara',
              },
            },
            {
              id: 3,
              title: 'The child really likes it!',
              comment:
                'We attend both individual lessons and group conversation clubs (3-6 children at a time). Lessons in a fun way. Highly recommend.',
              user: {
                avatar,
                name: 'Raluca and Sara',
              },
            },
          ],
        }}
      />
      <TrustpilotComments
        title="Parents rate AllRight “Excellent” on Trustpilot"
        comments={[
          {
            id: 1,
            title: 'The child really likes it!',
            comment:
              'We attend both individual lessons and group conversation clubs (3-6 children at a time). Lessons in a fun way. Highly recommend.',
            user: {
              avatar,
              name: 'Raluca and Sara',
            },
          },
          {
            id: 2,
            title: 'The child really likes it!',
            comment:
              'We attend both individual lessons and group conversation clubs (3-6 children at a time). Lessons in a fun way. Highly recommend.',
            user: {
              avatar,
              name: 'Raluca and Sara',
            },
          },
          {
            id: 3,
            title: 'The child really likes it!',
            comment:
              'We attend both individual lessons and group conversation clubs (3-6 children at a time). Lessons in a fun way. Highly recommend.',
            user: {
              avatar,
              name: 'Raluca and Sara',
            },
          },
        ]}
      />
      <Comment
        title="The child really likes it!"
        comment="We attend both individual lessons and group conversation clubs (3-6 children at a time). Lessons in a fun way. Highly recommend."
        user={{
          avatar,
          name: 'Raluca and Sara',
        }}
      />
      <TextSwapper
        currIndex={0}
        items={[
          "Analysis of the child's interests",
          'Evaluation of interesting topics',
          'Personalization of the program',
          'Teacher selection',
          'Planning the class schedule',
        ]}
      />
      <CircleProgressBar percentage={30} />
      <ProgressBar curr={2} total={20} />
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
      <AlmostDone
        title="Almost done"
        description="Answer a few questions so we can find the best offer for you"
        button={{
          text: "Let's go!",
          onClick: () => {
            console.log('test')
          },
        }}
      />
      <Tag icon={minecraft} name="Minecraft" />
      <QuizWithTags
        question={{
          title: 'What is your child interested in?',
          description: 'This will help us create a personalized program for your child',
        }}
        tags={[
          {
            id: 1,
            icon: minecraft,
            name: 'Minecraft',
          },
          {
            id: 2,
            icon: minecraft,
            name: 'Roblox',
          },
          {
            id: 3,
            icon: minecraft,
            name: 'Animals',
          },
          {
            id: 4,
            icon: minecraft,
            name: 'Traveling',
          },
          {
            id: 4,
            icon: minecraft,
            name: 'Disney princesses',
          },
          {
            id: 4,
            icon: minecraft,
            name: 'Lego',
          },
          {
            id: 4,
            icon: minecraft,
            name: 'Painting',
          },
        ]}
        button={{
          text: 'Continue',
          onClick: () => {
            console.log('Continue')
          },
        }}
      />
    </div>
  )
}

export default HomeController
