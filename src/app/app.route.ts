import { Routes } from '@angular/router';
import { ContainerComponent } from './layouts/container/container.component';
import { ErrorComponent } from './error/error.component';

export const AppRoutes: Routes = [
  {
    path: 'reactive-form',
    component: ContainerComponent,
    loadChildren: () => import('./layouts/container/container.module').then(m => m.ContainerModule),
  },
  {
    path: '',
    redirectTo: 'reactive-form',
    pathMatch: 'full',
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: '**',
    redirectTo: '/error',
  },
];
