import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../products.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ola-products',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [ProductsService],
})
export class ProductsComponent implements OnInit {
  productsService = inject(ProductsService);
  products: any[] = [];
  filteredProducts: any[] = [];
  searchQuery: string = '';

  constructor() {}

  ngOnInit(): void {
    this.productsService
      .getProducts()
      .then((data) => {
          this.products = data.data;
          this.filteredProducts = this.products;
        })
      .catch((error: any) => {
        console.log(error);
      });
  }

  filterProducts(): void {
    const query = this.searchQuery.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      Object.values(product)
        .join(' ')
        .toLowerCase()
        .includes(query)
    );
  }
}
