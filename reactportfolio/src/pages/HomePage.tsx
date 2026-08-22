import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { about } from '../content/about.ts'
import { contact } from '../content/contact.ts'
import { hero } from '../content/hero.ts'
import { profile } from '../content/profile.ts'
import { usePageMeta } from '../lib/usePageMeta.ts'

const homeSections = [
  {
    id: 'hero',
    title: `${hero.greeting} ${profile.displayName}`,
    body: profile.role,
  },
  {
    id: 'work',
    title: 'My work',
    body: 'Project gallery will land in the next phase.',
  },
  {
    id: 'skills',
    title: 'My skills',
    body: 'Skills will land in the next phase.',
  },
  {
    id: 'about',
    title: about.heading,
    body: about.intro,
  },
  {
    id: 'contact',
    title: contact.heading,
    body: contact.introBeforeEmail,
  },
] as const

export function HomePage() {
  const location = useLocation()
  usePageMeta(`${profile.displayName} — ${profile.role}`, 'en')

  useEffect(() => {
    if (!location.hash) {
      return
    }

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    document
      .getElementById(location.hash.slice(1))
      ?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' })
  }, [location])

  return (
    <div>
      {homeSections.map((section, index) => {
        const Heading = index === 0 ? 'h1' : 'h2'

        return (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-24 border-b border-white/10 px-6 py-24 odd:bg-bg even:bg-bg-muted"
          >
            <div className="mx-auto max-w-6xl">
              <Heading className="text-3xl font-extrabold text-fg md:text-5xl">
                {section.title}
              </Heading>
              <p className="mt-4 max-w-2xl text-lg text-white/80">
                {section.body}
              </p>
            </div>
          </section>
        )
      })}
    </div>
  )
}
