import { Interest, Question } from '@/types/model/quiz'
import { api } from '../api'
import { questions } from '@/mocks/quiz/question'
import { interests } from '@/mocks/quiz/interests'

interface GetQuestionByIdResponse {
  question: Question
  isLast: boolean
}

interface GetQuestionByIdQuery {
  id: number
}

interface GetInterestsResponse {
  interests: Interest[]
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
  }),
})

export const { useQuizGetQuestionByIdQuery, useQuizGetInterestsQuery } = quizApi
