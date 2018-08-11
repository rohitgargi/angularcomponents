import { Component, Input, Output, EventEmitter } from '@angular/core';
export interface  FavouriteChangeEventArgs{
  newValue: boolean;
}

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {
  @Input('is-favorite') isFavorite : boolean;
  @Output() change = new EventEmitter();

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({
      "newValue": this.isFavorite
    });
  }

}
