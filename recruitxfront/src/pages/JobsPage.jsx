/*import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function JobsPage() {
    return (
        <div>
        <Navbar></Navbar>
        <div>JobsPage</div>

        </div>
    )
}

export default JobsPage;
*/
// src/pages/JobsPage.jsx
import React, { useEffect, useState } from "react";
import "../styles/JobsPage.css";
import MyModal from "../Components/MyModal"


// Dummy user context — in real app, fetch from auth
const currentUser = {
    role: "company", // or "candidate"
};

const allJobsFromServer = [
    { id: 1, title: "Software Engineer", category: "Engineering" },
    { id: 2, title: "Marketing Manager", category: "Marketing" },
    { id: 3, title: "Civil Engineer", category: "Engineering" },
    { id: 4, title: "HR Specialist", category: "HR" },
    { id: 5, title: "Java Developer", category: "IT" },
    { id: 6, title: "C# Developer", category: "IT" },
    { id: 7, title: "Call Center Guy", category: "HR" },
    { id: 8, title: "FIFA Gamer", category: "Game" },


];

const JobsPage = () => {
    const [jobs, setJobs] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filters, setFilters] = useState([]);

    useEffect(() => {
        // Simulate API fetch
        setJobs(allJobsFromServer);
    }, []);

    const handleCheckboxChange = (category) => {
        setFilters((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };

    const filteredJobs = jobs.filter((job) => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesFilter = filters.length === 0 || filters.includes(job.category);
        return matchesSearch && matchesFilter;
    });

    return (
        <div className="jobs-container">
            <div className="header">
                <input
                    type="text"
                    placeholder="Search jobs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-bar"
                />

                {currentUser.role === "company" && <MyModal />}

            </div>

            <div className="filters">
                {["Engineering", "Marketing", "HR" , "IT" ,"Game"].map((cat) => (
                    <label key={cat}>
                        <input
                            type="checkbox"
                            checked={filters.includes(cat)}
                            onChange={() => handleCheckboxChange(cat)}
                        />
                        {cat}
                    </label>
                ))}
            </div>

            <div className="job-list">
                {filteredJobs.map((job) => (
                    <div key={job.id} className="job-item">
                        {job.title} <span className="job-category">({job.category})</span>
                    </div>
                ))}
                {filteredJobs.length === 0 && <div className="no-results">No jobs found.</div>}
            </div>
        </div>

    );
};

export default JobsPage;
