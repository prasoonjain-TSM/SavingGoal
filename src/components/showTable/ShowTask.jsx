// ShowTask.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "./ShowTask.css";
import AnnualInterestCalculator from "./AnnualInterestCalculator";

function ShowTask() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [depositAmount, setDepositAmount] = useState("");
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const navigate = useNavigate();

  const handleInterestUpdate = (taskId, newAmount) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, currentAmount: newAmount } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);
  }, []);

  const addNotification = (message) => {
    const notifications =
      JSON.parse(localStorage.getItem("notifications")) || [];
    notifications.push(message);
    localStorage.setItem("notifications", JSON.stringify(notifications));
  };

  const handleDeleteTask = (taskId) => {
    const deletedTask = tasks.find((task) => task.id === taskId);
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    addNotification(`Task "${deletedTask.taskName}" has been deleted.`);
  };

  const handleEditTask = (task) => {
    navigate("/edit", { state: { task } });

    addNotification(`Task "${task.taskName}" has been edited.`);
  };

  const handleAddDeposit = (taskId) => {
    setSelectedTaskId(taskId);
    setShowModal(true);
  };

  const handleDepositChange = (e) => {
    setDepositAmount(e.target.value);
  };

  const handleSaveDeposit = () => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === selectedTaskId) {
        const updatedCurrentAmount =
          (Number(task.currentAmount) || 0) + Number(depositAmount);
        const updatedStatus =
          updatedCurrentAmount === task.totalAmount ? "Completed" : "Active";
        return {
          ...task,
          currentAmount: updatedCurrentAmount,
          status: updatedStatus,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    addNotification(
      `Deposit added to task "${
        updatedTasks.find((t) => t.id === selectedTaskId).taskName
      }".`
    );
    setDepositAmount("");
    setShowModal(false);
  };

  return (
    <div className="container mt-4 text-muted">
      <h3>Saved Tasks</h3>
      <table className="table table-bordered mt-3 text-muted">
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Total Amount</th>
            <th>Frequency</th>
            <th>Reach Date</th>
            <th>Interest Rate (%)</th>
            <th>Current Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>
                  <Link
                    to={`/task/${task.id}`}
                    state={{ task }}
                    className="text-primary no-underline"
                  >
                    {task.taskName}
                  </Link>
                </td>
                <td>{Number(task.totalAmount).toFixed(2)}</td>
                <td>{task.frequency}</td>
                <td>{task.reachDate}</td>
                <td>{task.interestRate}</td>
                <td>{Number(task.currentAmount).toFixed(2)}</td>
                <td>{task.status || "Active"}</td>
                <td>
                  <button
                    onClick={() => handleEditTask(task)}
                    className="btn btn-warning me-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteTask(task.id)}
                    className="btn btn-danger me-2"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleAddDeposit(task.id)}
                    className="btn btn-success me-2"
                    disabled={task.status === "Completed"}
                  >
                    Add Deposit
                  </button>
                </td>
                <AnnualInterestCalculator
                  task={task}
                  onInterestUpdate={handleInterestUpdate}
                />
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="text-center">
                No tasks available
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Deposit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            type="number"
            value={depositAmount}
            onChange={handleDepositChange}
            placeholder="Enter deposit amount"
            className="form-control"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveDeposit}>
            Save Deposit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShowTask;
