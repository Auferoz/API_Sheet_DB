import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://sheetdb.io/api/v1/uj1vwr8ger7n8';

  // https://sheetdb.io/api/v1/uj1vwr8ger7n8/search?title=*final*&sheet=_GamesP_2022

  // get httpParams () {
  //   return new HttpParams().set( 'fields', 'name,capital,alpha2Code,flag,population' );
  // }

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/search?title=*${ termino }*&sheet=_GamesP_2022`;
    
    return this.http.get<Country[]>( url );
  }

  buscarCapital( termino: string ):Observable<Country[]>{
    const url = `${ this.apiUrl }/search?title=*${ termino }*&sheet=_GamesP_2023`;
    return this.http.get<Country[]>( url );
  }

  getPaisPorAlpha( id: string ):Observable<Country>{
    const url = `${ this.apiUrl }/search?id=${ id }&sheet=_GamesP_2022`;
    return this.http.get<Country>( url );
  }

  buscarRegion( region: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }?sheet=${ region }`;

    return this.http.get<Country[]>( url, )
            .pipe(
              tap( console.log )
            )
  }

}
