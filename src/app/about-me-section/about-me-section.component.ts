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
        'My journey began as an industrial mechanic. I worked on CNC machines and programmed them. In my spare time, I have been a 3d printer hobbyist for a long time.',
    },
    {
      imgPath: 'assets/img/icons/heart-line.png',
      url: null,
      showCard: true,
      head: 'Passion',
      description:
        'That was when I discovered my passion for programming and solving problems analytically. So I taught myself some fundamental skills, including how to work in a programming environment and the basics of HTML.',
    },
    {
      imgPath: 'assets/img/icons/search-line.png',
      url: null,
      showCard: true,
      head: 'I searched',
      description:
        'To advance my abilities to a professional level, I decided to work with a professional academy for web development. Therefore, I could work on a variety of projects and gain valuable experience.',
    },
    {
      imgPath: 'assets/img/icons/flight-takeoff-line.png',
      url: null,
      showCard: true,
      head: 'The Goal',
      description:
        'Following the successful completion of my further education, I would like to put my experience as a junior front-end developer to the test and gain new experience.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
