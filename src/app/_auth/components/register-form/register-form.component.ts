import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthServiceService } from '../../service/auth-service.service';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'auth-register-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css',
  providers: [AuthServiceService]
})
export class RegisterFormComponent {
  form!: FormGroup;
  loginAlert: boolean = false;
  error: boolean = false;
  errorMessage: string[] = [];

  private authService = inject(AuthServiceService);

  constructor(private fb: FormBuilder, private Router: Router) {
    this.formulario();
  }

  formulario() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      role: ['', [Validators.required]]
    });
  }

  get emailValidate() {
    return this.form.get('email')?.invalid && this.form.get('email')?.touched;
  }

  get passwordValidate() {
    return this.form.get('password')?.invalid && this.form.get('password')?.touched;
  }

  get nameValidate() {
    return this.form.get('name')?.invalid && this.form.get('name')?.touched;
  }

  get roleValidate() {
    return this.form.get('role')?.invalid && this.form.get('role')?.touched;
  }

  async register() {
    if (this.form.invalid) {
      Object.values(this.form.controls).forEach(control => {
        control.markAsTouched();
      });
      return;
    }

    this.loginAlert = true;

    try {
      const response = await this.authService.register(this.form.value);

      if (response.error === false){

        this.Router.navigate(['/login']);
      } else{
        console.log('Error en el componente del register [Register Form]: ', response);
        this.error = true;
        this.errorMessage.push('Error de registro');
      }

    } catch (error) {
      this.error = true;
      this.errorMessage.push('Error de registro en el formulario');
    }
  }

  goToLogin() {
    this.Router.navigate(['/login']);
  }
}
