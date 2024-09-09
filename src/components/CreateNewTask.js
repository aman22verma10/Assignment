import React, { useState } from 'react';
import './CreateNewTask.css';
const CreateNewTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the new task creation logic here
    console.log({ title, description, priority, date });
    // Reset the form
    setTitle('');
    setDescription('');
    setPriority('Medium');
    setDate('');
  };

  return (
    <div className="create-new-task">
      <h2>Create New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Priority:
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            required
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </label>
        <label>
          Date:
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default CreateNewTask;