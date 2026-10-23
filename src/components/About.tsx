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

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/Adithyan408',
        icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2z"
                />
            </svg>
        ),
    },
    {
        name: 'X',
        href: 'https://x.com/Adithyan408',
        icon: (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        ),
    },
    {
        name: 'Mail',
        href: 'mailto:ksadithyan408@gmail.com',
        icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
        ),
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com/in/adithyanks',
        icon: (
            <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
            </svg>
        ),
    },
]

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

                    {/* Small Social Connect Icons Horizontally Aligned */}
                    <div className="landing-socials" aria-label="Connect with me">
                        {socialLinks.map(({ name, href, icon }) => (
                            <a
                                key={name}
                                href={href}
                                target={href.startsWith('mailto:') ? undefined : '_blank'}
                                rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                                className="social-icon-btn"
                                aria-label={name}
                                title={name}
                            >
                                {icon}
                            </a>
                        ))}
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