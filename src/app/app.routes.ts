import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'login',
    loadComponent: () => import('./_auth/pages/loginPage/login/login.component').then(m => m.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () => import('./_auth/pages/registerPage/register/register.component').then(m => m.RegisterComponent),
  },
  {
    path:'**',
    redirectTo:'login'
  },
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  }


];
