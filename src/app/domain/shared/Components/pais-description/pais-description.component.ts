import { Component, OnInit } from '@angular/core';
import { Pais } from '../../MODELS/Pais/interface.model';
import { PaisesService } from '../../../services/paises.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pais-description',
  templateUrl: './pais-description.component.html',
  styleUrl: './pais-description.component.css'
})
export class PaisDescriptionComponent implements OnInit{
  pais = <Pais[]>([]);
  paisesFavoritos=<Pais[]>([]);
  favoritos = JSON.parse(localStorage.getItem('favoritos')!) || [];
  form: FormGroup;

  constructor(private paisesService: PaisesService, private fb:FormBuilder){
    this.form = fb.group({
      pais: ('')
    })
  }
  
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

  SaveToLocalStorage(indx:number){
    this.paisesFavoritos.push(this.pais[indx]);
    console.log('Enviando país: ' +this.pais[indx].name.common)
    localStorage.setItem('favoritos', JSON.stringify(this.paisesFavoritos));
    console.log(localStorage.getItem('favoritos'));
  }
  retrieveFromLocalStorage(){
    console.log('Mostrando elementos del local storage')
    console.log(localStorage.getItem(this.favoritos));
  }



  
  getDataName(){
    this.paisesService.getCountryNameData(this.form.value.pais).subscribe(pais=>{
      this.pais = pais;
      console.log(pais);
    })
  }
  mostrarTodos(){
    this.getData();
  }
}
