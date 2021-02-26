import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { distinctUntilChanged } from 'rxjs/operators';
import { loginUserRequest } from '../state/action';
import { IUserState } from '../state/userReducer';
import { loginUserSelector, registerUserSelector } from '../state/userSelector';
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
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.store
      .select(loginUserSelector)
      .pipe(distinctUntilChanged())
      .subscribe((res: IUserState) => {
        console.log('token res', res);
        if (!!res!.token) {
          window.localStorage.setItem('userToken', res!.token);
        }
      });
  }

  submitForm() {
    console.log(this.loginForm.value);

    this.store.dispatch(loginUserRequest({ payload: this.loginForm.value }));
    this.loginForm.reset();
  }
}
