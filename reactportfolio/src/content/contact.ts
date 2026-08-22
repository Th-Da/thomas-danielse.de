export const contact = {
  heading: 'Contact me.',
  introBeforeEmail: 'Get in touch via the form below or by emailing',
  submitLabel: 'Send',
  sendingLabel: 'Sending...',
  fields: {
    name: {
      label: 'Enter your name',
      placeholder: 'Your name',
    },
    email: {
      label: 'Enter your Email address',
      placeholder: 'Your email andress',
    },
    message: {
      label: 'Enter your message',
    },
  },
  /** Live All-Inkl endpoint; still used in local dev (decision 9A). */
  endpoint: 'https://thomas-danielse.de/assets/send_mail.php',
} as const
