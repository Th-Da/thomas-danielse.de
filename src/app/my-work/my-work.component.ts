import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {
  projects = ['Join', 'El Pollo Loco', 'SpaceXRockets', 'SpaceXRockets'];
  projectUrls = ['join', 'el_pollo_loco', 'sapcexrockets', 'sapcexrockets'];


  showCard: boolean;

  constructor() {
    this.showCard = false;
  }

  ngOnInit(): void {
  }

}
