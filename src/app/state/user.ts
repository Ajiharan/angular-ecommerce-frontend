export interface IUser {
  id?: string;
  emailAddress?: string;
  password?: string;
}

export class UserDetail {
  userData: IUser = {};
}
