import { Component, OnInit } from '@angular/core';
import { User } from '../../../_auth/interfaces/ResponseAPI';
import { LocalStorageService } from '../../../_shared/service/local-storage.service';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../../_shared/components/navbar/navbar.component';

@Component({
  selector: 'app-general-page',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './general-page.component.html',
  styleUrl: './general-page.component.css'
})
export class GeneralPageComponent implements OnInit{

  user!: User;

  constructor(private LocalStorageService:LocalStorageService, private router:Router) {}

  ngOnInit(): void{
    const user = this.LocalStorageService.getClientLogger();
    if (user){
      this.user = user;
    } else {
      this.router.navigate(['/login']);
    }
  }

}
