import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  private readonly cooldownMs = 10_000;

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
    website: new FormControl(''), // honeypot
  });

  isDisabled = false;
  statusMessage = '';
  statusType: 'idle' | 'success' | 'error' = 'idle';

  constructor(private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    AOS.init();
  }

  focusTargetClick() {
    this.focusTarget.nativeElement.focus();
  }

  async sendMail(event: Event) {
    event.preventDefault();

    if (this.isDisabled) {
      return;
    }

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    // Honeypot filled → pretend success, do not call the endpoint.
    if (this.contactForm.value.website) {
      this.onSuccess();
      return;
    }

    this.clearStatus();
    this.isDisabled = true;
    this.contactForm.disable();
    this.spinner.show();

    const values = this.contactForm.getRawValue();
    const fd = new FormData();
    fd.append('name', values.name as string);
    fd.append('email', values.email as string);
    fd.append('message', values.message as string);
    fd.append('website', values.website as string);

    try {
      const response = await fetch(
        'https://thomas-danielse.de/assets/send_mail.php',
        {
          method: 'POST',
          body: fd,
        }
      );

      let body: { ok?: boolean } | null = null;
      try {
        body = await response.json();
      } catch {
        body = null;
      }

      if (!response.ok || !body?.ok) {
        throw new Error('Response not ok');
      }

      this.onSuccess();
    } catch {
      this.onError();
    }
  }

  private onSuccess() {
    this.spinner.hide();
    this.isDisabled = true;
    this.contactForm.reset({
      name: '',
      email: '',
      message: '',
      website: '',
    });
    this.contactForm.enable();
    this.statusType = 'success';
    this.statusMessage = 'Message sent. Thanks — I will get back to you.';
    this.scheduleCooldownEnd();
  }

  private onError() {
    this.spinner.hide();
    this.contactForm.enable();
    this.isDisabled = false;
    this.statusType = 'error';
    this.statusMessage = 'Sending failed. Please try again or use email.';
  }

  private scheduleCooldownEnd() {
    setTimeout(() => {
      this.isDisabled = false;
    }, this.cooldownMs);
  }

  private clearStatus() {
    this.statusType = 'idle';
    this.statusMessage = '';
  }
}
