import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  session: boolean;
  constructor() {
    this.session = false;
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });
  }
  onSubmit() {
    console.log(this.loginForm);
    this.session = true;
    this.loginForm.reset();
  }
  accAct() {
    return Boolean(sessionStorage.getItem('accessibility'));
  }
}
