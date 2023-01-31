import { combineReducers, configureStore } from '@reduxjs/toolkit'

import museumSlice from "./museumSlice.js";
import quizSlice from "./quizSlice.js";
import menuSlice from "./menuSlice.js";

const rootReducer = combineReducers({
  museum: museumSlice,
  quiz: quizSlice,
  menu: menuSlice,
})

export const store = configureStore({
  reducer: rootReducer
})
