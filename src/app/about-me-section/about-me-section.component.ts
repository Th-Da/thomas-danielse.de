import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss'],
})
export class AboutMeSectionComponent implements OnInit {
  steps: any = [
    {
      imgPath: 'assets/img/icons/walk-line.png',
      url: null,
      showCard: true,
      head: 'The beginning',
      description:
        'My journey started as an industrial mechanic. I worked on CNC machines and wrote the programs that drive them. In my spare time I have been a 3D printing hobbyist for years. That\'s where it clicked: what I actually enjoy is solving problems\n' +
        'analytically and building things that work. So I taught myself the\n' +
        'fundamentals — how to work in a development environment, HTML, and my\n' +
        'first lines of JavaScript.',
    },
    {
      imgPath: 'assets/img/icons/search-line.png',
      url: null,
      showCard: true,
      head: 'Going professional',
      description:
        'To advance my abilities to a professional level, I decided to work with a professional academy for web development. Therefore, I could work on a variety of projects and gain valuable experience.',
    },
    {
      imgPath: 'assets/img/icons/heart-line.png',
      url: null,
      showCard: true,
      head: 'Professional',
      description:
        'From 2023 to 2025 I worked as a software developer at Bertrandt, on\n' +
        'assignment for a German automotive manufacturer. My main project was a\n' +
        'TypeScript and Node.js application running on Linux, embedded in a large\n' +
        'automotive ecosystem with interfaces to backend systems and vehicle\n' +
        'control units.\n' +
        '\n' +
        'The work was to turn country-specific data protection law into working\n' +
        'software — which meant understanding the legal requirements, translating\n' +
        'them into technical ones, and explaining to everyone involved what was\n' +
        'actually possible. Testing ran from Jest unit tests through simulated\n' +
        'validation in virtual machines to hardware test racks.\n' +
        '\n' +
        'Alongside that I built a browser-based KPI dashboard in React, visualising\n' +
        'production data pulled over REST APIs, with filters for exploring it.',
    },
    {
      imgPath: 'assets/img/icons/flight-takeoff-line.png',
      url: null,
      showCard: true,
      head: 'Right Now',
      description:
        'I\'m on a deliberate career break in Kuala Lumpur, teaching German as a\n' +
        'foreign language and building - AI-driven - an interactive 3D version of my CV with\n' +
        'React, TypeScript and Three.js.\n' +
        '\n' +
        'I\'m looking for a software developer role from January 2027, or earlier\n' +
        'by arrangement.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
