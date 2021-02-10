import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../state/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  postData(data: IUser): Observable<any> {
    return this.http.post('http://localhost:5000/user/register', data);
  }

  loginUser(data: IUser): Observable<any> {
    return this.http.post('http://localhost:5000/user/login', data);
  }
}
