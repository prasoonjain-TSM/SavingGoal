import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function ShowTask() {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const handleEditTask = (taskId) => {
    navigate(`/edit-task/${taskId}`);
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <div className="container mt-4">
      <h3>Saved Tasks</h3>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Total Amount</th>
            <th>Frequency</th>
            <th>Reach Date</th>
            <th>Interest Rate (%)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.taskName}</td>
                <td>{task.totalAmount}</td>
                <td>{task.frequency}</td>
                <td>{task.reachDate}</td>
                <td>{task.interestRate}</td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <button className="dropdown-item" onClick={() => handleEditTask(task.id)}>
                          Edit Task
                        </button>
                      </li>
                      <li>
                        <button className="dropdown-item" onClick={() => handleDeleteTask(task.id)}>
                          Delete Task
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">No tasks available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ShowTask;
