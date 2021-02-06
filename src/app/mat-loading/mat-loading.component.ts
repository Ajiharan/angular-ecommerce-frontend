import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { select, Store } from '@ngrx/store';
import { IUserState } from '../state/userReducer';
import { registerUserSelector } from '../state/userSelector';
@Component({
  selector: 'app-mat-loading',
  templateUrl: './mat-loading.component.html',
  styleUrls: ['./mat-loading.component.scss'],
})
export class MatLoadingComponent implements OnInit {
  status: string = '';
  loading: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { status?: any; loading?: any },
    public dialogRef: MatDialogRef<MatLoadingComponent>,
    private store: Store<any>
  ) {
    this.status = data.status;
    this.loading = data.loading;
  }

  ngOnInit(): void {
    this.store.select(registerUserSelector).subscribe((res: IUserState) => {
      // console.log('res', res, this.loading);
      if (!res.loading) {
        setTimeout(() => {
          this.dialogRef.close();
        }, 2000);
      }
    });
    this.dialogRef.updatePosition({
      top: '5rem',
      bottom: '5rem',
    });
  }
}
