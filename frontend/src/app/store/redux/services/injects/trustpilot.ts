import { api } from '../api'
import { comments } from '@/mocks/trustpilot/comment'
import { Comment } from '@/types/model/trustpilot'

interface GetCommentsResponse {
  comments: Comment[]
}

export const quizApi = api.injectEndpoints({
  endpoints: (build) => ({
    trustpilotGetComments: build.query<GetCommentsResponse, void>({
      queryFn() {
        return { data: { comments } }
      },
      providesTags: ['TrustpilotComment'],
    }),
  }),
})

export const { useTrustpilotGetCommentsQuery } = quizApi
