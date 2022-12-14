import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import * as AOS from 'aos';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact-me-section',
  templateUrl: './contact-me-section.component.html',
  styleUrls: ['./contact-me-section.component.scss'],
})
export class ContactMeSectionComponent implements OnInit {
  @ViewChild('focusTarget') focusTarget: any;
  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('message') message!: ElementRef;

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    message: new FormControl('', Validators.required),
  });

  isDisabled = false;

  constructor(private fb: FormBuilder, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.contactForm;

    AOS.init();
  }

  focusTargetClick() {
    this.focusTarget.nativeElement.focus();
  }

  async sendMail() {
    this.spin();
    this.isDisabled = true;
    this.contactForm.disable();
    let fd = new FormData();
    fd.append('name', this.contactForm.value.name as string);
    fd.append('email', this.contactForm.value.email as string);
    fd.append('message', this.contactForm.value.message as string);
    const response = await fetch(
      'https://thomas-danielse.de/assets/send_mail.php',
      {
        method: 'POST',
        body: fd,
      }
    );
    if (!response.ok) throw new Error('Response not ok');
    else {
      setTimeout(() => {
        this.isDisabled = false;
        this.contactForm.enable();
        this.spinner.hide();
      }, 3000);
    }
  }

  spin() {
    this.spinner.show();
  }
}
