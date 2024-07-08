import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { ITodo } from './todo.model';
import { computed, inject } from '@angular/core';
import { TodoService } from './service/todo.service';

type TodoState = {
  todos: ITodo[];
  isLoading: boolean;
  filter: 'all' | 'completed' | 'active';
};

const initialState: TodoState = {
  todos: [],
  isLoading: false,
  filter: 'all',
};

export const TodoStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ todos, filter, isLoading }) => ({
    filteredTodos: computed(() => {
      switch (filter()) {
        case 'completed':
          return todos().filter((t) => t.completed);
        case 'active':
          return todos().filter((t) => !t.completed);
        default:
          return todos();
      }
    }),
    completedTodosCount: computed(
      () => todos().filter((t) => t.completed).length
    ),
    isLoading: computed(() => isLoading),
  })),
  withMethods((store, todoService = inject(TodoService)) => ({
    async addTodo(todo: ITodo): Promise<void> {
      todoService.add(todo);
      patchState(store, { todos: [...store.todos(), todo] });
    },
    async removeTodo(todoId: number): Promise<void> {
      todoService.remove(todoId);
      patchState(store, {
        todos: store.todos().filter((t) => t.id !== todoId),
      });
    },
    async toggleCompletion(todo: ITodo): Promise<void> {
      todoService.toggleCompletion(todo);
      patchState(store, {
        todos: store
          .todos()
          .map((t) =>
            t.id === todo.id ? { ...t, completed: !t.completed } : t
          ),
      });
    },
    async setFilter(filter: 'all' | 'completed' | 'active'): Promise<void> {
      patchState(store, { filter });
    },
  }))
);
