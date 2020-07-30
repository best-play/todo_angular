import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  newTodo: string;

  constructor() {
  }

  ngOnInit(): void {
    this.todos = [];
    this.newTodo = '';
  }

  addTodo(event: Event): void {
    event.preventDefault();
    this.todos.push({
      todoName: this.newTodo,
      completed: false
    });
    this.newTodo = '';
  }

  deleteTodo(index: number): void {
    this.todos.splice(index, 1);
  }

}
