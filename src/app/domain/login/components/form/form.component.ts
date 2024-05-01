import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  forms: FormGroup;

  constructor(private fb:FormBuilder, private router:Router){
    this.forms = fb.group({
      usuario: (''),
      contrasena: ('')
    })
  }

  validation(){
    if(this.forms.value.usuario == 'admin' && this.forms.value.contrasena == 'admin'){
      console.log('Validación Exitosa');
      this.router.navigate(['/paises'])
    }
    else{
      alert('Ingrese otra vez los valores');
      this.forms.reset();
    }
    
  }
}
