import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts : any[];
  private url ='https://jsonplaceholder.typicode.com/posts';
  constructor(private service:PostService) {
   }

  
  //READ
  ngOnInit(){
    this.service.getAll()
      .subscribe(
        posts =>this.posts = posts
      );
  }
  
  //Create  

  onCreatePost(input: HTMLInputElement) {
    console.log(input)
    let post ={
      "title": input.value
    };

    this.posts.splice(0,0,post);

    input.value = '';
    this.service.create(JSON.stringify(post))
    .subscribe(
      postObj=>{
      post['id'] =postObj.id;
    },
      (error: AppError)=>{
      
        this.posts.splice(0,1);

        if(error instanceof BadInputError){
          // Bad request error comes
        }else throw error;
        
      });
  }
  

  //UPDATE
  postUpdate(post){
    this.service.update(post)
    .subscribe(
      posts => console.log(posts)
    );
  }

  //DELETE
  postDelete(post){
    let index = this.posts.indexOf(post);
    this.posts.splice(index,1);
    this.service.delete(post.id)
    .subscribe(
     null,
      (error:AppError)=>{
        this.posts.splice(index,0,post);
        if(error instanceof NotFoundError){
          alert('This post has already been deleted');
        }
        else throw error;
      });
  }

}
