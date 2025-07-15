import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-hotel',
  imports: [ReactiveFormsModule],
  templateUrl: './hotel.html',
  styleUrl: './hotel.css'
})
export class Hotel {


  hotelForm: FormGroup = new FormGroup({
    nombre: new FormControl(null,[Validators.required, Validators.minLength(3)]),
    email: new FormControl(null, [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),
    fecha_entrada: new FormControl(null, [Validators.required, this.fechaPosteriorAHoy]),
    fecha_salida: new FormControl(null, [Validators.required]),
    numero_personas: new FormControl(null, [Validators.required, this.personasValidator]),
    aceptamos_terminos: new FormControl(null, [Validators.requiredTrue]),
    codigo_promocional: new FormControl(null, [])
  },{validators: this.fechaSalidaPosterior});
  
  fechaPosteriorAHoy(control: AbstractControl): ValidationErrors | null {
  const valor = control.value;
  if (!valor) return null;
  
  // Convertimos ambas fechas a "solo fecha", sin horas
  const fechaEntrada = new Date(control.value);
  const hoy = new Date();
  
  // Limpiar hora de ambas fechas
  const fechaSoloEntrada = new Date(fechaEntrada.getFullYear(), fechaEntrada.getMonth(), fechaEntrada.getDate());
  const fechaSoloHoy = new Date(hoy.getFullYear(), hoy.getMonth(), hoy.getDate());
  
  return fechaSoloEntrada > fechaSoloHoy ? null : { fechaNoValida: true };
  }

  fechaSalidaPosterior(control: AbstractControl): ValidationErrors | null {
  const form = control as FormGroup;
  const entrada = form.get('fecha_entrada')?.value;
  const salida = form.get('fecha_salida')?.value;

  if (!entrada || !salida) return null;

  const fechaEntrada = new Date(entrada);
  const fechaSalida = new Date(salida);

  const entradaSinHora = new Date(fechaEntrada.getFullYear(), fechaEntrada.getMonth(), fechaEntrada.getDate());
  const salidaSinHora = new Date(fechaSalida.getFullYear(), fechaSalida.getMonth(), fechaSalida.getDate());

  return salidaSinHora > entradaSinHora ? null : { fechaSalidaNoValida: true };
}

personasValidator(control: AbstractControl){
    //Los validadores personalizados reciben el control sobre el cual queremos realizar la validacion
    //si todo va bien retornamos null
    //si hay algun error retornamos un objeto distinto de null
    //el valor escrito en el input esta en control.value

    const value = control.value;

    const personasMin = 1;
    const personasMax = 6;

    if (value >= personasMin && value <= personasMax) {
      return null;
    } else {
      return { edadvalidator: { min: personasMin, max: personasMax } };
    }


  }



  onSubmit(){
    if(this.hotelForm.valid){
      console.log(this.hotelForm.value);

    }
  }

  onClick(){
    //Asignamos valores al formulario
    //setValue necesita el objeto completo ya que si no dara error
    /* this.registroForm.setValue({
      nombre: 'Mario', apellidos: 'Giron',
    }) */
   this.hotelForm.patchValue({//aparecen los valores que yo quiera(para ello tengo que ponerlos a continuacion)
    nombre: 'Mario', email: 'mario879@gmail.com'
   })
  }

}
