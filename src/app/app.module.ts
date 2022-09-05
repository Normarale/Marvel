import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './Components/characters/characters.component';
import { CharacterComponent } from './Components/character/character.component';
import { ComicsComponent } from './Components/comics/comics.component';
import { ComicComponent } from './Components/comic/comic.component';
import { NavBarComponent } from './Shared/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterComponent,
    ComicsComponent,
    ComicComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
