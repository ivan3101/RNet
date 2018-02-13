import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registered: boolean;
  registerForm: FormGroup;
  constructor() {
    this.registered = false;
  }
  ngOnInit() {
    this.registerForm = new FormGroup({
      'fullname': new FormGroup({
        'firstname': new FormControl(null, [Validators.required]),
        'lastname': new FormControl(null, [Validators.required])
      }),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'username': new FormControl(null, [Validators.required]),
      'password': new FormGroup({
        'newPassword': new FormControl(null, [Validators.required]),
        'confirmPassword': new FormControl(null, [Validators.required])
      })
    });
  }
  onSubmit() {
    console.log(this.registerForm);
    this.registered = true;
    this.registerForm.reset();
  }

}
