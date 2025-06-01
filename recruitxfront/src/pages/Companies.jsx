import "../styles/JobsPage.css";
import "../styles/JobsTable.css";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CompaniesModal from "./CompaniesModal";

function Companies() {
    const navigate = useNavigate();
    const [companies, setCompanies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const userRole = JSON.parse(localStorage.getItem("user")).role;
    const isCompany = userRole === "company";
    const isAdmin = userRole === "admin";
    const userId = Number(localStorage.getItem('userId'));

    useEffect(() => {
        if (!userId) {
            navigate("/login");
        }
    }, [userId, navigate]);

    useEffect(() => {
        fetchCompanies();
    }, []);

    const fetchCompanies = () => {
        setLoading(true);
        axios.get('http://localhost:5054/api/company')
            .then(res => {
                setCompanies(res.data);
                setLoading(false);
            })
            .catch(error => {
                setLoading(false);
                alert('Eroare la încărcarea companiilor: ' + error.message);
            });
    };

    const handleSaveCompany = (companyData) => {
        axios.post("http://localhost:5054/api/company", companyData, {
            headers: { "Content-Type": "application/json" }
        })
            .then(() => {
                setShowModal(false);
                fetchCompanies();
            })
            .catch(error => {
                if (error.response && error.response.data) {
                    alert("Eroare la adăugare: " + JSON.stringify(error.response.data, null, 2));
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
                        <span className="logo-text">Companies</span>
                    </div>
                </div>
                <div className="auth-buttons">
                    <button className="jobs-btn" onClick={() => navigate("/account")}>MyAccount</button>
                    <button className="jobs-btn" onClick={() => navigate("/about")}>About</button>
                    <button className="jobs-btn" onClick={() =>
                        navigate("/jobs")}>
                        Jobs
                    </button>
                    <button className="jobs-btn" onClick={() => navigate("/home")}>Home</button>

                </div>
            </nav>

            <main className="home-content">
                <div className="jobs-section">
                    <div className="jobs-header">
                        <h1>Companies</h1>
                        {(isCompany || isAdmin) && <button className="add-job-btn" onClick={() => setShowModal(true)}>
                            + Add Company
                        </button>}
                    </div>
                    {showModal && (
                        <CompaniesModal
                            onClose={() => setShowModal(false)}
                            onSave={handleSaveCompany}
                        />
                    )}
                    {loading ? (
                        <div className="loading">Loading companies...</div>
                    ) : (
                        <div className="table-container">
                            <table className="jobs-table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Domain</th>
                                        <th>Location</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {companies.map(company => (
                                        <tr key={company.id}>
                                            <td>{company.id}</td>
                                            <td>{company.name}</td>
                                            <td>{company.email || '-'}</td>
                                            <td>{company.domain}</td>
                                            <td>{company.location}</td>
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

export default Companies; 