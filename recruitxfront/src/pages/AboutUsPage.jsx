import "../styles/InfoPage.css"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function AboutUsPage() {
    const navigate = useNavigate();
    return (
        <div className="home-page">
            <nav className="navbar">
                <div className="logo-container">
                    <div className="logo">
                        <span className="logo-text">About</span>
                    </div>
                </div>
                <div className="auth-buttons">
                    <div className="auth-buttons">
                        <button className="jobs-btn" onClick={() => navigate("/jobs")}>
                            Jobs
                        </button>
                        <button className="jobs-btn" onClick={() => navigate("/info")}>
                            Info
                        </button>
                        <button className="jobs-btn" onClick={() => navigate("/home")}>
                            Home
                        </button>
                    </div>
                </div>
            </nav>

            <main className="home-content">
                <div className="hero-section">

                </div>
            </main>
        </div>
    )
}

export default AboutUsPage