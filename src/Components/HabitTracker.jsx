import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addHabit } from "../HabitTracker/HabitSlice"


const HabitTracker = () => {
  
  const [habitName, setHabitName] = useState('')
  const habits = useSelector((state) => state.habits.habits)
  const dispatch = useDispatch()

     const currentWeek = Array.from({length:7}, (_, i) =>{
      const today = new Date()
      today.setDate(today.getDate() - today.getDay() + i)
     })

     const handleAdd = (e) => {
      e.preventDefault()
      if(habitName.trim()){
        dispatch(addHabit(habitName.trim()))
        setHabitName('')
      }
     }




  return (
    <div className="habit-wrapper">

    </div>
  )
}

export default HabitTracker

