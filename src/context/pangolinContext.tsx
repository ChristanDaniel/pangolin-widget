import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import { ReactReduxContextValue, TypedUseSelectorHook } from 'react-redux'
import {
  Provider,
  createStoreHook,
  createDispatchHook,
  createSelectorHook
} from 'react-redux'

// import stockReducer from '../redux/stoke'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export const stock = createSlice({
  name: 'stock',
  initialState: {
    counter: 0
  },
  reducers: {
    increment (state) {
        state.counter += 1
    },
    decrement (state) {
        state.counter -= 1
    }
  }
})

export const  { increment, decrement } = stock.actions
export default stock.reducer

const storee = configureStore({
  reducer: {
    stock: stock.reducer
  }
})

export type RootState = ReturnType<typeof storee.getState>

const MyContext = React.createContext<ReactReduxContextValue>(null as any)
// Export your custom hooks if you wish to use them in other files.
export const useStore = createStoreHook(MyContext)
export const useDispatch = createDispatchHook(MyContext)
export const useSelector: TypedUseSelectorHook<RootState> = createSelectorHook(MyContext)


export function MyProvider({ children }: any) {
  return (
    <Provider context={MyContext} store={storee}>
        {children}
    </Provider>

  )
}
