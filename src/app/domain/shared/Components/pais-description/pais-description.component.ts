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

  constructor(private paisesService: PaisesService){}
  
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
  
  page!: number;
}
