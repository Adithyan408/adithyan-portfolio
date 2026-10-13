import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import '../styles/Contact.css'

// ✏️ Edit your details here.
const info = {
    email: 'ksadithyan408@gmail.com',
    location: 'Kerala, India',
    availability: 'Open to full-time roles & freelance',
    responseTime: 'Replies within 24 hours',
    links: [
        { label: 'GitHub', href: 'https://github.com/Adithyan408' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/adithyanks' },
    ],
    reasons: [
        'Full-stack web application development',
        'Frontend & backend architecture review',
        'Engineering roles & team opportunities',
        'Collaborative projects & open source',
    ],
}

const FORM_ENDPOINT = 'https://api.web3forms.com/submit'
const WEB3FORMS_ACCESS_KEY = 'cb509f23-2079-4f6b-8d69-90f01810656c'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState<Status>('idle')

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => setForm({ ...form, [e.target.name]: e.target.value })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        // Fallback to visitor's email client if no external backend endpoint
        if (!FORM_ENDPOINT) {
            const subject = encodeURIComponent(`Message from ${form.name}`)
            const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`)
            window.location.href = `mailto:${info.email}?subject=${subject}&body=${body}`
            return
        }

        setStatus('sending')
        try {
            const res = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify({
                    access_key: WEB3FORMS_ACCESS_KEY,
                    subject: `Portfolio Message from ${form.name}`,
                    from_name: form.name,
                    ...form,
                }),
            })
            const data = await res.json()
            if (!res.ok || !data.success) {
                throw new Error(data.message || 'Request failed')
            }
            setStatus('sent')
            setForm({ name: '', email: '', message: '' })
        } catch {
            setStatus('error')
        }
    }

    return (
        <div className="contact">
            {/* Compact Header */}
            <header className="contact-intro">
                <h1>Let&apos;s work together.</h1>
                <p>
                    Have a project in mind, an engineering role, or just a question? Send me a message and I&apos;ll get back to you promptly.
                </p>
            </header>

            <div className="contact-grid">
                {/* Left Card: Information & Quick Links */}
                <aside className="contact-info">
                    <div className="contact-info__main">
                        <div className="contact-info__badge">
                            <span className="status-dot" aria-hidden="true"></span>
                            <span>{info.availability}</span>
                        </div>

                        <h2>Let&apos;s connect</h2>
                        <p className="contact-info__note">
                            I&apos;m a software engineer who enjoys turning complex ideas into fast, reliable web products with clean architecture and intuitive user experiences.
                        </p>

                        <div className="contact-reasons-wrap">
                            <span className="contact-reasons-title">Topics I love discussing:</span>
                            <ul className="contact-reasons">
                                {info.reasons.map((r) => (
                                    <li key={r}>
                                        <span className="reason-check" aria-hidden="true">✓</span>
                                        <span>{r}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Metadata Grid */}
                    <dl className="contact-details">
                        <div className="detail-item">
                            <dt>Email</dt>
                            <dd>
                                <a href={`mailto:${info.email}`}>{info.email}</a>
                            </dd>
                        </div>
                        <div className="detail-item">
                            <dt>Location</dt>
                            <dd>{info.location}</dd>
                        </div>
                        <div className="detail-item">
                            <dt>Response time</dt>
                            <dd>{info.responseTime}</dd>
                        </div>
                        <div className="detail-item">
                            <dt>Profiles</dt>
                            <dd className="contact-links">
                                {info.links.map((l) => (
                                    <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="contact-link-pill">
                                        {l.label} <span aria-hidden="true">↗</span>
                                    </a>
                                ))}
                            </dd>
                        </div>
                    </dl>
                </aside>

                {/* Right Card: Streamlined Contact Form */}
                <form className="contact-form" onSubmit={handleSubmit} noValidate={false}>
                    <div className="contact-form__fields">
                        {/* 2-Column Row for Name and Email to save vertical height */}
                        <div className="form-row">
                            <div className="field">
                                <label htmlFor="name">Your name</label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Jane Doe"
                                />
                            </div>

                            <div className="field">
                                <label htmlFor="email">Your email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="jane@company.com"
                                />
                            </div>
                        </div>

                        <div className="field field--message">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                required
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Tell me a little about your project, idea, or role..."
                            />
                        </div>
                    </div>

                    <div className="contact-form__bottom">
                        <button
                            type="submit"
                            className="contact-form__send"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Sending message...' : 'Send message →'}
                        </button>

                        <div className="contact-form__status" role="status" aria-live="polite">
                            {status === 'sent' && (
                                <span className="status-success">✓ Thanks! Your message was sent. I&apos;ll reply soon.</span>
                            )}
                            {status === 'error' && (
                                <span className="status-error">✕ Something went wrong. Please email directly.</span>
                            )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}