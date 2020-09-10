import { Component, OnInit } from '@angular/core';
import { Friend } from './friend';
import { AddFriendService } from './add-friend.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit{
  title = 'friend-list';
  languages = ['HTML', 'CSS', 'JS', 'PHP', 'Symfony', 'Java', 'Python', 'C++', 'C', 'C#', 'Swift'];
  friendModel = new Friend(null, null, null, null, null);
  allFriends: any = [];
  constructor(private addFriendService: AddFriendService, private http: HttpClient ){
  }
  ngOnInit(): void{
    this.getFriends('http://localhost:9004/allFriends');
  }
  submitForm = (): void => {
    this.addFriendService.addFriend(this.friendModel).subscribe((data: Friend) => {
      this.getFriends('http://localhost:9004/allFriends');
    });
  }
  async getFriends(url: string): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return await this.http.get(url, httpOptions).toPromise()
      .then(data => {
        this.allFriends = data;
      });
  }
}


