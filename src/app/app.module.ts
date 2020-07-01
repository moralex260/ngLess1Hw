import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/appComponents/app.component';
import {HttpClientModule} from '@angular/common/http';


import { UsersComponent } from './components/users/users.component';
import { PostsComponent } from './components/posts/posts.component';
import {CommentsComponent} from './components/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    UsersComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
