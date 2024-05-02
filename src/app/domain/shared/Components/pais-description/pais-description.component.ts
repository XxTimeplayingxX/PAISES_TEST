import { Component, OnInit } from '@angular/core';
import { Pais } from '../../MODELS/Pais/interface.model';
import { PaisesService } from '../../../services/paises.service';

@Component({
  selector: 'app-pais-description',
  templateUrl: './pais-description.component.html',
  styleUrl: './pais-description.component.css'
})
export class PaisDescriptionComponent implements OnInit{
  pais = <Pais[]>([]);
  favoritos = JSON.parse(localStorage.getItem('favoritos')!) || [];

  constructor(private paisesService: PaisesService, ){}
  
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.paisesService.getData().subscribe(data=>{
      console.log(data);
      this.pais = data;
      console.log(this.pais);
    });
  }
  PaisSeleccionado(index:number){
    console.log('Usted ha seleccionado el país: ' +this.pais[index].name.common)
  }

  SaveToLocalStorage(indx:number){
    console.log('Enviando país: ' +this.pais[indx].name.common)
    localStorage.setItem('favoritos', JSON.stringify(this.pais[indx]));
    console.log(localStorage.getItem('favoritos'));
  }
  retrieveFromLocalStorage(){
    console.log('Mostrando elementos del local storage')
    console.log(localStorage.getItem(this.favoritos));
  }
}
