import { Routes } from '@angular/router';
import { authGuard } from './core/auth/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./features/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./core/auth/pages/login/login.component').then(
        (m) => m.LoginComponent
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./core/auth/pages/register/register.component').then(
        (m) => m.RegisterComponent
      ),
  },
  {
    path: 'todo',
    loadComponent: () =>
      import('./features/todo/todo.component').then((m) => m.TodoComponent),
  },
  {
    path: 'admin',
    loadComponent: () =>
      import('./core/layout/admin/admin.component').then(
        (m) => m.AdminComponent
      ),
    children: [
      {
        path: 'calculator',
        loadComponent: () =>
          import('./features/calculator/calculator.component').then(
            (m) => m.CalculatorComponent
          ),
      },
      {
        path: 'another-page-for-admin',
        loadComponent: () =>
          import(
            './features/another-page-for-admin/another-page-for-admin.component'
          ).then((m) => m.AnotherPageForAdminComponent),
      },
    ],
  },
  {
    path: 'super-admin',
    loadComponent: () =>
      import('./core/layout/super-admin/super-admin.component').then(
        (m) => m.SuperAdminComponent
      ),
    children: [
      {
        path: 'counter',
        loadComponent: () =>
          import('./features/counter/counter.component').then(
            (m) => m.CounterComponent
          ),
        canActivate: [authGuard],
      },
      {
        path: 'another-page-for-super-admin',
        loadComponent: () =>
          import(
            './features/another-page-for-super-admin/another-page-for-super-admin.component'
          ).then((m) => m.AnotherPageForSuperAdminComponent),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
