import { MovieDb, Peliculas } from './../interfaces/iterfaces';
import { MoviesService } from './../services/movies.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  // aqui creamos un array de peliculas par traabjar con el 
peliculasRecientes: Peliculas[]=[];


  constructor( private moviesService:MoviesService) {}
ngOnInit(){
  //la siguente linea pierde la asignaccion de movieDb en el caso que el movies.services
  //este enviando MovieDb 
  //this.moviesService.getFeature().subscribe((resp: MovieDb) =>{
    //aqui vemos como reconoce el array que recibe automaticamente sintener que declararlo ni 
    //importarlo
    this.moviesService.getFeature().subscribe(resp =>{
    console.log('Resp', resp );
    //aqui le pasamos solo la los retultados del json de la interace que estamos recuperando
    this.peliculasRecientes=resp.results;
  }
    
    )
}
}
