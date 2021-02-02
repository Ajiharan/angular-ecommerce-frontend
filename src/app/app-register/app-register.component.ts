import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
    conformPassword: new FormControl('', [Validators.required]),
  });
  constructor() {}

  ngOnInit(): void {}
  submitForm() {}
}
