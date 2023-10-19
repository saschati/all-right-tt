import { Interest, Question } from '@/types/model/quiz'
import { api } from '../api'
import { questions } from '@/mocks/quiz/question'
import { interests } from '@/mocks/quiz/interests'
import { storages } from '@/hooks/useStorage'
import LocalStorage from '@/app/storage/local'

export interface GetQuestionByIdResponse {
  question: Question
  isLast: boolean
}

export interface GetQuestionByIdQuery {
  id: number
}

export interface GetInterestsResponse {
  interests: Interest[]
}

export interface PostSaveQuestionQuery {
  questions: {
    id: number
    answerId: number
  }[]
}

export interface PostSaveInterestsQuery {
  interests: number[]
}

export interface PostBookALessonQuery {
  phone: string
  date: string
  time: string
  timezone: string
}

export const quizApi = api.injectEndpoints({
  endpoints: (build) => ({
    quizGetQuestionById: build.query<GetQuestionByIdResponse, GetQuestionByIdQuery>({
      queryFn({ id }) {
        const question = questions.find((question) => question.id === id) || null

        if (!question) {
          return { error: { status: 404, statusText: 'Question not found!', data: 'Question not found!' } }
        }

        return { data: { question: question, isLast: question.id === 4 } }
      },
      providesTags: ['QuizQuestion'],
    }),
    quizGetInterests: build.query<GetInterestsResponse, void>({
      queryFn() {
        return { data: { interests } }
      },
      providesTags: ['QuizInterest'],
    }),
    quizSaveQuestion: build.mutation<void, PostSaveQuestionQuery>({
      queryFn: ({ questions }) => {
        const local = storages.get('local') as LocalStorage

        local.set('questions', questions)

        return { data: void 0 }
      },
      invalidatesTags: ['QuizQuestion'],
    }),
    quizSaveInterests: build.mutation<void, PostSaveInterestsQuery>({
      queryFn: ({ interests }) => {
        const local = storages.get('local') as LocalStorage

        local.set('interests', interests)

        return { data: void 0 }
      },
      invalidatesTags: ['QuizInterest'],
    }),
    quizBookALesson: build.mutation<void, PostBookALessonQuery>({
      queryFn: (lesson) => {
        const local = storages.get('local') as LocalStorage

        local.set('lesson', lesson)

        return { data: void 0 }
      },
    }),
  }),
})

export const {
  useQuizGetQuestionByIdQuery,
  useQuizGetInterestsQuery,
  useQuizSaveQuestionMutation,
  useQuizSaveInterestsMutation,
  useQuizBookALessonMutation,
} = quizApi
