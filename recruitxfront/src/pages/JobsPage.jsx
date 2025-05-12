import "../styles/JobsPage.css"
import "../styles/JobsTable.css"
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";


function JobsPage() {
    const navigate = useNavigate()
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get("http://localhost:5054/api/ListedJobs", {
                    headers: {
                        'Accept': 'application/json'
                    }
                })

                if (response.data && Array.isArray(response.data)) {
                    setJobs(response.data)
                } else {
                    console.error("Invalid data format:", response.data)
                }
            } catch (error) {
                console.error("Full error:", error)
            } finally {
                setLoading(false)
            }
        }

        fetchJobs()
    }, [])
        return (
            <div className="home-page">
                <nav className="navbar">
                    <div className="logo-container">
                        <div className="logo">
                            <span className="logo-text">Jobs</span>
                        </div>
                    </div>
                    <div className="auth-buttons">
                        <div className="auth-buttons">
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
                    </div>
                </nav>

                <main className="home-content">
                    <div className="hero-section">
                        <h1>Available Jobs</h1>

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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {jobs.map(job => (
                                            <tr key={job.id}>
                                                <td>{job.companyName}</td>
                                                <td>{job.technology}</td>
                                                <td>{job.experienceNedeed}</td>
                                                <td>{job.flexibility}</td>
                                                <td>{job.program}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </main>
            </div>
        )
    }

export default JobsPage