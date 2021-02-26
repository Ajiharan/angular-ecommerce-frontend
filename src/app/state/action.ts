import { createAction, props } from '@ngrx/store';
import { IUser, UserDetail } from './user';
import { ILoginDetail } from './login';
export const addUserRequest = createAction(
  'ADD_USER_REQUEST',
  props<{ payload: IUser }>()
);

export const addUserSuccess = createAction(
  'ADD_USER_SUCCESS',
  props<{ payload: IUser }>()
);

export const addUserFailure = createAction(
  'ADD_USER_FAILURE',
  props<{ error: any }>()
);

export const loginUserRequest = createAction(
  'ADD_LOGIN_REQUEST',
  props<{ payload: IUser }>()
);
export const loginUserSuccess = createAction(
  'ADD_LOGIN_SUCCESS',
  props<{ payload: string }>()
);
export const loginUserFailure = createAction(
  'ADD_LOGIN_FAILURE',
  props<{ error: any }>()
);
