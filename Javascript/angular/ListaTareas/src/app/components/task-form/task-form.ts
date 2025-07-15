import { Component, EventEmitter, Output } from '@angular/core';
import { ITarea } from '../../interfaces/ITarea';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  imports: [ FormsModule],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css'
})
export class TaskForm {
  nuevaTarea: ITarea = {
    tarea: '', prioridad: '',
  }

  @Output() tareaCreada: EventEmitter<ITarea> = new EventEmitter();

  onClick(){
    this.tareaCreada.emit(this.nuevaTarea);
    this.nuevaTarea = {
    tarea: '', prioridad: ''
  }
  }

}
