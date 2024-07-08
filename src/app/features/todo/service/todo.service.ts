import { Injectable } from '@angular/core';
import { ITodo } from '../todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public todos: ITodo[] = [];

  constructor() {}

  add(todo: ITodo) {
    this.todos.push(todo);
  }

  remove(todoId: number) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }

  toggleCompletion(todo: ITodo) {
    this.todos = this.todos.map((t) =>
      t.id === todo.id ? { ...t, completed: !t.completed } : t
    );
  }

  getAllTodos() {
    return this.todos;
  }

  getTodo(todoId: number) {
    return this.todos.find((todo) => todo.id === todoId);
  }
}
