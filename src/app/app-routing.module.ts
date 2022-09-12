import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';
import { HomeComponent } from './pais/pages/home/home.component';
import { MoviesListComponent } from './pais/pages/movies-list/movies-list.component';
import { VerMovieComponent } from './pais/pages/movies-list/ver-movie/ver-movie.component';


const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'title',
        component: PorPaisComponent,
        pathMatch: 'full'
    },
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'region',
        component: PorRegionComponent
    },
    {
        path: 'game/:id',
        component: VerPaisComponent
    },
    {
        path: 'movies',
        component: MoviesListComponent
    },
    {
        path: 'movie/:id',
        component: VerMovieComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];




@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}


