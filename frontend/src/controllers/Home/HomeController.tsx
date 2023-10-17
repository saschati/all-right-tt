import AlmostDone from '@/Domain/Quiz/AlmostDone/AlmostDone'
import QuizWithAnswer from '@/Domain/Quiz/QuizWithAnswer'
import Tag from '@/UI/Tag'
import React, { useState } from 'react'
import minecraft from '@/assets/img/icons/interest/minecraft.png'
import avatar from '@/assets/img/comment/avatar.png'
import { QuizWithCalendar, QuizWithPhone, QuizWithTags } from '@/Domain/Quiz'
import ProgressBar from '@/UI/ProgressBar/ProgressBar'
import CircleProgressBar from '@/UI/ProgressBar/CircleProgressBar'
import TextSwapper from '@/Domain/Quiz/TextSwapper'
import Comment from '@/Common/Comment'
import { TrustpilotComments } from '@/Domain/Trustpilot'
import PersonalPlan from '@/Domain/Quiz/PersonalPlan'
import Day, { DayOfWeekList } from '@/Common/Day'
import Select from '@/UI/Form/Select'
import TextSelect from '@/UI/Form/Select/TextSelect'
import Privacy from '@/Common/Privacy'
import { PhoneInput } from '@/UI/Form/Input'
import Fraction from '@/Common/Fraction/Fraction'
import { ButtonWithEmoji } from '@/UI/Button'

const HomeController: React.FC = (): JSX.Element => {
  const dateTo = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)

  const [selectValue, setValue] = useState<number>()
  const [selectDay, setSelectDay] = useState<string | number>()
  const [phone, setPhone] = useState<string>()

  return (
    <div>
      <Tag
        icon={minecraft}
        name="Minecraft"
        onClick={() => {
          console.log('Minecraft')
        }}
      />
      <ButtonWithEmoji
        emoji="test"
        text="Never taught"
        onClick={() => {
          console.log('test')
        }}
      />
      <Fraction divisible={19} divisor={20} />
      <QuizWithPhone
        question={{
          title: 'Enter your phone number',
          description: 'This is necessary to receive notifications',
        }}
        phone={{
          value: phone,
          placeholder: 'Enter your phone number',
          onChange: (value) => {
            setPhone(value)
          },
        }}
        button={{
          text: 'Continue',
          onClick: () => {
            console.log('')
          },
        }}
        privacy={{
          text: 'We respect your privacy and are committed to protecting your personal data.',
        }}
      />
      <PhoneInput
        value={phone}
        placeholder="test"
        onChange={(value) => {
          setPhone(value)
        }}
      />
      <Privacy text="We respect your privacy and are committed to protecting your personal data." />
      <QuizWithCalendar
        title="Choose the date and time of your free lesson"
        dayOfWeek={{
          dateFrom: new Date(),
          dateTo: dateTo,
          activeDayId: selectDay,
          onDayClick: (id) => {
            setSelectDay(id)
          },
        }}
        slot={{
          onChange: (value) => {
            console.log(value)
          },
          placeholder: 'Select slot',
          options: [
            {
              label: 'Test 1',
              value: 1,
            },
            {
              label: 'Test 2',
              value: 2,
            },
            {
              label: 'Test 3',
              value: 3,
            },
            {
              label: 'Test 4',
              value: 4,
            },
          ],
        }}
        tz={{
          value: selectValue,
          placeholder: 'Kyiv UTC +3',
          onSelect: (value) => {
            setValue(value as number)
          },
          options: [
            {
              label: 'Test 1',
              value: 1,
            },
            {
              label: 'Test 2',
              value: 2,
            },
            {
              label: 'Test 3',
              value: 3,
            },
            {
              label: 'Test 4',
              value: 4,
            },
          ],
        }}
        button={{
          text: 'Book a lesson',
          onClick: () => {},
        }}
      />
      <TextSelect
        value={selectValue}
        placeholder="Kyiv UTC +3"
        onSelect={(value) => {
          setValue(value as number)
        }}
        options={[
          {
            label: 'Test 1',
            value: 1,
          },
          {
            label: 'Test 2',
            value: 2,
          },
          {
            label: 'Test 3',
            value: 3,
          },
          {
            label: 'Test 4',
            value: 4,
          },
        ]}
      />
      <Select
        onChange={(value) => {
          console.log(value)
        }}
        placeholder="Select options"
        options={[
          {
            label: 'Test 1',
            value: 1,
          },
          {
            label: 'Test 2',
            value: 2,
          },
          {
            label: 'Test 3',
            value: 3,
          },
          {
            label: 'Test 4',
            value: 4,
          },
        ]}
      />
      <DayOfWeekList
        dateFrom={new Date()}
        dateTo={dateTo}
        activeDayId={selectDay}
        onDayClick={(id) => {
          setSelectDay(id)
        }}
      />
      <Day number={11} weekday="su" />
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
      <ProgressBar percentage={99} />
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
            id: 5,
            icon: minecraft,
            name: 'Disney princesses',
          },
          {
            id: 6,
            icon: minecraft,
            name: 'Lego',
          },
          {
            id: 7,
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
