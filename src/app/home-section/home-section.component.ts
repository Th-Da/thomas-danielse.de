import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

declare let particlesJS: any;
@Component({
  selector: 'app-home-section',
  templateUrl: './home-section.component.html',
  styleUrls: ['./home-section.component.scss'],
})
export class HomeSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    AOS.init({
      duration: 1500,
    });
    /*     this.invokeParticles(); */
  }
  /*   public invokeParticles(): void {
    particlesJS('particles-js', ParticlesConfig, function() {});
  } */
}
