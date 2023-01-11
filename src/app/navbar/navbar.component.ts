import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';

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
  @HostListener('document:click', ['$event'])
  documentClick(event: Event): void {
    this.closeMenuButton(event);
  }

  @ViewChild('menuButton', { static: false })
  menuButton: ElementRef;
  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;

  public screenWidth: any;
  public screenHeight: any;
  mobile: boolean = false;
  menuOpen: boolean = false;

  constructor(
    private viewportScroller: ViewportScroller,
    public router: Router
  ) {}

  ngOnInit() {
    this.getWindowSize();
  }

  getWindowSize() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    if (window.innerWidth < 720) this.mobile = true;
    else this.mobile = false;
  }

  onClickScroll(elementId: string): void {
    this.router.navigate(['/']);
    console.log(this.menuOpen);
    setTimeout(() => {
      this.viewportScroller.scrollToAnchor(elementId);
    }, 100);
  }

  closeMenuButton(event) {
    if (!this.buttonClicked(event) && this.menuOpen) {
      this.menuButton.nativeElement.classList.toggle('active');
      this.menuOpen = false;
    }
    if (this.buttonClicked(event)) {
      this.menuOpen ? (this.menuOpen = false) : (this.menuOpen = true);
    }
  }

  buttonClicked(event) {
    return (
      event.target.closest('.svg-conatainer') == this.menuButton?.nativeElement
    );
  }
}
