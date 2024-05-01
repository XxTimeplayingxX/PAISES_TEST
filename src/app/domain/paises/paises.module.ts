import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { BarraDeBusquedaComponent } from './components/barra-de-busqueda/barra-de-busqueda.component';
import { PaisesComponent } from './pages/paises/paises.component';
import {PaisDescriptionComponent} from './../shared/Components/pais-description/pais-description.component'


@NgModule({
  declarations: [
    BarraDeBusquedaComponent,
    PaisesComponent,
    PaisDescriptionComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
  ]
})
export class PaisesModule { }
