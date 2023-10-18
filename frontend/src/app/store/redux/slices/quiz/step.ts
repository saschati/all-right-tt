import { type PayloadAction, createSlice } from '@reduxjs/toolkit'

type StepState = {
  curr: number
  total: number
  prev: number
  next: number
}

const initialState: StepState = {
  curr: 0,
  total: 20,
  prev: 0,
  next: 1,
}

const slice = createSlice({
  name: 'quizStep',
  initialState,
  reducers: {
    totalSteps: (state, action: PayloadAction<number>) => {
      state.total = action.payload
    },
    setStep: (state, action: PayloadAction<number>) => {
      state.curr = action.payload
      state.prev = state.curr - 1
      state.next = state.curr + 1
    },
  },
})

export default slice.reducer

export const { totalSteps, setStep } = slice.actions
