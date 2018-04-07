import { getTestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { posts } from './posts.mock';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  answer;
  url = 'https://yesno.wtf/api';

  constructor(private http: HttpClient) {
  }

  getPosts () {
    return this.http.get(this.url);
  }


}
