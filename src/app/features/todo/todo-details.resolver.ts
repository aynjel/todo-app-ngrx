import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { TodoService } from './service/todo.service';
import { ITodo } from './todo.model';

export const todoDetailsResolver: ResolveFn<ITodo | undefined> = (
  route,
  state
) => {
  const todoId = Number(route.params['id']);
  const todoService = inject(TodoService);
  const todo = todoService.getTodo(todoId);
  return todo;
};
