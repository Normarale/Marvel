import { MarvelService } from './../../Services/marvel.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  title='Characteres';


  constructor(private servimarvel:MarvelService, private router:Router) { }

  characters?:Observable<any>;

  ngOnInit(){
    this.getAllCharacters();
  }



  getAllCharacters(){

    this.characters= this.servimarvel.getCharacters();

  }


  getCharacter(id:string){

    this.router.navigate(['/character/',id]);

  }


}
