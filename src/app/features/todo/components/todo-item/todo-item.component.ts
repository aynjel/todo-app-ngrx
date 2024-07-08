import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITodo } from '../../todo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
})
export class TodoItemComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  todo?: ITodo;

  ngOnInit(): void {
    this.todo = this.activatedRoute.snapshot.data['todoDetails'];
  }
}
