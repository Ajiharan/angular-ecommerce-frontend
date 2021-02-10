import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loginUserRequest } from '../state/action';
@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppLoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    emailId: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.loginForm =
  }

  submitForm() {
    console.log(this.loginForm.value);

    this.store.dispatch(loginUserRequest({ payload: this.loginForm.value }));
    this.loginForm.reset();
  }
}
