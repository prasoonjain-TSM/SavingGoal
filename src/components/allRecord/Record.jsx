import React, { useState, useEffect } from "react";

export default function Record() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const savedNotifications =
      JSON.parse(localStorage.getItem("notifications")) || [];
    setNotifications(savedNotifications);
  }, []);

  const handleClearNotifications = () => {
    localStorage.removeItem("notifications");
    setNotifications([]);
  };

  const handleDeleteNotification = (index) => {
    const updatedNotifications = notifications.filter((_, i) => i !== index);
    setNotifications(updatedNotifications);
    localStorage.setItem("notifications", JSON.stringify(updatedNotifications));
  };

  return (
    <div className="container mt-4 p-3 bg-white border rounded shadow">
      <h5 className="mb-3 text-secondary">Notifications</h5>
      {notifications.length > 0 ? (
        <ul className="list-group list-group-flush">
          {notifications.map((notification, index) => (
            <li
              key={index}
              className="list-group-item d-flex justify-content-between align-items-center border-bottom"
            >
              <span>{notification}</span>
              <div>
                <button
                  onClick={() => handleDeleteNotification(index)}
                  className="btn btn-sm btn-info ms-2"
                  aria-label="Close"
                >
                  &times;
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted">No notifications available.</p>
      )}
    </div>
  );
}
