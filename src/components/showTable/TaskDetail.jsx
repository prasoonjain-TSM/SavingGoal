import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { jsPDF } from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";

function TaskDetails() {
  const location = useLocation();
  const task = location.state?.task;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (task) {
      // Calculate progress when task data is available
      const totalAmount = Number(task.totalAmount);
      const currentAmount = Number(task.currentAmount);
      const newProgress =
        totalAmount > 0 ? ((currentAmount / totalAmount) * 100).toFixed(2) : 0;
      setProgress(newProgress);
    }
  }, [task]);

  if (!task) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning text-center">
          No task data available.
        </div>
      </div>
    );
  }

  const handleExportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Savings Plan Details", 20, 20);

    doc.setFontSize(14);
    doc.text(`Task Name: ${task.taskName}`, 20, 30);
    doc.text(`Total Amount: $${task.totalAmount}`, 20, 40);
    doc.text(`Frequency: ${task.frequency}`, 20, 50);
    doc.text(`Start Date: ${task.startDate}`, 20, 90);
    doc.text(`Reach Date: ${task.reachDate}`, 20, 60);
    doc.text(`Interest Rate: ${task.interestRate}%`, 20, 70);
    doc.text(`Current Amount: $${task.currentAmount}`, 20, 80);

    // Save the PDF
    doc.save("savings_plan.pdf");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-secondary text-light text-center">
              <h4 className="mb-0">Task Details</h4>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Task Name</strong>
                  <span className="text-muted">{task.taskName}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Total Amount</strong>
                  <span className="text-muted">${task.totalAmount}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Frequency</strong>
                  <span className="text-muted">{task.frequency}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Start Date</strong>
                  <span className="text-muted">{task.startDate}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Reach Date</strong>
                  <span className="text-muted">{task.reachDate}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Interest Rate (%)</strong>
                  <span className="text-muted">{task.interestRate}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  <strong>Current Amount</strong>
                  <span className="text-muted">${task.currentAmount}</span>
                </li>
                {/* Progress Bar */}
                <li className="list-group-item">
                  <div>
                    <strong>Progress Towards Goal</strong>
                  </div>
                  <div className="progress  mt-2">
                    <div
                      className="progress-bar bg-secondary"
                      role="progressbar"
                      style={{ width: `${progress}%` }}
                      aria-valuenow={progress}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      {progress}%
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="card-footer d-flex justify-content-center">
             
              <button
                className="btn btn-secondary me-2"
                onClick={handleExportPDF}
              >
                Export Savings Plan
              </button>

              <button
                className="btn btn-secondary"
                onClick={() => window.history.back()}
              >
                Back to Tasks
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
