import { Injectable } from '@angular/core';
import { User } from '../../_auth/interfaces/ResponseAPI';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  private userLogged: User | null = null;

  constructor() { }

  setClientLogger(user: User): void{
    this.userLogged = user;
    localStorage.setItem('User', JSON.stringify(user));
  }

  getClientLogger(): User | null {
    if(!this.userLogged){
      this.userLogged = JSON.parse(localStorage.getItem('User') || '{}');
    }
    return this.userLogged;
  }

  setToken(token: string): void {
    localStorage.setItem('Token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('Token');
  }
}
