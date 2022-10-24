import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-section',
  templateUrl: './about-me-section.component.html',
  styleUrls: ['./about-me-section.component.scss']
})
export class AboutMeSectionComponent implements OnInit {

  steps: any = [
    {
      "imgPath": "assets/img/icons/walk-line.png",
      "url": null,
      showCard: true,
      "head": "The beginning",
      "description": "My journey began as an industrial mechanic and CNC programmer... "
    },
    {
      "imgPath": "assets/img/icons/heart-line.png",
      "url": null,
      showCard: true,
      "head": "Passion",
      "description": "...when i realized my passion for programming and solving problems in a logical way. But that was not enough why ..."
    },
    {
      "imgPath": "assets/img/icons/search-line.png",
      "url": null,
      showCard: true,
      "head": "I searched",
      "description": "for a way to go deeper in programming. Thats when i decided to work together with Devolper Academy, so that I could work on many projects and gain a lot of experience."
    },
    {
      "imgPath": "assets/img/icons/flight-takeoff-line.png",
      "url": null,
      showCard: true,
      "head": "The Goal",
      "description": "... is to use my skills and learn new ones to get better each day. "
    }
    
  ];



  constructor() { }



  ngOnInit(): void {
  }

}
