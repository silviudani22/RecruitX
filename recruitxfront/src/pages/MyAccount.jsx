import "../styles/MyAccount.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MyAccount() {
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId");
    const userRole = JSON.parse(localStorage.getItem("user")).role;


    const isUser = userRole === "user";
    const isCompany = userRole === "company";

    useEffect(() => {
        if (!userId) {
            navigate("/login");
        }
    }, [userId, navigate]);

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    // Pentru editare
    const [editing, setEditing] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("");

    // Pentru schimbare parolă
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [passwords, setPasswords] = useState({ old: "", new: "" });

    useEffect(() => {
        fetch(`http://localhost:5054/api/users/${userId}`)
            .then(res => res.json())
            .then(data => {
                setUserData(data);
                setFirstName(data.firstName || "");
                setLastName(data.lastName || "");
                setEmail(data.email || "");
                setRole(data.role || "");
                setLoading(false);
            });
    }, [userId]);

    // Salvare edit
    const handleSave = async () => {
        await fetch(`http://localhost:5054/api/users/${userId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ firstName, lastName, email, role})
        });
        setUserData({ ...userData, firstName, lastName, email, role });
        setEditing(false);
        alert("Profil actualizat!");
    };

    // Schimbare parolă
    const handleChangePassword = async () => {
        const res = await fetch(`http://localhost:5054/api/users/${userId}/changepassword`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(passwords)
        });
        if (res.ok) {
            alert("Parola a fost schimbată!");
            setShowChangePassword(false);
            setPasswords({ old: "", new: "" });
        } else {
            const data = await res.json();
            alert(data.message || "Eroare la schimbare parolă!");
        }
    };

    return (
        <div className="my-account">
            <nav className="navbar">
                <div className="logo-container">
                    <div className="logo">
                        <span className="logo-text">MyAccount</span>
                    </div>
                </div>
                <div className="auth-buttons">
                    {isCompany && <button className="jobs-btn" onClick={() => navigate("/companies")}>
                        Companies
                    </button>}
                    {isUser && <button className="jobs-btn" onClick={() => navigate("/info")}>
                        Info
                    </button>}
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
                            {!editing ? (
                                <>
                                    <h2 className="account-name">{userData.lastName} {userData.firstName}</h2>
                                    <p className="account-email">Email: {userData.email}</p>
                                    <p className="account-email"> Role: {userData.role}</p>
                                    <button className="account-btn" onClick={() => setEditing(true)}>
                                        Edit Profile
                                    </button>
                                    <button className="account-btn" onClick={() => setShowChangePassword(true)}>
                                        Change Password
                                    </button>
                                </>
                            ) : (
                                <>
                                    <p>
                                        <b>Nume:</b>
                                        <input
                                            value={lastName}
                                            onChange={e => setLastName(e.target.value)}
                                            style={{ marginLeft: "10px" }}
                                        />
                                    </p>
                                    <p>
                                        <b>Prenume:</b>
                                        <input
                                            value={firstName}
                                            onChange={e => setFirstName(e.target.value)}
                                            style={{ marginLeft: "10px" }}
                                        />
                                    </p>
                                    <p>
                                        <b>Email:</b>
                                        <input
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            style={{ marginLeft: "10px" }}
                                        />
                                   </p>
                                    <button className="account-btn" onClick={handleSave}>
                                        Save
                                    </button>
                                    <button className="account-btn" onClick={() => setEditing(false)}>
                                        Cancel
                                    </button>
                                </>
                            )}

                            {showChangePassword && (
                                <div className="modal-backdrop">
                                    <div className="modal">
                                        <h3>Change Password</h3>
                                        <input
                                            type="password"
                                            placeholder="Old password"
                                            value={passwords.old}
                                            onChange={e => setPasswords({ ...passwords, old: e.target.value })}
                                            style={{ marginBottom: "8px", width: "80%" }}
                                        />
                                        <input
                                            type="password"
                                            placeholder="New password"
                                            value={passwords.new}
                                            onChange={e => setPasswords({ ...passwords, new: e.target.value })}
                                            style={{ marginBottom: "16px", width: "80%" }}
                                        />
                                        <div>
                                            <button className="account-btn" onClick={handleChangePassword}>
                                                Save
                                            </button>
                                            <button className="account-btn" onClick={() => setShowChangePassword(false)}>
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </main>
        </div>
    );
}

export default MyAccount;
