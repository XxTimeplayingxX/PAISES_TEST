import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaisesFavRenderComponent } from './pages/paises-fav-render/paises-fav-render.component';

const routes: Routes = [{
  path: '',
  component: PaisesFavRenderComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavoritosRoutingModule { }
