import { Component, inject, Input } from '@angular/core';
//separara las importaciones de angular a las mias para tenerlo controlado
import { EmpleadosService } from '../../services/empleados.service';
import { IEmpleado } from '../../Interfaces/IEmpleado';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empleados-list',
  imports: [RouterLink],
  templateUrl: './empleados-list.html',
  styleUrl: './empleados-list.css'
})
export class EmpleadosList {

  
  arrEmpleados: IEmpleado[] = [];

  empleadosService = inject(EmpleadosService)

  @Input() idEmpleado: string = '';
  

  async ngOnInit(){//con este metodo se ejecuta directamente
    const response = await this.empleadosService.getAll();
    this.arrEmpleados = response; //cojo lo que me retorna la peticion y lo guardo en el array que cree antes para poder mostrarlo en mi html
  }

  async onChange($event: Event){
    const selectDepartamento = $event.target as HTMLSelectElement

    if (selectDepartamento.value){
      
      this.arrEmpleados = await this.empleadosService.getByDepartamento(selectDepartamento.value);

    } else {
      this.arrEmpleados = await this.empleadosService.getAll();
    }
    

  }

  async onClick(idEmpleado: string){
    try {
      const result = await Swal.fire({
        title: 'Borrar',
        text: 'Confirma el borrado del empleado',
        showCancelButton: true
      });

      if(result.isConfirmed){

        await this.empleadosService.del(idEmpleado);
        Swal.fire({
  title: "Borrado correctamente",
  width: 600,
  padding: "3em",
  color: "#716add",
  background: "#fff url(/images/trees.png)",
  backdrop: `
    rgba(0,0,123,0.4)
    url("nyan-cat-nyan.gif")
    left top
    no-repeat
  `
});
  
        const response = await this.empleadosService.getAll();
        this.arrEmpleados = response;
      }

    } catch (error) {
      Swal.fire('Error', 'El empleado no existe.Revisa', 'error')
      
    }
    
  }

 

}



