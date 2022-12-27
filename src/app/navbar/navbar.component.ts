import { Component, OnInit, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getWindowSize();
  }

  public screenWidth: any;
  public screenHeight: any;

  isOpen: string = 'default';

  mobile: boolean = false;

  constructor(
    private viewportScroller: ViewportScroller,
    public router: Router
  ) {}

  ngOnInit() {
    this.getWindowSize();
  }

  toggle() {
    this.isOpen = this.isOpen === 'closed' ? 'open' : 'closed';
  }

  getWindowSize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    if (window.innerWidth < 720) this.mobile = true;
    else this.mobile = false;
  }

  onClickScroll(elementId: string): void {
    this.router.navigate(['/']);
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(elementId);
    }, 100);
  }
}
