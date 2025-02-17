import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import "./App.css";
import { works } from "./works";

const Home = () => (
    <div className="container">
        <header className="header">
            <h1>Will Hunter</h1>
            <p>williamnhunter@gmail.com</p>
        </header>
        <section className="intro">
            <p><em></em></p>
        </section>
        <section className="works">
            <h4>Short Stories</h4>
            <br />
            {works.map(work => (
                <div key={work.id} className="work-item">
                    <Link to={`/work/${work.id}`} className="work-title">{work.title}</Link>
                    <br />
                    <Link to={`/work/${work.id}`} className="work-desc">{work.description}</Link>
                    <br />
                    <br />
                </div>
            ))}
        </section>
        <footer className="footer">
            <div className="social-links">
                <a href="https://www.instagram.com/nkeswoosh" className="social-link">Instagram</a>
                <a href="https://www.linkedin.com/in/will-hunter1/" className="social-link">LinkedIn</a>
            </div>
        </footer>
    </div>
);

const WorkDetail = () => {
    const { workId } = useParams();
    const work = works.find(w => w.id === parseInt(workId));
    const [views, setViews] = useState(0);

    useEffect(() => {
        const storedViews = localStorage.getItem(`views-${workId}`);
        const newViews = storedViews ? parseInt(storedViews) + 1 : 1;
        setViews(newViews);
        localStorage.setItem(`views-${workId}`, newViews);

        // Scroll to top when page loads
        window.scrollTo(0, 0);

    }, [workId]);

    return work ? (
        <div className="container exaggerated">
            <header className="header exaggerated-header">{work.title}</header>
            <p className="view-counter"><em>Views: {views}</em></p>
            <p className="exaggerated-description">{work.description}</p>
            <div className="story-content exaggerated-text">
                {work.fullText.split("\n").map((paragraph, index) => (
                    paragraph.trim() ? (
                        <p key={index} dangerouslySetInnerHTML={{
                            __html: paragraph
                                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                                .replace(/_(.*?)_/g, "<em>$1</em>")
                        }} />
                    ) : <br key={index} />
                ))}
            </div>
            <Link to="/" className="nav-link">Back to Home</Link>
        </div>
    ) : <p className="missing">Work not found</p>;
};

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:workId" element={<WorkDetail />} />
        </Routes>
    </Router>
);

export default App;
