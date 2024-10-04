import { Component } from '@angular/core';
import { LoginformComponent } from '../../../components/loginform/loginform.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loginPage',
  standalone: true,
  imports: [LoginformComponent, HttpClientModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
