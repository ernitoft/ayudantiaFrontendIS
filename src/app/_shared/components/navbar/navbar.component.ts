import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../../_auth/service/auth-service.service';
import { HttpClientModule } from '@angular/common/http';
import { User } from '../../../_auth/interfaces/ResponseAPI';

@Component({
  selector: 'shared-navbar',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  providers: [AuthServiceService]
})
export class NavbarComponent {

  @Input() Client!: User;

  constructor(private router: Router, private AuthServiceService:AuthServiceService){
  }

  logout(){
    this.AuthServiceService.logout();
    this.router.navigate(['/login']);
  }
}
