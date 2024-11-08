import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './CompareTask.css';

function CompareTask() {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([null, null]);
  const [comparisonResult, setComparisonResult] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const handleTaskSelect = (task, index) => {
    const updatedSelectedTasks = [...selectedTasks];
    updatedSelectedTasks[index] = task;
    setSelectedTasks(updatedSelectedTasks);
  };

  const compareTasks = () => {
    const [task1, task2] = selectedTasks;

    if (!task1 || !task2) {
      setComparisonResult("Please select two tasks to compare.");
      return;
    }

    let result = "";
    if (task1.totalAmount > task2.totalAmount) {
      result = `${task1.taskName} is better based on total amount.`;
    } else if (task1.totalAmount < task2.totalAmount) {
      result = `${task2.taskName} is better based on total amount.`;
    } else {
      result = "Both tasks have the same total amount.";
    }

    // You can add more criteria for comparison (interest rate, current amount, etc.)
    if (task1.interestRate > task2.interestRate) {
      result += ` ${task1.taskName} has a higher interest rate.`;
    } else if (task1.interestRate < task2.interestRate) {
      result += ` ${task2.taskName} has a higher interest rate.`;
    }

    setComparisonResult(result);
  };

  return (
    <div className="container mt-4 text-muted">
      <h3 className="text-center">Compare Tasks</h3>

      <div className="comparison-selection row">
        <div className="col-md-6 mb-3">
          <h4>Select First Task</h4>
          <select
            className="form-select"
            onChange={(e) => handleTaskSelect(tasks.find(t => t.id === e.target.value), 0)}
          >
            <option value="">-- Select Task --</option>
            {tasks.map((task) => (
              <option key={task.id} value={task.id}>
                {task.taskName}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <h4>Select Second Task</h4>
          <select
            className="form-select"
            onChange={(e) => handleTaskSelect(tasks.find(t => t.id === e.target.value), 1)}
          >
            <option value="">-- Select Task --</option>
            {tasks.map((task) => (
              <option key={task.id} value={task.id}>
                {task.taskName}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="text-center mt-3">
        <button className="btn btn-primary" onClick={compareTasks}>
          Compare
        </button>
      </div>

      <div className="comparison-result mt-4">
        {comparisonResult && <h4 className="text-center">{comparisonResult}</h4>}
      </div>

      <div className="text-center mt-3">
        <Link to="/ShowTask" className="btn btn-secondary">
          Back to Task List
        </Link>
      </div>
    </div>
  );
}

export default CompareTask;
