import { Routes } from '@angular/router';
import { authGuardGuard } from './_auth/guards/auth-guard.guard';

export const routes: Routes = [
  {
    path: 'products',
    loadComponent: () => import('./_shared/page/products/products.component').then(m => m.ProductsComponent),
  }
  ,
  {
    path: 'login',
    loadComponent: () => import('./_auth/pages/loginPage/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./_auth/pages/registerPage/register/register.component').then(m => m.RegisterComponent),
  },
  {
    path: 'admin',
    loadComponent: () => import('./_admin/pages/general-page/general-page.component').then(m => m.GeneralPageComponent),
    canActivate: [authGuardGuard],
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./_admin/pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }


];
