import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { dataService } from '../common/data.service';

@Injectable()
export class PostService extends dataService{
  constructor(http: Http) { 
    super('https://jsonplaceholder.typicode.com/posts',http);
  }
}
