import "../styles/AboutUsPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function AboutUsPage() {
    const navigate = useNavigate();
    const [imagePath, setImagePath] = useState("/Image_RecruitX.jpg");

    const aboutRef = useRef(null);
    const imageContainerRef = useRef(null);

    useEffect(() => {
        const img = new Image();
        img.src = imagePath;
        img.onload = () => console.log("Imaginea s-a încărcat cu succes");

        const updateHeight = () => {
            if (aboutRef.current && imageContainerRef.current) {
                const aboutHeight = aboutRef.current.offsetHeight;
                imageContainerRef.current.style.height = `${aboutHeight}px`;
            }
        };

        updateHeight();

        const resizeObserver = new ResizeObserver(updateHeight);
        if (aboutRef.current) {
            resizeObserver.observe(aboutRef.current);
        }

        return () => resizeObserver.disconnect();
    }, [imagePath]);

    return (
        <div className="home-page">
            <nav className="navbar">
                <div className="logo-container">
                    <div className="logo">
                        <span className="logo-text">RecruitX</span>
                    </div>
                </div>
                <div className="auth-buttons">
                    <button className="jobs-btn" onClick={() => navigate("/jobs")}>Jobs</button>
                    <button className="jobs-btn" onClick={() => navigate("/info")}>Info</button>
                    <button className="jobs-btn" onClick={() => navigate("/home")}>Home</button>
                </div>
            </nav>
            <main className="home-content">
                <section className="hero-section">
                    <div className="about-section" ref={aboutRef}>
                        <h1 className="about-title">Despre RecruitX</h1>
                        <p className="about-text">
                            RecruitX este platforma creată pentru a conecta specialiștii IT cu oportunitățile de carieră potrivite lor.
                            Misiunea noastră este de a simplifica procesul de recrutare, oferind un spațiu digital modern și eficient atât
                            pentru angajatori, cât și pentru candidați. Cu un design intuitiv și filtre inteligente, ajutăm utilizatorii să găsească
                            jobul ideal în cel mai scurt timp posibil.
                        </p>
                        <p className="about-text">
                            Indiferent dacă ești programator, designer, tester sau manager de proiect, RecruitX este locul unde cariera ta
                            prinde direcția dorită. Vino alături de noi și fă următorul pas în lumea IT!
                        </p>
                    </div>
                </section>
                <div className="hero-image">
                    <div className="image-container" ref={imageContainerRef}>
                        <img
                            src={imagePath}
                            alt="Imagine RecruitX"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AboutUsPage;
