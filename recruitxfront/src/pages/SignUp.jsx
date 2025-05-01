/* eslint-disable no-undef */
"use client"
import "../styles/SignUp.css"
import React, { Fragment, useState } from 'react';
import axios from 'axios';

function SignUp({ onBackClick, onLoginClick }) {
    const [lastName, setLastName] = useState('');
    const [fistName, setFirstName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLastNameChange = (value) => {
        setLastName(value);
    }
    const handleFirstNameChange = (value) => {
        setFirstName(value);
    }
    const handleUsernameChange = (value) => {
        setUsername(value);
    }
    const handleEmailChange = (value) => {
        setEmail(value);
    }
    const handlePasswordChange = (value) => {
        setPassword(value);
    }

    const handleSave = async (e) => {
        const data = {
            username,
            email,
            password,
            lastName,
            firstName,
        };
        const url = '';
        axios.post(url, data).then((result) => {
            if (result.data == 'Data Inserted.')
                alert('data saved')
            else
            aler(result.data)
        })
    }
    return (
        <Fragment>
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
                                    <label htmlFor="fullName">Last Name</label>
                                    <input type="text" id="LastName" placeholder="Enter your last name" required onChange={(e) => handleLastNameChange(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="fullName">First Name</label>
                                    <input type="text" id="firstName" placeholder="Enter your first name" required onChange={(e) => handleFirstNameChange(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="userName">Username</label>
                                    <input type="text" id="userName" placeholder="Enter your username" required onChange={(e) => handleUsernameChange(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" placeholder="Enter your email" required onChange={(e) => handleEmailChange(e.target.value)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" id="password" placeholder="Create a password" required onChange={(e) => handlePasswordChange(e.target.value)} />
                                </div>
                                <button onClick={() => handleSave()} type="submit" className="primary-btn">
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
        </Fragment>
    )
}
export default SignUp;
