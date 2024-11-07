import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NotificationIcon = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const newNotifications = tasks.flatMap((task) => {
      const notificationsForTask = [];
      const targetDate = new Date(task.reachDate);
      const currentDate = new Date();

      const timeLeftInMonths = Math.ceil(
        (targetDate - currentDate) / (1000 * 60 * 60 * 24 * 30)
      );
      const timeLeftInYears = Math.ceil(timeLeftInMonths / 12);

      if (task.frequency === "month") {
        const monthlySaveAmount = task.totalAmount / timeLeftInMonths;

        const lastDayOfMonth = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          0
        ).getDate();
        if (currentDate.getDate() >= lastDayOfMonth - 3) {
          notificationsForTask.push(
            `Reminder for ${task.taskName}: Save $${monthlySaveAmount.toFixed(
              2
            )} this month to stay on track.`
          );
        }
      }

      if (task.frequency === "week") {
        const weeksLeft = Math.ceil(
          (targetDate - currentDate) / (1000 * 60 * 60 * 24 * 7)
        );
        const weeklySaveAmount = task.totalAmount / weeksLeft;
        notificationsForTask.push(
          `For ${task.taskName}, you need to save $${weeklySaveAmount.toFixed(
            2
          )} weekly.`
        );
      }

      if (task.frequency === "year") {
        const yearlySaveAmount = task.totalAmount / timeLeftInYears;
        notificationsForTask.push(
          `For ${task.taskName}, you need to save $${yearlySaveAmount.toFixed(
            2
          )} yearly.`
        );
      }

      const daysLeft = Math.ceil(
        (targetDate - currentDate) / (1000 * 60 * 60 * 24)
      );
      if (daysLeft <= 7) {
        notificationsForTask.push(
          `Milestone Alert: You are close to reaching your target for ${task.taskName}!`
        );
      }

      return notificationsForTask;
    });

    setNotifications(newNotifications);
  }, []);

  return (
    <div className="container mt-4 p-3 bg-white border rounded shadow">
      <h5 className="mb-3">Notifications</h5>
      <ul className="list-group list-group-flush">
        {notifications.map((notification, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center border-bottom"
          >
            <span>{notification}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationIcon;
