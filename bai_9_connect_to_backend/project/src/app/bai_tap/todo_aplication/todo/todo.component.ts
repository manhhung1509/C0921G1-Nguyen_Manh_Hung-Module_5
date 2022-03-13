import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../todo.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();
  tId: number;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.getAllTodo();
  }

  public getAllTodo() {
    this.todoService.getAll().subscribe(
      value => {
        this.todos = value;
        this.tId = this.todos[this.todos.length - 1].id;
        console.log('todo id: '+this.tId);
      }
    );
  }

  toggleTodo(todo: Todo) {
    todo.complete = !todo.complete
    console.log(todo.complete);
    this.todoService.updateTodo(todo).subscribe()
  }

  change() {
    const value1 = this.content.value;
    if (value1) {
      const todo: Todo = {
        id: this.tId++,
        content: value1,
        complete: false
      };
      this.todoService.createTodo(todo).subscribe(
        value => {
          this.content.reset();
        }
      );
    }
  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(
      value => {
        this.ngOnInit();
      }
    );
  }
}
