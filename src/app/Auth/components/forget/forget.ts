import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-forget',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, InputTextModule, ButtonModule],
  templateUrl: './forget.html',
  styleUrl: './forget.scss',
})
export class Forget {
  constructor(private router: Router){}
  email = '';
  loading = false;

  onSubmit() {
    if (this.loading) return;
    this.loading = true;

    // TODO: appel API "mot de passe oublié"
    setTimeout(() => {
      this.loading = false;
    }, 800);
  }
  NavigatToReset(){
    this.router.navigate(['./auth/reset'])
  }
}
