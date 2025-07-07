import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHabit,   toggleDay,  deleteHabit} from '../HabitTracker/HabitSlice';
import { format } from 'date-fns';
import { motion } from 'framer-motion';

const App = () => {
  const [habitName, setHabitName] = useState('');
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits.habits);


  const currentWeek = Array.from({ length: 7 }, (_, i) => {
    const today = new Date();
    today.setDate(today.getDate() - today.getDay() + i);
    return today.toISOString().split('T')[0];
  });

  const handleAdd = () => {
    if (habitName.trim()) {
      dispatch(addHabit(habitName.trim()));
      setHabitName('');
    }
  };

  return (
    <div className="habit-wrapper">
      <h1>My Habit Tracker</h1>

      <div className="habit-input">
        <input
          type="text"
          value={habitName}
          placeholder="Enter habit e.g. Drink Water"
          onChange={(e) => setHabitName(e.target.value)}
        />
        <motion.button
          className="add-btn"
          whileTap={{ scale: 0.9 }}
          onClick={handleAdd}
        >
          Add Habit
        </motion.button>
      </div>

      <div className="calendar">
        <div className="calendar-header">
          <span className="header-title">Habit</span>
          {currentWeek.map(date => (
            <span key={date} className="header-day">
              {format(new Date(date), 'EEE')}
            </span>
          ))}
        </div>

        {habits.map((habit) => (
          <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="calendar-row"
            key={habit.id}
          >
            <span className="habit-title">{habit.name}</span>
            {currentWeek.map(date => (
              <div
                key={date}
                className={`day-box ${habit.records[date] ? 'checked' : ''}`}
                onClick={() => dispatch(toggleDay({ habitId: habit.id, date }))}
              >
                {habit.records[date] && <span className="checkmark">✅</span>}
              </div>
            ))}
            <button
              className="delete-btn"
              onClick={() => dispatch(deleteHabit(habit.id))}
              title="Delete Habit"
            >
              🗑️
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default App;






