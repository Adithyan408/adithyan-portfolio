import { useParams, Link, useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import '../styles/ProjectDetails.css'

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const projectIndex = projects.findIndex((p) => p.id === id)
  const project = projectIndex !== -1 ? projects[projectIndex] : null

  // Next project navigation helper
  const nextProject =
    projectIndex !== -1 ? projects[(projectIndex + 1) % projects.length] : null

  if (!project) {
    return (
      <div className="not-found-container">
        <h1>Project Not Found</h1>
        <p>The project you are looking for does not exist or has been moved.</p>
        <Link to="/Projects" className="btn btn--solid">
          ← Back to All Projects
        </Link>
      </div>
    )
  }

  return (
    <article className="project-details-page">
      {/* Back button */}
      <nav aria-label="Breadcrumb">
        <Link to="/Projects" className="back-link">
          ← Back to Projects
        </Link>
      </nav>

      {/* Header section */}
      <header className="details-hero">
        <div className="details-meta-bar">
          <div className="details-icon" aria-hidden="true">
            {project.icon}
          </div>
          <span className="details-pill">{project.category}</span>
          <span className="details-pill">{project.year}</span>
          <span className="details-pill">
            <span
              style={{
                display: 'inline-block',
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#10b981',
                marginRight: 6,
              }}
            ></span>
            {project.status}
          </span>
        </div>

        <h1 className="details-heading">{project.heading}</h1>
        <p className="details-tagline">{project.tagline}</p>

        {/* Action Buttons: Live Demo & GitHub */}
        <div className="details-actions">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--solid"
            >
              <span>View Live Demo</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              <span>View Source on GitHub</span>
              <span aria-hidden="true">↗</span>
            </a>
          )}
        </div>

        {/* Key Metrics / Highlights if present */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="details-metrics" aria-label="Project metrics">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Main Body Section */}
      <div className="details-body">
        {/* Left Column: Long Description, Features, Architecture */}
        <div className="details-main-section">
          {/* Deep-dive Overview */}
          <section className="details-block">
            <h2>Overview & Purpose</h2>
            <p>{project.longDescription}</p>
          </section>

          {/* Key Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <section className="details-block">
              <h2>Key Features & Capabilities</h2>
              <ul className="features-list">
                {project.keyFeatures.map((feature) => (
                  <li key={feature} className="feature-item">
                    <span className="feature-check" aria-hidden="true">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Architecture */}
          {project.architecture && (
            <section className="details-block">
              <h2>System Architecture</h2>
              <p>{project.architecture}</p>
            </section>
          )}

          {/* Technical Challenges & Solutions */}
          {project.challenges && (
            <section className="details-block">
              <h2>Technical Challenges & Solutions</h2>
              <p>{project.challenges}</p>
            </section>
          )}
        </div>

        {/* Right Column: Project Meta Sidebar */}
        <aside className="details-sidebar" aria-label="Project Metadata">
          <div className="sidebar-box">
            <h3>Project Specs</h3>
            <div className="sidebar-info-list">
              <div className="sidebar-info-row">
                <span className="sidebar-label">Role</span>
                <span className="sidebar-val">{project.role}</span>
              </div>
              <div className="sidebar-info-row">
                <span className="sidebar-label">Timeline</span>
                <span className="sidebar-val">{project.year}</span>
              </div>
              <div className="sidebar-info-row">
                <span className="sidebar-label">Category</span>
                <span className="sidebar-val">{project.category}</span>
              </div>
              <div className="sidebar-info-row">
                <span className="sidebar-label">Current Status</span>
                <span className="sidebar-val">{project.status}</span>
              </div>
            </div>
          </div>

          <div className="sidebar-box">
            <h3>Tech Stack</h3>
            <div className="tech-pills-wrap">
              {project.technologies.map((tech) => (
                <span key={tech} className="tech-pill-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* Footer Navigation */}
      <footer className="details-footer-nav">
        <Link to="/Projects" className="btn btn--outline">
          ← All Projects
        </Link>
        {nextProject && nextProject.id !== project.id && (
          <button
            type="button"
            className="btn btn--solid"
            onClick={() => navigate(`/Projects/${nextProject.id}`)}
          >
            Next: {nextProject.heading} →
          </button>
        )}
      </footer>
    </article>
  )
}
