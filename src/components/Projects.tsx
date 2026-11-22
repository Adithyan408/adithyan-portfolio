import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import LinkUnavailableModal from './LinkUnavailableModal'
import { isValidUrl } from '../utils/url'
import '../styles/Projects.css'

export default function Projects() {
  const navigate = useNavigate()
  // Show the last added project first
  const displayedProjects = [...projects].reverse()

  const [modalState, setModalState] = useState<{
    isOpen: boolean
    linkType: string
    projectName: string
  }>({
    isOpen: false,
    linkType: 'Link',
    projectName: '',
  })

  const handleOpenUnavailable = (linkType: string, projectName: string) => {
    setModalState({
      isOpen: true,
      linkType,
      projectName,
    })
  }

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }))
  }

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
                  className={`project-type-badge project-type-badge--${project.projectType === 'Freelance' ? 'freelance' : 'personal'
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

            {/* Project Screenshot */}
            <div className="card-media">
              <img
                src={project.image}
                alt={`${project.heading} screenshot`}
                className="card-image"
                loading="lazy"
              />
            </div>

            {/* Card Content: Title & 2-4 lines about the project */}
            <div className="card-body">
              <div className="card-title-row">
                <h2 className="card-heading">{project.heading}</h2>
                <span className="card-arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

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
                  { isValidUrl(project.githubLink) ? (
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
                ) : (
                  <button
                    type="button"
                    className="icon-link-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleOpenUnavailable('GitHub', project.heading)
                    }}
                    aria-label={`GitHub link unavailable for ${project.heading}`}
                  >
                    <span>GitHub</span>
                    <span aria-hidden="true">↗</span>
                  </button>
                )}

                  { isValidUrl(project.liveLink) ? (
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
                ) : (
                  <button
                    type="button"
                    className="icon-link-btn"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleOpenUnavailable('Live Demo', project.heading)
                    }}
                    aria-label={`Live demo unavailable for ${project.heading}`}
                  >
                    <span>Live Demo</span>
                    <span aria-hidden="true">↗</span>
                  </button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Unavailable Link Popup Modal */}
      <LinkUnavailableModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        linkType={modalState.linkType}
        projectName={modalState.projectName}
      />
    </div>
  )
}