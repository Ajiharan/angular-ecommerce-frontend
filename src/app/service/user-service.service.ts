import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../state/user';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  postData(data: IUser) {
    return this.http.post('localhost:3000/user/register', data);
  }
}
