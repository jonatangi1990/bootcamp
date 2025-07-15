import { EmpleadosService } from './../../services/empleados.service';


import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-nuevo-empleado',
  imports: [ReactiveFormsModule],
  templateUrl: './nuevo-empleado.html',
  styleUrl: './nuevo-empleado.css'
})
export class NuevoEmpleado {

  EmpleadosService = inject(EmpleadosService);
  router = inject(Router); //me permitira nevegar por mi aplicacion

  formulario: FormGroup = new FormGroup({
    nombre: new FormControl(),
    apellidos: new FormControl(),
    email: new FormControl(),
    telefono: new FormControl(),
    departamento: new FormControl(),
    salario: new FormControl()

  });

  async onSubmit(){
    try {
      const response = await this.EmpleadosService.create(this.formulario.value);
      //response es la respuesta positiva de la promesa
      await Swal.fire({
        title: 'Exito',
        text:'Se ha creado un nuevo empleado',
        icon:'success'
      });
      this.router.navigateByUrl('/empleados')


  } catch (error) {
      //error es la respuesta negativa de la promesa
      Swal.fire({
        title: 'Error',
        text:'Error en el envio. Revisa el formulario',
        icon:'error'
      });
    }
  }

}
