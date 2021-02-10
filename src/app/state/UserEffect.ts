import { UserServiceService } from '../service/user-service.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, Observable, of } from 'rxjs';
import { map, mergeMap, exhaustMap, catchError } from 'rxjs/operators';
import { IUser, UserDetail } from './user';
import {
  addUserFailure,
  addUserRequest,
  addUserSuccess,
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,
} from './action';
@Injectable()
export class UserEffects {
  constructor(
    private action$: Actions,
    private userService: UserServiceService
  ) {}
  postUserData$ = createEffect(() =>
    this.action$.pipe(
      ofType(addUserRequest),
      exhaustMap((action) => {
        return this.userService.postData(action.payload).pipe(
          map((response) => {
            return addUserSuccess({
              payload: response,
            });
          }),
          catchError((err) => of(addUserFailure({ error: err })))
        );
      })
    )
  );

  getUserToken$ = createEffect(() =>
    this.action$.pipe(
      ofType(loginUserRequest),
      exhaustMap((action) => {
        return this.userService.loginUser(action.payload).pipe(
          map((response) => {
            return loginUserSuccess({
              payload: response,
            });
          }),
          catchError((err) => of(loginUserFailure({ error: err })))
        );
      })
    )
  );
}
