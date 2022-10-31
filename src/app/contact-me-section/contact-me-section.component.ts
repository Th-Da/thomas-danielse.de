import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatFormFieldAppearance } from '@angular/material/form-field';


@Component({
  selector: 'app-contact-me-section',
  templateUrl: './contact-me-section.component.html',
  styleUrls: ['./contact-me-section.component.scss']
})


export class ContactMeSectionComponent implements OnInit {
  @ViewChild("focusTarget") focusTarget: any;

  @ViewChild('myForm') myForm!: ElementRef;
  @ViewChild('name') name!: ElementRef;
  @ViewChild('email') email!: ElementRef;
  @ViewChild('message') message!: ElementRef;
  
  isDisabled = false;

  constructor() { 

  }

  ngOnInit(): void {
  }

focusTargetClick() {
  this.focusTarget.nativeElement.focus();
}

async sendMail() {
let name = this.name.nativeElement
let email =  this.email.nativeElement
let message = this.message.nativeElement
name.disabled = true;
email.disabled = true;
message.disabled = true;
this.isDisabled = true;

let fd = new FormData
fd.append('name', name.value);
fd.append('email', email.value);
fd.append('message', message.value);

  await fetch('https://w01d5c04.kasserver.com/send_mail.php', 
    {
      method: 'POST', 
    body: fd
    }
  );

  name.disabled = false;
  email.disabled = false;
  message.disabled = false;
  this.isDisabled = false;
}

}
