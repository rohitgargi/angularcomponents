import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AuthServiceService } from './author/auth-service.service';
import { PostService } from './services/post.service';


import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { InputControlProcessDirective } from './input-control-process.directive';
import { PostComponent } from './post/post.component';
import { AppErrorHandler } from './common/app-error-handler';


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    FavouriteComponent,
    InputControlProcessDirective,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    AuthServiceService,
    PostService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
