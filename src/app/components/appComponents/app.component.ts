import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-root',
  template: `<app-comments *ngFor= "let c of comments" [comment] = "c" ></app-comments>
  <app-users *ngFor="let u of users" [user]= "u" ></app-users>
  <app-posts *ngFor="let p of posts" [post]= "p" ></app-posts>`
  ,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: any[];
  posts: any[];
  comments: any[];
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe(responce => this.users = responce);
    this.httpClient
  .get<any[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
  .subscribe(responce => this.posts = responce);
    this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/comments?_limit=10')
      .subscribe(responce => this.comments = responce)
;

  }
}
