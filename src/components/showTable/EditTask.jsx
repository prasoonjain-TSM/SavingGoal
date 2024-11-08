import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function EditTask() {
  const location = useLocation();
  const navigate = useNavigate();
  const taskToEdit = location.state.task;

  const [taskName, setTaskName] = useState("");
  const [totalAmount, setTotalAmount] = useState("");
  const [frequency, setFrequency] = useState("month");
  const [reachDate, setReachDate] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [currentAmount, setCurrentAmount] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (taskToEdit) {
      setTaskName(taskToEdit.taskName);
      setTotalAmount(taskToEdit.totalAmount);
      setFrequency(taskToEdit.frequency);
      setReachDate(taskToEdit.reachDate);
      setInterestRate(taskToEdit.interestRate);
      setCurrentAmount(taskToEdit.currentAmount);
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTask = {
      id: taskToEdit.id,
      taskName,
      totalAmount,
      frequency,
      reachDate,
      interestRate,
      currentAmount,
    };

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const updatedTasks = savedTasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setMessage("Task updated successfully!");

    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  return (
    <div className="container mt-4">
      <h3>Edit Task</h3>
      {message && <div className="alert alert-success">{message}</div>}
      <form onSubmit={handleSubmit} className="p-3">
        <div className="form-group">
          <label htmlFor="taskName">Task Name</label>
          <input
            type="text"
            className="form-control form-control-sm"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            placeholder="Enter goal name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="totalAmount">Total Amount</label>
          <input
            type="number"
            className="form-control form-control-sm"
            id="totalAmount"
            value={totalAmount}
            onChange={(e) => setTotalAmount(e.target.value)}
            placeholder="Enter saving amount"
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
                value="month"
                checked={frequency === "month"}
                onChange={(e) => setFrequency(e.target.value)}
              />
              <label className="form-check-label" htmlFor="monthly">
                Month
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="frequency"
                id="weekly"
                value="week"
                checked={frequency === "week"}
                onChange={(e) => setFrequency(e.target.value)}
              />
              <label className="form-check-label" htmlFor="weekly">
                Week
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="frequency"
                id="yearly"
                value="year"
                checked={frequency === "year"}
                onChange={(e) => setFrequency(e.target.value)}
              />
              <label className="form-check-label" htmlFor="yearly">
                Year
              </label>
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="reachDate">Reach Date</label>
          <input
            type="date"
            className="form-control form-control-sm"
            id="reachDate"
            value={reachDate}
            onChange={(e) => setReachDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="interestRate">Interest Rate (%)</label>
          <input
            type="number"
            className="form-control form-control-sm"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter interest rate"
          />
        </div>

        <div className="form-group">
          <label htmlFor="currentAmount">Current Amount</label>
          <input
            type="number"
            className="form-control form-control-sm"
            id="currentAmount"
            value={currentAmount}
            onChange={(e) => setCurrentAmount(e.target.value)}
            placeholder="Enter current amount"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-2">
          Update Task
        </button>
      </form>
    </div>
  );
}

export default EditTask;
