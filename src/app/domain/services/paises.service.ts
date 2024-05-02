import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroment/enviroment';
import { Pais } from '../shared/MODELS/Pais/interface.model';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    return this.http.get<any>(`${environment.API_URL}/all`)
  }

  getCountryNameData(countryName:string):Observable<any>{
    return this.http.get<any>(`${environment.API_URL}/name/${countryName}`)
    //https://restcountries.com/v3.1/name/{name}
  }
}
