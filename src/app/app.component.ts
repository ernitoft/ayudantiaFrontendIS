import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ProductsComponent } from './_shared/page/products/products.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'FrontendAngularIS';

  constructor(private Router:Router) { }

  async ngOnInit(): Promise<void> {
    if (typeof window !== 'undefined'){
      const { initFlowbite } = await import('flowbite');
      initFlowbite();
    }
  }

  navigateToLogin(): void {
    this.Router.navigate(['/login']);
  }

}
