import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import catReducer from '../features/cat/catSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cat: catReducer
  },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
