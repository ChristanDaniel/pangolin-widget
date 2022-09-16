import { configureStore } from "@reduxjs/toolkit"
import stockReducer from "./stoke"

const storee = configureStore({
    reducer: {
      stock: stockReducer
    }
})

export type RootState = ReturnType<typeof storee.getState>
export default storee
export type AppDispatch = typeof storee.dispatch
