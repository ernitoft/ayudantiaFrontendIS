import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuardGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  if (!localStorage.getItem('Token')) {
    router.navigate(['/login']);
    return false;
  }
  return true;

  //TODO: Validar que rol tiene el usuario que entra
};
