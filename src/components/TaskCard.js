import React, { useState } from 'react';
import './TaskCard.css';

const TaskCard = ({ task }) => {
  const [status, setStatus] = useState(task.status || 'TODO'); // Default to 'TODO'

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    // Update task status in your data source here (e.g., API call, database update)
    console.log('Task status updated to:', event.target.value); // Example for development purposes
  };

  return (
    <div className="task-card">
      <div className={`priority ${task.priority.toLowerCase()}`}>{task.priority}</div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-date">
        <i className="far fa-calendar-alt"></i> {task.date}
      </div>
      <select value={status} onChange={handleStatusChange}>
        <option value="TODO">TODO</option>
        <option value="IN PROGRESS">IN PROGRESS</option>
        <option value="COMPLETED">COMPLETED</option>
      </select>
    </div>
  );
};

export default TaskCard;