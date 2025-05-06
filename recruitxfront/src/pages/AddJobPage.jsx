"use client";
import "../styles/AddJobPage.css";

function AddJobPage() {
    return (
        <div className="add-job">
            <nav className="navbar">
                <button
                    className="back-button"
                    onClick={() => window.history.back()}
                    aria-label="Go back"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                    </svg>
                </button>
            </nav>

            <main className="auth-content">
                <div className="auth-container">
                    <h1>Add New Job</h1>
                    <p className="subtitle">Fill out the form to add a job listing</p>

                    <div className="auth-form">
                        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label htmlFor="id">ID</label>
                                <input type="text" id="id" placeholder="Enter job ID" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="companyName">Company Name</label>
                                <input type="text" id="companyName" placeholder="Enter company name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="technology">Technology</label>
                                <input type="text" id="technology" placeholder="Enter technology" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="experience">Necessary Experience</label>
                                <input type="text" id="experience" placeholder="Enter required experience" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="flexibility">Flexibility</label>
                                <input type="text" id="flexibility" placeholder="e.g. Remote, Hybrid" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="program">Program</label>
                                <input type="text" id="program" placeholder="Enter program details" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="idCompany">IdCompany</label>
                                <input type="text" id="idCompany" placeholder="Enter company ID" required />
                            </div>
                            <button type="submit" className="primary-btn">
                                Add Job
                            </button>
                        </form>
                    </div>
                </div>

                <div className="auth-image">
                    <div className="image-placeholder">
                        <div className="gradient-circle"></div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AddJobPage;
