import "../styles/InfoPage.css"
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function InfoPage() {
    const navigate = useNavigate();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        if (!userId) {
            navigate("/login");
        }
    }, [userId, navigate]);

    useEffect(() => {
        if (!userId) return;
        fetch(`http://localhost:5054/api/jobapplication/user/${userId}`)
            .then(res => res.json())
            .then(data => {
                setAppliedJobs(data);
                console.log(data);
            });
    }, [userId]);

    // Fixed to always have 4 jobs per column
    const groupJobsIntoColumns = (jobs, jobsPerColumn = 4) => {
        const columns = [];
        for (let i = 0; i < jobs.length; i += jobsPerColumn) {
            columns.push(jobs.slice(i, i + jobsPerColumn));
        }
        return columns;
    };

    const handleDelete = async (applicationId) => {
        if (!window.confirm('Sigur vrei să retragi această aplicație?')) return;
        const res = await fetch(`http://localhost:5054/api/jobapplication/${applicationId}`, {
            method: 'DELETE',
        });
        if (res.ok) {
            setAppliedJobs(prev => prev.filter(app => app.applicationId !== applicationId));
            alert("Aplicație retrasă cu succes!");
        } else {
            alert("Eroare la retragere!");
        }
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
                        <button className="jobs-btn" onClick={() => navigate("/jobs")}>
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
                                            <div className="job-card" key={job.ApplicationId}>
                                                <h3>{job.jobTitle}</h3>
                                                <p>Company: <em>{job.companyName}</em></p>
                                                <p>Date of application: <em>{new Date(job.applicationDate).toLocaleString()}</em></p>
                                                <button
                                                    className="delete-btn"
                                                    onClick={() => handleDelete(job.applicationId)}
                                                >
                                                    Remove
                                                </button>
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