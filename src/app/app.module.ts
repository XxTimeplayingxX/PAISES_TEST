import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CountryCardComponent } from './domain/labs/components/country-card/country-card.component';
import { PageCountryComponent } from './domain/labs/pages/page-country/page-country.component';


@NgModule({
  declarations: [
    AppComponent,
    CountryCardComponent,
    PageCountryComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
