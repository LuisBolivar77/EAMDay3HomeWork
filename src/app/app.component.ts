import { Component } from '@angular/core';
import { UserService } from './user.service';
import { post } from 'selenium-webdriver/http';
import { posts } from './posts.mock';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  answer;
  constructor (private userService: UserService) {
    this.answer = this.userService.getPosts();

  }

}
