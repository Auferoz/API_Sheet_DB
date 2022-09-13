import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';
import { User } from '../interfaces/user.interface';
import { tap } from 'rxjs/operators';
import { MoviesREST } from '../interfaces/movies.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8';
  

  // https://sheetdb.io/
  // private apiUrl: string = 'https://sheetdb.io/api/v1/uj1vwr8ger7n8';
  // BUSQUEDA DE SHEET: https://sheetdb.io/api/v1/uj1vwr8ger7n8?sheet=_GamesP_2022
  // BUSQUEDA DE REGISTRO: https://sheetdb.io/api/v1/uj1vwr8ger7n8/search?id=1&sheet=_Usuarios


  // https://sheet.best/admin
  // https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8
  // BUSQUEDA DE SHEET: https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8/tabs/_GamesP_2022/
  // BUSQUEDA DE REGISTRO: https://sheet.best/api/sheets/2ac89502-af3e-4874-9292-eaf4a1d9c6b8/tabs/_GamesP_2022/title/*Final*


  // get httpParams () {
  //   return new HttpParams().set( 'fields', 'name,capital,alpha2Code,flag,population' );
  // }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/tabs/_GamesP_2022/title/*${ termino }*`;
    
    return this.http.get<Country[]>( url );
  }

  buscarCapital( termino: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/tabs/_GamesP_2022/title/*${ termino }*`;
    return this.http.get<Country[]>( url );
  }

  getUser():Observable<User>{
    const url = `${ this.apiUrl }/tabs/_Usuarios/id/1`;
    return this.http.get<User>( url );
  }

  getGameList( region: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/tabs/${ region }`;
    return this.http.get<Country[]>( url, )
            .pipe(tap( console.log ))
  }

  getGameById( id: string ):Observable<Country>{
    const url = `${ this.apiUrl }/tabs/_GamesP_2022/id/${ id }`;
    return this.http.get<Country>( url );
  }

  getGameByIdRegion( region:string, id: string ):Observable<Country>{
    const url = `${ this.apiUrl }/tabs/${ region }/id/${ id }`;
    return this.http.get<Country>( url );
  }

  getMoviesList( sheet: string ): Observable<MoviesREST[]> {
    const url = `${ this.apiUrl }/tabs/${ sheet }`;
    return this.http.get<MoviesREST[]>( url, )
            .pipe(tap( console.log ))
  }

  getMovieById( id: string ):Observable<MoviesREST>{
    const url = `${ this.apiUrl }/tabs/_MoviesL_2022/id/${ id }`;
    return this.http.get<MoviesREST>( url );
  }

}
