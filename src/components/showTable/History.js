import React from "react";
import { useLocation } from "react-router-dom";

const History = () => {
  const location = useLocation();
  const { task, notifications } = location.state || {}; // Retrieve task and its notifications

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-info text-light">
              <h4 className="mb-0 text-center">History - {task?.taskName}</h4>
            </div>
            <div className="card-body">
              {notifications?.length > 0 ? (
                <ul className="list-group list-group-flush">
                  {notifications.map((notification, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      {notification}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted">No history available for this task.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
