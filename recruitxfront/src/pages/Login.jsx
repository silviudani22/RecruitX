"use client"
import "../styles/Login.css"
import { useEffect } from 'react';
import axios from 'axios';
function Login({ onLoginSuccess }) {
    const handleLogin = async (e) => {
        e.preventDefault();

        const loginData = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        };

        try {
            const response = await axios.post("http://localhost:5054/api/users/login", loginData);
            alert(response.data.message);
            // Salvează user-ul în localStorage și redirect
            localStorage.setItem('user', JSON.stringify(response.data.user));
            onLoginSuccess();
          
        } catch (error) {
            alert(error.response?.data || "Login failed.");
        }
       
    };
    return (
        <div className="login-page">
            <nav className="navbar">
                <div className="logo-container">
                    <button className="back-button" onClick={() => window.history.back()} aria-label="Go back">
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
                    <h1>Welcome Back</h1>
                    <p className="subtitle">Log in to access your RecruitX account</p>

                    <div className="auth-form" onSubmit={handleLogin }>
                        <form className="login-form" >
                            <div className="form-group">
                                <label htmlFor="username">Email</label>
                                <input type="text" id="email" placeholder="Enter your email" required />
                            </div>
                            {/*<div className="form-group">*/}
                            {/*    <label htmlFor="username">Username</label>*/}
                            {/*    <input type="text" id="username" placeholder="Enter your username" required />*/}
                            {/*</div>*/}
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" placeholder="Enter your password" required />
                                <div className="forgot-password">
                                    <a href="#">Forgot password?</a>
                                </div>
                            </div>
                            <button type="submit" className="primary-btn">
                                Log In
                            </button>
                        </form>
                    </div>

                    <div className="auth-switch">
                        <p>
                            Don't have an account?{" "}
                            <a href="/signup" className="switch-link">
                                Sign Up
                            </a>
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
    );

}

export default Login
