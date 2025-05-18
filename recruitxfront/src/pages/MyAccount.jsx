import "../styles/MyAccount.css";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function MyAccount() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Înlocuiește URL-ul
        axios.get("https://exemplu-api.com/api/user")
            .then(response => {
                setUserData(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Eroare la preluarea datelor:", error);
                setError("Nu s-au putut încărca datele.");
                setLoading(false);
            });
    }, []);

    return (
        <div className="my-account">
            <nav className="navbar">
                <div className="logo-container">
                    <div className="logo">
                        <span className="logo-text">Info</span>
                    </div>
                </div>
                <div className="auth-buttons">
                    <button className="jobs-btn" onClick={() => navigate("/jobs")}>Jobs</button>
                    <button className="jobs-btn" onClick={() => navigate("/about")}>About</button>
                    <button className="jobs-btn" onClick={() => navigate("/home")}>Home</button>
                </div>
            </nav>

            <main className="home-content">
                <div className="account-details-container">
                    {loading ? (
                        <p>Se încarcă datele...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        <>
                            <img
                                src={userData.avatar || "https://via.placeholder.com/150"}
                                alt="Avatar utilizator"
                                className="account-avatar"
                            />
                            <h2 className="account-name">{userData.nume} {userData.prenume}</h2>
                            <p className="account-email">{userData.email}</p>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}

export default MyAccount;