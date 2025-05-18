import "../styles/InfoPage.css"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function InfoPage() {
    const navigate = useNavigate();
    const appliedJobs = [
        { id: 1, title: "Frontend Developer", company: "Tech Corp", date: "2025-03-06 17:45" },
        { id: 2, title: "Backend Engineer", company: "Codeify", date: "2025-02-16 12:03" },
        { id: 3, title: "DevOps Specialist", company: "CloudNet", date: "2025-03-02 10:47" },
        { id: 4, title: "Frontend Developer For Page Navigations", company: "Life Is Hard", date: "2024-06-15 15:21" },
    ];

    // Fixed to always have 4 jobs per column
    const groupJobsIntoColumns = (jobs, jobsPerColumn = 4) => {
        const columns = [];
        for (let i = 0; i < jobs.length; i += jobsPerColumn) {
            columns.push(jobs.slice(i, i + jobsPerColumn));
        }
        return columns;
    };

    const jobColumns = groupJobsIntoColumns(appliedJobs);

    return (
        <div className="home-page">
            <nav className="navbar">
                <div className="logo-container">
                    <div className="logo">
                        <span className="logo-text">Info</span>
                    </div>
                </div>
                <div className="auth-buttons">
                    <div className="auth-buttons">
                        <button className="jobs-btn" onClick={() => navigate("/account")}>
                            MyAccount
                        </button>
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
                    <div className="applied-jobs-container">
                        <h2>Your job applications:</h2>
                        {appliedJobs.length === 0 ? (
                            <p>You have no job applications yet.</p>
                        ) : (
                            <div className="job-columns-container">
                                {jobColumns.map((column, columnIndex) => (
                                    <div className="job-column" key={columnIndex}>
                                        {column.map((job) => (
                                            <div className="job-card" key={job.id}>
                                                <h3>{job.title}</h3>
                                                <p>Company: <em>{job.company}</em></p>
                                                <p>Date of application: <em>{job.date}</em></p>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                    <button className="jobs-btn" onClick={() => navigate("/jobs")}>
                        ⬅ Browse for more jobs
                    </button>
                </div>
            </main>

        </div>
    )
}

export default InfoPage