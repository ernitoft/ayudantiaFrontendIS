import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'ola-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductsService]
})
  export class ProductsComponent implements OnInit {


    productsService = inject(ProductsService);
    products: any = [];

    constructor(){}

    ngOnInit(): void {
      this.productsService.getProducts().then((data: any) => {
        this.products = data.data;
      }
      //Validar que la lista este vacia o haya algun error
    );
    }

}
