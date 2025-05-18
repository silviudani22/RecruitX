import "../styles/HomePage.css"
import CompanyGallery from "./CompanyGallery"
import { useNavigate } from "react-router-dom";
function HomePage() { 
    const navigate = useNavigate();
    return (
        <div className="home-page">
            <nav className="navbar">
                <div className="logo-container">
                    <div className="logo">
                        <span className="logo-text">RecruitX</span>
                    </div>
                </div>

                <div className="auth-buttons">
                    <button className="jobs-btn" onClick={()=>navigate("/jobs")}>
                        Jobs
                    </button>
                    <button className="jobs-btn" onClick={() => navigate("/account")}>
                        MyAccount
                    </button>
                    <button className="jobs-btn" onClick={() => navigate("/info")}>
                        Info
                    </button>
                    <button className="jobs-btn" onClick={() => navigate("/about")}>
                        About
                    </button>
                    <button className="jobs-btn" onClick={() => navigate("/welcome")}>
                        LogOut
                    </button>
                </div>

               
            </nav>

            <main className="home-content">
                
            <CompanyGallery></CompanyGallery>
            </main>
        </div>
    )
}

export default HomePage