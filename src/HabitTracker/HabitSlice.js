import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  habitList: [],
};



const habitSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action) => {
      state.habitList.push({
        id: Date.now(),
        name: action.payload,
        completedDates: [],
        streak: 0,
        lastCompleted: null,
      });
    },
    toggleHabit: (state, action) => {
      const habit = state.habitList.find(h => h.id === action.payload);
      const today = new Date().toDateString();

      if (!habit.completedDates.includes(today)) {
        habit.completedDates.push(today);

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

        const isYesterdayDone = habit.lastCompleted === yesterday.toDateString();

        habit.streak = isYesterdayDone ? habit.streak + 1 : 1;
        habit.lastCompleted = today;
      }
    },
    deleteHabit: (state, action) => {
      state.habitList = state.habitList.filter(h => h.id !== action.payload);
    },
    getDateByWeekday: (dayIndex) => {
  const today = new Date();
  const currentDay = today.getDay();
  const diff = dayIndex - currentDay;
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + diff);
  return targetDate.toDateString();
}
  },
});

export const { addHabit, toggleHabit, deleteHabit, getDateByWeekday } = habitSlice.actions;
export default habitSlice.reducer;
