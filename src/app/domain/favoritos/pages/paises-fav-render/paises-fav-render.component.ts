import { Component, OnInit } from '@angular/core';
import { Pais } from '../../../shared/MODELS/Pais/interface.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-paises-fav-render',
  templateUrl: './paises-fav-render.component.html',
  styleUrl: './paises-fav-render.component.css'
})
export class PaisesFavRenderComponent implements OnInit{
  pais = <Pais[]>([]);
  ngOnInit(): void {
    this.getPaisesFav();
  }

  getPaisesFav(){
    this.pais = JSON.parse(localStorage.getItem('favoritos') ?? '{}')
    console.log(localStorage.getItem('favoritos'));
  }
}
