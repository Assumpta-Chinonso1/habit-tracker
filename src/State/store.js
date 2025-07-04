import { configureStore } from "@reduxjs/toolkit";
import habitsReducer from '../HabitTracker/HabitSlice'

export const store = configureStore({
    reducer: {
        habits: habitsReducer,
    }
})