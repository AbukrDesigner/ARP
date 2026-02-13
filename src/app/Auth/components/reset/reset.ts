import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-reset',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, PasswordModule, ButtonModule],
  templateUrl: './reset.html',
  styleUrl: './reset.scss',
})
export class Reset {
  constructor(private router: Router){}
  model = {
    password: '',
    confirmPassword: '',
  };

  loading = false;

  onSubmit() {
    if (this.loading) return;
    this.loading = true;

    // TODO: appel API de réinitialisation
    setTimeout(() => {
      this.loading = false;
    }, 800);
  }
  NavigateToLogin(){
    this.router.navigate(['./auth']);
  }
}
