import { Routes } from '@angular/router';
import { canActivateChildGuard } from './pages/shared/can-activate.guard';

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing/landing.routes'),
  },
  {
    path: 'post',
    loadChildren: () => import('./pages/post/post.routes'),
    canActivateChild: [canActivateChildGuard],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
