import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyForm.css';

function MyForm() {
  const [task, setTask] = useState({
    taskName: '',
    totalAmount: '',
    frequency: '',
    reachDate: '',
    interestRate: ''
  });

  const [message, setMessage] = useState(''); // State for displaying the message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve tasks from localStorage or initialize as an empty array
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    // Add the new task to the array
    savedTasks.push(task);
    // Save back to localStorage
    localStorage.setItem('tasks', JSON.stringify(savedTasks));

    // Set the success message
    setMessage('Task added successfully!');

    // Clear form fields after saving
    setTask({
      taskName: '',
      totalAmount: '',
      frequency: '',
      reachDate: '',
      interestRate: ''
    });

    // Optionally, hide the message after a few seconds
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <form className="p-3" onSubmit={handleSubmit}>
      {message && <div className="alert alert-success">{message}</div>} {/* Message area */}

      <div className="form-group">
        <label htmlFor="taskName">Task Name</label>
        <input
          type="text"
          className="form-control form-control-sm"
          id="taskName"
          name="taskName"
          value={task.taskName}
          onChange={handleChange}
          placeholder="Enter task name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="totalAmount">Total Amount</label>
        <input
          type="number"
          className="form-control form-control-sm"
          id="totalAmount"
          name="totalAmount"
          value={task.totalAmount}
          onChange={handleChange}
          placeholder="Enter amount"
        />
      </div>

      <div className="form-group">
        <label>Frequency</label>
        <div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="frequency"
              id="monthly"
              value="monthly"
              onChange={handleChange}
              checked={task.frequency === 'monthly'}
            />
            <label className="form-check-label" htmlFor="monthly">Monthly</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="frequency"
              id="weekly"
              value="weekly"
              onChange={handleChange}
              checked={task.frequency === 'weekly'}
            />
            <label className="form-check-label" htmlFor="weekly">Weekly</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="frequency"
              id="yearly"
              value="yearly"
              onChange={handleChange}
              checked={task.frequency === 'yearly'}
            />
            <label className="form-check-label" htmlFor="yearly">Yearly</label>
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="reachDate">Reach Date</label>
        <input
          type="date"
          className="form-control form-control-sm"
          id="reachDate"
          name="reachDate"
          value={task.reachDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="interestRate">Interest Rate (%)</label>
        <input
          type="number"
          className="form-control form-control-sm"
          id="interestRate"
          name="interestRate"
          value={task.interestRate}
          onChange={handleChange}
          placeholder="Enter interest rate"
        />
      </div>
      
      <button type="submit" className="btn btn-primary mt-2">Confirm</button>
    </form>
  );
}

export default MyForm;
