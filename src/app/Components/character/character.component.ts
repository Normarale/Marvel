import { MarvelService } from './../../Services/marvel.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  @Input()characteranidado:any;
  title='Character';
  idCharacter='';
  character:any={};
  characterDesc?='';

  private editar:boolean=false


  constructor( private serviMarvel:MarvelService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {

      this.idCharacter = params['id'];
    })
   }

   ngOnInit(){

    this.getIdCharacter();
    }

    getIdCharacter(){

      console.log(this.idCharacter);
      this.serviMarvel.getCharacter(this.idCharacter).subscribe({

        next:(res)=>{

          let dataCharacter={
            name:res[0].name,
            description:res[0].description,
            thumbnailPath:res[0].thumbnail.path,
            thumbnailExtension:res[0].thumbnail.extension,
            modified:res[0].modified,
            urls:res[0].urls[0].url,

          };
          this.character = dataCharacter;


          if (this.character.description === '') {

            this.characterDesc = 'No description'

          }else{
            this.characterDesc = this.character.description
          }
        },
        error:(err)=>{
          console.log(err);
        }



      })

    }

    public setEditar(): void
    {this.editar==false?this.editar=true:this.editar=false;}

    public getEditar():boolean{return this.editar;}


public SetEditaCharacter(){
  console.log(this.idCharacter);
      this.serviMarvel.getCharacter(this.idCharacter).subscribe({

        next:(res)=>{

          let dataCharacter={
            name:this.character.name,
            description:this.character.description,
            thumbnailPath:this.character.thumbnail.path,
            thumbnailExtension:this.character.thumbnail.extension,
            modified:this.character.modified,
            urls:this.character.url,

          };
          dataCharacter = this.character;
        }


      })

}

public setEliminar(id:string){
  this.serviMarvel.delete(this.idCharacter).subscribe(data=>{
    console.log("Datos borrados" + JSON.stringify(data) )
  })
}


}
