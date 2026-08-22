import { Link } from 'react-router-dom'
import { footerLinks } from '../../content/navigation.ts'
import { profile } from '../../content/profile.ts'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-bg-muted">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <nav aria-label="Legal" className="flex items-center gap-3 text-sm">
          {footerLinks.map((link, index) => (
            <span key={link.to} className="flex items-center gap-3">
              {index > 0 ? (
                <span aria-hidden="true" className="text-white/40">
                  |
                </span>
              ) : null}
              <Link
                to={link.to}
                className="text-fg hover:text-accent-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {link.label}
              </Link>
            </span>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <img
              src={profile.githubIconPath}
              alt="GitHub"
              className="h-8 w-8"
            />
          </a>
          <a
            href={profile.linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <img
              src={profile.linkedinIconPath}
              alt="LinkedIn"
              className="h-8 w-8"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
