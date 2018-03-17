import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UserService {
  url: string;
  session = new Subject<boolean>();
  constructor(private httpClient: HttpClient) {
    this.url = 'http://localhost:3000/api/users';
  }
  addUser(user) {
    return this.httpClient.post(this.url, user);
  }
  login(user): Observable<any> {
    return this.httpClient.post('http://localhost:3000/api/auth', user);
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.session.next(true);
  }

}
