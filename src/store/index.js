import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  museum: museumSlice
})

export const store = configureStore({
  reducer: rootReducer
})
