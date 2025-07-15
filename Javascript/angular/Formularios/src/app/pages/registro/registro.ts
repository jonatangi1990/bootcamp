import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [ReactiveFormsModule],  //Con ReactiveFormsModule podemos trabajar con formularios, hay que incorporarlo para poder trabajar con ellos
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {



  registroForm: FormGroup = new FormGroup({        //registroForm le llamamos asi para referirnos a ello pero le podemos poner el nombre como queramos
    nombre: new FormControl(null, [
      Validators.required,
      Validators.minLength(3)
    ]),//primer valor que metemos es null si no queremos que aparezca nada por defecto y el segundo campo es el validador
    apellidos: new FormControl(null,[Validators.maxLength(12)]),
    edad: new FormControl(null, [this.edadValidator]),
    email: new FormControl(null,[Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]),
    telefono: new FormControl(),
    dni: new FormControl(null,[this.dniValidator]),
    password: new FormControl(null,[Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{5,10}$/)]), // siempre ponemos pattern siempre que queramos validar un string y añadirle la expresion regular
    repite_password: new FormControl()
  }, [this.passwordValidator]);


  onSubmit(){
    if(this.registroForm.valid){
      console.log(this.registroForm.value);

    }
  }

  onClick(){
    //Asignamos valores al formulario
    //setValue necesita el objeto completo ya que si no dara error
    /* this.registroForm.setValue({
      nombre: 'Mario', apellidos: 'Giron',
    }) */
   this.registroForm.patchValue({//aparecen los valores que yo quiera(para ello tengo que ponerlos a continuacion)
    nombre: 'Mario', telefono: '869759', email: 'mario879@gmail.com'
   })
  }

  edadValidator(control: AbstractControl){
    //Los validadores personalizados reciben el control sobre el cual queremos realizar la validacion
    //si todo va bien retornamos null
    //si hay algun error retornamos un objeto distinto de null
    //el valor escrito en el input esta en control.value

    const value = control.value;

    if (!value) return null  //si el campo esta vacio no realizo la validacion que le indico despues

    if (value >= 18 && value <= 65){ //asi decimos que value tiene que ser mayor o igual que 18 y menor o igual que 65

      return null;

    } else {
      return{ edadvalidator: true};
    }


  }
  

 dniValidator(control: AbstractControl) {

    const dni = control.value as string;
    const relLetras = 'TRWAGMYFPDXBNJZSQVHLCKET';

    if (!dni) return null;

    if (!/^\d{8}[a-zA-Z]$/.test(dni)) {
      return { dnivalidator: 'Formato no válido' };
    }

    const numero = Number(dni.substring(0, 8));
    const letra = dni.at(8)?.toUpperCase();
    const calculo = numero % 23;

    if (letra !== relLetras.at(calculo)) {
      return { dnivalidator: 'La letra no coincide' };
    }

    return null;
  }



  passwordValidator(form: AbstractControl){
    //extraer los valores de password y repite_password
    const passwordValue = form.get('password')?.value;
    const repitePasswordValue = form.get('repite_password')?.value;

    if(passwordValue !== repitePasswordValue){
      form.get('repite_password')?.setErrors({passwordValidator: true});

      return { passwordvalidator: true};
    }

    return null;
  }

  checkError(field: string, error: string){
    return this.registroForm.get(field)?.hasError(error) && this.registroForm.get(field)?.touched;
  }
  
}

