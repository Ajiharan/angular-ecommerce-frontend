import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IUser } from './user';

export interface AppState {
  registerUserDetails: IUser | any;
}

export const registerUser = (state: AppState) => state.registerUserDetails;

export const registerUserSelector = createSelector(
  registerUser,
  (state: any) => state
);
