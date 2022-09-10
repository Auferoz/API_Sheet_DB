import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { switchMap, tap } from 'rxjs/operators';

import { MoviesREST } from '../../../interfaces/movies.interface';
import { PaisService } from '../../../services/pais.service';

@Component({
  selector: 'app-ver-movie',
  templateUrl: './ver-movie.component.html',
  styleUrls: ['./ver-movie.component.scss']
})
export class VerMovieComponent implements OnInit {

  moviesList!: MoviesREST[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.paisService.getMovieById( id )  ),
        tap( console.log )
      )
      .subscribe( moviesList => this.moviesList = moviesList );

  }

}
