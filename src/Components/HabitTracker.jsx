import { setDate } from "date-fns"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addHabit } from "../HabitTracker/HabitSlice"


const HabitTracker = () => {
const [habitName, setHabitName] = useState('')
const habits = useSelector((state) => state.habits.habits)
const dispatch = useDispatch()

const currentWeek = Array.from({length:7}, (_, i) => {
    const today = new Date()
    today.setDate(today.getDate() - today.getDay())
    return today.toISOString().split('T')[0]

})

const handleAdd = (e) =>{
    e.preventDefault()
    if(habitName.trim()){
        dispatch(addHabit.trim())
    }
}


    return(

    )
}

export default HabitTracker