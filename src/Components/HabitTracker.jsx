import { useState } from "react"
import { useSelector } from "react-redux"



const HabitTracker = () => {
const [habitName, setHabitName] = useState('')
const habits = useSelector((state) => (state.habits.habits))


  return (
    <div className="habit-wrapper">
      <h1>My Habit Tracker</h1>
    </div>
  )
}

export default HabitTracker

