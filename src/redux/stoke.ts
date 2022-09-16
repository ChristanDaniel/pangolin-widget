import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const stock = createSlice({
  name: 'stock',
  initialState: {
    counter: 1
  },
 
  reducers: {
    increment: (state: {counter: number}) => {
      state.counter += 1
    },
    decrement (state: {counter: number}) {
      state.counter -= 1
    }
  }
})

export const  { decrement, increment } = stock.actions
export default stock.reducer

