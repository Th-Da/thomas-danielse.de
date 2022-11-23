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
  showCard: boolean;
  subcard: any = [];

  projectCard: any = [
    {
      name: 'Join - Kanbanboard',
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
        'A 2D Jump and Run Game based on object-oriented programming (OOP)',
      framework: 'vanillajs',
    },
    {
      name: 'SpaceX rockets',
      imgPath: 'assets/img/projects/spacexrockets.png',
      URL: 'http://rocketx.thomas-danielse.de/',
      gitURL: 'https://github.com/Th-Da/spaceXRocket.git',
      showCard: false,
      description: 'A collection of the rockets from spaceX based on an API',
      framework: 'vanillajs',
    },
    /*     {
      name: 'SpaceXRockets',
      imgPath: 'assets/img/projects/spacexrockets.png',
      URL: null,
      gitURL: '',
      showCard: false,
      description: 'A collection of the rockets from spaceX based on a API',
      framework: 'angular',
    }, */
  ];

  constructor() {
    this.showCard = false;
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
