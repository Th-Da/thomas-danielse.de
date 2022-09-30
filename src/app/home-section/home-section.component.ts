import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss']
})
export class HomeSectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({

      offset: 120,
      duration: 300
    });
  }

}
