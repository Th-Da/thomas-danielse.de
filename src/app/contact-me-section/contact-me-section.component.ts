import { HttpClient } from '@angular/common/http';
import { NONE_TYPE } from '@angular/compiler';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatFormFieldAppearance } from '@angular/material/form-field';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm;
  }

  focusTargetClick() {
    this.focusTarget.nativeElement.focus();
  }

  async sendMail() {
    let name = this.name.nativeElement;
    let email = this.email.nativeElement;
    let message = this.message.nativeElement;
    name.disabled = true;
    email.disabled = true;
    message.disabled = true;
    this.isDisabled = true;

    let fd = new FormData();
    fd.append('name', name.value);
    fd.append('email', email.value);
    fd.append('message', message.value);

    console.log(fd);

    await fetch(
      'send_mail.php',

      {
        method: 'POST',
        body: JSON.stringify(fd),
      }
    );

    console.log(fd);

    /*   name.disabled = false;
  email.disabled = false;
  message.disabled = false; */
  }

  disableButton() {
    this.isDisabled = true;
  }
}
