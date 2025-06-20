﻿import "../styles/JobsPage.css"
import "../styles/JobsTable.css"
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import JobModal from "./JobModal";

function JobsPageCompany() {
    const navigate = useNavigate();
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);


    const userId = Number(localStorage.getItem('userId'));

    useEffect(() => {
        if (!userId) {
            navigate("/login");
        }
    }, [userId, navigate]);

    useEffect(() => {
        fetchJobs();
    }, []);

    const applyToJob = async (jobId) => {
        const res = await fetch('http://localhost:5054/api/jobapplication', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ jobId, userId })
        });

        if (res.status === 409) {
            const data = await res.json();
            alert(data.message); // "You have already applied to this job."
        } else if (res.ok) {
            alert('Ai aplicat la acest job!');
        } else {
            alert('Eroare necunoscută la aplicare!');
        }
    };

    const fetchJobs = () => {
        setLoading(true);
        fetch('http://localhost:5054/api/jobs')
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then(data => {
                setJobs(data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                alert('Eroare la încărcarea joburilor: ' + error.message);
            });
    };

    const handleSaveJob = (jobData) => {
        axios.post("http://localhost:5054/api/jobs", jobData, {
            headers: { "Content-Type": "application/json" }
        })
            .then(() => {
                setShowModal(false);
                fetchJobs();
            })
            .catch(error => {
                if (error.response && error.response.data) {
                    alert("Eroare la adăugare: " + JSON.stringify(error.response.data, null, 2));
                    console.log(error.response.data);
                } else {
                    alert("Eroare la adăugare: " + error.message);
                }
            });
    };

    return (
        <div className="home-page">
            <nav className="navbar">
                <div className="logo-container">
                    <div className="logo">
                        <span className="logo-text">Jobs</span>
                    </div>
                </div>
                <div className="auth-buttons">

                    <button className="jobs-btn" onClick={() => navigate("/account")}>
                        MyAccount
                    </button>
                    <button className="jobs-btn" onClick={() => navigate("/info")}>
                        Info
                    </button>
                    <button className="jobs-btn" onClick={() => navigate("/about")}>
                        About
                    </button>
                    <button className="jobs-btn" onClick={() => navigate("/info")}>
                        Info
                    </button>
                    <button className="jobs-btn" onClick={() => navigate("/home")}>
                        Home
                    </button>
                </div>
            </nav>

            <main className="home-content">
                <div className="jobs-section">
                    <div className="jobs-header">
                        <h1>Available Jobs</h1>
                        <button className="add-job-btn" onClick={() => setShowModal(true)}>
                            + Add Job
                        </button>
                    </div>
                    {showModal && (
                        <JobModal
                            onClose={() => setShowModal(false)}
                            onSave={handleSaveJob}
                        />
                    )}
                    {loading ? (
                        <div className="loading">Loading jobs...</div>
                    ) : (
                        <div className="table-container">
                            <table className="jobs-table">
                                <thead>
                                    <tr>
                                        <th>Company</th>
                                        <th>Technology</th>
                                        <th>Experience</th>
                                        <th>Work Mode</th>
                                        <th>Schedule</th>
                                        <th>Apply</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobs.map(job => (
                                        <tr key={job.id}>
                                            <td>{job.companyName}</td>
                                            <td>{job.technology}</td>
                                            <td>{job.experienceNeeded || job.experienceNeeded}</td>
                                            <td>{job.flexibility}</td>
                                            <td>{job.program}</td>
                                            <td>
                                                <button
                                                    className="apply-btn"
                                                    onClick={() => applyToJob(job.id)}
                                                >
                                                    Apply
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}

export default JobsPageCompany;