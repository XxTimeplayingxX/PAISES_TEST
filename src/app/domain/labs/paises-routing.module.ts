import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCountryComponent } from './pages/page-country/page-country.component';

const routes: Routes = [
  {
    path: '',
    component: PageCountryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaisesRoutingModule { }
