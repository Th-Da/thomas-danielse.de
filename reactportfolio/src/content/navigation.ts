/** Section order is the new home order (work before skills), not the Angular nav order. */
export const navItems = [
  { id: 'work', label: 'PORTFOLIO' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'about', label: 'ABOUT' },
  { id: 'contact', label: 'CONTACT' },
] as const

export const footerLinks = [
  { to: '/imprint', label: 'Impressum' },
  { to: '/legal-notice', label: 'Legal Notice' },
] as const
