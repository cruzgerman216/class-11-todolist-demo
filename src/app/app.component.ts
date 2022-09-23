import { Component } from '@angular/core';
import Todo from './shared/todolist.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  todolist: Todo[] = [
    {
      id: 1,
      action: 'Dishes',
      completed: true
    },
    {
      id: 2,
      action: 'Sweep',
      completed: false,
    },
  ];


  toggleComplete(index){
    this.todolist[index].completed = !this.todolist[index].completed 
  }
  addTodo(){
    let newTodo: Todo = {
      id: this.todolist.length + 1, 
      action: "Some chore",
      completed: false
    }

    this.todolist.push(newTodo)
  }
}
