import { Component } from '@angular/core';
import { FavouriteChangeEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  post={
    "isFavorite": false
  }
  onFavoriteChange(favoriteObj:FavouriteChangeEventArgs){
    console.log(favoriteObj)
   this.post.isFavorite = favoriteObj.newValue;
  }
}
