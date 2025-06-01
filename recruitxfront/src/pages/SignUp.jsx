/* eslint-disable no-undef */
"use client"
import "../styles/SignUp.css"
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function SignUp() {
    const navigate = useNavigate();
    const validateEmail = (email) => email.includes("@");
    const validatePassword = (password) =>
        password.length >= 8 && /[A-Z]/.test(password);

    const handleSave = async (e) => {
        e.preventDefault();

        const userData = {
            username: document.getElementById("userName").value,
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
            role: document.querySelector('input[name="role"]:checked').value,
            firstName: document.getElementById("firstName").value,
            lastName: document.getElementById("LastName").value,
        };

        // VALIDARE
        if (!validateEmail(userData.email)) {
            alert("Emailul trebuie să conțină @");
            return;
        }
        if (!validatePassword(userData.password)) {
            alert("Parola trebuie să aibă minim 8 caractere și o literă mare!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5054/api/users/signup", userData);
            alert(response.data.message);
            navigate("/login");
        } catch (error) {
            alert(error.response?.data || "Signup failed.");
        }
    };
    return (
        <Fragment>
            <div className="signup-page">
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
                        <h1>Create Account</h1>
                        <p className="subtitle">Join the next generation recruitment platform</p>

                        <div className="auth-form">
                            <form className="signup-form">
                                <div className="form-group">
                                    <label htmlFor="fullName">Last Name</label>
                                    <input type="text" id="LastName" placeholder="Enter your last name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fullName">First Name</label>
                                    <input type="text" id="firstName" placeholder="Enter your first name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userName">Username</label>
                                    <input type="text" id="userName" placeholder="Enter your username" required />
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
                                    <label>Role</label>
                                    <div className="role-options">
                                        <label className="role-radio">
                                            <input
                                                type="radio"
                                                name="role"
                                                value="user"
                                                id="role-user"
                                                defaultChecked
                                            />
                                            <span className="custom-radio"></span>
                                            <span style={{ marginLeft: 8 }}>User</span>
                                        </label>
                                        <label className="role-radio">
                                            <input
                                                type="radio"
                                                name="role"
                                                value="company"
                                                id="role-company"
                                            />
                                            <span className="custom-radio"></span>
                                            <span style={{ marginLeft: 8 }}>Company</span>
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="primary-btn" onClick={handleSave}>
                                    Sign Up
                                </button>
                            </form>
                        </div>

                        <div className="auth-switch">
                            <p>
                                Already have an account?{" "}
                                <button onClick={() => navigate("/login")} className="switch-link">
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
        </Fragment>
    )

}
export default SignUp;
