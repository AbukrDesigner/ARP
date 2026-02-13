import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  credentials = {
    email: '',
    password: '',
  };

  loading = false;

  onSubmit() {
    if (this.loading) return;
    this.loading = true;

    // TODO: brancher l'API d'authentification ici
    // Pour l'instant on simule un appel.
    setTimeout(() => {
      this.loading = false;
      // console.log('Credentials', this.credentials);
    }, 800);
  }
}
