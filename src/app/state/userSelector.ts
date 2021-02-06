import { createSelector, createFeatureSelector } from '@ngrx/store';
import { IUser } from './user';

export interface AppState {
  userDetails: IUser;
}

export const registerUser = (state: AppState) => state.userDetails;

export const registerUserSelector = createSelector(
  registerUser,
  (state: IUser) => state
);
