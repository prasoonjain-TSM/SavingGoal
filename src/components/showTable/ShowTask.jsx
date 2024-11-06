import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

function ShowTask() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [depositAmount, setDepositAmount] = useState('');
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleEditTask = (task) => {
    navigate('/edit', { state: { task } });
  };

  const handleAddDeposit = (taskId) => {
    setSelectedTaskId(taskId);
    setShowModal(true); // Open the modal
  };

  const handleDepositChange = (e) => {
    setDepositAmount(e.target.value);
  };

  const handleSaveDeposit = () => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === selectedTaskId) {
  
        const updatedCurrentAmount = (Number(task.currentAmount) || 0) + Number(depositAmount);
        return { ...task, currentAmount: updatedCurrentAmount };
      }
      return task;
    });

    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // Reset modal state
    setDepositAmount('');
    setShowModal(false);
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
            <th>Current Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.taskName}</td>
                <td>{Number(task.totalAmount).toFixed(2)}</td>
                <td>{task.frequency}</td>
                <td>{task.reachDate}</td>
                <td>{task.interestRate}</td>
                <td>{Number(task.currentAmount).toFixed(2)}</td>
                <td>
                  <button onClick={() => handleEditTask(task)} className="btn btn-warning me-2">Edit</button>
                  <button onClick={() => handleDeleteTask(task.id)} className="btn btn-danger me-2">Delete</button>
                  <button onClick={() => handleAddDeposit(task.id)} className="btn btn-success me-2">Add Deposit</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No tasks available</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Add Deposit Modal */}
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
