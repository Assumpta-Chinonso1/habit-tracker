import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"




const HabitTracker = () => {
const [habitNam, setHabitName] = useState('')
const habits = useSelector((state) => state.habits.habits)
const dispatch = useDispatch()

const currentWeek = Array.from({length: 7}, (_, i) => {
    const today = new Date()
    today.setDate(today.getDate() - today.getDate() + i)
    return today.toISOString().split('T')[0]


    const 
})




return (

    <div>

    </div>
    
)
}
export default HabitTracker
