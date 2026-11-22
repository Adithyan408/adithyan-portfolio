import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/LinkUnavailableModal.css'

export interface LinkUnavailableModalProps {
  isOpen: boolean
  onClose: () => void
  linkType?: string
  projectName?: string
}

export default function LinkUnavailableModal({
  isOpen,
  onClose,
  linkType = 'Link',
  projectName,
}: LinkUnavailableModalProps) {
  const navigate = useNavigate()
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleConnect = () => {
    onClose()
    navigate('/Contact')
  }

  return (
    <div
      className="unavailable-modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="unavailable-modal-card"
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="unavailable-modal-title"
        aria-describedby="unavailable-modal-desc"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="unavailable-modal-close"
          onClick={onClose}
          aria-label="Close dialog"
        >
          ✕
        </button>

        <div className="unavailable-modal-icon-badge" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>

        <div className="unavailable-modal-header">
          <span className="unavailable-modal-pill">
            {linkType} Not Available
          </span>
          <h2 id="unavailable-modal-title" className="unavailable-modal-title">
            Link Unavailable
          </h2>
          {projectName && (
            <p className="unavailable-modal-project">Project: {projectName}</p>
          )}
        </div>

        <div className="unavailable-modal-notice-box">
          <p id="unavailable-modal-desc" className="unavailable-modal-desc">
            Link is not available due to privacy issues or other technical problems. If you want, connect the author.
          </p>
        </div>

        <div className="unavailable-modal-actions">
          <button
            type="button"
            className="btn btn--solid modal-connect-btn"
            onClick={handleConnect}
          >
            <span>Connect the Author</span>
            <span aria-hidden="true">→</span>
          </button>
          <button
            type="button"
            className="btn btn--outline modal-dismiss-btn"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
