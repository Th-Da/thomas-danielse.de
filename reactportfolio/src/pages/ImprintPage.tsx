import { Link } from 'react-router-dom'
import { legal } from '../content/legal.ts'
import { usePageMeta } from '../lib/usePageMeta.ts'

export function ImprintPage() {
  usePageMeta('Impressum — Thomas Danielse', 'de')

  return (
    <div className="bg-bg-muted px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <p className="mb-8">
          <Link
            to="/"
            className="text-sm text-accent hover:text-accent-alt focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            ← Home
          </Link>
        </p>
        <div
          className="legal-content"
          dangerouslySetInnerHTML={{ __html: legal.imprintHtml }}
        />
      </div>
    </div>
  )
}
