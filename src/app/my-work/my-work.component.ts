import { Component, OnInit, HostListener } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
})
export class MyWorkComponent implements OnInit {
  public screenWidth: any;
  public screenHeight: any;
  mobile: boolean = false;
  public showCard: boolean;
  public subcard: any = [];

  projectCard: any = [
    {
      name: 'Slack-Clone',
      imgPath: 'assets/img/projects/slack-clone.jpg',
      URL: 'https://slack-clone.thomas-danielse.de/get-started',
      gitURL: 'https://github.com/Th-Da/slack-clone',
      showCard: false,
      description: 'An Angular app of the popular Slack messenger',
      framework: 'angular',
    },
    {
      name: 'Join - Kanban Board',
      imgPath: 'assets/img/projects/join.jpg',
      URL: 'https://join.thomas-danielse.de',
      gitURL: 'https://github.com/Th-Da/JOIN.git',
      showCard: false,
      description: 'A Kanban board for projectmanagement. Builded in a team.',
      framework: 'vanillajs',
    },
    {
      name: 'El Pollo Loco',
      imgPath: 'assets/img/projects/el_pollo_loco.png',
      URL: 'https://elpolloloco.thomas-danielse.de',
      gitURL: 'https://github.com/Th-Da/El-Pollo-Loco-.git',
      showCard: false,
      description:
        'A 2D Jump and Run Game based on object-oriented programming.',
      framework: 'vanillajs',
    },
    {
      name: 'Personal homepage',
      imgPath: 'assets/img/projects/portfolio.jpg',
      URL: null,
      gitURL: 'https://github.com/Th-Da/thomas-danielse.de.git',
      showCard: false,
      description: 'My homepage with the portfolio - build with Angular.',
      framework: 'angular',
    },
    {
      name: 'SpaceX rockets',
      imgPath: 'assets/img/projects/spacexrockets.png',
      URL: 'http://rocketx.thomas-danielse.de/',
      gitURL: 'https://github.com/Th-Da/spaceXRocket.git',
      showCard: false,
      description: 'A collection of the rockets from SpaceX based on an API.',
      framework: 'vanillajs',
    },
  ];

  constructor() {
    this.showCard = false;
  }
  ngOnChange() {
    this.subcard;
  }

  ngOnInit(): void {
    this.subcard = this.projectCard;
    this.getWindowSize();

    AOS.init();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getWindowSize();
  }

  showFramework(framework: any) {
    if (framework === 'all') {
      this.subcard = this.projectCard;
    } else {
      const frame = this.projectCard.filter((subCard: any) => {
        return subCard.framework === framework;
      });
      this.subcard = frame;
      console.log(frame);
    }
  }

  getWindowSize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    if (window.innerWidth < 600) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }

  openProjectLink(url: string) {
    window.open(url, '_blank');
  }
}
