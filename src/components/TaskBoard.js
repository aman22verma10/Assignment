
import React, { useState } from 'react';
import TaskColumn from './TaskColumn';
import CreateNewTask from './CreateNewTask';

import './TaskBoard.css';

const TaskBoard = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="task-board">
      <div className="header">
        <h1 className='app-title'>Desktop & Mobile Application</h1>
        <div className="create-task-btn" onClick={openModal}>
          Create Task
        </div>
      </div>
      {isModalVisible && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>X</button>
            <CreateNewTask />
          </div>
        </div>
      )}
      <div className="task-columns">
        
        <TaskColumn 
          title="TODO" 
          tasks={[
            { title: "Brainstorming", description: "Brainstorming brings team members' diverse experience into play.", priority: "High", date: "18/09/2024" },
            { title: "Wireframes", description: "Low fidelity wireframes include the most basic content and visuals.", priority: "High", date: "18/09/2024" }
          ]} 
          color="black"
          backgroundColor="purple" 
        />
        <TaskColumn 
          title="IN PROGRESS"
          tasks={[
            { title: "Onboarding Illustrations", description: "Onboarding Illustrations", priority: "Low", date: "18/10/2024" }
          ]} 
          color="black"
          backgroundColor="orange"
        />
        <TaskColumn 
          title="COMPLETED" 
          tasks={[
            { title: "Design System", description: "It just needs to adapt the UI from what you did before", priority: "Medium", date: "12/10/2024" }
          ]} 
          color="black"
          backgroundColor="green"
        />
      </div>
    </div>
  );
};

export default TaskBoard;