import { Link } from 'react-router-dom'
import '../styles/About.css'
import me from '../assets/me.png'

const profile = {
    name: 'Adithyan KS',
    role: 'Software Engineer',
    headline: 'I build fast, reliable software for the web.',
    about:
        "I'm a software engineer crafting full-stack web applications with an emphasis on clean architecture, performance, and intuitive user experiences. Passionate about turning complex ideas into elegant, reliable code.",
    details: [
        { label: 'Focus', value: 'Full-Stack (React, TypeScript, Node.js)' },
        { label: 'Experience', value: ' Building Web Systems' },
        { label: 'Status', value: 'Open to full-time roles & freelance' },
    ],
}

export default function About() {
    return (
        <section className="landing" aria-label="About & Landing">
            <div className="landing-container">
                {/* Left Column: Hero Content */}
                <div className="landing-content">
                    <div className="landing-badge">
                        <span className="badge-pulse"></span>
                        <span className="badge-text">{profile.role}</span>
                        <span className="badge-dot">•</span>
                        <span className="badge-status">Open to work</span>
                    </div>

                    <h1 className="landing-name">{profile.name}</h1>
                    <p className="landing-headline">{profile.headline}</p>

                    <p className="landing-about">{profile.about}</p>

                    {/* Quick highlights from profile */}
                    <div className="landing-details">
                        {profile.details.map(({ label, value }) => (
                            <div key={label} className="detail-pill">
                                <span className="detail-label">{label}</span>
                                <span className="detail-value">{value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="landing-actions">
                        <Link to="/Projects" className="btn btn--solid">
                            View projects <span className="btn-arrow">→</span>
                        </Link>
                        <Link to="/Contact" className="btn btn--outline">
                            Get in touch
                        </Link>
                    </div>
                </div>

                {/* Right Column: Portrait */}
                <div className="landing-visual">
                    <div className="portrait-frame">
                        <img src={me} alt={profile.name} className="portrait-img" />
                    </div>
                </div>
            </div>
        </section>
    )
}