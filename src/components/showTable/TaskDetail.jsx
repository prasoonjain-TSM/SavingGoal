import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import "bootstrap/dist/css/bootstrap.min.css";

function TaskDetails() {
  const location = useLocation();
  const task = location.state?.task;

  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);
  const [milestones, setMilestones] = useState([]);
  const [achievedMilestones, setAchievedMilestones] = useState([]);
  const [notifications, setNotifications] = useState([]);

  // Load task-specific notifications from localStorage
  useEffect(() => {
    if (task) {
      const totalAmount = Number(task.totalAmount);
      const currentAmount = Number(task.currentAmount);
      const newProgress =
        totalAmount > 0 ? ((currentAmount / totalAmount) * 100).toFixed(2) : 0;
      setProgress(newProgress);

      const milestoneInterval = totalAmount / 4;
      const milestoneAmounts = [];
      for (let i = 1; i <= 4; i++) {
        milestoneAmounts.push(i * milestoneInterval);
      }
      setMilestones(milestoneAmounts);

      // Retrieve task-specific notifications using task.taskName as key
      const savedNotifications =
        JSON.parse(localStorage.getItem(task.taskName)) || [];
      setNotifications(savedNotifications);
    }
  }, [task]);

  // Save new notifications and update task-specific history
  useEffect(() => {
    milestones.forEach((milestone) => {
      if (
        task.currentAmount >= milestone &&
        !achievedMilestones.includes(milestone)
      ) {
        setAchievedMilestones((prev) => [...prev, milestone]);

        const newNotification = `Milestone achieved: $${milestone.toFixed(2)}`;

        const updatedNotifications = [...notifications, newNotification];
        setNotifications(updatedNotifications);

        // Save task-specific notifications to localStorage using task.taskName as key
        localStorage.setItem(task.taskName, JSON.stringify(updatedNotifications));
      }
    });
  }, [task.currentAmount, milestones, achievedMilestones, notifications, task]);

  // Handle exporting the task details to a PDF
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

    doc.save("savings_plan.pdf");
  };

  // Navigate back to the previous page
  const handleGoBack = () => {
    navigate(-1);
  };

  // Handle showing the history of the current task
  const handleShowHistory = () => {
    navigate("/history", {
      state: {
        task: task,
        notifications: notifications,
      },
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-info text-light d-flex align-items-center">
              {/* Back Icon */}
              <i
                className="fas fa-arrow-left me-3"
                style={{ cursor: "pointer" }}
                onClick={handleGoBack}
              ></i>
              <h4 className="mb-0 text-center text-secondary w-100">Task Details</h4>
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
                  <div className="progress mt-2">
                    {milestones.map((milestone, index) => (
                      <div
                        key={index}
                        className="progress-bar bg-secondary"
                        role="progressbar"
                        style={{
                          width: `${(milestone / task.totalAmount) * 100}%`,
                          opacity: 0.4,
                          zIndex: 1,
                          position: "absolute",
                        }}
                        aria-valuenow={progress}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    ))}
                    <div
                      className="progress-bar bg-success"
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
                <li className="list-group-item">
                  <strong>Upcoming Milestones</strong>
                  <ul>
                    {milestones
                      .filter((milestone) => milestone > task.currentAmount)
                      .map((milestone, index) => (
                        <li key={index}>${milestone.toFixed(2)}</li>
                      ))}
                  </ul>
                </li>
              </ul>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button className="btn btn-info me-2" onClick={handleExportPDF}>
                Export Savings Plan
              </button>
              <button className="btn btn-info" onClick={handleShowHistory}>
                History
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
