
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const api_Marvel = environment.apiMarvel
const Key_public = environment.public_Key
const hash = environment.hash



@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http:HttpClient) { }

getCharacters():Observable<any>{
return this.http.get<any>(`${api_Marvel}/characters?ts=1&apikey=${Key_public}&hash=${hash}`).pipe(map((data:any)=>data.data.results));

}

getCharacter(id:string):Observable<any>{

  return this.http.get(`${api_Marvel}/characters/${id}?ts=1&apikey=${Key_public}&hash=${hash}`).pipe(map((data:any)=>data.data.results));

}
getComics():Observable<any>{

  return this.http.get<any>(`${api_Marvel}/comics?ts=1&apikey=${Key_public}&hash=${hash}`).pipe(map((data:any)=>data.data.results));

}


getComic(id: string):Observable<any>{

  return this.http.get(`${api_Marvel}/comics/${id}?ts=1&apikey=${Key_public}&hash=${hash}`).pipe(map((data:any)=>data.data.results));

}


/*
create(data:any): Observable<any> {
  return this.http.post(`${api_Marvel}/comics/${data}?ts=1&apikey=${Key_public}&hash=${hash}`).pipe(map((data:any)=>data.data.results));
}


update(id:String, data:any) {
  return this.http.put(`${api_Marvel}/comics/${id = id , data = data}?ts=1&apikey=${Key_public}&hash=${hash}`).pipe(map((data:any)=>data.data.results));
};*/

delete(id: String): Observable<any> {
  return this.http.delete(`${api_Marvel}/comics/${id}?ts=1&apikey=${Key_public}&hash=${hash}`).pipe(map((data:any)=>data.data.results));
}



}
