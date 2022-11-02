import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({ transform: 'rotate(90deg)' })),
      state('closed', style({ transform: 'rotate(-90deg)' })),
      transition('open <=> closed', [animate('100ms')]),
    ]),
  ],
})
export class OpenCloseComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
