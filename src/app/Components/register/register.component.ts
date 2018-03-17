import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registered: boolean;
  registerForm: FormGroup;
  registerError: boolean;
  registerErrorMessage: string;
  constructor(private userService: UserService) {
    this.registered = false;
    this.registerError = false;
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
      }, this.matchPassword)
    });
  }
  onSubmit() {
    console.log(this.registerForm);
    const user = {
      'fullName':  [this.registerForm.value.fullname.firstname, this.registerForm.value.fullname.lastname].join(' '),
      'email': this.registerForm.value.email,
      'username': this.registerForm.value.username,
      'password': this.registerForm.value.password.newPassword
    };
    this.userService.addUser(user).subscribe(value => {
        this.registered = true;
        this.registerError = false;
        this.registerForm.reset();
      },
      err => {
        this.registerError = true;
        this.registerErrorMessage = err.error.payload.message;
      });
  }
  accAct() {
    return Boolean(sessionStorage.getItem('accessibility'));
  }
  matchPassword(formGroup: AbstractControl) {
    if (formGroup.value.newPassword === formGroup.value.confirmPassword) {
      return null;
    } else {
      return {valid: false};
    }
  }
}
