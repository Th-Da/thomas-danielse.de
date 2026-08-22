export type AboutStep = {
  title: string
  description: string
  iconPath: string
}

/** Copied verbatim from the Angular about-me-section component, including typos. */
export const about = {
  heading: 'About me.',
  intro:
    "I'm a front-end developer and technology enthusiast who loves to delv into a topic.",
  steps: [
    {
      title: 'The beginning',
      description:
        'My journey began as an industrial mechanic. I worked on CNC machines and programmed them. In my spare time, I have been a 3d printer hobbyist for a long time.',
      iconPath: 'assets/img/icons/walk-line.png',
    },
    {
      title: 'Passion',
      description:
        'That was when I discovered my passion for programming and solving problems analytically. So I taught myself some fundamental skills, including how to work in a programming environment and the basics of HTML.',
      iconPath: 'assets/img/icons/heart-line.png',
    },
    {
      title: 'I searched',
      description:
        'To advance my abilities to a professional level, I decided to work with a professional academy for web development. Therefore, I could work on a variety of projects and gain valuable experience.',
      iconPath: 'assets/img/icons/search-line.png',
    },
    {
      title: 'The Goal',
      description:
        'Following the successful completion of my further education, I would like to put my experience as a junior front-end developer to the test and gain new experience.',
      iconPath: 'assets/img/icons/flight-takeoff-line.png',
    },
  ] as const satisfies readonly AboutStep[],
}
