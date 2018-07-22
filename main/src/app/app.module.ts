import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthServiceService } from './author/auth-service.service';


import { AppComponent } from './app.component';
import { AuthorComponent } from './author/author.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
