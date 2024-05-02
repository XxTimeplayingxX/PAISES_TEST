import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaisesRoutingModule } from './paises-routing.module';
import { BarraDeBusquedaComponent } from './components/barra-de-busqueda/barra-de-busqueda.component';
import { PaisesComponent } from './pages/paises/paises.component';
import {PaisDescriptionComponent} from './../shared/Components/pais-description/pais-description.component'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BarraDeBusquedaComponent,
    PaisesComponent,
    PaisDescriptionComponent
  ],
  imports: [
    CommonModule,
    PaisesRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class PaisesModule { }
