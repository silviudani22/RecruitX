import "../styles/MyAccount.css";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

function MyAccount() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const UserData = {
            lastName: "Popescu",
            firstName: "Ion",
            email: "ion.popescu@example.com",
            username: "ionpopescu1",
            nickname: "Ionutz",
            avatar: "/Avatar.jpg"
        };

        setTimeout(() => {
            setUserData(UserData);
            setLoading(false);
        }, 2000);
    }, []);

    return (
        <div className="my-account">
            <nav className="navbar">
                <div className="logo-container">
                    <div className="logo">
                        <span className="logo-text">MyAccount</span>
                    </div>
                </div>
                <div className="auth-buttons">
                    <button className="jobs-btn" onClick={() => navigate("/info")}>Info</button>
                    <button className="jobs-btn" onClick={() => navigate("/jobs")}>Jobs</button>
                    <button className="jobs-btn" onClick={() => navigate("/about")}>About</button>
                    <button className="jobs-btn" onClick={() => navigate("/home")}>Home</button>
                    
                </div>
            </nav>

            <main className="home-content">
                <div className="account-details-container">
                    {loading ? (
                        <p>Se încarcă datele...</p>
                    ) : (
                        <>
                            <img
                                src={userData.avatar}
                                alt="Avatar utilizator"
                                className="account-avatar"
                            />
                            <h2 className="account-name">{userData.lastName} {userData.firstName}</h2>
                            <h3 className="account-user">{"(" + userData.nickname + ")"}</h3>
                            <p className="account-email">{userData.email}</p>
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}

export default MyAccount;