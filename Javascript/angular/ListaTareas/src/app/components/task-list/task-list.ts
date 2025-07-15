import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITarea } from '../../interfaces/ITarea';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  @Input() tareas: ITarea [] = [] ;

  delClick($index: number){
    this.tareas.splice($index,1)
  }

}
