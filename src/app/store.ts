import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import { catAPI } from '../features/cat/catSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [catAPI.reducerPath]: catAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catAPI.middleware),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>