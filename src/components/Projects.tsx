import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import '../styles/Projects.css'

export default function Projects() {
  const navigate = useNavigate()
  // Show the last added project first
  const displayedProjects = [...projects].reverse()

  return (
    <div className="projects-page">
      {/* Page Header */}
      <header className="projects-header">
        <div className="projects-badge">
          <span>Selected Works</span>
        </div>
        <h1 className="projects-title">Featured Projects</h1>
        <p className="projects-subtitle">
          A showcase of full-stack web applications, developer tooling, and distributed systems
          I've architected and built. Click any card to explore deep-dive details.
        </p>
      </header>

      {/* Projects Grid */}
      <div className="projects-grid">
        {displayedProjects.map((project) => (
          <article
            key={project.id}
            className="project-card"
            onClick={() => navigate(`/Projects/${project.id}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                navigate(`/Projects/${project.id}`)
              }
            }}
            aria-label={`View details for ${project.heading}`}
          >
            {/* Top Bar: Icon, Category & Status */}
            <div className="card-top">
              <div className="card-icon" aria-hidden="true">
                {project.icon}
              </div>
              <div className="card-meta">
                <span
                  className={`project-type-badge project-type-badge--${
                    project.projectType === 'Freelance' ? 'freelance' : 'personal'
                  }`}
                >
                  <span className="type-dot" aria-hidden="true"></span>
                  {project.projectType}
                </span>
                <span className="meta-pill">{project.category}</span>
                <span className="meta-pill">{project.year}</span>
                <span className="status-indicator">
                  <span className="status-dot"></span>
                  {project.status}
                </span>
              </div>
            </div>

            {/* Card Content */}
            <div className="card-body">
              <div className="card-title-row">
                <h2 className="card-heading">{project.heading}</h2>
                <span className="card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <p className="card-tagline">{project.tagline}</p>
              <p className="card-description">{project.description}</p>

              {/* Technologies */}
              <div className="card-tech-stack" aria-label="Technologies used">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="tech-tag">+{project.technologies.length - 4} more</span>
                )}
              </div>
            </div>

            {/* Card Footer: View Details Prompt + Quick Action Links */}
            <div className="card-footer">
              <span className="details-prompt">
                Explore details <span>→</span>
              </span>

              <div className="card-links">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link-btn"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`GitHub source code for ${project.heading}`}
                  >
                    <span>GitHub</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="icon-link-btn"
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Live demo for ${project.heading}`}
                  >
                    <span>Live Demo</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}