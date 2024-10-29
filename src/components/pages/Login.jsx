import React from 'react'
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">

<div className="card p-4 shadow-sm" style={{ width: "100%", maxWidth: "400px" }}>
    <h2 className="text-center mb-4">Login</h2>
    <form>
      <div className="mb-3">
        <label for="email" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
      </div>
      <div className="mb-3">
        <label for="password" className="form-label">Password</label>
        <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </div>
      <div className="text-center mt-3">
        <Link to="#">Forgot your password?</Link>
      </div>
    </form>
  </div>

</div>
  )
}
