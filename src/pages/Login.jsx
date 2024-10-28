import React from 'react'

export default function Login() {
  return (
    <div class="d-flex align-items-center justify-content-center vh-100 bg-light">

  <div class="card p-4 shadow-sm" style="width: 100%; max-width: 400px;">
    <h2 class="text-center mb-4">Login</h2>
    <form>
      <div class="mb-3">
        <label for="email" class="form-label">Email address</label>
        <input type="email" class="form-control" id="email" placeholder="Enter your email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" class="form-control" id="password" placeholder="Enter your password" required>
      </div>
      <div class="d-flex justify-content-between align-items-center">
        <button type="submit" class="btn btn-primary w-100">Login</button>
      </div>
      <div class="text-center mt-3">
        <a href="#">Forgot your password?</a>
      </div>
    </form>
  </div>

</div>
  )
}
