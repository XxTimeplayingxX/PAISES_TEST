import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavoritosRoutingModule } from './favoritos-routing.module';
import { PaisesFavoritosComponent } from './components/paises-favoritos/paises-favoritos.component';
import { PaisesFavRenderComponent } from './pages/paises-fav-render/paises-fav-render.component';


@NgModule({
  declarations: [
    PaisesFavoritosComponent,
    PaisesFavRenderComponent
  ],
  imports: [
    CommonModule,
    FavoritosRoutingModule
  ]
})
export class FavoritosModule { }
