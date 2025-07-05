import { createSlice, nanoid } from "@reduxjs/toolkit";



const initialState = {
  habits: JSON.parse(localStorage.getItem("habits")) || []
}

const habitSlice = createSlice({
  name: "habits",
  initialState,
  reducers:{
    addHabits: (state, action) => {
      state.habits.push({
        id: nanoid(),
        name: action.payload,
        records: {}
      })
      localStorage.setItem("habits", JSON.stringify(state.habits))
    },
    toggleDay : (state, action)
  }
})
