import { Component, OnInit, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'rotate(90deg)' })),
      state('closed', style({ transform: 'rotate(0deg)' })),
      transition('open <=> closed', [animate('100ms')]),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  public screenWidth: any;
  public screenHeight: any;

  isOpen: string = 'default';

  mobile: boolean = false;

  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    if (window.innerWidth < 720) this.mobile = true;
    else this.mobile = false;
  }

  constructor() {}

  toggle() {
    this.isOpen = this.isOpen === 'closed' ? 'open' : 'closed';
  }
}
