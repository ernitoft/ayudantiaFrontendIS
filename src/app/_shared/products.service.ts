import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private baseUrl = 'http://127.0.0.1:8000/api/';
  private http = inject(HttpClient);

  constructor() { }

  async getProducts(): Promise<any>{
    try{
      const data = await firstValueFrom(this.http.get<any>(this.baseUrl + 'products'));
      return Promise.resolve(data);

    }catch (error){
      console.error('Error: ', error);
      let e = error as HttpErrorResponse;
      return Promise.reject(e.message || 'Server error');
    }
  }
}
