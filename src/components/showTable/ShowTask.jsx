import React, { useState, useEffect } from 'react';

function ShowTask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

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
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <tr key={index}>
                <td>{task.taskName}</td>
                <td>{task.totalAmount}</td>
                <td>{task.frequency}</td> {/* Displaying frequency here */}
                <td>{task.reachDate}</td>
                <td>{task.interestRate}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">No tasks available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ShowTask;
