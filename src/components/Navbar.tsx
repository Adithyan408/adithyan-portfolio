import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'

const links = [
    { to: '/', label: 'About' },
    { to: '/Projects', label: 'Projects' },
    { to: '/Skills', label: 'Skills' },
    { to: '/Contact', label: 'Contact' },
]

export default function Navbar() {
    return (
        <header className="site-header">
            <NavLink to="/" className="brand" aria-label="Home">
                <span className="brand-text">Adithyan KS</span>
            </NavLink>

            <nav className="nav-pill" aria-label="Main">
                {links.map(({ to, label }) => (
                    <NavLink
                        key={to}
                        to={to}
                        end={to === '/'}
                        className={({ isActive }) =>
                            isActive ? 'nav-link is-active' : 'nav-link'
                        }
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}