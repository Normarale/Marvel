import { Router } from '@angular/router';
import { MarvelService } from './../../Services/marvel.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  title='Comics';

  constructor(private serviMarvel: MarvelService, private router:Router) { }

  comics?:Observable<any>;

  ngOnInit(): void {
    this.getAllComics();
  }

  getAllComics(){

    this.comics= this.serviMarvel.getComics();

  }

  getComics(id:string){

    this.router.navigate(['/comic/',id]);

  }
}
