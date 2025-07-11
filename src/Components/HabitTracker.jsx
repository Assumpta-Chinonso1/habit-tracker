import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addHabit } from "../HabitTracker/HabitSlice"
import { format } from "date-fns"
import { motion } from "framer-motion"



const HabitTracker = () => {
const [habitName, setHabitName] = useState('')
const habits = useSelector((state) => (state.habits.habits))
const dispatch = useDispatch()

const currentWeek = Array.from({length: 7}, (_, i) => {
  const today = new Date()
  today.setDate(today.getDate() - today.getDay() + i)
  return today.toISOString().split('T')[0]
})

const  handleAdd = (e) => {
  e.preventDefault()
  if(habitName.trim()){
    dispatch(addHabit(habitName.trim()))
  }
}


  return (
    <div className="habit-wrapper">
      <h1>My Habit Tracker</h1>
      <div className="date-section">
        <div>
          WEEK OF {format(new Date(currentWeek[0]), "MMM d")} -
                  {format (new Date(currentWeek[0]), "MMM d")}
        </div>
        <div>
            DATE {format(new Date(), "MMM d, yyyy")}

        </div>
      </div>

      <div className="habit-input">
         <input type="text"
         value={habitName}
         placeholder="Enter Habit e.g Drink Water"
         onChange={(e) => setHabitName(e.target.value)} />

           <motion.button
           className="add-btn"
           whileTap={{scale:0.9}}
           disabled={!habitName.trim()}
           onClick={handleAdd}>
          Add Habit
           </motion.button>
      </div>
    </div>
  )
}

export default HabitTracker

