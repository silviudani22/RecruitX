import "../styles/InfoPage.css"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function InfoPage() {
    const navigate = useNavigate();
    return (
        <div className="home-page">
            <nav className="navbar">
                {/*<button className="back-button" onClick={() => window.history.back()} aria-label="Go back">*/}
                {/*    <svg*/}
                {/*        xmlns="http://www.w3.org/2000/svg"*/}
                {/*        width="24"*/}
                {/*        height="24"*/}
                {/*        viewBox="0 0 24 24"*/}
                {/*        fill="none"*/}
                {/*        stroke="currentColor"*/}
                {/*        strokeWidth="2"*/}
                {/*        strokeLinecap="round"*/}
                {/*        strokeLinejoin="round"*/}
                {/*    >*/}
                {/*        <path d="M19 12H5M12 19l-7-7 7-7" />*/}
                {/*    </svg>*/}
                {/*</button>*/}
                <div className="logo-container">
                    <div className="logo">
                        <span className="logo-text">Info</span>
                    </div>
                </div>
                <div className="auth-buttons">
                    <div className="auth-buttons">
                        <button className="jobs-btn" onClick={()=>navigate("/jobs")}>
                            Jobs
                        </button>
                        <button className="jobs-btn" onClick={() => navigate("/about")}>
                            About
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

export default InfoPage