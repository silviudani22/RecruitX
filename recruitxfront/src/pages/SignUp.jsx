"use client"
import "../styles/SignUp.css"

function SignUp({ onBackClick, onLoginClick }) {
  return (
    <div className="signup-page">
      <nav className="navbar">
        <div className="logo-container">
          <button className="back-button" onClick={onBackClick} aria-label="Go back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="logo">
            <span className="logo-text">RecruitX</span>
          </div>
        </div>
      </nav>

      <main className="auth-content">
        <div className="auth-container">
          <h1>Create Account</h1>
          <p className="subtitle">Join the next generation recruitment platform</p>

          <div className="auth-form">
            <form className="signup-form">
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" placeholder="Enter your full name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" required />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Create a password" required />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input type="password" id="confirmPassword" placeholder="Confirm your password" required />
              </div>
              <button type="submit" className="primary-btn">
                Sign Up
              </button>
            </form>
          </div>

          <div className="auth-switch">
            <p>
              Already have an account?{" "}
              <button onClick={onLoginClick} className="switch-link">
                Log In
              </button>
            </p>
          </div>
        </div>

        <div className="auth-image">
          <div className="image-placeholder">
            <div className="gradient-circle"></div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default SignUp
