import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

export type Question = {
  id: number
  answerId: number
}

type QuizState = {
  questions: Question[]
  phone: string
}

const initialState: QuizState = {
  questions: [],
  phone: '',
}

const slice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    addQuestion: (state, action: PayloadAction<Question>) => {
      state.questions = [...state.questions, action.payload]
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload
    },
  },
})

export default slice.reducer

export const { addQuestion, setPhone } = slice.actions
