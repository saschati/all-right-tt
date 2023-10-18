import { Question } from '@/types/model/quiz'
import { api } from '../api'
import { questions } from '@/mocks/quiz/question'

interface GetQuestionByIdResponse {
  question: Question
  isLast: boolean
}

interface GetQuestionByIdQuery {
  id: number
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
  }),
})

export const { useQuizGetQuestionByIdQuery } = quizApi
