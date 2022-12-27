import { Component, OnInit, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-180deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('400ms ease-in')),
    ]),
  ],
  // animations: [
  //   trigger('rotateImage', [
  //     state(
  //       'closed',
  //       style({
  //         deg: 0,
  //       })
  //     ),
  //     state(
  //       'open',
  //       style({
  //         deg: 90,
  //       })
  //     ),
  //     transition('closed => open', animate('500ms ease-in')),
  //     transition('open => closed', animate('500ms ease-out')),
  //   ]),
  // ],
})
export class NavbarComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.getWindowSize();
  }

  public screenWidth: any;
  public screenHeight: any;

  state: string = 'default';

  mobile: boolean = false;

  constructor(
    private viewportScroller: ViewportScroller,
    public router: Router
  ) {}

  ngOnInit() {
    this.getWindowSize();
  }

  ngAfterViewInit() {
    // const menuButton = document.getElementById('menu-button') as HTMLElement;
    // menuButton.addEventListener('click', function rotateImage(event))
  }

  rotate() {
    debugger;
    this.state = this.state === 'default' ? 'rotated' : 'default';
  }

  rotateImage() {
    const menuButton = document.getElementById(
      'menuButton'
    ) as HTMLElement | null;
    if (!menuButton.classList.contains('rotate-image')) {
      menuButton.classList.remove('rotate-image-back');
      menuButton.classList.add('rotate-image');
    } else {
      menuButton.classList.remove('rotate-image');
      menuButton.classList.add('rotate-image-back');
    }
  }
  // toggle() {
  //   this.open = !this.open;
  // }

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
