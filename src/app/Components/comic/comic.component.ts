import { Router, ActivatedRoute } from '@angular/router';
import { MarvelService } from './../../Services/marvel.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  title='Comic';
  idComic='';
  comic:any={};
  comicDesc='';


  constructor(private serviMarvel:MarvelService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {

      this.idComic = params['id'];
    })
   }



  ngOnInit(): void {
    this.getIdComic();
  }

  getIdComic(){

    this.serviMarvel.getComic(this.idComic).subscribe({

      next:(res)=>{

        let dataComic={
          title:res[0].title,
          description:res[0].description,
          thumbnailPath:res[0].thumbnail.path,
          thumbnailExtension:res[0].thumbnail.extension,
          format:res[0].format,
          urls:res[0].urls[0].url,

        };
        this.comic = dataComic;

        if (this.comic.description === '') {

          this.comicDesc = 'No description'

        }else{
          this.comicDesc = this.comic.description
        }

        },
      error:(err)=>{
        console.log(err);
      }



    })

  }

}
