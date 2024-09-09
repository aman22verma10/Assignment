import React from 'react';
import TaskCard from './TaskCard';
import './TaskColumn.css';


const TaskColumn = ({ title, tasks, color, backgroundColor }) => {
  return (
    <div className={`task-column ${color}`} style={{ backgroundColor: backgroundColor }}>
      <h2>{title}</h2>
      {tasks.map((task, index) => (
        <TaskCard key={index}  task={task} />

      ))}
    </div>
  );
};

export default TaskColumn;
