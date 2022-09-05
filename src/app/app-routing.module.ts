import { ComicsComponent } from './Components/comics/comics.component';
import { CharacterComponent } from './Components/character/character.component';
import { CharactersComponent } from './Components/characters/characters.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicComponent } from './Components/comic/comic.component';

const routes: Routes = [
  { path:'characters', component:CharactersComponent},
  { path:'character/:id', component:CharacterComponent},
  { path:'comics', component:ComicsComponent},
  { path:'comic/:id', component:ComicComponent},

  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: '**', redirectTo: '/characters', pathMatch: 'full' },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
