  import { createSlice, nanoid } from "@reduxjs/toolkit";

      const initialState = {
      habits: JSON.parse(localStorage.getItem('habits')) || [],

       }

          const habitSlice = createSlice({
                name: 'habits',
                initialState,
                reducers: {

          addHabit: (state, action) => {
                state.habits.push({
                id: nanoid(),
                name: action.payload,
                records: {}
                
        })

        
        localStorage.setItem('habits', JSON.stringify(state.habits))
       },

            toggleDay: (state, action ) => { 
            const {habitId, date} = action.payload
            const habit = state.habits.find((h) => h.id === habitId)

         if(habit) {   

                habit.records[date] = !habit.records[date]
                localStorage.setItem('habits', JSON.stringify(state.habits))
             }

          },

           deleteHabit:  (state, action) => {
           state.habits = state.habits.filter((h) => h.id !== action.payload)
     },

    },

  })
 

 export const { addHabit, toggleDay, deleteHabit  } = habitSlice.actions
 export default habitSlice.reducer