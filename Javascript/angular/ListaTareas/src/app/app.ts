import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskForm } from "./components/task-form/task-form";
import { TaskList } from "./components/task-list/task-list";
import { ITarea } from './interfaces/ITarea';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TaskForm, TaskList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ListaTareas';

  arrTareas: ITarea[] = [];
  

  onTareaCreada($event: ITarea){
    this.arrTareas.push($event);
    console.log(this.arrTareas);

  }
}
