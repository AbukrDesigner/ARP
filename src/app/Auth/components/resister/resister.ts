import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-resister',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
  ],
  templateUrl: './resister.html',
  styleUrl: './resister.scss',
})
export class Resister {
  constructor(private router: Router){}
  model = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  loading = false;

  onSubmit() {
    if (this.loading) return;
    this.loading = true;

    // TODO: appel API d'inscription
    setTimeout(() => {
      this.loading = false;
    }, 800);
  }
  NavigateToLogin(){
    this.router.navigate(['./auth'])
  }
}
