import { Question } from '@/types/model/quiz'

export const questions: Question[] = [
  {
    id: 1,
    question: 'Has your child studied English before?',
    answers: [
      {
        id: 1,
        answer: 'Already started studying',
        emoji: 'smiling-face-with-heart-eyes',
      },
      {
        id: 2,
        answer: 'Never studied',
        emoji: 'face-with-diagonal-mouth',
      },
    ],
  },
  {
    id: 2,
    question: 'What goals do you see for your child?',
    answers: [
      {
        id: 1,
        answer: 'Speak fluently',
        emoji: 'smirking-face',
      },
      {
        id: 2,
        answer: 'Improve grades in school',
        emoji: 'woman-teacher',
      },
      {
        id: 3,
        answer: 'Learn grammar',
        emoji: 'nerd-face',
      },
      {
        id: 4,
        answer: 'Comprehensive study',
        emoji: 'man-juggling',
      },
    ],
  },
  {
    id: 3,
    question: 'How fast do you want to progress?',
    description: 'Some parents prefer a high pace of learning, others — a smooth learning of English',
    answers: [
      {
        id: 1,
        answer: 'The sooner the better',
        emoji: 'rocket',
      },
      {
        id: 2,
        answer: 'Gradual learning',
        emoji: 'snail',
      },
    ],
  },
  {
    id: 4,
    question: "Do you want to track your child's progress?",
    description: "We prepared a functionality that allows you to see how was the lesson and your child's results",
    answers: [
      {
        id: 1,
        answer: 'Yes',
        emoji: 'thumbs-up',
      },
      {
        id: 2,
        answer: 'No',
        emoji: 'raised-hand',
      },
    ],
  },
]
