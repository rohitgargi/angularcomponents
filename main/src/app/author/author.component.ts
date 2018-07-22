import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from './auth-service.service';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {
  authors;
  constructor(service : AuthServiceService) {
    this.authors = service.getAuthorsList();
   }

  ngOnInit() {
  }

}
