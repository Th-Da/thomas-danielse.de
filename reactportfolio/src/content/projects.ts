export type ProjectFramework = 'angular' | 'vanillajs'

export type Project = {
  name: string
  description: string
  imagePath: string
  liveUrl: string | null
  gitUrl: string
  framework: ProjectFramework
}

export const projectFilters = [
  { id: 'all', label: 'All' },
  { id: 'angular', label: 'Angular' },
  { id: 'vanillajs', label: 'Java Script' },
] as const

/** Copied verbatim from the Angular my-work component. */
export const projects: Project[] = [
  {
    name: 'Slack-Clone',
    imagePath: 'assets/img/projects/slack-clone.jpg',
    liveUrl: 'https://team-talks.thomas-danielse.de/get-started',
    gitUrl: 'https://github.com/Th-Da/slack-clone',
    description: 'An Angular app of the popular Slack messenger',
    framework: 'angular',
  },
  {
    name: 'Join - Kanban Board',
    imagePath: 'assets/img/projects/join.jpg',
    liveUrl: 'https://join.thomas-danielse.de',
    gitUrl: 'https://github.com/Th-Da/JOIN.git',
    description: 'A Kanban board for projectmanagement. Builded in a team.',
    framework: 'vanillajs',
  },
  {
    name: 'El Pollo Loco',
    imagePath: 'assets/img/projects/el_pollo_loco.png',
    liveUrl: 'https://elpolloloco.thomas-danielse.de',
    gitUrl: 'https://github.com/Th-Da/El-Pollo-Loco-.git',
    description:
      'A 2D Jump and Run Game based on object-oriented programming.',
    framework: 'vanillajs',
  },
  {
    name: 'Personal homepage',
    imagePath: 'assets/img/projects/portfolio.jpg',
    liveUrl: null,
    gitUrl: 'https://github.com/Th-Da/thomas-danielse.de.git',
    description: 'My homepage with the portfolio - build with Angular.',
    framework: 'angular',
  },
  {
    name: 'SpaceX rockets',
    imagePath: 'assets/img/projects/spacexrockets.png',
    liveUrl: 'http://rocketx.thomas-danielse.de/',
    gitUrl: 'https://github.com/Th-Da/spaceXRocket.git',
    description: 'A collection of the rockets from SpaceX based on an API.',
    framework: 'vanillajs',
  },
]
