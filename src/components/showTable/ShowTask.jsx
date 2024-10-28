import React from "react";

export default function ShowTask() {
  return (
    <div class="container mt-5">
      <h2>Task List</h2>
      <table class="table table-bordered">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Task</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            onclick="window.location.href='task-detail.html';"
            style={{ cursor: "pointer" }}
          >
            <td>1</td>
            <td>Task 1</td>
            <td>Pending</td>
            <td>2024-11-01</td>
            <td>
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fa-solid"></i>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#" onclick="addTask()">
                      Add Task
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onclick="editTask(1)">
                      Edit Task
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#" onclick="deleteTask(1)">
                      Delete Task
                    </a>
                  </li>
                </ul>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
