import { Component, computed, effect, inject } from '@angular/core';
import { TodoStore } from './todo.store';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ITodo } from './todo.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
})
export class TodoComponent {
  public todoStore = inject(TodoStore);
  private formBuilder = inject(FormBuilder);
  public addTodoForm: FormGroup;

  constructor() {
    this.addTodoForm = this.formBuilder.group({
      title: '',
    });
  }

  addTodo() {
    const todo: ITodo = {
      id: crypto.getRandomValues(new Uint32Array(1))[0],
      title: this.addTodoForm.value.title,
      completed: false,
    };
    this.todoStore.addTodo(todo);
    this.addTodoForm.reset();
  }
}
