import { setStep } from '@/app/store/redux/slices/quiz/step'
import { store } from '@/app/store/redux/store'
import { useEffect } from 'react'

const useStep = (curr: number) => {
  useEffect(() => {
    store.dispatch(setStep(curr))
  }, [curr])
}

export default useStep
