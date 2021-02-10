import { Action, createReducer, on } from '@ngrx/store';
import {
  addUserFailure,
  addUserRequest,
  addUserSuccess,
  loginUserFailure,
  loginUserRequest,
  loginUserSuccess,
} from './action';
import { ILoginDetail } from './login';
import { IUser, UserDetail } from './user';

export interface IUserState {
  user: IUser | string;
  error: any;
  loading: boolean;
  token?: ILoginDetail | null;
}

export const initialState: IUserState = {
  user: {},
  error: '',
  loading: false,
  token: null,
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

const userLoginReducer = createReducer(
  initialState,
  on(loginUserRequest, (state: IUserState, action) => {
    return { ...state, loading: true };
  }),
  on(loginUserSuccess, (state: IUserState, action) => {
    return { ...state, loading: false, error: '', token: action.payload };
  }),
  on(loginUserFailure, (state: IUserState, action) => {
    return { ...state, loading: false, error: action.error };
  })
);

export function loginReduer(state: IUserState | any, action: Action | any) {
  return userLoginReducer(state, action);
}

export function reducer(state: IUserState | any, action: Action | any) {
  return userReducer(state, action);
}
