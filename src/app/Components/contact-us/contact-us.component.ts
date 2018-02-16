import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  contactForm: FormGroup;
  contacted: boolean;
  constructor() {
    this.contacted = false;
  }
  ngOnInit() {
    this.contactForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, [Validators.required])
    });
  }
  onSubmit() {
    console.log(this.contactForm);
    this.contacted = true;
    this.contactForm.reset();
  }
  accAct() {
    return Boolean(sessionStorage.getItem('accessibility'));
  }
}
