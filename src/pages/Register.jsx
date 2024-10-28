import React from 'react'

export default function Register() {
  return (
    <div class="d-flex align-items-center justify-content-center vh-100 bg-light">

  <div class="card p-4 shadow-sm" style="width: 100%; max-width: 500px;">
    <h2 class="text-center mb-4">Register</h2>
    <form>
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" class="form-control" id="username" placeholder="Enter your username" required>
      </div>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Enter your password" required>
      </div>
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Confirm Password</label>
        <input type="password" class="form-control" id="confirmPassword" placeholder="Re-enter your password" required>
      </div>
      <button type="submit" class="btn btn-primary w-100">Register</button>
      <div class="text-center mt-3">
        <p>Already have an account? <a href="#">Login here</a></p>
      </div>
    </form>
  </div>
</div>
  )
}
