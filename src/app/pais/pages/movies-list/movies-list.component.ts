import { Component, OnInit } from '@angular/core';
import { MoviesREST } from '../../interfaces/movies.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies: string[] = ['_MoviesL_2022', '_MoviesL_2023'];
  movieListActiva: string = '';
  moviesList: MoviesREST[] = [];

  constructor( private paisService: PaisService ) { }

  getClaseCSS( sheet: string ): string {
    return (sheet === this.movieListActiva) 
              ? 'btn btn-primary me-3 mb-3'
              : 'btn btn-outline-primary me-3 mb-3';
  }

  activarMoviesList( sheet: string ) {

    if ( sheet === this.movieListActiva ) { return; }

    this.movieListActiva = sheet;
    this.moviesList = [];

    this.paisService.getMoviesList( sheet )
      .subscribe( moviesList => this.moviesList = moviesList );
  }

  ngOnInit(): void {
  }

}
