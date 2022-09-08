import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from 'src/app/pais/services/pais.service';
import { Country } from 'src/app/pais/interfaces/pais.interface';
import { User } from 'src/app/pais/interfaces/user.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  pais!: Country[];
  user!: User[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {
    
    this.activatedRoute.params
      .pipe(
        switchMap( ({  }) => this.paisService.getUser( )  ),
        tap( console.log )
      )
      .subscribe( user => this.user = user );
  }

}
