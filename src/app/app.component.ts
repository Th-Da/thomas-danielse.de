import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { NavigationService } from './navigation.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'thomas-danielse.de';

  constructor(public navServ: NavigationService) {

  }

  ngOnInit(): void {
    /*     setTimeout(() => {
          this.navServ.test = "Mihai";
        }, 2000) */

  }
}
