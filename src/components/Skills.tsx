import { useRef } from 'react'
import type { MouseEvent, ReactNode } from 'react'
import '../styles/Skills.css'

// ✏️ Edit the skills here — the layout reads from these lists.
const stack = [
    { mark: 'JS', name: 'JavaScript' },
    { mark: 'TS', name: 'TypeScript' },
    { mark: 'No', name: 'Node.js' },
    { mark: 'Ex', name: 'Express' },
    { mark: 'Mg', name: 'MongoDB' },
    { mark: 'Re', name: 'React' },
    { mark: 'Ht', name: 'HTML & CSS' },
    { mark: 'Api', name: 'REST APIs' },
]

const groups = [

    {
        title: 'Tools',
        tone: 'dark',
        items: ['Postman', 'Git', 'GitHub', 'Docker', 'VS Code', 'Linux', 'CI/CD'],
    },
    {
        title: 'Methods',
        tone: 'light',
        items: [
            'SOLID',
            'Clean Architecture',
            'Agile / Scrum',
            'TDD',
            'Design Patterns',
            'Code Review',
            'System Design',
        ],
    },
    {
        title: 'Soft skills',
        tone: 'dark',
        items: [
            'Communication',
            'Teamwork',
            'Problem solving',
            'Time management',
            'Adaptability',
            'Mentoring',
            'Ownership',
        ],
    },
]

/** A panel that tilts toward the cursor; children sit at different depths. */
function TiltCard({ tone, children }: { tone: string; children: ReactNode }) {
    const ref = useRef<HTMLDivElement>(null)

    const handleMove = (e: MouseEvent<HTMLDivElement>) => {
        const el = ref.current
        if (!el) return
        const rect = el.getBoundingClientRect()
        const x = (e.clientX - rect.left) / rect.width - 0.5 // -0.5 → 0.5
        const y = (e.clientY - rect.top) / rect.height - 0.5
        el.style.setProperty('--ry', `${x * 16}deg`)
        el.style.setProperty('--rx', `${-y * 16}deg`)
    }

    const reset = () => {
        const el = ref.current
        if (!el) return
        el.style.setProperty('--ry', '0deg')
        el.style.setProperty('--rx', '0deg')
    }

    return (
        <div className="tilt-wrap">
            <div
                ref={ref}
                className={`tilt-card tilt-card--${tone}`}
                onMouseMove={handleMove}
                onMouseLeave={reset}
            >
                {children}
            </div>
        </div>
    )
}

export default function Skills() {
    return (
        <div className="skills">
            <header className="skills-intro">
                <h1>Skills</h1>
                <p>
                    The languages I write, the tools I rely on, and the ways I like to
                    work with a team.
                </p>
            </header>

            {/* 3D rotating ring — hover to pause */}
            <section className="ring-stage" aria-label="Core tech stack">
                <div className="ring-tilt">
                    <ul
                        className="ring"
                        style={{ ['--n' as string]: stack.length }}
                    >
                        {stack.map((s, i) => (
                            <li
                                key={s.name}
                                className="ring-card"
                                style={{ ['--i' as string]: i }}
                            >
                                <span className="ring-card__mark">{s.mark}</span>
                                <span className="ring-card__name">{s.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Depth cards */}
            <section className="groups">
                {groups.map((g) => (
                    <TiltCard key={g.title} tone={g.tone}>
                        <h2 className="tilt-card__title">{g.title}</h2>
                        <ul className="tilt-card__list">
                            {g.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </TiltCard>
                ))}
            </section>
        </div>
    )
}