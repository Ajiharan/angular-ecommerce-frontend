import { Action, createReducer, on } from '@ngrx/store';
import { addUserFailure, addUserRequest, addUserSuccess } from './action';
import { IUser, UserDetail } from './user';

export interface IUserState {
  user: IUser | string;
  error: any;
  loading: boolean;
}

export const initialState: IUserState = {
  user: {},
  error: '',
  loading: false,
};

const userReducer = createReducer(
  initialState,
  on(addUserRequest, (state: IUserState, action) => {
    return { ...state, loading: true };
  }),
  on(addUserSuccess, (state: IUserState, action) => {
    return { ...state, loading: false, error: '', user: action.payload };
  }),
  on(addUserFailure, (state: IUserState, action) => {
    return { ...state, loading: false, error: action.error, user: {} };
  })
);

export function reducer(state: IUserState | any, action: Action | any) {
  return userReducer(state, action);
}
