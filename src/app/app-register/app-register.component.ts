import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { addUserRequest } from '../state/action';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MatLoadingComponent } from '../mat-loading/mat-loading.component';
import Swal from 'sweetalert2';
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
  constructor(
    private store: Store<any>,
    private dialogRef: MatDialog,
    private router: Router
  ) {}

  checkPasswordMatch(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    // console.log(
    //   'this.registerForm?.controls.password.value',
    //   this.registerForm?.controls.password.value
    // );
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
  submitForm() {
    this.store.dispatch(addUserRequest({ payload: this.registerForm.value }));
    this.registerForm.reset();
    const dialogRef = this.dialogRef.open(MatLoadingComponent, {
      data: { status: 'Loading', loading: 'false' },
      panelClass: 'mat-loading-container',
      height: '40vh',
      width: '40vw',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((res) => {
      console.log(res);
      if (res.isError) {
        Swal.fire({
          title: 'Failure!',
          text: res.message,
          timer: 2000,
          showConfirmButton: false,
          showCloseButton: false,
          icon: 'warning',
        });
      } else {
        Swal.fire({
          title: 'Success!',
          text: res.message,
          timer: 2000,
          showConfirmButton: false,
          showCloseButton: false,
          icon: 'success',
        });
        this.router.navigate(['']);
      }
    });
  }
}
