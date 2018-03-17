import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  session: boolean;
  loginError: boolean;
  loginErrorMessage: string;

  constructor(private userService: UserService) {
    this.session = false;
    this.loginError = false;
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });
  }
  onSubmit() {
    const user = {
      'username': this.loginForm.value.username,
      'password': this.loginForm.value.password
    };
    this.userService.login(user).subscribe(data => {
      localStorage.setItem('user', JSON.stringify(data.user));
      localStorage.setItem('token', data.token);
      this.session = true;
      this.loginError = false;
      this.userService.session.next(true);
    },
      err => {
        this.loginError = true;
        this.loginErrorMessage = err.error.payload.message;
      });
    this.loginForm.reset();
  }
  accAct() {
    return Boolean(sessionStorage.getItem('accessibility'));
  }
}
