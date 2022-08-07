import { useState } from 'react'

export const usePrice = (initialState = 0.00) => {
  const [state, setState] = useState(initialState)

  const setTotal = price => {
    setState(state + price)
  }

  return {
    totalPrice: state,
    setTotalPrice: setTotal
  }
}
