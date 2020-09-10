import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Friend} from './friend';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {
  PORT = 9004;
  url = 'http://localhost:' + this.PORT + '/addFriend';
  constructor(private http: HttpClient) {
  }
  addFriend = (friend: Friend): Observable<any> => {
    return this.http.post(this.url, friend);
  }
}
