import React from "react";
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
            <h3>Works</h3>
            <br />
            {works.map(work => (
                <div key={work.id} className="work-item">
                    <Link to={`/work/${work.id}`} className="work-title">{work.title}</Link>
                    <br />
                    <Link to={`/work/${work.id}`} className="work-desc">{work.description}</Link>
                    <br />
                    <br />
                    <hr />
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

    return work ? (
        <div className="container">
            <header className="header">{work.title}</header>
            <p></p>
            <p></p>
            <div className="story-content">
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
            <br />
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
