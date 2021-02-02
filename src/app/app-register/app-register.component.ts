import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
@Component({
  selector: 'app-app-register',
  templateUrl: './app-register.component.html',
  styleUrls: ['./app-register.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppRegisterComponent implements OnInit {
  registerForm: FormGroup = new FormGroup({
    emailId: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(6)]),
    conformPassword: new FormControl('', [
      Validators.required,
      this.checkPasswordMatch.bind(this),
    ]),
  });
  constructor() {}

  checkPasswordMatch(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    console.log(
      'this.registerForm?.controls.password.value',
      this.registerForm?.controls.password.value
    );
    if (this.registerForm?.controls.password.value !== control.value) {
      return { invalidPassword: true };
    }
    return null;
  }

  ngOnInit(): void {
    this.registerForm.controls.password.valueChanges.subscribe(() => {
      this.registerForm.controls.conformPassword.updateValueAndValidity();
    });
  }
  submitForm() {}
}
