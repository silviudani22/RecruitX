import "../styles/HomePage.css"

function HomePage({ onJobsClick }) { 
    return (
        <div className="home-page">
            <nav className="navbar">
                <div className="logo-container">
                    <div className="logo">
                        <span className="logo-text">RecruitX</span>
                    </div>
                </div>
                <div className="auth-buttons">
                    <button className="jobs-btn" onClick={onJobsClick}>
                        Jobs
                    </button>
                </div>
            </nav>

            <main className="home-content">
                <div className="hero-section">
                    <h1>
                        Welcome to <span className="highlight">RecruitX</span>
                    </h1>
                    <p className="subtitle">The next generation recruitment platform</p>
                    <div className="cta-buttons">
                        <button className="primary-btn" onClick={onJobsClick}>
                            Get Started
                        </button>
                        <button className="secondary-btn">Learn More</button>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-placeholder">
                        <div className="gradient-circle"></div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default HomePage