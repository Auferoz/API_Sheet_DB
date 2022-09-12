import { Component } from '@angular/core';

import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ ``
  ]
})
export class PorRegionComponent {

  regiones: string[] = ['_GamesP_2022', '_GamesP_2023', '_Calendar'];
  regionActiva: string = '';
  paises: Country[] = [];

  
  constructor( private paisService: PaisService ) { }

  getClaseCSS( region: string ): string {
    return (region === this.regionActiva) 
              ? 'btn btn-primary me-3 mb-3'
              : 'btn btn-outline-primary me-3 mb-3';
  }

  activarRegion( region: string ) {

    if ( region === this.regionActiva ) { return; }

    this.regionActiva = region;
    this.paises = [];

    this.paisService.getGameList( region )
      .subscribe( paises => this.paises = paises );
  }

}
