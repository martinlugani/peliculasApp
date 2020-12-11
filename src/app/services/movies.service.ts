import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieDb } from '../interfaces/iterfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }


  getFeature(){
    // al poner el movie Db aqui ahorramos codigo en tab1.page.ts
    return this.http.get<MovieDb>(`https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2020-01-15&primary_release_date.lte=2020-06-22&api_key=d8fed0cbf217f212afa0e22492eed765&language=es&include_image_language=es`)
  }

}
