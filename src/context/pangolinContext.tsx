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

export const { increment, decrement } = stock.actions
// export default stock.reducer//

export type RootState = ReturnType<typeof storee.getState>

const MyContext = React.createContext<ReactReduxContextValue>(null as any)
// Export your custom hooks if you wish to use them in other files.
export const useStore = createStoreHook(MyContext)
export const useDispatch = createDispatchHook(MyContext)
// export const useSelector: TypedUseSelectorHook<RootState> = createSelectorHook(MyContext)

const storee = configureStore({
  reducer: {
    stock: stock.reducer
  }
})

// export const useSelector: TypedUseSelectorHook<RootState> = selector => {
//   const store = React.useContext(MyContext);
//   const [, forceUpdate] = React.useReducer(c => c + 1, 0);
//   const state = selector(storee.getState());

//   React.useEffect(() => {
//     return storee.subscribe(() => {
//       forceUpdate();
//     });
//   }, [store, forceUpdate]);

//   return state;
// };

export const useSelector: TypedUseSelectorHook<RootState> = selector => {
  const [, forceUpdate] = React.useReducer(c => c + 1, 0);
  const currentState = React.useRef<TypedUseSelectorHook<RootState>>();
  currentState.current = selector(storee.getState());

  React.useEffect(() => {
    return storee.subscribe(() => {
      try {
        const nextState = selector(storee.getState());
        if (nextState === currentState.current) {
          return;
        }
      } catch (err) {
        console.log(err)
      }
      forceUpdate();
    });
  }, [storee, forceUpdate, selector, currentState]);

  return currentState.current;
};

export function MyProvider({ children }: any) {
  return (
    // <MyContext.Provider value={storee}>
      <Provider context={MyContext} store={storee}>
          {children}
      </Provider>
    // </MyContext.Provider>

  )
}
