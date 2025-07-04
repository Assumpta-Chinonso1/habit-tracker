/*import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHabit, toggleHabit, deleteHabit, getDateByWeekday } from  '../HabitTracker/HabitSlice';

const HabitTracker = () => {
  const [habitName, setHabitName] = useState('');
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits.habitList);

  const handleAddHabit = () => {
    if (habitName.trim()) {
      dispatch(addHabit(habitName));
      setHabitName('');
    }
  };

  return (
  <div className="habit-container">
    <div className="input-section">
      <input
        type="text"
        placeholder="Enter new habit"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <button onClick={handleAddHabit}>Add Habit</button>
    </div>

    <div className="habits">
      {habits.map((habit) => (
        <div className="habit-card" key={habit.id}>
          <h3>{habit.name}</h3>
          <div className="calendar-grid">
            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((day, index) => (
              <div className="calendar-day" key={index}>
                <span>{day}</span>
                <div className={`box ${habit.completedDates.includes(getDateByWeekday(index)) ? 'done' : ''}`}></div>
              </div>
            ))}
          </div>
         <p className="habit-stats">
  <span className="done-badge">✅ Done: {habit.completedDates.length}</span>
  <span className="streak-badge">🔥 Streak: {habit.streak}</span>
</p>

          <div className="action-buttons">
  <button onClick={() => dispatch(toggleHabit(habit.id))}>Mark Done</button>
  <button onClick={() => dispatch(deleteHabit(habit.id))}>Delete</button>
</div>

        </div>
      ))}
    </div>
  </div>
);

};

export default HabitTracker;*/

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHabit, toggleHabit, deleteHabit, getDateByWeekday } from '../HabitTracker/HabitSlice';

const HabitTracker = () => {
  const [habitName, setHabitName] = useState('');
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits.habitList);

  const handleAddHabit = () => {
    if (habitName.trim()) {
      dispatch(addHabit(habitName));
      setHabitName('');
    }
  };

  return (
    <div className="habit-container">
      <h2>Track Your Habits</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a new habit"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
        />
        <button onClick={handleAddHabit}>Add</button>
      </div>

      <div className="calendar">
        <div className="calendar-grid">
          {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((day, index) => (
            <div className="calendar-day" key={index}>
              <strong>{day}</strong>
              {habits.map((habit) => (
                <div
                  key={habit.id}
                  className={`box ${habit.completedDates.includes(getDateByWeekday(index)) ? 'done' : ''}`}
                  onClick={() => dispatch(toggleHabit(habit.id))}
                >
                  {habit.name}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="habit-summary">
        {habits.map((habit) => (
          <div className="habit-card" key={habit.id}>
            <div className="habit-info">
              <h4>{habit.name}</h4>
              <p>✅ Done: {habit.completedDates.length} | 🔥 Streak: {habit.streak}</p>
            </div>
            <button onClick={() => dispatch(deleteHabit(habit.id))} className="delete-btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HabitTracker;
