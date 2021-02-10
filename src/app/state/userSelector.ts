import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IUser } from './user';
import { IUserState } from './userReducer';

export interface AppState {
  registerUserDetails: IUserState | any;
  loginUserDatas: any;
}

export const registerUser = (state: AppState) => state.registerUserDetails;
export const loginUser = (state: AppState) => state.loginUserDatas;

export const registerUserSelector = createSelector(
  registerUser,
  (state: any) => state
);

export const loginUserSelector = createSelector(
  loginUser,
  (state: any) => state
);
