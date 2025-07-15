import { EmpleadosService } from './../../services/empleados.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, inject, Input } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-empleado',
  imports: [ReactiveFormsModule],
  templateUrl: './edit-empleado.html',
  styleUrl: './edit-empleado.css'
})
export class EditEmpleado {

  @Input() idEmpleado: string = '';


  empleadosService = inject(EmpleadosService);
  router = inject(Router);


  

  formulario: FormGroup = new FormGroup({
    nombre: new FormControl(),
    apellidos: new FormControl(),
    email: new FormControl(),
    telefono: new FormControl(),
    departamento: new FormControl(),
    salario: new FormControl()

  });

  async ngOnInit(){
    try {
      const response = await this.empleadosService.getById(this.idEmpleado);
      this.formulario.patchValue(response)
    } catch (error) {
      Swal.fire('Error', 'El EMPLEADO NO EXISTE', 'error')
      this.router.navigateByUrl('/empleados') //de esta manera si no lo hace bien le mandamos a la pagina de empleados
      
    }

  }

  async onSubmit(){
    try {
      const response = await this.empleadosService.edit(this.idEmpleado, this.formulario.value);
      Swal.fire('Se ha actualizado el empleado', 'success');
      this.router.navigateByUrl('/empleados')
    } catch (error) {
      Swal.fire('Revisa el formulario, eres tontic@', 'error');
      
    }


  }
}
