import { createAction, props } from '@ngrx/store';
import { IUser, UserDetail } from './user';

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
