import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  projects = ['Join', 'El Pollo Loco', 'SpaceXRockets', 'SpaceXRockets'];
  projectUrls = ['join', 'el_pollo_loco', 'sapcexrockets', 'sapcexrockets'];
  subcard: any = [];

  projectCard: any = [
    {
      "name": "Join - Kanbanboard",
      "imgPath": "assets/img/projects/join.png",
      "url": null,
      showCard: true,
      "description": "A Kanban board for projectmanagement. Builded in a team.",
      "framework": "vanillajs"
    },
    {
      "name": "El Pollo Loco",
      "imgPath": "assets/img/projects/el_pollo_loco.png",
      "url": null,
      showCard: false,
      "description": "A 2D Jump and Run Game based on object-oriented programming (OOP)",
      "framework": "vanillajs"
    },
    {
      "name": "SpaceX rockets",
      "imgPath": "assets/img/projects/spacexrockets.png",
      "url": null,
      showCard: false,
      "description": "A collection of the rockets from spaceX based on a API",
      "framework": "vanillajs"
    },
    {
      "name": "SpaceXRockets",
      "imgPath": "assets/img/projects/spacexrockets.png",
      "url": null,
      showCard: false,
      "description": "A collection of the rockets from spaceX based on a API",
      "framework": "angular"
    }
  ];



  showCard: boolean;

  constructor() {
    this.showCard = false;
  }

  ngOnInit(): void {
    this.subcard = this.projectCard;
  }

 

  showFramework(framework: any) {
 
     const frame = this.projectCard.filter((subCard: any) => {return subCard.framework === framework});
     this.subcard = frame;
     console.log(frame)
  }

  showAllFrameworks() {
    this.subcard = this.projectCard;
  }

  
  


}
